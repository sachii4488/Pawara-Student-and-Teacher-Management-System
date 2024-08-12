import React from 'react'
import logo from '../Components/Assests/logo2.png'
import './CSS/Signup.css'


const Login = () => {
  return (
    <div className="container">
        <div className="left">
        <h1>Sign up</h1>
            <div className='login-fields'>
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Email Address'/>
                <input type="password" placeholder='Password'/>
                
            </div>
            <button>Continue</button>
            <p className='login-login'>Already have an account? <span>Login here</span></p>
            <div className='login-agree'>
                <input type="checkbox" name="" id=""/>
        <p>By continuing ,i agree to use & privacy policy</p>

    </div>
        </div>
        <div className="right">
            <img src={logo} alt="" />

        </div>
    </div>
  )
}

export default Login