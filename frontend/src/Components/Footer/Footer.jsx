import React from 'react'
import './Footer.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


              const Footer = () => {
                  return (
                        <div className="footer">
                            <div className='footer-content' id='contact'>
                                <h3>Contact Us</h3>
                                <div className='contact-details'>
                                    <p><FaMapMarkerAlt /> 35, Kaluthara Road, Kaluthara </p>
                                    <p><FaPhone /> +1 (123) 456-7890</p>
                                    <p><FaEnvelope /> pawarainstitute@gmail.com</p>
                                </div>
                                <div className='social-icons'>
                                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebookF /></a>
                                    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
                                    <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
                                </div>
                            </div>
                            </div>
                  )}
                        
                    
          
    


export default Footer