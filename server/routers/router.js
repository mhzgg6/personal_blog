const Router = require('koa-router')
const User = require('../Models/user')
const router = new Router
//  拿到操作 user 表的逻辑对象
const user = require('../controls/user')
//  拿到操作 article 表的逻辑对象
const article = require('../controls/article')

//  访问主页
router.get('/', user.keepLog, article.getList)

//  处理用户注册
router.post('/api/reg', user.reg)
//  处理用户登陆
router.post('/api/login', user.login)
//  处理用户退出
router.get('/api/logout', user.logout, async(ctx) =>{
    ctx.body = {
        msg: '退出登陆'
    }
})
//  处理用户保存文章
router.post('/api/addArticle', user.keepLog, article.add)
//  处理获取文章分页列表
router.get('/api/page/:id', article.getList)


module.exports = router