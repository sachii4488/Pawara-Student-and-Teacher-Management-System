import React, { useState } from 'react';
import logo from '../Components/Assests/logo2.png';
import { Link } from 'react-router-dom';

import './CSS/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials (for demonstration purposes)
    const adminEmail = 'abc@gmail.com';
    const adminPassword = 'admin';

    if (email === adminEmail && password === adminPassword) {
      // If credentials are correct, show success message or redirect
      alert('Login successful');
      // For example, redirect to admin dashboard:
      // window.location.href = '/admin-dashboard';
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>ADMIN LOGIN</h1>
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
/*import React, { useState } from 'react';
import axios from 'axios';
import logo from '../Components/Assests/logo2.png';
import './CSS/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      alert(response.data.message);
      // Redirect to dashboard if needed
      // window.location.href = '/admin-dashboard';
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.error);
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <div className="container">
      <div className="left">
        <h1>ADMIN LOGIN</h1>
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
          Don’t have an account? <span>Sign up here! </span>
        </p>
        <div className="agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
      <div className="right">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Login;*/

