// Promise  很大程度上解决了回调地狱的问题
// 回调函数

const request = (arg, isReject) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isReject){
                reject('出错拉');
                return;
            }
            console.log(arg)
            resolve(arg + 1);
        }, 300);
    });
};

// async 函数，返回的是 一个promise
const fn = async () =>{
    const res = await request(10);
    console.log(res);
    // return 1;
}

fn();

// fn().then((res) => {
//     console.log(res);
// })

// 一个接口 要拿到数据 跑5个前置接口

// const request = (arg, cb) =>{
//     setTimeout(() => {
//         console.log(arg);
//         cb(arg + 1);
//     }, 300);
// }

// request(1, function(res) {
//     console.log('res', res);
//     request(res, function(res2){
//         console.log('res2', res2);
//         request(res2, function(res3){
//             // 回调地狱
//             console.log('res3', res3);
//         })
//     })
// })

// const request = (arg, isReject) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(isReject){
//                 reject('出错拉');
//                 return;
//             }
//             console.log(arg)
//             resolve(arg + 1);
//         }, 300);
//     });
// };

// request(1)
//     .then((res) => {
//         return request(res, true);
//     })
//     .catch((msg) =>{
//         console.log(msg);
//     })
//     .then((res1) => {
//         return request(res1);
//     })
//     .then((res2) => {
//         return request(res2);
//     })
//     .then((res3) => {
//         return request(res3);
//     })
//     .then((res4) => {
//         console.log(res4);
//         // return request(res4);
//     })
