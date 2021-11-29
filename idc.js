'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, noda = require('noda')
	
	/* in-package */
	, lib = noda.inRequireDir('lib')
	;

const SHANGHAI      = 'SHA-ALI';

const SINGAPORE     = 'SIN-AWS';
const SAN_FRANCISCO = 'SFO-AWS';
const FRANKFURT     = 'FRA-AWS';

/**
 * @deprecated 加拿大中部节点已暂时推销。
 */
const MONTREAL      = 'YMQ-AWS';
const CANADA        = 'YMQ-AWS';

/**
 * 取当前原始 IDC 名。
 */
let _currentRaw;
function currentRaw() {
	if (typeof _currentRaw != 'undefined') {
		return _currentRaw;
	}

	READ_FROM_SERVER_ROPERTIES: {
		let info = lib.readServerPropertiesSync();
		if (info) {
			_currentRaw = info.idc;
			return _currentRaw;
		}
	}

	_currentRaw = null;
	return _currentRaw;
}

function isAliyun() {
	let raw = currentRaw();
	return typeof raw == 'string' ? raw.endsWith('-ALI') : false;
}

function isAWS() {
	let raw = currentRaw();
	return typeof raw == 'string' ? raw.endsWith('-AWS') : false;
}

function isPublic() {
	return isAliyun() || isAWS();
}

/**
 * @see 
 *   公有云http代理说明
 *   http://conf.ctripcorp.com/pages/viewpage.action?pageId=192085824
 */
function getHttpProxy() {
	let proxy = null;

	switch (currentRaw()) {
		/**
		 * @update 2021-04-19
		 */
		case SHANGHAI:
			proxy = 'http://aliyun-proxy.ops.shaali.tripws.com:8080';
			break;

		/**
		 * @update 2021-04-19
		 * 这和此前的规则略有不同，代理的域名第一节为 proxy-nwl 而不是 proxy。
		 */
		case FRANKFURT:
			proxy = 'http://proxy-nwl.fraaws.tripws.com:8080';
			break;

		// 旧金山节点未开通代理服务。
		case SINGAPORE:
		case FRANKFURT:
		case MONTREAL:
			proxy = `http://proxy.${currentRaw().toLowerCase().replace('-', '')}.tripws.com:8080`;	
			break;
	
		default:
			// No preferred proxy for private IDCs.
			break;
	}
	
	return proxy;
}

module.exports = {
	currentRaw,
	isAliyun,
	isAWS,
	isPublic,
	getHttpProxy,

	SHANGHAI,
	SINGAPORE,
	SAN_FRANCISCO,
	FRANKFURT,
	MONTREAL,
	CANADA,
};