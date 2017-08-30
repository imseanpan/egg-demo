'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1503407905205_3885';

  // add your config here

  config.proxyworker = {
    port: 10086,
  };

  config.mysql = {
    // database configuration
    client: {
      // host
      host: '112.124.13.149',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '87602680Abcd',
      // database
      database: 'cms',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks',
    },
  };

  return config;
};
