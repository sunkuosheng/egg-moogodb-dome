'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {

  async one() {
    const { ctx } = this;
    const result = await this.tag().one(ctx.query.id);
    ctx.logic(result, '查询失败');
  }

  async list() {
    const { ctx } = this;
    const result = await this.tag().list();
    ctx.success(result);
  }

  async listForPage() {
    const { ctx } = this;
    const result = await this.tag().listForPage(ctx.query);
    ctx.success(result);
  }

  async add() {
    const { ctx } = this;
    const query = ctx.request.body;
    delete query._id;
    const result = await this.tag().add(query);
    ctx.success(result);
  }

  async update() {
    const { ctx } = this;
    const query = ctx.request.body;
    const { id } = query;
    delete query.id;

    const result = await this.tag().update(id, query);
    ctx.success(result);
  }

  async delete() {
    const { ctx } = this;
    const result = await this.tag().delete(ctx.query.id);
    ctx.success(result);
  }
}

module.exports = BaseController;
