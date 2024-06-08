import React, { useState } from "react";
import "./Login.css";
import { MdPersonOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
  };
  const [boxTick, setBoxTick] = useState(false);
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-box">
          <h3>Let's Get Started</h3>
          <p>sign in to continue to cryogeeks</p>
          <form action="" onSubmit={handleSubmit}>
            <div className="input">
              <MdPersonOutline style={{border:'1px solid #6993ff', height:'100%', padding:'0px 10px 0px 10px', borderRadius:'5px 0px 0px 5px', fontSize:'22px'}} />
              <input type="text" />
            </div>
            <div className="input">
              <CiLock style={{border:'1px solid #6993ff', height:'100%', padding:'0px 10px 0px 10px', borderRadius:'5px 0px 0px 5px', fontSize:'22px'}} />
              <input type="password" />
            </div>
            <div className="final">
              <p> 
                {boxTick ? <TiTick style={{fontSize:'25px'}} onClick={() => setBoxTick(!boxTick)} /> : <MdOutlineCheckBoxOutlineBlank style={{fontSize:'23px'}} onClick={() => setBoxTick(!boxTick)}/>}
                 <span>Remember Me</span>
                 </p>
              <a href="">Forget Password?</a>
            </div>
            <div className="button">
            <button type="submit">Sign In</button>
            </div>
            <div className="signup">
              <p>Didn't have an account ?<br /> <a href="#">Sign Up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
