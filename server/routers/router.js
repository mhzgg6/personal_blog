const Router = require('koa-router')
const User = require('../Models/user')
const router = new Router
//  拿到操作 user 表的逻辑对象
const user = require('../controls/user')

//  访问主页
router.get('/', async (ctx) => {
    ctx.body = "index"
})

//  处理用户注册
router.post('/api/reg', user.reg)
//  处理用户登陆
router.post('/api/login', user.login)

module.exports = router