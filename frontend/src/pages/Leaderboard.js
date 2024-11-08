import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Leaderboard.css';

function Leaderboard() {
  const [topUsers, setTopUsers] = useState([]);
  const [yourRank, setYourRank] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const token = localStorage.getItem('access_token'); // Retrieve token from localStorage

      if (!token) {
        setError("User not authenticated. Redirecting to login...");
        setTimeout(() => navigate('/login'), 2000); // Redirect to login after a short delay
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/leaderboard', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        const { top_users, your_rank } = response.data;
        console.log(response.data);
        
        // Sort users by points in descending order
        const sortedUsers = [...top_users].sort((a, b) => b.points - a.points);

        // Check if the current user is in the top 5
        const isUserInTop5 = sortedUsers.slice(0, 5).some(user => user.rank === your_rank.rank);

        // If the user is not in the top 5, show the top 5 + user's rank at the end
        const displayedUsers = isUserInTop5 ? sortedUsers.slice(0, 5) : [...sortedUsers.slice(0, 5), your_rank];

        setTopUsers(displayedUsers);
        setYourRank(isUserInTop5 ? null : your_rank);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
        if (err.response?.status === 401) {
          setError("Session expired. Please log in again.");
          setTimeout(() => navigate('/login'), 2000); // Redirect to login if session expired
        } else {
          setError("Failed to fetch leaderboard. Please try again later.");
        }
      }
    };

    fetchLeaderboard();
  }, [navigate]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="leaderboard-page">
      <h1>Leaderboard</h1>
      {topUsers.length > 0 ? (
        <table className="pixel-table">
          <thead>
            <tr>
              <th>Rank</th><th>Name</th><th>Points</th>
            </tr>
          </thead>
          <tbody>
            {topUsers.map((user, index) => (
              <tr key={index} className={user.rank === yourRank?.rank ? "your-rank" : ""}>
                <td>{user.rank}</td>
                <td>{user.name}</td>
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data-message">The leaderboard is currently empty. Start earning points to be featured here!</p>
      )}
    </div>
  );
}

export default Leaderboard;
