'use strict';

module.exports = app => {
    class LoginController extends app.Controller {
        * index() {
            const {ctx} = this;
            const token = app.jwt.sign({ username: 'foo' }, app.config.jwt.secret);
            ctx.set('Authorization', `Bearer ${token}`);
            ctx.body = 'logined';
        }
    }
    return LoginController;
};