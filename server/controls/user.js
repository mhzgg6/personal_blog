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
    .then(async data => {
        if(!data){
            //  密码错误
            ctx.body = {
                msg: '密码不正确，登陆失败'
            }
        }else{
            
            console.log('上面', username)
            //  用户在cookie里面设置 username 
            //  -------------------------------------- 巨坑 设置中文cookie无效 ------------------------------
            ctx.cookies.set('username', username, {
                domain: 'localhost',
                path: '/',   //cookie写入的路径
                maxAge: 1000*60*60*1,
                httpOnly: false,
                overwrite: false
                // signed: true
            })
            
            //  用户在数据库的_id值
            ctx.cookies.set('uid', data[0]._id, {
                domain: 'localhost',
                path: '/',
                maxAge: 36e5,
                httpOnly: false,     //  true 不让客户端访问这个cookie
                overwrite: false,
                // signed: true
            })

            ctx.session = {
                username,
                uid: data[0]._id,
                avater: data[0].avater
            }
            console.log(ctx.session)
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

//  确定用户状态   保持用户状态
exports.keepLog = async (ctx, next) => {
    console.log('进来没')
    if( ctx.session.isNew ){//  没有session
        if( ctx.cookies.get('username') ){
            ctx.session = {
                username: ctx.cookies.get('username'),
                uid: ctx.cookies.get('uid')
            }
        }
    }
    await next()
}

//  用户退出中间件
exports.logout = async (ctx, next) => {
    ctx.session = null
    ctx.cookies.set('username', null, {
        maxAge: 0
    })
    ctx.cookies.set('uid', null, {
        maxAge: 0
    })

    await next()
}