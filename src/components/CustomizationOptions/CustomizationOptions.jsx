// src/components/CustomizationOptions.js

import React, { useState } from 'react';
import './CustomizationOptions.css';

const CustomizationOptions = () => {
    const [username, setUsername] = useState('');
    const [theme, setTheme] = useState('light');
    const [preferences, setPreferences] = useState({
        receiveNotifications: true,
        enableDarkMode: false,
    });

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const handlePreferencesChange = (e) => {
        const { name, checked } = e.target;
        setPreferences((prev) => ({ ...prev, [name]: checked }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        alert('Settings saved!');
        // Implement further functionality for saving settings
    };

    return (
        <div className="customization-options-container">
            <h1 className="header">Customization Options</h1>
            <form className="customization-form" onSubmit={handleSave}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="theme">Select Theme:</label>
                    <select id="theme" value={theme} onChange={handleThemeChange}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="colorful">Colorful</option>
                    </select>
                </div>

                <div className="form-group">
                    <h2>Preferences:</h2>
                    <label>
                        <input
                            type="checkbox"
                            name="receiveNotifications"
                            checked={preferences.receiveNotifications}
                            onChange={handlePreferencesChange}
                        />
                        Receive Notifications
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="enableDarkMode"
                            checked={preferences.enableDarkMode}
                            onChange={handlePreferencesChange}
                        />
                        Enable Dark Mode
                    </label>
                </div>

                <button type="submit" className="save-button">Save Changes</button>
            </form>
        </div>
    );
};

export default CustomizationOptions;
