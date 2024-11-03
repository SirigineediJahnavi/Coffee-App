import React, { useState } from 'react';
import './Favorites.css';

const dummyProfiles = [
    { id: 1, name: "Alice", interests: ["Reading", "Traveling"] },
    { id: 2, name: "Bob", interests: ["Cooking", "Gaming"] },
    { id: 3, name: "Charlie", interests: ["Music", "Hiking"] },
    { id: 4, name: "Diana", interests: ["Yoga", "Traveling"] },
    { id: 5, name: "Eve", interests: ["Photography", "Cooking"] },
    // Add more dummy data as needed
];

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    
    const toggleFavorite = (profile) => {
        if (favorites.some(fav => fav.id === profile.id)) {
            // If already a favorite, remove it
            setFavorites(favorites.filter(fav => fav.id !== profile.id));
        } else {
            // Add to favorites
            setFavorites([...favorites, profile]);
        }
    };

    return (
        <div className="favorites-container">
            <h1 className="header">User Favorites</h1>
            <div className="profiles-list">
                {dummyProfiles.map(profile => (
                    <div key={profile.id} className="profile-card">
                        <h2>{profile.name}</h2>
                        <p>Interests: {profile.interests.join(', ')}</p>
                        <button
                            onClick={() => toggleFavorite(profile)}
                            className={`favorite-button ${favorites.some(fav => fav.id === profile.id) ? 'favorited' : ''}`}
                        >
                            {favorites.some(fav => fav.id === profile.id) ? 'Unfavorite' : 'Favorite'}
                        </button>
                    </div>
                ))}
            </div>
            {favorites.length > 0 && (
                <div className="favorites-list">
                    <h2>Your Favorites</h2>
                    {favorites.map(fav => (
                        <div key={fav.id} className="favorite-item">
                            <h3>{fav.name}</h3>
                            <p>Interests: {fav.interests.join(', ')}</p>
                            <button onClick={() => toggleFavorite(fav)} className="remove-favorite">
                                Remove Favorite
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
