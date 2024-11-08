import React, { useState } from 'react';
import axios from 'axios';
import '../css/RegisterPage.css';

import { useNavigate } from 'react-router-dom'; // Import useNavigate


const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setSuccess(''); // Reset success message

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        username,
        password,
      });
      console.log('Registration successful:', response.data);
      setSuccess('Registration successful! Redirecting to login...');
      
      // Redirect to login page after successful registration
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Optional delay for displaying success message
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      setError(err.response?.data.error || 'Failed to register. Please try again.');
    }
  };

  return (
    <body className='register-page'>
        <div className="pixel-login-container">

        <div class="word">Hello</div>
        <div class="word">Hola</div>
        <div class="word">Bonjour</div>
        <div class="word">Ciao</div>
        <div class="word">नमस्ते</div>

        <div className="pixel-header">
            {/* <img src="/assets/pixel-logo.png" alt="Logo" className="pixel-logo" /> */}
            <h1 className="pixel-title">SpeakSphere</h1>
            <p className="pixel-tagline">Learn languages through games!</p>
        </div>
        <div className="pixel-login-box">
            <h2 className="pixel-subtitle">Register</h2>
            {error && <p className="pixel-error">{error}</p>}
            {success && <p className="pixel-success">{success}</p>}
            <form onSubmit={handleSubmit}>
            <div className="pixel-input-group">
                <label htmlFor="username" className="pixel-label">Username</label>
                <input
                type="text"
                id="username"
                className="pixel-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </div>
            <div className="pixel-input-group">
                <label htmlFor="password" className="pixel-label">Password</label>
                <input
                type="password"
                id="password"
                className="pixel-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <div className="pixel-input-group">
                <label htmlFor="confirmPassword" className="pixel-label">Confirm Password</label>
                <input
                type="password"
                id="confirmPassword"
                className="pixel-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit" className="pixel-login-btn">Register</button>
            </form>
            <div className="pixel-footer">
            <p>
                Already have an account? 
            </p>
            <a href="/login" className="pixel-link">Log In</a>
            </div>
        </div>
        </div>
    </body>
  );
};

export default RegisterPage;
