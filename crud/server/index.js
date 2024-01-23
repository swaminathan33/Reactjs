const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./model/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/getUsers', (req, res) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))

})

app.post('/add', (req, res) => {
    const newItem = req.body;
    console.log(newItem)
    UserModel.create(newItem)
        .then(user => res.json(user))
        .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const deleteId = new mongoose.Types.ObjectId(req.params);
    UserModel.findByIdAndDelete(deleteId)
        .exec()
        .then((deletedUser) => {
            if (deletedUser) {
                console.log('deleted user', deletedUser)
            }
            else {
                console.log('user not found')
            }
        })
        .catch((err) => console.log(err))
})

app.put('/editUser/:id', (req, res) => {
    const editUser = req.body;
    const id = new mongoose.Types.ObjectId(req.params);
    const name = editUser.name;
    const age = editUser.age;
    UserModel.findByIdAndUpdate(id, { name: name, age: age })
        .exec()
        .then((editedUser) => {
            if (editedUser) {
                console.log('edited User', editedUser)
            }
            else {
                console.log('user not found')
            }
        })
        .catch(err => console.log(err))
})
app.listen(3000, () => {
    console.log('server is running..')
})