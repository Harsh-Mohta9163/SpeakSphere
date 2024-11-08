// src/pages/Quests.js
import React from 'react';
import './Quests.css';

function Quests() {
  const quests = [
    { title: 'Complete 3 Lessons', reward: '50 XP' },
    { title: 'Practice for 7 Days', reward: '100 XP' },
    { title: 'Reach Level 5', reward: '200 XP' },
  ];

  return (
    <div className="quests-page">
      <h1>Quests</h1>
      <ul className="quest-list">
        {quests.map((quest, index) => (
          <li key={index} className="pixel-quest-card">
            <h2>{quest.title}</h2>
            <p>Reward: {quest.reward}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quests;