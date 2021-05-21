require('./Schemas/User');

const mongoose = require('mongoose');
// 要明确的内容：1.给哪个数据库的 2.哪个集合 3.添加什么格式的文档
// Schema 会映射到集合，并且他的内容就是集合下的构成（数据）
// Modal 操作集合和集合下的文档，是根据Schema生成的一套方法集合

const connect = () => {
    return new Promise((resolve) => {
        // 去连接数据库
        mongoose.connect('mongodb://127.0.0.1:27017/personal-mgr'); //mongodb协议 ，后面跟本地路径
        // 当数据库被打开的时候执行的操作
        mongoose.connection.on('open', () => { // 监听数据库是否连接成功
            console.log('连接数据库成功');

            resolve();
        })
    })
}

module.exports = {
    connect,
}
