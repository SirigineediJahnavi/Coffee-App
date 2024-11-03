import React, { useState } from 'react';
import './ResourceLibrary.css';

const ResourceLibrary = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    // Sample resources data
    const resources = [
        { id: 1, title: 'Building Healthy Relationships', type: 'Article', link: '#' },
        { id: 2, title: 'Profile Optimization Tips', type: 'Tutorial', link: '#' },
        { id: 3, title: 'Understanding Relationship Dynamics', type: 'Article', link: '#' },
        { id: 4, title: 'Top Tools for Online Dating', type: 'Recommended Tools', link: '#' },
        { id: 5, title: 'Biographies of Notable Experts', type: 'Biography', link: '#' },
        { id: 6, title: 'Effective Communication Strategies', type: 'Article', link: '#' },
    ];

    // Filter resources based on search term
    const filteredResources = resources.filter(resource => 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="resource-library-container">
            <h1 className="header">Resource Library</h1>
            <input 
                type="text" 
                className="search-input" 
                placeholder="Search resources..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <div className="resource-list">
                {filteredResources.length === 0 ? (
                    <p>No resources found.</p>
                ) : (
                    filteredResources.map(resource => (
                        <div key={resource.id} className="resource-item">
                            <a href={resource.link} className="resource-link">
                                <h2>{resource.title}</h2>
                                <p>{resource.type}</p>
                            </a>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ResourceLibrary;
