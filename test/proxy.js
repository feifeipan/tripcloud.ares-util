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
	, proxy = noda.inRequire('proxy')
    ;

describe('proxy', () => {
    
    it('proxy(name, usage)', () => {
		assert(proxy('PROXYGATE2', 'http').startsWith('http://'));
	});

	it('proxy(usage)', () => {
		assert(proxy('http').startsWith('http://'));
	});
});