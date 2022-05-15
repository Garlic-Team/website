import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
	id: 'hyttpo',
	name: 'Hyttpo',
	global: 'Hyttpo',
	docsRepo: 'Garlic-Team/docs',
	repo: 'Garlic-Team/hyttpo',
	defaultTag: 'master',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('renovate/'),
	tagFilter: (tag: string) => semver.gt(tag.replace(/(^@.*\/.*@v?)?(?<semver>\d+.\d+.\d+)-?.*/, '$<semver>'), '0.4.1'),
});
