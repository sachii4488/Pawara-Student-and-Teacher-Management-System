import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";


import logo from '../Assests/logo.png'

const Navbar = () => {
  const[menu,setMenu]= useState("home")
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>PAWARA INSTITUTE</p>

    </div>
    <ul className='nav-menu'>
    <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to ='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
   <div className="nav-login-cart">
    <Link to ='/login'><button>LOGIN</button></Link>
    <Link to ='/register'><button >Register Here</button></Link>



       
      </div>
      </div>
  )
}

export default Navbar