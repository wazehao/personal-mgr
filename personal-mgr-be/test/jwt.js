var jwt = require('jsonwebtoken');
var token = jwt.sign({
    foo: 'bar'
}, 'shhhhh'); // shhhhh是secret

console.log(token);

// token由三部分组成
// header sha256
// 加密的算法

// payload

// signature

jwt.verify(token, 'shhhhh', (err, payload) => {
    console.log(err, payload);
})
