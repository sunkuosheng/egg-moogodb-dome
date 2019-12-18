'use strict';

module.exports = {
    test() {
        // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    },

    // 他们写在拦截器里面 把请求参数合并到一个   现在放在这 这是错误的写法 不能使用
    // params() {
    //   return {
    //     ...this.query,
    //     ...this.request.body,
    //   };
    // },

    // get params() {
    //   return { ...this.query, ...this.request.body };
    // },

    // 将客户端请求的oldV 变成 newV 并且转成正则匹配  --{ $regex: '^' + value } 以xx开头
    setRegexMongoSql(oldV, newV) {
        const value = this.query[oldV];
        if (value) {
            this.query[newV] = { $regex: value };
        }
        delete this.query[oldV];
    },

    setOrder(key, des) { // asc true  倒序  des false 正序
        this.query.sort = {};
        if (des) {
            this.query.sort[key || 'order'] = -1;
        } else {
            this.query.sort[key || 'order'] = 1;
        }
    },

    getCommonDeptPop() {
        return [{ path: 'dept1', select: 'name' }, { path: 'dept2', select: 'name' },
            { path: 'dept3', select: 'name' }, { path: 'dept4', select: 'name' },
            { path: 'dept5', select: 'name' },
        ];
    },

    getUserPop() {
        return [{ path: 'dept1', select: 'name' }, { path: 'dept2', select: 'name' },
            { path: 'dept3', select: 'name' }, { path: 'dept4', select: 'name' },
            { path: 'dept5', select: 'name' }, { path: 'dept' },
            { path: 'role' },
        ];
    },

    // 响应成功
    success(result) {
        this.body = {
            data: result || '',
            code: 0,
        };
    },

    // 响应失败
    error(msg, code) {
        this.body = {
            message: msg || '数据异常',
            code: code || 1,
        };
    },

    logic(result, msg, code) {
        result ? this.success(result) : this.error(msg, code);
    },
};
