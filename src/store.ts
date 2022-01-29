import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

import DocsSource from './data/DocsSource';
import MainSource from './data/MainSource';
import HyttpoSource from '~/data/HyttpoSource';

import { Documentation, DocumentationCustomFile } from './interfaces/Documentation';
import { SearchTerm, DocumentType, DocumentLink } from './util/search';
import { splitName } from './util/splitName';
import { fetchError } from './util/fetchError';

export interface State {
	sources: { source: DocsSource; name: string; id: string }[];
	source: DocsSource | null;
	tag: string | null;
	docs: Documentation | null;
	branches: string[];
	file: DocumentationCustomFile | null;
	stats: {
		downloads: string;
		stars: string;
		contributors: string;
	};
	searchIndex: SearchTerm[];
	searchRef: DocumentLink[];
}

export const key: InjectionKey<Store<State>> = Symbol('docs');

export const store = createStore<State>({
	state: {
		sources: [
			{ source: MainSource, name: MainSource.name, id: MainSource.id },
			{ source: HyttpoSource, name: HyttpoSource.name, id: HyttpoSource.id },
		],
		source: MainSource,
		tag: MainSource.defaultTag,
		docs: null,
		branches: [],
		file: null,
		stats: {
			downloads: `${(56_000).toLocaleString()}+`,
			stars: `${(50).toLocaleString()}+`,
			contributors: `${(10).toLocaleString()}+`,
		},
		searchIndex: [],
		searchRef: [],
	},
	mutations: {
		setSource(state, { source }: { source: DocsSource }) {
			state.source = source;
		},
		setTag(state, { tag }: { tag: string }) {
			state.tag = tag;
		},
		setDocs(state, { docs }: { docs: any }) {
			state.docs = docs;
		},
		setBranches(state, { branches }: { branches: string[] }) {
			state.branches = branches;
		},
		setFile(state, { file }: { file: any }) {
			state.file = file;
		},
		setStats(state, { stats }: { stats: { downloads: string; stars: string; contributors: string } }) {
			state.stats = stats;
		},
		setSearchIndex(state, { searchIndex, searchRef }: { searchIndex: SearchTerm[]; searchRef: DocumentLink[] }) {
			state.searchIndex = searchIndex;
			state.searchRef = searchRef;
		},
	},
	actions: {
		fetchStats: async ({ commit }) => {
			let downloads = 0;
			let stars = 0;
			let contributors = 0;

			const toJSON = (res: Response) => res.json();
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			const noop = () => {};

			const [fetchedDownloads, fetchedStars, fetchedContributors] = await Promise.all([
				fetch('https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/gcommands').then(toJSON, noop),
				fetch('https://api.github.com/repos/Garlic-Team/GCommands').then(toJSON, noop),
				fetch('https://api.github.com/repos/Garlic-Team/GCommands/stats/contributors').then(toJSON, noop),
			]);

			if (fetchedDownloads) {
				downloads = 0;
				for (const item of fetchedDownloads.downloads) {
					downloads += item.downloads;
				}
			}
			if (fetchedStars) {
				stars = fetchedStars.stargazers_count;
			}
			if (fetchedContributors) {
				contributors = fetchedContributors.length;
			}
			commit({
				type: 'setStats',
				stats: {
					downloads: `${downloads.toLocaleString()}+`,
					stars: `${stars.toLocaleString()}+`,
					contributors: `${contributors.toLocaleString()}+`,
				},
			});
		},

		/**
		 * Idea: inverted index based on the understanding that all the names here are some sort of concatenated string
		 * Generate a graph of words that are related
		 * e.g. indexing on [PermissionOverwriteOptions, PermissionResolvable, setPermissions] generates something like this
		 * Original reference: [
		 * 	 PermissionOverwriteOptions,
		 *   PermissionResolvable,
		 *   setPermissions,
		 *  ]
		 * Index: [
		 *   {name: permission, related: [1, 2]},
		 *   {name: overwrite, related: [1]},
		 *   {name: options, related: [1]},
		 *   {name: permissions, related: [3]},
		 *   {name: set, related: [3]},
		 * ]
		 *
		 * Iterate through the list seeing if any of the terms are in the search query, then sum the counts of each related index
		 * The higher the count the more close of a match it should be
		 * If all else is equal, sort based on how closely it matches the original input
		 *
		 * Should the initial search return nothing, that might mean the length is too short
		 * So we'll do the opposite, see if the query is in any of the terms. e.g. mission should find permission
		 * This can be a shallow scan which should be fairly fast.
		 */

		fetchDocs: async (
			{ commit },
			{ inputSource, inputTag = inputSource.defaultTag }: { inputSource: DocsSource; inputTag?: string },
		) => {
			let documentation: any;
			try {
				documentation = await inputSource.fetchDocs(inputTag);
			} catch (error) {
				commit({
					type: 'setDocs',
					docs: null,
				});

				commit({
					type: 'setTag',
					docs: null,
				});

				// @ts-ignore
				fetchError.value = error;

				return;
			}

			const originalRef: DocumentLink[] = [];
			const searchIndex: SearchTerm[] = [];

			let linkPosition = 0; // This is for class refs adding refs to their methods and props
			const addLink = (
				name: string,
				linkType: DocumentType,
				parentName?: string,
				parentType?: DocumentType,
				access?: string,
				scope?: string,
			): number[] => {
				const words = splitName(name);
				const docLink = new DocumentLink(name, linkType, parentName, parentType, access, scope);
				originalRef.push(docLink);

				const addedRefs = [];
				for (const w of words) {
					const word = w.toLowerCase();
					let refIndex = searchIndex.findIndex((s) => s.name === word);
					if (refIndex > -1) {
						searchIndex[refIndex].addRelated(linkPosition);
					} else {
						refIndex = searchIndex.push(new SearchTerm(word, linkPosition)) - 1;
					}
					addedRefs.push(refIndex);
				}
				linkPosition += 1;

				return addedRefs;
			};

			for (const item of documentation.classes) {
				const classref = addLink(item.name, DocumentType.Class, undefined, undefined, item.access, item.scope);

				const subRefs: number[] = [];
				for (const m of item.methods ?? []) {
					addLink(m.name as string, DocumentType.Method, item.name, DocumentType.Class, m.access, m.scope);
					subRefs.push(linkPosition - 1);
				}

				for (const p of item.props ?? []) {
					addLink(p.name, DocumentType.Property, item.name, DocumentType.Class, p.access, p.scope);
					subRefs.push(linkPosition - 1);
				}

				for (const e of item.events ?? []) {
					addLink(e.name, DocumentType.Events, item.name, DocumentType.Class, e.access, e.scope);
					subRefs.push(linkPosition - 1);
				}
				for (const ref of classref) {
					for (const r of subRefs) {
						searchIndex[ref].related.add(r);
					}
				}
			}

			for (const item of documentation.typedefs) {
				const classref = addLink(item.name, DocumentType.Typedefs, undefined, undefined, item.access, item.scope);

				const subRefs: number[] = [];
				for (const p of item.props ?? []) {
					addLink(p.name, DocumentType.Property, item.name, DocumentType.Typedefs, p.access, p.scope);
					subRefs.push(linkPosition - 1);
				}
				for (const ref of classref) {
					for (const r of subRefs) {
						searchIndex[ref].related.add(r);
					}
				}
			}

			commit({
				type: 'setSearchIndex',
				searchIndex,
				searchRef: originalRef,
			});

			// Sort everything
			documentation.classes.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
			documentation.typedefs.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
			for (const c of documentation.classes) {
				if (c.props) {
					c.props.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
				}
				if (c.methods) {
					c.methods.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
				}
				if (c.events) {
					c.events.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name));
				}
			}

			// Built-in type links
			documentation.links = {
				string: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
				number: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
				bigint: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt',
				boolean: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
				true: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
				false: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
				symbol: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol',
				void: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined',
				undefined: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined',
				null: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null',
				Object: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object',
				object: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object',
				Function: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
				function: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
				Array: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
				Set: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set',
				Map: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
				Date: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date',
				RegExp: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp',
				Promise: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
				Error: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error',

				// Node
				EventEmitter: 'https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter',
				Timeout: 'https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout',
				Immediate: 'https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_immediate',
				Buffer: 'https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer',
				ReadableStream: 'https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable',
				ChildProcess: 'https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess',
				Worker: 'https://nodejs.org/api/worker_threads.html#worker_threads_class_worker',
				MessagePort: 'https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport',

				// TypeScript
				any: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any',
				unknown: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown',
				readonly: 'https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly',
				Record: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type',
				Exclude: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion',
				Omit: 'https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys',
				IterableIterator: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols',
				
				// Discord.js
				Activity: 'https://discord.js.org/#/docs/main/stable/class/Activity',
				ActivityFlags: 'https://discord.js.org/#/docs/main/stable/class/ActivityFlags',
				AnonymousGuild: 'https://discord.js.org/#/docs/main/stable/class/AnonymousGuild',
				Application: 'https://discord.js.org/#/docs/main/stable/class/Application',
				ApplicationCommand: 'https://discord.js.org/#/docs/main/stable/class/ApplicationCommand',
				ApplicationCommandManager: 'https://discord.js.org/#/docs/main/stable/class/ApplicationCommandManager',
				ApplicationCommandPermissionsManager: 'https://discord.js.org/#/docs/main/stable/class/ApplicationCommandPermissionsManager',
				ApplicationFlags: 'https://discord.js.org/#/docs/main/stable/class/ApplicationFlags',
				AutocompleteInteraction: 'https://discord.js.org/#/docs/main/stable/class/AutocompleteInteraction',
				Base: 'https://discord.js.org/#/docs/main/stable/class/Base',
				BaseClient: 'https://discord.js.org/#/docs/main/stable/class/BaseClient',
				BaseCommandInteraction: 'https://discord.js.org/#/docs/main/stable/class/BaseCommandInteraction',
				BaseGuild: 'https://discord.js.org/#/docs/main/stable/class/BaseGuild',
				BaseGuildEmoji: 'https://discord.js.org/#/docs/main/stable/class/BaseGuildEmoji',
				BaseGuildEmojiManager: 'https://discord.js.org/#/docs/main/stable/class/BaseGuildEmojiManager',
				BaseGuildTextChannel: 'https://discord.js.org/#/docs/main/stable/class/BaseGuildTextChannel',
				BaseGuildVoiceChannel: 'https://discord.js.org/#/docs/main/stable/class/BaseGuildVoiceChannel',
				BaseManager: 'https://discord.js.org/#/docs/main/stable/class/BaseManager',
				BaseMessageComponent: 'https://discord.js.org/#/docs/main/stable/class/BaseMessageComponent',
				BitField: 'https://discord.js.org/#/docs/main/stable/class/BitField',
				ButtonInteraction: 'https://discord.js.org/#/docs/main/stable/class/ButtonInteraction',
				CachedManager: 'https://discord.js.org/#/docs/main/stable/class/CachedManager',
				CategoryChannel: 'https://discord.js.org/#/docs/main/stable/class/CategoryChannel',
				Channel: 'https://discord.js.org/#/docs/main/stable/class/Channel',
				ChannelManager: 'https://discord.js.org/#/docs/main/stable/class/ChannelManager',
				Client: 'https://discord.js.org/#/docs/main/stable/class/Client',
				ClientApplication: 'https://discord.js.org/#/docs/main/stable/class/ClientApplication',
				ClientPresence: 'https://discord.js.org/#/docs/main/stable/class/ClientPresence',
				ClientUser: 'https://discord.js.org/#/docs/main/stable/class/ClientUser',
				ClientVoiceManager: 'https://discord.js.org/#/docs/main/stable/class/ClientVoiceManager',
				Collector: 'https://discord.js.org/#/docs/main/stable/class/Collector',
				CommandInteraction: 'https://discord.js.org/#/docs/main/stable/class/CommandInteraction',
				CommandInteractionOptionResolver: 'https://discord.js.org/#/docs/main/stable/class/CommandInteractionOptionResolver',
				ContextMenuInteraction: 'https://discord.js.org/#/docs/main/stable/class/ContextMenuInteraction',
				DataManager: 'https://discord.js.org/#/docs/main/stable/class/DataManager',
				DiscordAPIError: 'https://discord.js.org/#/docs/main/stable/class/DiscordAPIError',
				DMChannel: 'https://discord.js.org/#/docs/main/stable/class/DMChannel',
				Emoji: 'https://discord.js.org/#/docs/main/stable/class/Emoji',
				Formatters: 'https://discord.js.org/#/docs/main/stable/class/Formatters',
				Guild: 'https://discord.js.org/#/docs/main/stable/class/Guild',
				GuildApplicationCommandManager: 'https://discord.js.org/#/docs/main/stable/class/GuildApplicationCommandManager',
				GuildAuditLogs: 'https://discord.js.org/#/docs/main/stable/class/GuildAuditLogs',
				GuildAuditLogsEntry: 'https://discord.js.org/#/docs/main/stable/class/GuildAuditLogsEntry',
				GuildBan: 'https://discord.js.org/#/docs/main/stable/class/GuildBan',
				GuildBanManager: 'https://discord.js.org/#/docs/main/stable/class/GuildBanManager',
				GuildChannel: 'https://discord.js.org/#/docs/main/stable/class/GuildChannel',
				GuildChannelManager: 'https://discord.js.org/#/docs/main/stable/class/GuildChannelManager',
				GuildEmoji: 'https://discord.js.org/#/docs/main/stable/class/GuildEmoji',
				GuildEmojiManager: 'https://discord.js.org/#/docs/main/stable/class/GuildEmojiManager',
				GuildEmojiRoleManager: 'https://discord.js.org/#/docs/main/stable/class/GuildEmojiRoleManager',
				GuildInviteManager: 'https://discord.js.org/#/docs/main/stable/class/GuildInviteManager',
				GuildManager: 'https://discord.js.org/#/docs/main/stable/class/GuildManager',
				GuildMember: 'https://discord.js.org/#/docs/main/stable/class/GuildMember',
				GuildMemberManager: 'https://discord.js.org/#/docs/main/stable/class/GuildMemberManager',
				GuildMemberRoleManager: 'https://discord.js.org/#/docs/main/stable/class/GuildMemberRoleManager',
				GuildPreview: 'https://discord.js.org/#/docs/main/stable/class/GuildPreview',
				GuildPreviewEmoji: 'https://discord.js.org/#/docs/main/stable/class/GuildPreviewEmoji',
				GuildStickerManager: 'https://discord.js.org/#/docs/main/stable/class/GuildStickerManager',
				GuildTemplate: 'https://discord.js.org/#/docs/main/stable/class/GuildTemplate',
				HTTPError: 'https://discord.js.org/#/docs/main/stable/class/HTTPError',
				Integration: 'https://discord.js.org/#/docs/main/stable/class/Integration',
				IntegrationApplication: 'https://discord.js.org/#/docs/main/stable/class/IntegrationApplication',
				Intents: 'https://discord.js.org/#/docs/main/stable/class/Intents',
				Interaction: 'https://discord.js.org/#/docs/main/stable/class/Interaction',
				InteractionCollector: 'https://discord.js.org/#/docs/main/stable/class/InteractionCollector',
				InteractionWebhook: 'https://discord.js.org/#/docs/main/stable/class/InteractionWebhook',
				Invite: 'https://discord.js.org/#/docs/main/stable/class/Invite',
				InviteGuild: 'https://discord.js.org/#/docs/main/stable/class/InviteGuild',
				InviteStageInstance: 'https://discord.js.org/#/docs/main/stable/class/InviteStageInstance',
				LimitedCollection: 'https://discord.js.org/#/docs/main/stable/class/LimitedCollection',
				Message: 'https://discord.js.org/#/docs/main/stable/class/Message',
				MessageActionRow: 'https://discord.js.org/#/docs/main/stable/class/MessageActionRow',
				MessageAttachment: 'https://discord.js.org/#/docs/main/stable/class/MessageAttachment',
				MessageButton: 'https://discord.js.org/#/docs/main/stable/class/MessageButton',
				MessageCollector: 'https://discord.js.org/#/docs/main/stable/class/MessageCollector',
				MessageComponentInteraction: 'https://discord.js.org/#/docs/main/stable/class/MessageComponentInteraction',
				MessageEmbed: 'https://discord.js.org/#/docs/main/stable/class/MessageEmbed',
				MessageFlags: 'https://discord.js.org/#/docs/main/stable/class/MessageFlags',
				MessageManager: 'https://discord.js.org/#/docs/main/stable/class/MessageManager',
				MessageMentions: 'https://discord.js.org/#/docs/main/stable/class/MessageMentions',
				MessagePayload: 'https://discord.js.org/#/docs/main/stable/class/MessagePayload',
				MessageReaction: 'https://discord.js.org/#/docs/main/stable/class/MessageReaction',
				MessageSelectMenu: 'https://discord.js.org/#/docs/main/stable/class/MessageSelectMenu',
				NewsChannel: 'https://discord.js.org/#/docs/main/stable/class/NewsChannel',
				OAuth2Guild: 'https://discord.js.org/#/docs/main/stable/class/OAuth2Guild',
				Options: 'https://discord.js.org/#/docs/main/stable/class/Options',
				PartialGroupDMChannel: 'https://discord.js.org/#/docs/main/stable/class/PartialGroupDMChannel',
				PermissionOverwriteManager: 'https://discord.js.org/#/docs/main/stable/class/PermissionOverwriteManager',
				PermissionOverwrites: 'https://discord.js.org/#/docs/main/stable/class/PermissionOverwrites',
				Permissions: 'https://discord.js.org/#/docs/main/stable/class/Permissions',
				Presence: 'https://discord.js.org/#/docs/main/stable/class/Presence',
				PresenceManager: 'https://discord.js.org/#/docs/main/stable/class/PresenceManager',
				RateLimitError: 'https://discord.js.org/#/docs/main/stable/class/RateLimitError',
				ReactionCollector: 'https://discord.js.org/#/docs/main/stable/class/ReactionCollector',
				ReactionEmoji: 'https://discord.js.org/#/docs/main/stable/class/ReactionEmoji',
				ReactionManager: 'https://discord.js.org/#/docs/main/stable/class/ReactionManager',
				ReactionUserManager: 'https://discord.js.org/#/docs/main/stable/class/ReactionUserManager',
				RichPresenceAssets: 'https://discord.js.org/#/docs/main/stable/class/RichPresenceAssets',
				Role: 'https://discord.js.org/#/docs/main/stable/class/Role',
				RoleManager: 'https://discord.js.org/#/docs/main/stable/class/RoleManager',
				SelectMenuInteraction: 'https://discord.js.org/#/docs/main/stable/class/SelectMenuInteraction',
				Shard: 'https://discord.js.org/#/docs/main/stable/class/Shard',
				ShardClientUtil: 'https://discord.js.org/#/docs/main/stable/class/ShardClientUtil',
				ShardingManager: 'https://discord.js.org/#/docs/main/stable/class/ShardingManager',
				SnowflakeUtil: 'https://discord.js.org/#/docs/main/stable/class/SnowflakeUtil',
				StageChannel: 'https://discord.js.org/#/docs/main/stable/class/StageChannel',
				StageInstance: 'https://discord.js.org/#/docs/main/stable/class/StageInstance',
				StageInstanceManager: 'https://discord.js.org/#/docs/main/stable/class/StageInstanceManager',
				Sticker: 'https://discord.js.org/#/docs/main/stable/class/Sticker',
				StickerPack: 'https://discord.js.org/#/docs/main/stable/class/StickerPack',
				StoreChannel: 'https://discord.js.org/#/docs/main/stable/class/StoreChannel',
				SystemChannelFlags: 'https://discord.js.org/#/docs/main/stable/class/SystemChannelFlags',
				Team: 'https://discord.js.org/#/docs/main/stable/class/Team',
				TeamMember: 'https://discord.js.org/#/docs/main/stable/class/TeamMember',
				TextChannel: 'https://discord.js.org/#/docs/main/stable/class/TextChannel',
				ThreadChannel: 'https://discord.js.org/#/docs/main/stable/class/ThreadChannel',
				ThreadManager: 'https://discord.js.org/#/docs/main/stable/class/ThreadManager',
				ThreadMember: 'https://discord.js.org/#/docs/main/stable/class/ThreadMember',
				ThreadMemberFlags: 'https://discord.js.org/#/docs/main/stable/class/ThreadMemberFlags',
				ThreadMemberManager: 'https://discord.js.org/#/docs/main/stable/class/ThreadMemberManager',
				Typing: 'https://discord.js.org/#/docs/main/stable/class/Typing',
				User: 'https://discord.js.org/#/docs/main/stable/class/User',
				UserFlags: 'https://discord.js.org/#/docs/main/stable/class/UserFlags',
				UserManager: 'https://discord.js.org/#/docs/main/stable/class/UserManager',
				Util: 'https://discord.js.org/#/docs/main/stable/class/Util',
				VoiceChannel: 'https://discord.js.org/#/docs/main/stable/class/VoiceChannel',
				VoiceRegion: 'https://discord.js.org/#/docs/main/stable/class/VoiceRegion',
				VoiceState: 'https://discord.js.org/#/docs/main/stable/class/VoiceState',
				VoiceStateManager: 'https://discord.js.org/#/docs/main/stable/class/VoiceStateManager',
				Webhook: 'https://discord.js.org/#/docs/main/stable/class/Webhook',
				WebhookClient: 'https://discord.js.org/#/docs/main/stable/class/WebhookClient',
				WebSocketManager: 'https://discord.js.org/#/docs/main/stable/class/WebSocketManager',
				WebSocketShard: 'https://discord.js.org/#/docs/main/stable/class/WebSocketShard',
				WelcomeChannel: 'https://discord.js.org/#/docs/main/stable/class/WelcomeChannel',
				WelcomeScreen: 'https://discord.js.org/#/docs/main/stable/class/WelcomeScreen',
				Widget: 'https://discord.js.org/#/docs/main/stable/class/Widget',
				WidgetMember: 'https://discord.js.org/#/docs/main/stable/class/WidgetMember',

				ActivitiesOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ActivitiesOptions',
				ActivityOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ActivityOptions',
				ActivityParty: 'https://discord.js.org/#/docs/main/stable/typedef/ActivityParty',
				ActivityPlatform: 'https://discord.js.org/#/docs/main/stable/typedef/ActivityPlatform',
				ActivityTimestamps: 'https://discord.js.org/#/docs/main/stable/typedef/ActivityTimestamps',
				ActivityType: 'https://discord.js.org/#/docs/main/stable/typedef/ActivityType',
				AddApplicationCommandPermissionsOptions: 'https://discord.js.org/#/docs/main/stable/typedef/AddApplicationCommandPermissionsOptions',
				AddGuildMemberOptions: 'https://discord.js.org/#/docs/main/stable/typedef/AddGuildMemberOptions',
				AgentOptions: 'https://discord.js.org/#/docs/main/stable/typedef/AgentOptions',
				APIError: 'https://discord.js.org/#/docs/main/stable/typedef/APIError',
				APIMessageActionRowComponent: 'https://discord.js.org/#/docs/main/stable/typedef/APIMessageActionRowComponent',
				APIRequest: 'https://discord.js.org/#/docs/main/stable/typedef/APIRequest',
				ApplicationAsset: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationAsset',
				ApplicationCommandData: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandData',
				ApplicationCommandOption: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandOption',
				ApplicationCommandOptionChoice: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandOptionChoice',
				ApplicationCommandOptionData: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandOptionData',
				ApplicationCommandOptionType: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandOptionType',
				ApplicationCommandPermissionData: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandPermissionData',
				ApplicationCommandPermissions: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandPermissions',
				ApplicationCommandPermissionType: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandPermissionType',
				ApplicationCommandResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable',
				ApplicationCommandType: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandType',
				ApplicationResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/ApplicationResolvable',
				AuditLogAction: 'https://discord.js.org/#/docs/main/stable/typedef/AuditLogAction',
				AuditLogActionType: 'https://discord.js.org/#/docs/main/stable/typedef/AuditLogActionType',
				AuditLogChange: 'https://discord.js.org/#/docs/main/stable/typedef/AuditLogChange',
				AuditLogEntryTarget: 'https://discord.js.org/#/docs/main/stable/typedef/AuditLogEntryTarget',
				AuditLogTargetType: 'https://discord.js.org/#/docs/main/stable/typedef/AuditLogTargetType',
				AwaitMessageComponentOptions: 'https://discord.js.org/#/docs/main/stable/typedef/AwaitMessageComponentOptions',
				AwaitMessagesOptions: 'https://discord.js.org/#/docs/main/stable/typedef/AwaitMessagesOptions',
				AwaitReactionsOptions: 'https://discord.js.org/#/docs/main/stable/typedef/AwaitReactionsOptions',
				BanOptions: 'https://discord.js.org/#/docs/main/stable/typedef/BanOptions',
				Base64Resolvable: 'https://discord.js.org/#/docs/main/stable/typedef/Base64Resolvable',
				BaseApplicationCommandPermissionsOptions: 'https://discord.js.org/#/docs/main/stable/typedef/BaseApplicationCommandPermissionsOptions',
				BaseFetchOptions: 'https://discord.js.org/#/docs/main/stable/typedef/BaseFetchOptions',
				BaseMessageComponentOptions: 'https://discord.js.org/#/docs/main/stable/typedef/BaseMessageComponentOptions',
				BaseMessageOptions: 'https://discord.js.org/#/docs/main/stable/typedef/BaseMessageOptions',
				BitFieldResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/BitFieldResolvable',
				BroadcastEvalOptions: 'https://discord.js.org/#/docs/main/stable/typedef/BroadcastEvalOptions',
				BufferResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/BufferResolvable',
				CacheFactory: 'https://discord.js.org/#/docs/main/stable/typedef/CacheFactory',
				CategoryChannelResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/CategoryChannelResolvable',
				CategoryCreateChannelOptions: 'https://discord.js.org/#/docs/main/stable/typedef/CategoryCreateChannelOptions',
				ChannelData: 'https://discord.js.org/#/docs/main/stable/typedef/ChannelData',
				ChannelLogsQueryOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ChannelLogsQueryOptions',
				ChannelPosition: 'https://discord.js.org/#/docs/main/stable/typedef/ChannelPosition',
				ChannelResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/ChannelResolvable',
				ChannelType: 'https://discord.js.org/#/docs/main/stable/typedef/ChannelType',
				ChannelWebhookCreateOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ChannelWebhookCreateOptions',
				ClientOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ClientOptions',
				ClientPresenceStatus: 'https://discord.js.org/#/docs/main/stable/typedef/ClientPresenceStatus',
				ClientUserEditData: 'https://discord.js.org/#/docs/main/stable/typedef/ClientUserEditData',
				CollectorFilter: 'https://discord.js.org/#/docs/main/stable/typedef/CollectorFilter',
				CollectorOptions: 'https://discord.js.org/#/docs/main/stable/typedef/CollectorOptions',
				CollectorResetTimerOptions: 'https://discord.js.org/#/docs/main/stable/typedef/CollectorResetTimerOptions',
				ColorResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/ColorResolvable',
				CommandInteractionOption: 'https://discord.js.org/#/docs/main/stable/typedef/CommandInteractionOption',
				CommandInteractionResolvedData: 'https://discord.js.org/#/docs/main/stable/typedef/CommandInteractionResolvedData',
				Constants: 'https://discord.js.org/#/docs/main/stable/typedef/Constants',
				CreateInviteOptions: 'https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions',
				CreateRoleOptions: 'https://discord.js.org/#/docs/main/stable/typedef/CreateRoleOptions',
				CrosspostedChannel: 'https://discord.js.org/#/docs/main/stable/typedef/CrosspostedChannel',
				DateResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/DateResolvable',
				DeconstructedSnowflake: 'https://discord.js.org/#/docs/main/stable/typedef/DeconstructedSnowflake',
				DefaultMessageNotificationLevel: 'https://discord.js.org/#/docs/main/stable/typedef/DefaultMessageNotificationLevel',
				EditGuildTemplateOptions: 'https://discord.js.org/#/docs/main/stable/typedef/EditGuildTemplateOptions',
				EmbedField: 'https://discord.js.org/#/docs/main/stable/typedef/EmbedField',
				EmbedFieldData: 'https://discord.js.org/#/docs/main/stable/typedef/EmbedFieldData',
				EmojiIdentifierResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/EmojiIdentifierResolvable',
				EmojiResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/EmojiResolvable',
				EscapeMarkdownOptions: 'https://discord.js.org/#/docs/main/stable/typedef/EscapeMarkdownOptions',
				ExplicitContentFilterLevel: 'https://discord.js.org/#/docs/main/stable/typedef/ExplicitContentFilterLevel',
				Features: 'https://discord.js.org/#/docs/main/stable/typedef/Features',
				FetchApplicationCommandOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchApplicationCommandOptions',
				FetchArchivedThreadOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchArchivedThreadOptions',
				FetchBanOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchBanOptions',
				FetchBansOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchBansOptions',
				FetchChannelOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchChannelOptions',
				FetchedThreads: 'https://discord.js.org/#/docs/main/stable/typedef/FetchedThreads',
				FetchGuildOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchGuildOptions',
				FetchGuildsOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchGuildsOptions',
				FetchInviteOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchInviteOptions',
				FetchInvitesOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchInvitesOptions',
				FetchMemberOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchMemberOptions',
				FetchMembersOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchMembersOptions',
				FetchReactionUsersOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchReactionUsersOptions',
				FetchRecommendedShardsOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchRecommendedShardsOptions',
				FetchThreadsOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FetchThreadsOptions',
				FileOptions: 'https://discord.js.org/#/docs/main/stable/typedef/FileOptions',
				GuildApplicationCommandPermissionData: 'https://discord.js.org/#/docs/main/stable/typedef/GuildApplicationCommandPermissionData',
				GuildAuditLogsFetchOptions: 'https://discord.js.org/#/docs/main/stable/typedef/GuildAuditLogsFetchOptions',
				GuildBanResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/GuildBanResolvable',
				GuildChannelCloneOptions: 'https://discord.js.org/#/docs/main/stable/typedef/GuildChannelCloneOptions',
				GuildChannelCreateOptions: 'https://discord.js.org/#/docs/main/stable/typedef/GuildChannelCreateOptions',
				GuildChannelOverwriteOptions: 'https://discord.js.org/#/docs/main/stable/typedef/GuildChannelOverwriteOptions',
				GuildChannelResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/GuildChannelResolvable',
				GuildCreateOptions: 'https://discord.js.org/#/docs/main/stable/typedef/GuildCreateOptions',
				GuildEditData: 'https://discord.js.org/#/docs/main/stable/typedef/GuildEditData',
				GuildEmojiCreateOptions: 'https://discord.js.org/#/docs/main/stable/typedef/GuildEmojiCreateOptions',
				GuildEmojiEditData: 'https://discord.js.org/#/docs/main/stable/typedef/GuildEmojiEditData',
				GuildInvitableChannelResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/GuildInvitableChannelResolvable',
				GuildListMembersOptions: 'https://discord.js.org/#/docs/main/stable/typedef/GuildListMembersOptions',
				GuildMemberEditData: 'https://discord.js.org/#/docs/main/stable/typedef/GuildMemberEditData',
				GuildMemberResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/GuildMemberResolvable',
				GuildMembersChunk: 'https://discord.js.org/#/docs/main/stable/typedef/GuildMembersChunk',
				GuildPruneMembersOptions: 'https://discord.js.org/#/docs/main/stable/typedef/GuildPruneMembersOptions',
				GuildResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/GuildResolvable',
				GuildRolePosition: 'https://discord.js.org/#/docs/main/stable/typedef/GuildRolePosition',
				GuildSearchMembersOptions: 'https://discord.js.org/#/docs/main/stable/typedef/GuildSearchMembersOptions',
				GuildStickerCreateOptions: 'https://discord.js.org/#/docs/main/stable/typedef/GuildStickerCreateOptions',
				GuildStickerEditData: 'https://discord.js.org/#/docs/main/stable/typedef/GuildStickerEditData',
				GuildTemplateResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/GuildTemplateResolvable',
				GuildTextChannelResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/GuildTextChannelResolvable',
				GuildVoiceChannelResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/GuildVoiceChannelResolvable',
				GuildWidgetSettings: 'https://discord.js.org/#/docs/main/stable/typedef/GuildWidgetSettings',
				GuildWidgetSettingsData: 'https://discord.js.org/#/docs/main/stable/typedef/GuildWidgetSettingsData',
				HasApplicationCommandPermissionsOptions: 'https://discord.js.org/#/docs/main/stable/typedef/HasApplicationCommandPermissionsOptions',
				HTTPAttachmentData: 'https://discord.js.org/#/docs/main/stable/typedef/HTTPAttachmentData',
				HTTPErrorData: 'https://discord.js.org/#/docs/main/stable/typedef/HTTPErrorData',
				HTTPOptions: 'https://discord.js.org/#/docs/main/stable/typedef/HTTPOptions',
				ImageURLOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ImageURLOptions',
				IntegrationAccount: 'https://discord.js.org/#/docs/main/stable/typedef/IntegrationAccount',
				IntegrationExpireBehavior: 'https://discord.js.org/#/docs/main/stable/typedef/IntegrationExpireBehavior',
				IntegrationType: 'https://discord.js.org/#/docs/main/stable/typedef/IntegrationType',
				IntentsResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/IntentsResolvable',
				InteractionCollectorOptions: 'https://discord.js.org/#/docs/main/stable/typedef/InteractionCollectorOptions',
				InteractionDeferReplyOptions: 'https://discord.js.org/#/docs/main/stable/typedef/InteractionDeferReplyOptions',
				InteractionDeferUpdateOptions: 'https://discord.js.org/#/docs/main/stable/typedef/InteractionDeferUpdateOptions',
				InteractionReplyOptions: 'https://discord.js.org/#/docs/main/stable/typedef/InteractionReplyOptions',
				InteractionResponseType: 'https://discord.js.org/#/docs/main/stable/typedef/InteractionResponseType',
				InteractionType: 'https://discord.js.org/#/docs/main/stable/typedef/InteractionType',
				InteractionUpdateOptions: 'https://discord.js.org/#/docs/main/stable/typedef/InteractionUpdateOptions',
				InvalidRequestWarningData: 'https://discord.js.org/#/docs/main/stable/typedef/InvalidRequestWarningData',
				InviteGenerationOptions: 'https://discord.js.org/#/docs/main/stable/typedef/InviteGenerationOptions',
				InviteResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/InviteResolvable',
				InviteScope: 'https://discord.js.org/#/docs/main/stable/typedef/InviteScope',
				LifetimeFilterOptions: 'https://discord.js.org/#/docs/main/stable/typedef/LifetimeFilterOptions',
				LimitedCollectionOptions: 'https://discord.js.org/#/docs/main/stable/typedef/LimitedCollectionOptions',
				MakeErrorOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MakeErrorOptions',
				MembershipState: 'https://discord.js.org/#/docs/main/stable/typedef/MembershipState',
				MessageActionRowComponent: 'https://discord.js.org/#/docs/main/stable/typedef/MessageActionRowComponent',
				MessageActionRowComponentOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageActionRowComponentOptions',
				MessageActionRowComponentResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/MessageActionRowComponentResolvable',
				MessageActionRowOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageActionRowOptions',
				MessageActivity: 'https://discord.js.org/#/docs/main/stable/typedef/MessageActivity',
				MessageButtonOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageButtonOptions',
				MessageButtonStyle: 'https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyle',
				MessageButtonStyleResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/MessageButtonStyleResolvable',
				MessageCollectorOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageCollectorOptions',
				MessageComponent: 'https://discord.js.org/#/docs/main/stable/typedef/MessageComponent',
				MessageComponentCollectorOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageComponentCollectorOptions',
				MessageComponentOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageComponentOptions',
				MessageComponentType: 'https://discord.js.org/#/docs/main/stable/typedef/MessageComponentType',
				MessageComponentTypeResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/MessageComponentTypeResolvable',
				MessageEditOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageEditOptions',
				MessageEmbedAuthor: 'https://discord.js.org/#/docs/main/stable/typedef/MessageEmbedAuthor',
				MessageEmbedFooter: 'https://discord.js.org/#/docs/main/stable/typedef/MessageEmbedFooter',
				MessageEmbedImage: 'https://discord.js.org/#/docs/main/stable/typedef/MessageEmbedImage',
				MessageEmbedOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageEmbedOptions',
				MessageEmbedProvider: 'https://discord.js.org/#/docs/main/stable/typedef/MessageEmbedProvider',
				MessageEmbedThumbnail: 'https://discord.js.org/#/docs/main/stable/typedef/MessageEmbedThumbnail',
				MessageEmbedVideo: 'https://discord.js.org/#/docs/main/stable/typedef/MessageEmbedVideo',
				MessageFile: 'https://discord.js.org/#/docs/main/stable/typedef/MessageFile',
				MessageInteraction: 'https://discord.js.org/#/docs/main/stable/typedef/MessageInteraction',
				MessageMentionOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageMentionOptions',
				MessageMentionsHasOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageMentionsHasOptions',
				MessageMentionTypes: 'https://discord.js.org/#/docs/main/stable/typedef/MessageMentionTypes',
				MessageOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageOptions',
				MessageReactionResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/MessageReactionResolvable',
				MessageReference: 'https://discord.js.org/#/docs/main/stable/typedef/MessageReference',
				MessageResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/MessageResolvable',
				MessageSelectMenuOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MessageSelectMenuOptions',
				MessageSelectOption: 'https://discord.js.org/#/docs/main/stable/typedef/MessageSelectOption',
				MessageSelectOptionData: 'https://discord.js.org/#/docs/main/stable/typedef/MessageSelectOptionData',
				MessageTarget: 'https://discord.js.org/#/docs/main/stable/typedef/MessageTarget',
				MessageType: 'https://discord.js.org/#/docs/main/stable/typedef/MessageType',
				MFALevel: 'https://discord.js.org/#/docs/main/stable/typedef/MFALevel',
				MultipleShardRespawnOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MultipleShardRespawnOptions',
				MultipleShardSpawnOptions: 'https://discord.js.org/#/docs/main/stable/typedef/MultipleShardSpawnOptions',
				NSFWLevel: 'https://discord.js.org/#/docs/main/stable/typedef/NSFWLevel',
				OverwriteData: 'https://discord.js.org/#/docs/main/stable/typedef/OverwriteData',
				OverwriteResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/OverwriteResolvable',
				OverwriteType: 'https://discord.js.org/#/docs/main/stable/typedef/OverwriteType',
				Partial: 'https://discord.js.org/#/docs/main/stable/typedef/Partial',
				PartialChannelData: 'https://discord.js.org/#/docs/main/stable/typedef/PartialChannelData',
				PartialOverwriteData: 'https://discord.js.org/#/docs/main/stable/typedef/PartialOverwriteData',
				PartialRecipient: 'https://discord.js.org/#/docs/main/stable/typedef/PartialRecipient',
				PartialRoleData: 'https://discord.js.org/#/docs/main/stable/typedef/PartialRoleData',
				PartialType: 'https://discord.js.org/#/docs/main/stable/typedef/PartialType',
				PermissionOverwriteOptions: 'https://discord.js.org/#/docs/main/stable/typedef/PermissionOverwriteOptions',
				PermissionResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/PermissionResolvable',
				PremiumTier: 'https://discord.js.org/#/docs/main/stable/typedef/PremiumTier',
				PresenceData: 'https://discord.js.org/#/docs/main/stable/typedef/PresenceData',
				PresenceResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/PresenceResolvable',
				PresenceStatus: 'https://discord.js.org/#/docs/main/stable/typedef/PresenceStatus',
				PresenceStatusData: 'https://discord.js.org/#/docs/main/stable/typedef/PresenceStatusData',
				PrivacyLevel: 'https://discord.js.org/#/docs/main/stable/typedef/PrivacyLevel',
				RateLimitData: 'https://discord.js.org/#/docs/main/stable/typedef/RateLimitData',
				RateLimitQueueFilter: 'https://discord.js.org/#/docs/main/stable/typedef/RateLimitQueueFilter',
				RawEmoji: 'https://discord.js.org/#/docs/main/stable/typedef/RawEmoji',
				RawOverwriteData: 'https://discord.js.org/#/docs/main/stable/typedef/RawOverwriteData',
				ReactionCollectorOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ReactionCollectorOptions',
				RemoveApplicationCommandPermissionsOptions: 'https://discord.js.org/#/docs/main/stable/typedef/RemoveApplicationCommandPermissionsOptions',
				ReplyMessageOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ReplyMessageOptions',
				ReplyOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ReplyOptions',
				ResolvedOverwriteOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ResolvedOverwriteOptions',
				RoleData: 'https://discord.js.org/#/docs/main/stable/typedef/RoleData',
				RoleResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/RoleResolvable',
				SetApplicationCommandPermissionsOptions: 'https://discord.js.org/#/docs/main/stable/typedef/SetApplicationCommandPermissionsOptions',
				SetChannelPositionOptions: 'https://discord.js.org/#/docs/main/stable/typedef/SetChannelPositionOptions',
				SetParentOptions: 'https://discord.js.org/#/docs/main/stable/typedef/SetParentOptions',
				SetRolePositionOptions: 'https://discord.js.org/#/docs/main/stable/typedef/SetRolePositionOptions',
				ShardingManagerMode: 'https://discord.js.org/#/docs/main/stable/typedef/ShardingManagerMode',
				ShardingManagerOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ShardingManagerOptions',
				ShardRespawnOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ShardRespawnOptions',
				Snowflake: 'https://discord.js.org/#/docs/main/stable/typedef/Snowflake',
				SplitOptions: 'https://discord.js.org/#/docs/main/stable/typedef/SplitOptions',
				StageChannelResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/StageChannelResolvable',
				StageInstanceCreateOptions: 'https://discord.js.org/#/docs/main/stable/typedef/StageInstanceCreateOptions',
				StageInstanceEditOptions: 'https://discord.js.org/#/docs/main/stable/typedef/StageInstanceEditOptions',
				StartThreadOptions: 'https://discord.js.org/#/docs/main/stable/typedef/StartThreadOptions',
				StaticImageURLOptions: 'https://discord.js.org/#/docs/main/stable/typedef/StaticImageURLOptions',
				Status: 'https://discord.js.org/#/docs/main/stable/typedef/Status',
				StickerFormatType: 'https://discord.js.org/#/docs/main/stable/typedef/StickerFormatType',
				StickerResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/StickerResolvable',
				StickerType: 'https://discord.js.org/#/docs/main/stable/typedef/StickerType',
				SweepFilter: 'https://discord.js.org/#/docs/main/stable/typedef/SweepFilter',
				SystemChannelFlagsResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/SystemChannelFlagsResolvable',
				SystemMessageType: 'https://discord.js.org/#/docs/main/stable/typedef/SystemMessageType',
				TargetType: 'https://discord.js.org/#/docs/main/stable/typedef/TargetType',
				TextBasedChannels: 'https://discord.js.org/#/docs/main/stable/typedef/TextBasedChannels',
				TextBasedChannelTypes: 'https://discord.js.org/#/docs/main/stable/typedef/TextBasedChannelTypes',
				TextChannelResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/TextChannelResolvable',
				ThreadAutoArchiveDuration: 'https://discord.js.org/#/docs/main/stable/typedef/ThreadAutoArchiveDuration',
				ThreadChannelResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/ThreadChannelResolvable',
				ThreadChannelTypes: 'https://discord.js.org/#/docs/main/stable/typedef/ThreadChannelTypes',
				ThreadCreateOptions: 'https://discord.js.org/#/docs/main/stable/typedef/ThreadCreateOptions',
				ThreadEditData: 'https://discord.js.org/#/docs/main/stable/typedef/ThreadEditData',
				ThreadMemberResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/ThreadMemberResolvable',
				TimestampStylesString: 'https://discord.js.org/#/docs/main/stable/typedef/TimestampStylesString',
				UserResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/UserResolvable',
				Vanity: 'https://discord.js.org/#/docs/main/stable/typedef/Vanity',
				VerificationLevel: 'https://discord.js.org/#/docs/main/stable/typedef/VerificationLevel',
				VoiceBasedChannelTypes: 'https://discord.js.org/#/docs/main/stable/typedef/VoiceBasedChannelTypes',
				VoiceChannelResolvable: 'https://discord.js.org/#/docs/main/stable/typedef/VoiceChannelResolvable',
				WebhookClientData: 'https://discord.js.org/#/docs/main/stable/typedef/WebhookClientData',
				WebhookEditData: 'https://discord.js.org/#/docs/main/stable/typedef/WebhookEditData',
				WebhookEditMessageOptions: 'https://discord.js.org/#/docs/main/stable/typedef/WebhookEditMessageOptions',
				WebhookFetchMessageOptions: 'https://discord.js.org/#/docs/main/stable/typedef/WebhookFetchMessageOptions',
				WebhookMessageOptions: 'https://discord.js.org/#/docs/main/stable/typedef/WebhookMessageOptions',
				WebhookType: 'https://discord.js.org/#/docs/main/stable/typedef/WebhookType',
				WebsocketOptions: 'https://discord.js.org/#/docs/main/stable/typedef/WebsocketOptions',
				WelcomeChannelData: 'https://discord.js.org/#/docs/main/stable/typedef/WelcomeChannelData',
				WelcomeScreenEditData: 'https://discord.js.org/#/docs/main/stable/typedef/WelcomeScreenEditData',
				WidgetActivity: 'https://discord.js.org/#/docs/main/stable/typedef/WidgetActivity',
				WidgetChannel: 'https://discord.js.org/#/docs/main/stable/typedef/WidgetChannel',
				WSEventType: 'https://discord.js.org/#/docs/main/stable/typedef/WSEventType',
			};

			// Add links for everything
			documentation.externals = documentation.externals || [];
			documentation.classes = documentation.classes || [];
			documentation.typedefs = documentation.typedefs || [];
			for (const x of documentation.externals) {
				documentation.links[x.name] = x.see[0].replace(/\{@link\s+(.+?)\s*\}/i, '$1');
			}
			for (const c of documentation.classes) {
				documentation.links[c.name] = { name: 'docs-source-tag-class-class', params: { class: c.name } };
			}
			for (const t of documentation.typedefs) {
				documentation.links[t.name] = { name: 'docs-source-tag-typedef-typedef', params: { typedef: t.name } };
			}

			// Workaround for the single use of inter-source see also linking
			if (inputSource.id === 'commando') {
				documentation.links.Message = {
					name: 'docs-source-tag-class-class',
					params: { source: 'main', tag: 'master', class: 'Message' },
				};
			}

			documentation.global = inputSource.global;
			documentation.source = inputSource.source;
			documentation.id = inputSource.id;
			documentation.tag = inputTag;

			commit({
				type: 'setDocs',
				docs: documentation,
			});
		},

		fetchTags: async ({ commit }, { currentSource }: { currentSource: DocsSource }) => {
			const tags = await currentSource.fetchTags();

			commit({
				type: 'setBranches',
				branches: tags,
			});
		},
	},
});

export function useStore() {
	return baseUseStore(key);
}
