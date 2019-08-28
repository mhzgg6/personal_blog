//  拿到 db 对象创建操作article数据库的模型对象
const Article = require('../Models/article')
//  拿到 db 对象创建操作user数据库的模型对象
const User = require('../Models/user')

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

//  获取文章分页
exports.getList = async ctx => {
    
    let page = ctx.params.id || 1
    page--

    const data = await Article
        .find()                 //  查找所有
        .sort('-created')       //  排序 以创建时间倒序
        .skip(5 * page)         //  跳过多少条
        .limit(5)               //  需要几条数据
        .populate({
            path: 'author',
            select: '_id username avater'
        })                      //  连表查询
        .then(data => {
            ctx.body = data
        })
        .catch(err => {
            ctx.body = {
                msg: '获取文章列表失败'
            }
        })
}