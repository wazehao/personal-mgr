// const fs = require('fs'); // file system
// './1.txt'为创建文件路径， 'abc'为要在上一个路径文件内容里输入cont
// fs.writeFileSync('./1.txt', 'abc');
const Koa = require('koa'); // 引入
const koaBody = require('koa-body');
const { connect } = require('./db');
const registerRoutes = require('./routes');
const cors = require('@koa/cors');

// 每个文件都是一个模块 /auth/register
const app = new Koa(); // 实例化
// 先调用数据库的链接，链接成功后再进行下一步
connect().then(() => {
    app.use(cors()); // 解决浏览器跨域问题处理
    app.use(koaBody()); // body处理请求中body的函数
    registerRoutes(app); // 调用app，传递过去

    // 监听端口，默认在本地起一个3000端口的服务
    // 开启一个 http 服务
    // 接受 http 请求 并做处理，处理完后响应
    // https 80
    app.listen(3000, () => {
        console.log('启动成功');
    });
})
// const utils = require('./helpers/utils/index');

// console.log(utils.getYearByTimeStamp(new Date().getTime()));



// const authRouter = new Router({
//     prefix: '/auth'
// });
// authRouter.get('/register', async (ctx) => {
//     ctx.body = '注册成功';
// });
// const bookRouter = new Router({
//     prefix: '/book'
// });
// bookRouter.get('/add', async (ctx) => {
//     ctx.body = '添加成功';
// });
// app.use(authRouter.routes());
// app.use(bookRouter.routes());

// 中间件  ctx=>context,带了当前请求的一些信息
// 通过app.use注册一个中间件，本质上他就是一个函数
// 跑中间件的时候，按照注册的顺序来跑
// app.use(async (ctx, next) => {
//     const { path = '/' } = ctx; // es6提供的解构语法，等同于const path = ctx.path
//     if(path === '/user/123'){
//         ctx.body = '返回用户id为123的信息';
//     } else if(path === '/settings'){
//         ctx.body = '返回设置的信息';
//     } else {
//         ctx.body = '没有信息的请求';
//     }
//     console.log(1);
//     await next();
//     console.log(3);
// });

// app.use(async (context) =>{
//     console.log(2);
//     context.body = '找不到资源';
// })

// nodejs使用的模块化方案是 commonjs（require、module.exports）
