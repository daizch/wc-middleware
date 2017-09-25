'use strict';

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1506306015485_9083';

  // add your config here
  config.middleware = [];

  config.jwt = {
    secret: '123456',

    enable: true, // default is false
    match: '/success', // optional
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    }
  };

  return config;
};
