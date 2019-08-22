const Koa = require('koa')
const router = require('./routers/router')
const static = require('koa-static')
const views = require('koa-views')
const logger = require('koa-logger')
const { join } = require('path')
const cors = require('koa-cors')
<<<<<<< HEAD
const session = require('koa-session')
const body = require('koa-body')
=======
>>>>>>> 9ee201d9aabf9f5f1f99e06eb45c71dacf0e8e1b

const app = new Koa

app.use( logger() )
//  解决跨域问题
app.use( cors() )
<<<<<<< HEAD
//  处理post请求
app.use( body() )
//  session 的配置对象
// const CONFIG = {

// }

//  session
// app.use( session() )

=======
>>>>>>> 9ee201d9aabf9f5f1f99e06eb45c71dacf0e8e1b
app.use( static( join(__dirname, "routers") ))
app.use( views( join(__dirname, "routers"),{
    extension: 'pug'
}))


//  注册路由信息
app.use( router.routes() )
   .use( router.allowedMethods() )

app.listen(3000, () => {
    console.log('我成功了，监听再300端口')
})