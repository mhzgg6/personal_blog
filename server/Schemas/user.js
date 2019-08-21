const { Schema } = require('./config')

const UserSchema = new Schema({
    username: String,
    password: String
})

module.exports = UserSchema