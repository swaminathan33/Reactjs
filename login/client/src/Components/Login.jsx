import React, { useEffect, useState } from 'react'
import { useNavigate  } from "react-router-dom";
import Captcha from './Captcha';

const Login = () => {
    let navigate = useNavigate ();

    useEffect(() => {
        if(localStorage.getItem('auth')){
            navigate('/')
        }
    },[])
    const [auth, setAuth] = useState({email:'', password:''})

    const handleChange = (e) => {
        setAuth({...auth, [e.target.name]:e.target.value})
    }

    const handleSubmit  = (e) => {
        e.preventDefault();
        if (auth.email !== 'admin' || auth.password !== 'pass'){
            console.log('Invalid email or password')
        }
        else{
            navigate('/')
            localStorage.setItem('auth',true)
        }
    }

  return (
    <div>
      <Captcha handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default Login
