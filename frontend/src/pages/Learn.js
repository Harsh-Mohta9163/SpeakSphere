// src/pages/Learn.js
import React from 'react';
import './Learn.css';

function Learn() {
  const levels = [
    { level: 1, title: 'Introduce Yourself' },
    { level: 2, title: 'Basic Words' },
    { level: 3, title: 'Learn Sentences' },
    { level: 4, title: 'Advanced Phrases' },
  ];

  return (
    <div className="learn-page">
      {levels.map((item) => (
        <div key={item.level} className="pixel-level">
          <h2>Level {item.level}: {item.title}</h2>
          <div className="stages">
            {/* Example stages */}
            <div className="stage">Stage 1</div>
            <div className="stage">Stage 2</div>
            <div className="stage">Stage 3</div>
            <div className="quiz">Quiz</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Learn;