import React, { useState } from 'react';
import './App.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="form-container">
      <img
          src="https://media.discordapp.net/attachments/852241547327307786/1071035284017381496/logo-gmail-9989.jpg?width=410&height=410" alt="Gmail logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <div className="form-group">
            <label htmlFor="email">Email or phone</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
            <a href="nothing" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button className="sign-in-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
