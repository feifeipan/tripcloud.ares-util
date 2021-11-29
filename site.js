'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	
	/* in-package */
	, HOSTS = require('./data/hosts')
	;

function parse(name) {
	if (name) {
		switch (name.toUpperCase()) {
			case 'I18N':
			case 'ARES.I18N':
				return 'ARES.I18N';

			case 'ONLINE':
			case 'ARES.WEBRESOURCE':
				return 'ARES.WEBRESOURCE';
		
			case 'OFFLINE':
			case 'ARES.WEBRESINT':
				return 'ARES.WEBRESINT';

			case 'ENGLISH':
			case 'ARES.WEBRESOURCE.ENGLISH':
				return 'ARES.WEBRESOURCE.ENGLISH';
		}
	}
	return null;
}

function parseHostname(hostname) {
	let site = null;
	if (hostname) {
		// 此处域名应与 CEPH 存储中的容器名保持一致，且无冗余。
		hostname = hostname.toLowerCase();
		for (let i = 0; i < HOSTS.length; i++) {
			if (HOSTS[i].hostname == hostname) {
				site = HOSTS[i].site;
				break;
			}
		}
	}
	return site;
}

module.exports = {
	parse,
	parseHostname,
};