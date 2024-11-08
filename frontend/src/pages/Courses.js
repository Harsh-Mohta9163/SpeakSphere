// src/pages/Courses.js
import React from 'react';
import './Courses.css';

function Courses() {
  const languages = [
    { name: 'English', flag: '🇬🇧' },
    { name: 'Hindi', flag: '🇮🇳' },
    { name: 'Spanish', flag: '🇪🇸' },
    { name: 'Japanese', flag: '🇯🇵' },
    { name: 'French', flag: '🇫🇷' },
    { name: 'German', flag: '🇩🇪' },
    { name: 'Chinese', flag: '🇨🇳' },
  ];

  return (
    <div className="courses-page">
      <h1>Select a Language Course</h1>
      <div className="courses-grid">
        {languages.map((lang, index) => (
          <div key={index} className="pixel-course-card">
            <div className="flag">{lang.flag}</div>
            <h2>{lang.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;