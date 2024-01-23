const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const UserModel = new mongoose.model('loginuser', UserSchema)
module.exports = UserModel

