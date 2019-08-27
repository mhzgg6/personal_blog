const { Schema } = require('./config')
const ObjectId = Schema.Types.ObjectId

const ArticleSchema = new Schema({
    title: String,
    content: String,
    label: String,
    author: {
        type: ObjectId,
        ref: 'users'
    }     //  关联用户的表
},{
    versionKey: false,
    timestamps: {
       createdAt: 'created' 
    }
})

module.exports = ArticleSchema