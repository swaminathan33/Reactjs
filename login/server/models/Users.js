const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    _id: Object,
    name: String,
    age: Number
})

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel 