const Service = require('egg').Service;
class UserService extends Service {
    // 更新用户信息
    async add() {
        const {
            ctx,
        } = this;

        const ids = await ctx.model.SysMenuModel.find({},{name: 1});
        return  ids;
    }
}
module.exports = UserService;
