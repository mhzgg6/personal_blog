const Router = require('koa-router')
const User = require('../Models/user')
const router = new Router

//  访问主页
router.get('/', async (ctx) => {
    ctx.body = "index"

    let data = {
        username: '毛啊毛',
        password: 'mhz'
    }
    const _data = new User(data)

    _data.save()
        .then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
})
var infor = [                       //传前端的数据
    {
        name:'jay',
        age:20,
        sex:'男',
        hobby:'basketball'
    },
    {
        name:'贼好玩',
        age:23,
        sex:'女',
        hobby:'shopping'
    }
]

router.get('/api/login', async (ctx) => {
    ctx.body = {
        status: 200,
        msg: '这是get测试的返回数据',
        data: infor
    }
})

module.exports = router