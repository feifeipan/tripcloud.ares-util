'use strict';

const 
	noda = require('noda')
	
	/* in-package */
	, HOSTS = require('./data/hosts')
	, lib = noda.inRequireDir('lib')
	;


/**
 * 取当前原始环境名。
 */
let _currentRaw;
function currentRaw() {
	if (typeof _currentRaw != 'undefined') {
		return _currentRaw;
	}

	
	let info = lib.readServerPropertiesSync();
	if (info) {
		_currentRaw = info.env;
		return _currentRaw;
	}
	
	_currentRaw = null;
	return _currentRaw;
}

/**
 * 取当前标准环境名。
 */
function current() {
	return parse(currentRaw());
}

/**
 * 判断当前环境是否为生产环境。
 */
function isProd() {
	return current() == 'PROD';
}

function isQate() {
	return current() == 'UAT' || current() == 'FAT';
}

/**
 * 环境名称标准化。
 * @param {string} env 
 * @return {string}
 */
function parse(env) {
	if (!env) {
		return null;
	}

	const ENV = env.toUpperCase();

	if (['PROD', 'PRD', 'PRO', 'PRODUCT', 'PRODUCTION'].includes(ENV)) {
		return 'PROD';
	}
	
	if (['FWS', 'FAT', 'LPT'].includes(ENV)) {
		return 'FAT';
	}
	
	if ('UAT' == ENV) {
		return 'UAT';
	}
	
	return null;
}

/**
 * 根据域名判断相应的环境名称（标准名称）。
 * @param {string} hostname 
 * @return {string}
 */
function parseHostname(hostname) {
	hostname = hostname.toLowerCase();

	let host = HOSTS.find(host => host.hostname == hostname);
	if (host && host.env) {
		return host.env;
	}

	let pieces = hostname.split('.');

	
	let baseDomain = pieces.slice(-2).join('.');
	if ([ 'tripcdn.com', 'tripcdn.cn', 'ctrip.com', 'c-ctrip.com', 'trip.com', 'tripcdn.com', 'ctriptravel.com' ].includes(baseDomain)) {
		return 'PROD';
	}
	

	if (hostname.endsWith('.uat.qa.nt.ctripcorp.com')) {
		return 'UAT';
	}
	

	baseDomain = pieces.slice(-4).join('.');
	let name = pieces.length > 5 ? pieces.slice(-5)[0] : null;
	if (([ 'fat', 'fws' ].includes(name) || /^fat\d+$/.test(name)) && 'qa.nt.ctripcorp.com' == baseDomain) {
		return 'FAT';
	}
	return null;
}

module.exports = {
	current,
	currentRaw,
	isProd,
	isQate,
	parse,
	parseHostname,
};