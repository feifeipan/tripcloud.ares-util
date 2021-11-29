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
	, idc = noda.inRequire('idc')
    ;

describe('idc', () => {
    
    it('idc.currentRaw()', () => {
		idc.currentRaw();
	});

	it('idc.isAWS()', () => {
		assert(typeof idc.isAWS() == 'boolean');
	});

	it('idc.isAliyun()', () => {
		assert(typeof idc.isAliyun() == 'boolean');
	});
});