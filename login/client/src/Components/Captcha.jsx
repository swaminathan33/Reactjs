import React, { useEffect, useState } from 'react'
import { IoIosRefreshCircle } from "react-icons/io";

const Captcha = ({handleSubmit, handleChange}) => {
    const randomString = Math.random().toString(36).slice(8)
    const [captcha, setCaptcha] = useState(randomString)
    const [input, setInput] = useState(null);
    const [captchaFail, setCaptchaFail] = useState(false);
    const [captchaSuccess, setCaptchaSucess] = useState(false);

    const handleCaptcha = () => {
        const randomString = Math.random().toString(36).slice(8)
        setCaptchaFail(false)
        setCaptchaSucess(false)
        setCaptcha(randomString);
    }

    const verifyCaptcha = () => {
        if (input !== captcha){
            setCaptchaFail(true)
        }
        else{
            setCaptchaSucess(true)
        }
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='email' onChange={handleChange}/>
        <input type="text" name='password' onChange={handleChange}/>

        {
          captchaSuccess ? <button type='submit'>Login</button> : 'Verify captcha to login'
        }
      </form>
      <span>{captcha} </span>

      <button onClick={handleCaptcha}> 
        <IoIosRefreshCircle /> 

      </button>
      <input type="text"  onChange={(e) => setInput(e.target.value)}/>
      <button onClick={verifyCaptcha} >Submit</button>
      {
        captchaFail && <p>Failed</p>
      }
      {
        captchaSuccess && <p>Success</p>
      }
    </div>
  )
}

export default Captcha
