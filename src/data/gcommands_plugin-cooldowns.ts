import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'webpack', 'v8', 'v8-dev', 'renovate', 'gh-pages', 'v9', '9.0.1-next', '9.1.0']);
export default new DocsSource({
	id: 'gcommands_plugin-cooldowns',
	name: '@gcommands/plugin-cooldowns',
	global: 'Cooldowns',
	docsRepo: 'Garlic-Team/docs',
	repo: 'Garlic-Team/gcommands-addons/tree/master/packages/plugin-cooldowns',
	defaultTag: 'master',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('renovate/') && !branch.startsWith('chore/'),
	tagFilter: (tag: string) => semver.gte(tag.replace(/(^@.*\/.*@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '9.0.0'),
});
