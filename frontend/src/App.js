// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Learn from './pages/Learn';
import Courses from './pages/Courses';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Quests from './pages/Quests';
import Login from './components/LoginPage';
import Register from './components/RegisterPage';
import LanguageLearningHeader from './components/LanguageLearningHeader';
import LanguageCourses from './components/LanguageCourses';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Learn />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;