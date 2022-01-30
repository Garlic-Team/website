import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklistArray = ['renovate', 'v8', 'gh-pages', 'docs', 'v8-dev'];
const branchBlacklist = new Set(['docs', 'webpack', 'v8', 'v8-dev', 'master', 'renovate', 'gh-pages']);
export default new DocsSource({
	id: 'gcommands',
	name: 'GCommands',
	global: 'GCommands',
	repo: 'Garlic-Team/GCommands',
	docsFolder: '/docs',
	defaultTag: 'latest',
	branchFilter: (branch: string) =>
		(!branchBlacklistArray.includes(branch) || !branchBlacklist.has(branch)) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/^v/, ''), '9.0.0'),
});
