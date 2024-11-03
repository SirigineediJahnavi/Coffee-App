import React, { useState, useEffect } from 'react';
import './DailyRecommendations.css';

const DailyRecommendations = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [preferences, setPreferences] = useState({
        frequency: 'daily', // Default frequency
        receiveNotifications: true, // Default notification preference
    });

    useEffect(() => {
        // Simulate fetching daily recommendations
        const fetchRecommendations = () => {
            // Mock data for recommendations
            const mockData = [
                { id: 1, name: 'User A', age: 25, interests: ['Music', 'Travel'] },
                { id: 2, name: 'User B', age: 30, interests: ['Art', 'Cooking'] },
                { id: 3, name: 'User C', age: 28, interests: ['Sports', 'Reading'] },
            ];
            setRecommendations(mockData);
        };

        fetchRecommendations();
    }, []);

    const handlePreferenceChange = (e) => {
        const { name, value } = e.target;
        setPreferences({ ...preferences, [name]: value });
    };

    const toggleNotifications = () => {
        setPreferences({ ...preferences, receiveNotifications: !preferences.receiveNotifications });
    };

    return (
        <div className="daily-recommendations-container">
            <h1 className="header">Daily Recommendations</h1>
            <div className="preferences">
                <label>
                    Frequency:
                    <select
                        name="frequency"
                        value={preferences.frequency}
                        onChange={handlePreferenceChange}
                        className="preference-select"
                    >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                    </select>
                </label>
                <div className="notification-toggle">
                    <label>
                        <input
                            type="checkbox"
                            checked={preferences.receiveNotifications}
                            onChange={toggleNotifications}
                        />
                        Receive Notifications
                    </label>
                </div>
            </div>
            <div className="recommendation-list">
                {recommendations.length > 0 ? (
                    recommendations.map((user) => (
                        <div key={user.id} className="recommendation-item">
                            <h2>{user.name}, {user.age}</h2>
                            <p>Interests: {user.interests.join(', ')}</p>
                        </div>
                    ))
                ) : (
                    <p>No recommendations available at this time.</p>
                )}
            </div>
        </div>
    );
};

export default DailyRecommendations;
