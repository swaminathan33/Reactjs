import React, { useState } from 'react'
import {auth} from '../../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => console.log(userCredentials))
        .catch((err) => console.log(err))
    }

  return (
    <div>
      <form action="" onSubmit={signUp}>
        <h1>Create your account</h1>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default SignUp
