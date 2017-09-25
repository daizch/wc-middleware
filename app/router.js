'use strict';

module.exports = app => {
  app.get('/', 'home.index');

  app.get('/index', 'home.index');
  app.get('/login', 'login.index');
  app.get('/success', 'success.index'); // is setting in config.jwt.match
};
