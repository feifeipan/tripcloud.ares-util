'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
	, assert = require('assert')
	, fs = require('fs')
	, os = require('os')
	, path = require('path')

	/* NPM */
	, noda = require('noda')
    
	/* in-package */
	, hostname = noda.inRequire('hostname')
    ;

describe('hostname', () => {
    
    it('hostname.find()', () => {
		assert.deepEqual(
			hostname.find({ site: 'online', env: 'pro' }), 
			[ 'webresource.c-ctrip.com', 'pic.c-ctrip.com' ]);
	});

	it('hostname.find(I18N) ', () => {
		assert.equal(hostname.find({ site: 'i18n', env: 'pro' }).length, 7);
		assert.equal(hostname.find({ site: 'i18n', env: 'pro', isMain: true })[0], 'static.tripcdn.com');
	});

	it('hostname.find({ primary })', () => {
		assert.equal(
			hostname.find({ primary: 'webresource.c-ctrip.com' }).length, 
			3);
	});

	it('hostname.find({ isMain })', () => {
		assert.equal(
			hostname.find({ site: 'online', env: 'pro', isMain: true }).length, 
			1);
	});

	it('hostname.isQATE()', () => {
		[	
			'www.tripqate.com',
			
			'www.uat.tripcorp.com',
			'www.fat1.tripcorp.com',
			'www.fat.tripcorp.com',
			'www.fws.tripcorp.com',
			'www.lpt.tripcorp.com',
			'www.dev.tripcorp.com',

			'www.uat.tripqate.com',
			'www.fat1.tripqate.com',
			'www.fat.tripqate.com',
			'www.fws.tripqate.com',
			'www.lpt.tripqate.com',
			'www.dev.tripqate.com',

			'www.uat.qa.nt.ctripcorp.com',
			'www.fat.qa.nt.ctripcorp.com',

			'www.uat.qa.nt.tripcorp.com',
			'www.fat.qa.nt.tripcorp.com',

			'www.uat.qa.nt.tripqate.com',
			'www.fat.qa.nt.tripqate.com',
		].forEach(name => assert(hostname.isQATE(name)));

		[	'www.tripcorp.com',
			'www.uat.ctripcorp.com',
			'www.uat.trip.com',
		].forEach(name => assert(!hostname.isQATE(name)));
		
	});
});