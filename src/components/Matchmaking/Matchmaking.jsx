import React, { useState } from "react";
import users from "../../data/users";
import "./Matchmaking.css";

function Matchmaking() {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const [matches, setMatches] = useState([]);
  const [likedUsers, setLikedUsers] = useState(currentUser.likedUsers || []);

  const findDailyMatches = () => {
    const potentialMatches = users.filter((user) => {
      if (user.id === currentUser.id) return false;

      const withinAgeRange =
        user.age >= currentUser.preferences.ageRange[0] &&
        user.age <= currentUser.preferences.ageRange[1];

      const sameLocation = user.location === currentUser.preferences.location;

      const sharedInterests = user.interests.filter((interest) =>
        currentUser.preferences.interests.includes(interest)
      );

      return withinAgeRange && sameLocation && sharedInterests.length > 0;
    });

    // Shuffle potential matches and select up to 3 for daily suggestions
    const dailyMatches = potentialMatches.sort(() => 0.5 - Math.random()).slice(0, 3);
    setMatches(dailyMatches);
  };

  const handleLike = (likedUser) => {
    const newLikedUsers = [...likedUsers, likedUser.id];
    setLikedUsers(newLikedUsers);

    if (likedUser.likedUsers.includes(currentUser.id)) {
      alert(`You and ${likedUser.name} have a mutual like!`);
    }
  };

  const calculateCompatibilityScore = (user) => {
    let score = 0;
    const sharedInterests = user.interests.filter((interest) =>
      currentUser.preferences.interests.includes(interest)
    );
    score += sharedInterests.length * 10;
    const ageDifference = Math.abs(user.age - currentUser.age);
    score -= ageDifference;
    return score > 0 ? score : 0;
  };

  return (
    <div className="matchmaking-container">
      <h1 className="header">Matchmaking for {currentUser.name}</h1>
      <div className="current-user-details">
        <h2>User Details:</h2>
        <p>Name: {currentUser.name}</p>
        <p>Age: {currentUser.age}</p>
        <p>Location: {currentUser.location}</p>
        <p>Interests: {currentUser.interests.join(", ")}</p>
      </div>
      <button className="find-matches-button" onClick={findDailyMatches}>
        Find Daily Matches
      </button>

      <h2 className="subheader">Daily Match Suggestions:</h2>
      {matches.length > 0 ? (
        matches.map((match) => (
          <div className="match-card" key={match.id}>
            <h3>{match.name}</h3>
            <p>Age: {match.age}</p>
            <p>Location: {match.location}</p>
            <p>Interests: {match.interests.join(", ")}</p>
            <p>Compatibility Score: {calculateCompatibilityScore(match)}</p>
            <button className="like-button" onClick={() => handleLike(match)}>
              Like
            </button>
          </div>
        ))
      ) : (
        <p className="no-matches">No matches found.</p>
      )}
    </div>
  );
}

export default Matchmaking;
