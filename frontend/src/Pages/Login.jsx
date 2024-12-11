import React, { useState } from 'react';
import logo from '../Components/Assests/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials (for demonstration purposes)
    const adminEmail = 'abc@gmail.com';
    const adminPassword = 'admin';

    // Hardcoded student credentials (for demonstration purposes)
    const studentEmail = 'def@gmail.com';
    const studentPassword = 'student';

    //Hardcoded teacher credentials (for demonstration purposes)
    const teacherEmail = 'ghi@gmail.com';
    const teacherPassword = 'teacher';

    // Check for admin credentials
    if (email === adminEmail && password === adminPassword) {
      navigate('/admin'); // Redirect to admin dashboard
    } 
    // Check for student credentials
    else if (email === studentEmail && password === studentPassword) {
      navigate('/student'); // Redirect to student dashboard
    } 
    // Check for teacher credentials
    else if (email === teacherEmail && password === teacherPassword) {
      navigate('/teacher'); // Redirect to teacher dashboard
    }
    // Invalid credentials
    else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>LOGIN FORM</h1>
        <form onSubmit={handleSubmit} className="login-fields">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">LOGIN</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <p className="login-login">
          Don’t have an account? <Link to="/signup">Sign up here!</Link>
        </p>
        <div className="login-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
      <div className="login-right">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Login;
