import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'webpack', 'v8', 'master', 'renovate']);
export default new DocsSource({
	id: 'gcommands',
	name: 'GCommands',
	global: 'GCommands',
	repo: 'Garlic-Team/GCommands',
	docsFolder: '/docs',
	defaultTag: 'next',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/^v/, ''), '9.0.0'),
});
