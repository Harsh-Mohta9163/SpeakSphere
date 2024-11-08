// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="pixel-navbar">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">Learn</NavLink>
        </li>
        <li>
          <NavLink to="/courses" activeclassname="active">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeclassname="active">Leaderboard</NavLink>
        </li>
        <li>
          <NavLink to="/quests" activeclassname="active">Quests</NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeclassname="active">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;