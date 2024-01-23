import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import {auth} from '../../firebase'
import { useNavigate  } from "react-router-dom";

const AuthDetails = () => {
    let navigate = useNavigate()

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, user => {
            if (user) {
                setAuthUser(user)
                navigate('/')
            }
            else{
                setAuthUser(null)
                navigate('/login')
            }
        })

        return () => {
            listen();
        }

    }, [])



  return (
    <div>
      <p>
        {
            authUser ? 
            <p>
                signed In
                </p> : 
            
            <p>Signed Out </p>
        }
      </p>
    </div>
  )
}

export default AuthDetails
