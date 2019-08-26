const Koa = require('koa')
const router = require('./routers/router')
const static = require('koa-static')
const views = require('koa-views')
const logger = require('koa-logger')
const { join } = require('path')
const cors = require('koa-cors')
const session = require('koa-session')
const body = require('koa-body')

const app = new Koa

app.keys = ["毛啊毛"]

//  session 的配置对象
const CONFIG = {
    key: 'Sid',
    maxAge: 1000*60*60,    //  时间(ms),多久失效
    overwrite: true,
    httpOnly: true,
    // signed: true,            //  签名
    rolling: true           //  是否刷新    
}


app.use( logger() )

//  解决跨域问题
// app.use( cors() )
app.use(async (ctx, next)=> {
    // 响应头表示是否可以将对请求的响应暴露给页面
    ctx.set('Access-Control-Allow-Credentials', true)
    // 允许跨域操作的具体域名
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    // 列出将会在正式请求的 Access-Control-Expose-Headers 字段中出现的首部信息
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200
    } else {
      await next()
    }
})

//  处理post请求
app.use( body() )


//  session
app.use( session(CONFIG, app) )

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