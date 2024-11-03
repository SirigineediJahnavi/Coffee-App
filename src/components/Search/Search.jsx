import React, { useState } from 'react';
import './Search.css';

const dummyData = [
    { id: 1, name: "Alice", interests: ["Reading", "Traveling"] },
    { id: 2, name: "Bob", interests: ["Cooking", "Gaming"] },
    { id: 3, name: "Charlie", interests: ["Music", "Hiking"] },
    { id: 4, name: "Diana", interests: ["Yoga", "Traveling"] },
    { id: 5, name: "Eve", interests: ["Photography", "Cooking"] },
    // Add more dummy data as needed
];

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [recentSearches, setRecentSearches] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);

        // Auto-suggest logic
        if (value) {
            const filteredSuggestions = dummyData.filter(profile =>
                profile.name.toLowerCase().includes(value.toLowerCase()) ||
                profile.interests.some(interest => interest.toLowerCase().includes(value.toLowerCase()))
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSearch = (profile) => {
        // Add to recent searches if not already present
        if (!recentSearches.includes(profile.name)) {
            setRecentSearches([...recentSearches, profile.name]);
        }
        setSearchTerm(profile.name);
        setSuggestions([]);
    };

    const handleRecentSearch = (term) => {
        setSearchTerm(term);
        setSuggestions([]);
    };

    return (
        <div className="search-container">
            <h1 className="header">Search Profiles</h1>
            <input
                type="text"
                placeholder="Search by name or interest..."
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
            />
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map(profile => (
                        <li key={profile.id} onClick={() => handleSearch(profile)} className="suggestion-item">
                            {profile.name} - {profile.interests.join(', ')}
                        </li>
                    ))}
                </ul>
            )}
            {recentSearches.length > 0 && (
                <div className="recent-searches">
                    <h2>Recent Searches</h2>
                    <ul className="recent-searches-list">
                        {recentSearches.map((term, index) => (
                            <li key={index} onClick={() => handleRecentSearch(term)} className="recent-search-item">
                                {term}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;
