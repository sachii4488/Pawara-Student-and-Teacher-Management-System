import React from 'react'
import './Navbar.css'


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
        <button>LOGIN</button>
      </div>
      </div>
  )
}

export default Navbar