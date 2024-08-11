import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


import logo from '../Assests/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>PAWARA INSTITUTE</p>

    </div>
    <ul className='nav-menu'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
   <div className="nav-login-cart">
    <Link to ='/login'><button>LOGIN</button></Link>

       
      </div>
      </div>
  )
}

export default Navbar