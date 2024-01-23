const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test')

app.post('/createUser', (req, res) => {
    const newUser = req.body.user;
    UserModel.create({
        name: newUser,
        age: 20
    })
    .then((editedUser) => {
        if(editedUser){
            console.log(editedUser)
        }
        else{
            console.log('user not found')
        }
        
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete(id)
    .then((deletedUser) => {
        if(deletedUser){
            console.log(deletedUser)
        }
        else{
            console.log('user not found')
        }
    })
    .catch(err => console.log(err))
})

app.put('/editUser/:id', (req,res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const name = req.body.user;
    UserModel.findByIdAndUpdate(id, {
        name: name,
        age: 20
    })
    .exec()
    .then(editedUser => {
        if(editedUser){
            console.log(editedUser)
        }
        else{
            console.log('user not found')
        }
    })
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('listening...')
})