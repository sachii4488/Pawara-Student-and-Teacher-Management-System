import React from 'react';
import './CSS/Signup.css';

const SignUpForm = () => {
  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2 className="signup-title">SIGN UP</h2>
        <form className="signup-form">
          <div className="signup-form-group">
            <input type="text" placeholder="Enter your name" className="signup-input-field" />
          </div>
          <div className="signup-form-group">
            <input type="email" placeholder="Enter your email" className="signup-input-field" />
          </div>
          <div className="signup-form-group">
            <input type="password" placeholder="Enter your password" className="signup-input-field" />
          </div>
          <div className="signup-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="signup-forgot-password">Forgot password</a>
          </div>
          <button type="submit" className="signup-btn-signin">Sign in</button>
        </form>
        <p className="signup-login-text">
          Do You have an account? <a href="#" className="signup-login-link">Login Here!</a>
        </p>
      </div>
      <div className="signup-logo-container">
        <img src="path_to_logo_image" alt="Pawara Institute Logo" signup-className="logo" />
      </div>
    </div>
  );
};

export default SignUpForm;
