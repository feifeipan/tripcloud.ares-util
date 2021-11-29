'use strict';

// ATTENTION: 依赖 peerDependencies 的子模块按需引用。
module.exports = {
	domain    : require('./domain'),
	env       : require('./env'),
	erosMime  : require('./eros-mime'),
	hostname  : require('./hostname'),
	idc       : require('./idc'),
	proxy     : require('./proxy'),
	site      : require('./site'),
};