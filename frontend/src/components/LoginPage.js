// PixelLoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import '../css/LoginPage.css';
import image from './image.png';
/* 
app.use(express.static(path.join(__dirname, 'public'))); */
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      // Redirect or perform further actions here
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="pixel-login-container">
      <div class="word">Hello</div>
      <div class="word">Hola</div>
      <div class="word">Bonjour</div>
      <div class="word">Ciao</div>
      <div class="word">नमस्ते</div>

      <div className="pixel-header">
        {/* <img src= {image} alt="Logo" className="pixel-logo" /> */}
        <h1 className="pixel-title">SpeakSphere</h1>
        <p className="pixel-tagline">Learn languages through games!</p>
      </div>
      <div className="pixel-login-box">
        <h2 className="pixel-subtitle">Login</h2>
        {error && <p className="pixel-error">{error}</p>}
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
          <button type="submit" className="pixel-login-btn">Login</button>
        </form>
        <div className="pixel-footer">
          <p>
            Don't have an account? 
          </p>
          <a href="/register" className="pixel-link">Register</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
