import React from "react";
import './Hero.css'
//import hand_icon from "../Assests/8.png"
//import arrow_icon from "../Assests/arrow.png"
//import hero_image from "../Assests/hero_image.png"
import hero_image from "../Assests/hero2.png"
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Your Journey to Success Starts Here!</h2>
                <div>
                    <div className="hero-welcome">
                        <p>Welcome</p>
                        {/* <img src={hand_icon} alt=""/> */}
                   </div> 
                <p>to Our</p>
                <p> Academic Institute  </p>
            </div>
            
        
        </div>
        <div className="hero-right">
        <img src={hero_image} alt=""/>
            </div>
            </div>
    )
}

export default Hero