import React, { useEffect, useState } from "react";
import { IoIosRefreshCircle } from "react-icons/io";
import "./login.css";

const Captcha = ({ handleSubmit, handleChange }) => {
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);
  const [input, setInput] = useState(null);
  const [captchaFail, setCaptchaFail] = useState(false);
  const [captchaSuccess, setCaptchaSucess] = useState(false);

  const handleCaptcha = () => {
    const randomString = Math.random().toString(36).slice(8);
    setCaptchaFail(false);
    setCaptchaSucess(false);
    setCaptcha(randomString);
  };

  const verifyCaptcha = () => {
    if (input !== captcha) {
      setCaptchaFail(true);
    } else {
      setCaptchaSucess(true);
    }
  };

  useEffect(() => {
    if (captchaSuccess) {
      setCaptchaFail(false);
    }
  });

  useEffect(() => {
    try {
      if (captcha.length == input.length) {
        if (captcha == input) {
          setCaptchaSucess(true);
        } else {
          setCaptchaFail(true);
        }
      }
    } catch (e) {
      //
    }
  });

  return (
    <div>
      <div className="wrapper">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div>
            {captchaSuccess ? (
              <button type="submit" className="login">
                Login
              </button>
            ) : (
              "Verify captcha to login"
            )}
          </div>
        </form>
        <div>
          <div className="captcha-text">
            {captcha}
            <button
              className="refresh
        "
              onClick={handleCaptcha}
            >
              <IoIosRefreshCircle />
            </button>
          </div>

          <div className="verify-captcha">
            <div className="input-box">
              <input type="text" onChange={(e) => setInput(e.target.value)} />
            </div>
            {captchaFail && <p className="failed">Failed</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Captcha;
