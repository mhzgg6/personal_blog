//  拿到 db 对象创建操作article数据库的模型对象
const Article = require('../Models/article')

//  文章保存到数据库
exports.add = async ctx => {
    if(ctx.session.isNew) {
        //  true 未登录 就不需要进数据库查询
        return ctx.body = {
            msg: '用户未登录',
            status: 0
        }
    }

    //  用户登陆
    const data = ctx.request.body
    console.log(data)
    //  添加文章的作者
    data.author = ctx.session.uid
    console.log(data.author)
    await new Promise((resolve, reject) => {
        new Article(data)
            .save((err, data) => {
                if(err)return reject(err)
                resolve(data)
            })
    })
    .then(data => {
        ctx.body = {
            msg: '发表成功',
            status: 1
        }
    })
    .catch(err => {
        ctx.body = {
            msg: '发表失败',
            status: 0
        }
    })
}