const Koa = require('koa')
const router = require('./routers/router')
const static = require('koa-static')
const views = require('koa-views')
const logger = require('koa-logger')
const { join } = require('path')
const cors = require('koa-cors')

const app = new Koa

app.use( logger() )
//  解决跨域问题
app.use( cors() )
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