const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/add', (req,res) => {
    const newUser = req.body.newUser;
    UserModel.create({
        _id: newUser.id,
        name: newUser.name,
        age: newUser.age
    }).then(result => res.json(result)).catch(err => console.log(err))
})

app.delete('/delete/:id', (req,res) => {
    //const id = req.params.id.toString().trim();
    const id = new mongoose.Types.ObjectId(req.params.id);
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('Server is running')
})