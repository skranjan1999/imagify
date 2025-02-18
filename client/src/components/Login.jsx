import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import "./Login.css";
import { AppContext } from "../context/AppContext";

function Login() {

  const [state, setState] = useState("Login");

  const {setShowLogin} = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return ()=>{
        document.body.style.overflow = 'unset'
    }

  }, [])

  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="form-heading">{state}</h1>
        <p className="text-sm">Welcme back! Please sign in to contiue</p>

        {state !== "Login" && (
          <div className="form-fill-blanks">
            <img src={assets.user_icon} alt="" />
            <input
              type="text"
              className="outline-none text-sm"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        <div className="form-fill-blanks">
          <img src={assets.email_icon} alt="" />
          <input
            type="email"
            className="outline-none text-sm"
            placeholder="example@email.com"
            required
          />
        </div>

        <div className="form-fill-blanks">
          <img src={assets.lock_icon} alt="" />
          <input
            type="password"
            className="outline-none text-sm"
            placeholder="Password"
            required
          />
        </div>
        <p className="forget-password">Forgot Password?</p>

        <button className="create-button">
          {state === "Login" ? "Login" : "create account"}
        </button>

    {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?
            <span className="text-blue-600 cursor-pointer" onClick={()=>{setState('Sign Up')}}>Sign Up</span>
          </p>
        ) 
    : (
          <p className="mt-5 text-center">
            Already have an account?
            <span className="text-blue-600 cursor-pointer" onClick={()=>{setState('Login')}}>Login</span>
          </p>
    )}
        <img
          onClick={()=>{setShowLogin(false)}}
          className="cross-icon"
          src={assets.cross_icon}
          alt=""
        />
      </form>
    </div>
  );
}

export default Login;
