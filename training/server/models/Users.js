const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id : Object,
    name: String,
    age : Number
})

const UserModel = new mongoose.model('users', userSchema)
module.exports = UserModel