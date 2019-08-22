//  拿到 db 对象创建操作user数据库的模型对象
const User = require('../Models/user')

//  处理用户注册
exports.reg = async ctx => {
    //  用户注册时 post 发过来的数据
    const user = ctx.request.body
    const username = user.username
    const password = user.password

    //  去数据库 user 先查询当前发过来的 username 是否存在
    await new Promise((resolve, reject) => {
        //  去 user 数据库查询
        User.find({username},(err, data) =>{
            if(err)return reject(err)
            //  如果查询没有出错 
            if(data.length !== 0) {
                //  查询到数据 用户已经存在
                return resolve('')
            } 
            // 用户名不存在 存储到数据库
            const _user = new User({
                username,
                password
            })

            _user.save((err, data) => {
                if(err){
                    reject(err)
                }else{
                    resolve(data)
                }
            })
        })
    })
    .then(async data => {
        if(data) {
            //  注册成功
            ctx.body = {
                msg: '注册成功'
            }
        }else{
            //  用户名存在
            ctx.body = {
                msg: '用户名存在'
            }
        }
    })
    .catch(async err => {
        //  用户名存在
        ctx.body = {
            msg: '注册失败，请重试'
        }
    })
}

//  处理用户登陆
exports.login = async ctx => {
    const user = ctx.request.body
    const username = user.username
    const password = user.password

    await new Promise( (resolve, reject) => {
        User.find({username}, (err, data) => {
            if(err)return
            if( data.length == 0 )return reject('用户名不存在')

            //  用数据库密码和用户登陆密码  进行比对
            if( data[0].password == password ){
                return resolve(data)
            }
            resolve('')
        })
    })
    .then(data => {
        if(!data){
            //  密码错误
            ctx.body = {
                msg: '密码不正确，登陆失败'
            }
        }else{
            //  登陆成功
            ctx.body = {
                msg: '登陆成功'
            }
        }
    })
    .catch(error => {
        //  登陆失败
        ctx.body = {
            msg: '登陆失败'
        }
    })
}