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
	, domain = noda.inRequire('domain')
    ;

describe('domain', () => {
    
    it('domain.currentIntranet()', () => {
		domain.currentIntranet();
	});
});