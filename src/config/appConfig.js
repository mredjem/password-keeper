(function() {

  'use strict';

  const _ = require('underscore');
  const packageJson = require('./../package');

  const defaults = {
    name: packageJson.name,
    version: packageJson.version,
    logLevel: 'debug'
  };

  const production = _.extend(_.clone(defaults), {
    env: 'production'
  });

  const local = _.extend(_.clone(defaults), {
    env: 'local'
  });

  const test = _.extend(_.clone(defaults), {
    env: 'test'
  });

  const configs = {
    production: production,
    local: local,
    test: test
  };

  let getConfig = (env) => {
    let envConfig = configs[env];

    if (!envConfig) {
      throw new Error(`${env} has no associated configuration`);
    }

    console.log('\nENVIRONMENT\n--------');
    console.log(envConfig);
    console.log('\n');

    return envConfig;
  };

  module.exports = getConfig(process.env.NODE_ENV || 'local');

}());
