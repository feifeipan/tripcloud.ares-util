'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	
	/* in-package */
	, env = require('./env')
	, site = require('./site')
	, HOSTS = require('./data/hosts')
	;

/**
 * 获取指定域名。
 * @param {string}  [options.site]
 * @param {string}  [options.env]
 * @param {string}  [options.primary]
 * @param {boolean} [options.isMain]
 */
function find(options) {
	options = Object.assign({}, options, {
		site : site.parse(options.site),
		env  : env.parse(options.env),
	});

	let hostnames = [];
	for (let i = 0; i < HOSTS.length; i++) {
		if (options.site && HOSTS[i].site != options.site) continue;
		if (options.env  && HOSTS[i].env  != options.env ) continue;
		if (options.primary && HOSTS[i].primary != options.primary && HOSTS[i].hostname != options.primary) continue;
		if (typeof options.isMain == 'boolean' && options.isMain != !!HOSTS[i].isMain) continue;
		hostnames.push(HOSTS[i].hostname);
	}

	return hostnames;
}

function isIntranet(hostname) {
	if (hostname.endsWith('.ctripcorp.com')) {
		return true;
	}

	if (hostname.endsWith('.tripqate.com')) {
		return true;
	}

	if (hostname.endsWith('.tripws.com')) {
		return true;
	}

	return false;
}

function isQATE(hostname) {
	if (hostname.endsWith('.qa.nt.ctripcorp.com')) {
		return true;
	}

	/**
	 * @deprecated
	 */
	if (hostname.endsWith('.qa.nt.tripcorp.com')) {
		return true;
	}

	if (hostname.endsWith('.tripqate.com')) {
		return true;
	}

	if (/\.(dev|lpt|fat\d*|fws|uat)\.tripcorp\.com$/.test(hostname)) {
		return true;
	}

	return false;
}

module.exports = {
	find,
	isIntranet,
	isQATE,
};