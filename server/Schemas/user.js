const { Schema } = require('./config')

const UserSchema = new Schema({
    username: String,
    password: String,
    avater: {
        type: String,
        default: '../static/default.jpg'
    }
})

module.exports = UserSchema