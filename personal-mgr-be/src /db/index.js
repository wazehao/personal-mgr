const mongoose = require('mongoose');
// 要明确的内容：1.给哪个数据库的 2.哪个集合 3.添加什么格式的文档
// Schema 会映射到集合，并且他的内容就是集合下的构成（数据）
// Modal 操作集合和集合下的文档，是根据Schema生成的一套方法集合
const UserSchame = new mongoose.Schema({
    // 创建一个 用户的Schema，可以接收一个对象，这个对象主要是描述这个文档是长什么样子的
    nickname: String,
    password: String,
    age: Number,
});

const UserModal =  mongoose.model('User', UserSchame);

const connect = () => {
    // 去连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/personal-mgr'); //mongodb协议 ，后面跟本地路径
    // 当数据库被打开的时候执行的操作
    mongoose.connection.on('open', () => { // 监听数据库是否连接成功
        console.log('连接成功');

        // 实例化Modal的时候，可以创建出一条文档
        const user = new UserModal({
            nickname: 'xiaoming',
            password: '123456',
            age: 12,
        });
        // 保存，同步到MongoDB
        user.save();
    })
}

connect();
