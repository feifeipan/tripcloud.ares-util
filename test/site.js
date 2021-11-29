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
	, site = noda.inRequire('site')
    ;

describe('site', () => {
    
    it('site.parse()', () => {
		assert.equal(site.parse('offline'), 'ARES.WEBRESINT');
	});

	it('site.parseHostname()', () => {
		assert.equal(site.parseHostname('pic.c-ctrip.com'), 'ARES.WEBRESOURCE');
	});
});