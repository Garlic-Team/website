import path from 'path';
import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite';
import sidebar from './sidebar';

const config = defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
	bundler: '@vuepress/vite',
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
	lang: 'en-US',
	base: '/guide/',
	title: 'GCommands',
	description: 'We love open-source <3 ',
	head: [
		['meta', { charset: 'utf-8' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'icon', href: '/icon.gif' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { property: 'og:title', content: 'Garlic-Team Guide' }],
		['meta', { property: 'og:description', content: 'We love open-source <3' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://garlic-team.js.org/guide/' }],
		['meta', { property: 'og:locale', content: 'en_US' }],
		['meta', { property: 'og:image', content: '/icon.gif' }],
	],
	theme: path.join(__dirname, 'theme', 'index.ts'),
	themeConfig: {
		contributors: false,
		sidebar,
		repo: 'Garlic-Team/website',
		docsDir: 'guide',
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
		navbar: [
			{
				text: 'GCommands Legacy',
				link: '/gcommands-legacy/'
			},
			{
				text: 'Hyttpo',
				link: '/hyttpo/',
			},
			{
				text: 'Documentation',
				link: 'https://garlic-team.js.org/docs/',
			},
		],
		themePlugins: {
			mediumZoom: false,
		},
	},
	plugins: [],
});

const { ALGOLIA_DOCSEARCH_API_KEY, GOOGLE_ANALYTICS_ID, NODE_ENV } = process.env;

if (NODE_ENV === 'production' && ALGOLIA_DOCSEARCH_API_KEY && GOOGLE_ANALYTICS_ID) {
	config.plugins.push(
		[
			'@vuepress/plugin-docsearch',
			{
				apiKey: ALGOLIA_DOCSEARCH_API_KEY,
				indexName: 'discordjs',
				placeholder: 'Search guide',
			},
		],
		[
			'@vuepress/plugin-google-analytics',
			{ id: GOOGLE_ANALYTICS_ID },
		],
	);
}

export default config;
