const Router = require('@koa/router');
const mongoose = require('mongoose');

const User = mongoose.model('User');

const router = new Router({
    prefix: '/auth',
})
router.post('/register', async (ctx) => {
    console.log(ctx.request.body);
    const { account, password } = ctx.request.body;
    const user = new User({
        account,
        password,
    });

    // 去数据库查询是否已经含有对应的内容
    const one = await User.findOne({
        account,
    }).exec();

    if (one) { // 如果数据库已经存在对应的内容，进行相应的操作
        ctx.body = {
            code: 0,
            message: '注册失败，该账号已经存在，请勿重复注册',
            data: null,
        }
        return;
    }

    // 数据库中没有对应内容的时候，对接口请求的内容保存到数据库
    const res = await user.save();

    ctx.body = {
        code: 1,
        message: '注册成功',
        data: res,
    }
});
router.post('/login', async (ctx) => {
    ctx.body = '登录成功';
});

 module.exports = router;
