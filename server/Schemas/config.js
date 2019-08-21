const mongoose = require('mongoose')
//  连接mongodb服务器
const db = mongoose.createConnection('mongodb://localhost:27017/blogproject', {useNewUrlParser: true})

//  用原生es6的Promise取代mongoose的Promise
mongoose.Promise = global.Promise

//  导出Schema
const Schema = mongoose.Schema

db.on('error', () =>{
    console.log('服务器连接失败')
})
db.on('open', () =>{
    console.log('服务器连接成功')
})

module.exports = {
    db,
    Schema
}