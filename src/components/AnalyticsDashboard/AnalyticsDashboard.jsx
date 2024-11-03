// src/components/AnalyticsDashboard.js

import React, { useState } from 'react';
import './AnalyticsDashboard.css';

const AnalyticsDashboard = () => {
    const [dashboardMetrics, setDashboardMetrics] = useState({
        matchSuccessRate: 75,
        userEngagement: 80,
        sharingStatistics: 60,
        userRetention: 90,
    });
    
    const [customMetrics, setCustomMetrics] = useState([]);
    const [newMetric, setNewMetric] = useState('');

    const handleAddMetric = (e) => {
        e.preventDefault();
        if (newMetric) {
            setCustomMetrics([...customMetrics, newMetric]);
            setNewMetric('');
        }
    };

    return (
        <div className="analytics-dashboard-container">
            <h1 className="header">Data Analytics Dashboard</h1>
            <div className="metrics-container">
                <div className="metric">
                    <h2>Match Success Rate</h2>
                    <p>{dashboardMetrics.matchSuccessRate}%</p>
                </div>
                <div className="metric">
                    <h2>User Engagement</h2>
                    <p>{dashboardMetrics.userEngagement}%</p>
                </div>
                <div className="metric">
                    <h2>Sharing Statistics</h2>
                    <p>{dashboardMetrics.sharingStatistics}%</p>
                </div>
                <div className="metric">
                    <h2>User Retention</h2>
                    <p>{dashboardMetrics.userRetention}%</p>
                </div>
            </div>
            <form className="custom-metric-form" onSubmit={handleAddMetric}>
                <input
                    type="text"
                    className="custom-metric-input"
                    placeholder="Add custom metric..."
                    value={newMetric}
                    onChange={(e) => setNewMetric(e.target.value)}
                    required
                />
                <button type="submit" className="add-metric-button">Add Metric</button>
            </form>
            <div className="custom-metrics-list">
                <h2>Custom Metrics</h2>
                {customMetrics.length > 0 ? (
                    <ul>
                        {customMetrics.map((metric, index) => (
                            <li key={index}>{metric}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No custom metrics added yet.</p>
                )}
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
