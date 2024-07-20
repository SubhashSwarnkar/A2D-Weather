import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://hiring-test.a2dweb.com/login', {
        email,
        password
      });

      if (response.status === 201) {
        setMessage('Login successful');
        window.alert('Login successful!');
        localStorage.setItem('token', response.data.token); 
        navigate('/home'); 
      } else {
        setError(response.data.msg || 'An error occurred');
      }
    } catch (error) {
      setError('An error occurred: ' + error.message);
    }
  };

  return (
    <div>
      <div className="registration-form" id="login-form">
        <form id="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="text-center">
            <img src={logo} alt="Logo" />
            <h4 className="text-center">Forecasting</h4>
            <p className="text-center" id="text-signup">Enter your email address and password</p>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          {message && <div className="alert alert-success">{message}</div>}
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control item"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Remember me</label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block create-account">Login</button>
          </div>
          <div>
            <p className="text-center mt-5 pt-5">Don’t have an account?
              {/* <a href='/'>
              Signup
              </a> */}
              </p>
          </div>
        </form>
      </div>
    </div>
  );
}
