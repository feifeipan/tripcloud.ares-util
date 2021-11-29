'use strict';

const  env = require('./env')
	, idc = require('./idc')
	;

const DOMAINS = {
	'PROD.FRA-AWS' : '.fraaws.tripws.com',
	'PROD.SFO-AWS' : '.sfoaws.tripws.com',
	'PROD.SIN-AWS' : '.sinaws.tripws.com',
	'PROD.YMQ-AWS' : '.ymqaws.tripws.com',
	'PROD.SHAJQ'   : '.ctripcorp.com',
	'PROD.SHAOY'   : '.ctripcorp.com',
	'PROD.SHARB'   : '.ctripcorp.com',
	'PROD.SHAXY'   : '.ctripcorp.com',
	'UAT.NTGXH'    : '.uat.qa.nt.ctripcorp.com',
	'FAT.NTGXH'    : '.fws.qa.nt.ctripcorp.com',
}

function currentIntranet() {
	let name = `${env.current()}.${idc.currentRaw()}`;
	return DOMAINS[name];
}

module.exports = {
	currentIntranet,
};