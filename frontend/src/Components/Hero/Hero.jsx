import React from "react";
import './Hero.css';
import hero_image from "../Assests/Home.jpeg"; // Ensure this path is correct

const Hero = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url(${hero_image})` }}>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Welcome to Pawara Institute</h1>
                        <p>Your Journey to Success Starts Here!</p>
                    </div>
                </div>
            </section>
            {/* Quote Section */}
            <div className="quote-section">
                <p className="quote-text">
                " Our mission at Pawara Institute is to empower students with the knowledge, skills, and values to excel in a changing world. We are dedicated to providing a transformative education that fosters critical thinking, curiosity, and a commitment to lifelong learning "
                </p>
            </div>
            <div className='about'>
                <div className='about-content' id="about">
                    <h3>About Us</h3>
                    <p>At Pawara Institute, we pride ourselves on offering a comprehensive education with more than 20 highly qualified educators. Our institute serves over 600 students, providing a full range of subjects from grades 1 to 13. Our teachers are dedicated to fostering an engaging and supportive learning environment, ensuring that every student receives the highest quality of education. Whether through innovative teaching methods or personalized guidance, we are committed to helping each student achieve their full potential.</p>
                    <p>Our faculty members are more than just instructors—they are mentors and leaders who inspire students to excel academically and personally. They stay at the forefront of educational advancements, continuously updating their skills to provide cutting-edge instruction. At Pawara Institute, we believe that great teachers are the cornerstone of a great education, and we are proud to offer our students access to the very best educators in the country.</p>
                </div>
            </div>
            </div>

            
    )
}

export default Hero