'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, ctriputil = require('ctriputil')

	/* in-package */
	;

let _qconfig;

function get(name /*, ... */) {
	if (!_qconfig) {
		_qconfig = ctriputil.qconfig.getConfig('100013666:ares.json', noda.inRead('data/qconfig.ares.json', 'utf8'));
	}

	let config = _qconfig.getSync(name);
	for (let i = 1; config && i < arguments.length; i++) {
		config = config[arguments[i]];
	}
	return config;
}

module.exports = {
	get,
};