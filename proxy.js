'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, overload2 = require('overload2')
	, Type = overload2.Type
	
	/* in-package */
	, env = require('./env')
	, PROXIES = require('./data/proxies')
	;

const TypeUsage = new Type(/(http|socket5)/i);

function proxy(/* name, usage */) {
	let args = new overload2.ParamList(
		/* proxy name */
		[ Type.and('string', Type.not(TypeUsage)), 'ABSENT' ],

		/* proxy usage */
		[ TypeUsage, overload2.absent('http') ],
	).parse(arguments);

	if (!args) throw new Error('invalid arguments found');

	let [ name, usage ] = args;

	if (!name) {
		name = env.current() == 'PROD' ? 'PROXYGATE2' : 'NTPROXY';
	}
	else {
		name = name.toUpperCase();
	}
	
	let info = PROXIES.find(P => P.name == name);
	if (!info) {
		throw new Error(`proxy "${name}" not found`);
	}

	usage = usage.toLowerCase();
	return info[usage];	
}

module.exports = proxy;
