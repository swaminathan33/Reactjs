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

app.post('/add', (req, res) => {
    const newUser = req.body.newUser;
    UserModel.create(newUser).then(result => res.json(result)).catch(err => console.log(err))
})

app.put('/update/:id', (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params);
    let name = req.body.name;
    const age = req.body.age;
    UserModel.findByIdAndUpdate(id, { name: name, age: age })
        .exec()
        .then((editedUser) => {
            if (editedUser) {
                console.log(editedUser)
            }
            else {
                console.log('user not found')
            }

        })
        .catch((err) => {
            console.log(err)
        })
})

app.delete('/delete/:id', async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params);
    UserModel.findByIdAndDelete(id)
        .exec()
        .then((deletedUser) => {
            if (deletedUser) {
                console.log('Deleted User:', deletedUser);
            } else {
                console.log('User not found.');
            }
        })
        .catch((err) => {
            console.error('Error:', err);
        });
})

app.listen(3002, () => {
    console.log('Server is running')
})



