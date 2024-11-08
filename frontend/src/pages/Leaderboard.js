// src/pages/Leaderboard.js
import React from 'react';
import './Leaderboard.css';

function Leaderboard() {
  const topUsers = [
    { rank: 1, name: 'Champion', points: 1500 },
    { rank: 2, name: 'RunnerUp', points: 1400 },
    { rank: 3, name: 'FastLearner', points: 1300 },
    { rank: 4, name: 'Polyglot', points: 1200 },
    { rank: 5, name: 'WordWizard', points: 1100 },
  ];

  const yourRank = { rank: 101, name: 'NewUser', points: 10 };

  return (
    <div className="leaderboard-page">
      <h1>Leaderboard</h1>
      <table className="pixel-table">
        <thead>
          <tr>
            <th>Rank</th><th>Name</th><th>Points</th>
          </tr>
        </thead>
        <tbody>
          {topUsers.map((user) => (
            <tr key={user.rank}>
              <td>{user.rank}</td><td>{user.name}</td><td>{user.points}</td>
            </tr>
          ))}
          <tr className="your-rank">
            <td>{yourRank.rank}</td><td>{yourRank.name}</td><td>{yourRank.points}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;