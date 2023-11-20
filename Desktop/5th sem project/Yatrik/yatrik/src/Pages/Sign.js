import React, { useState } from 'react';
import './SignUp.css';
import { FiFacebook, FiGift, FiGithub } from 'react-icons/fi';

const Sign = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    // Add your sign-up logic here, e.g., sending data to a server
    setError('');
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
          {error && <p className="error">{error}</p>}
        </form>
        <div className="social-signup">
          <p>Sign Up with:</p>
          <div className="social-icons">
            <a href="#facebook">
              <FiFacebook />
            </a>
            <a href="#Google">
              <FiGift />
            </a>
            <a href="#Github">
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
