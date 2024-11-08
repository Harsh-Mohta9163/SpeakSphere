// src/pages/Profile.js
import React from 'react';
import './Profile.css';

function Profile() {
  const user = {
    username: 'LanguageLearner',
    languages: [
      { name: 'Spanish', progress: 'Level 2' },
      { name: 'French', progress: 'Level 1' },
    ],
  };

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <h2>Username: {user.username}</h2>
      <h3>Your Courses:</h3>
      <ul>
        {user.languages.map((lang, index) => (
          <li key={index}>
            {lang.name} - {lang.progress}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;