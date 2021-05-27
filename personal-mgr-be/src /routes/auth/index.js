const Router = require('@koa/router');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const { getBody } = require('../../helpers/utils/index');
var jwt = require('jsonwebtoken');
var token = jwt.sign({
    foo: 'bar'
}, 'shhhhh');

const router = new Router({
    prefix: '/auth',
})
router.post('/register', async (ctx) => {
    const { account, password } = getBody(ctx);
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
    const { account, password } = getBody(ctx);

    const one = await User.findOne({
        account,
    }).exec();

    if (!one) {
        ctx.body = {
            code: 0,
            message: '用户名或密码错误',
            data: null,
        }
        return;
    }
    const user = {
        account: one.account,
        _id: one._id,
    }
    if(one.password === password) {
        ctx.body = {
            code: 1,
            message: '登录成功',
            data: {
                user: user,
                token: jwt.sign(user, 'personal-mgr')
            },
        }
        return;
    } else {
        ctx.body = {
            code: 0,
            message: '用户名或密码错误',
            data: null,
        }
        return;
    }
});

 module.exports = router;
