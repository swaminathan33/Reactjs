import React, { useState } from 'react'
import {auth} from '../../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => console.log(userCredentials))
        .catch((err) => console.log(err))
    }

  return (
    <div>
      <form action="" onSubmit={signIn}>
        <h1>Log In</h1>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default SignIn
