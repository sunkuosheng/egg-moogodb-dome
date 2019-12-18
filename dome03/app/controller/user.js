'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async add() {
        const ds=  await this.ctx.service.user.add();
        // console.log(ds,"我是ds");
        this.ctx.body=ds;
    }
}

module.exports = UserController;
