import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
	id: 'gcomponents',
	name: 'GComponents',
	global: 'GComponents',
	repo: 'Garlic-Team/GComponents',
	docsFolder: '/docs',
	defaultTag: 'master',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gt(tag.replace(/^v/, ''), '0.4.1'),
});
