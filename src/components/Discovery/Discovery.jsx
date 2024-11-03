import React, { useState } from 'react';
import './Discovery.css';

const profilesData = [
    { id: 1, name: "Alice", age: 25, location: "New York", interests: ["Reading", "Traveling"], compatibility: 90 },
    { id: 2, name: "Bob", age: 30, location: "San Francisco", interests: ["Cooking", "Gaming"], compatibility: 80 },
    { id: 3, name: "Charlie", age: 28, location: "Chicago", interests: ["Music", "Hiking"], compatibility: 95 },
    { id: 4, name: "Diana", age: 22, location: "Los Angeles", interests: ["Yoga", "Traveling"], compatibility: 85 },
    // Add more profiles as needed
];

const Discovery = () => {
    const [filters, setFilters] = useState({
        age: '',
        location: '',
        interests: '',
    });
    const [sortBy, setSortBy] = useState('compatibility');
    const [filteredProfiles, setFilteredProfiles] = useState(profilesData);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const applyFilters = () => {
        let updatedProfiles = profilesData;

        // Apply age filter
        if (filters.age) {
            updatedProfiles = updatedProfiles.filter(profile => profile.age === Number(filters.age));
        }

        // Apply location filter
        if (filters.location) {
            updatedProfiles = updatedProfiles.filter(profile => profile.location.toLowerCase() === filters.location.toLowerCase());
        }

        // Apply interests filter
        if (filters.interests) {
            updatedProfiles = updatedProfiles.filter(profile => profile.interests.includes(filters.interests));
        }

        // Sort profiles
        updatedProfiles.sort((a, b) => {
            if (sortBy === 'compatibility') {
                return b.compatibility - a.compatibility; // Descending order
            }
            return a[sortBy] > b[sortBy] ? 1 : -1; // Ascending order
        });

        setFilteredProfiles(updatedProfiles);
    };

    return (
        <div className="discovery-container">
            <h1 className="header">Discovery</h1>

            <div className="filters-container">
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={filters.age}
                    onChange={handleFilterChange}
                    className="filter-input"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="filter-input"
                />
                <input
                    type="text"
                    name="interests"
                    placeholder="Interests (comma separated)"
                    value={filters.interests}
                    onChange={handleFilterChange}
                    className="filter-input"
                />
                <select name="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select">
                    <option value="compatibility">Sort by Compatibility</option>
                    <option value="age">Sort by Age</option>
                    <option value="name">Sort by Name</option>
                </select>
                <button onClick={applyFilters} className="filter-button">Apply Filters</button>
            </div>

            <div className="profiles-container">
                {filteredProfiles.map(profile => (
                    <div className="profile-card" key={profile.id}>
                        <h2>{profile.name}</h2>
                        <p>Age: {profile.age}</p>
                        <p>Location: {profile.location}</p>
                        <p>Interests: {profile.interests.join(', ')}</p>
                        <p>Compatibility: {profile.compatibility}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Discovery;
