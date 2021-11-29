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
	, env = noda.inRequire('env')
    ;

describe('env', () => {
    
    it('env.parse()', () => {
		assert.equal(env.parse('fws'), 'FAT');
		assert.equal(env.parse('uat'), 'UAT');
		assert.equal(env.parse('pro'), 'PROD');
	});

	it('env.parseHostname()', () => {
		assert.equal(env.parseHostname('pic.c-ctrip.com'), 'PROD');
		assert.equal(env.parseHostname('ak-s.tripcdn.com'), 'PROD');
		assert.equal(env.parseHostname('ws-s.tripcdn.cn'), 'PROD');
	});

	it('env.current()', () => {
		env.current();
	});

	it('env.currentRaw()', () => {
		env.currentRaw();
	});
});