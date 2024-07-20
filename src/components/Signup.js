import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import logo from "../assets/logo.png"

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    country: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Username is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const response = await fetch('https://hiring-test.a2dweb.com/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.status === 201) {
        window.alert('Profile created successfully!');
        navigate('/login'); 
      } else {
        setMessage(result.message || 'An error occurred');
      }
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
    }
  };

  return (
    <div>
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <div className="text-center">
          <img  src={logo} alt="Logo" />
            <h4 className="text-center">Forcasting</h4>
            <p className="text-center" id="text-signup">
              Enter your email address and password
            </p>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
            {errors.country && <p className="error">{errors.country}</p>}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control item"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control item"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block btn-primary create-account">
              Signup
            </button>
          </div>
          {message && <p className="text-center mt-3">{message}</p>}
          <div>
            <p className="text-center">
              By registering you agree to the Forcasting.
              {/* <a href="/">Terms of Use</a> */}
               and <a href="/">Privacy Policy.</a>
            </p>
          </div>
          <div>
            <p className="text-center">
              Already have an Account ?
              <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>


      
    </div>
  );
}
