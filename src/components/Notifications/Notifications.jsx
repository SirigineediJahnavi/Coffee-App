import React, { useState } from 'react';
import './Notifications.css';

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'You have a new match!', type: 'match', read: false },
        { id: 2, message: 'New message from User A', type: 'message', read: false },
        { id: 3, message: 'Profile update available', type: 'update', read: false },
        { id: 4, message: 'System maintenance scheduled for 2 AM', type: 'system', read: false },
    ]);

    const [preferences, setPreferences] = useState({
        matchAlerts: true,
        messageAlerts: true,
        updateAlerts: true,
        systemAlerts: true,
    });

    const togglePreference = (type) => {
        setPreferences((prev) => ({ ...prev, [type]: !prev[type] }));
    };

    const markAsRead = (id) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
    };

    return (
        <div className="notifications-container">
            <h1 className="header">Notifications</h1>
            <div className="notification-preferences">
                <h2>Notification Preferences</h2>
                <div className="preference-item">
                    <label>
                        <input
                            type="checkbox"
                            checked={preferences.matchAlerts}
                            onChange={() => togglePreference('matchAlerts')}
                        />
                        New Match Alerts
                    </label>
                </div>
                <div className="preference-item">
                    <label>
                        <input
                            type="checkbox"
                            checked={preferences.messageAlerts}
                            onChange={() => togglePreference('messageAlerts')}
                        />
                        Message Alerts
                    </label>
                </div>
                <div className="preference-item">
                    <label>
                        <input
                            type="checkbox"
                            checked={preferences.updateAlerts}
                            onChange={() => togglePreference('updateAlerts')}
                        />
                        Update Alerts
                    </label>
                </div>
                <div className="preference-item">
                    <label>
                        <input
                            type="checkbox"
                            checked={preferences.systemAlerts}
                            onChange={() => togglePreference('systemAlerts')}
                        />
                        System Alerts
                    </label>
                </div>
            </div>
            <div className="notification-list">
                <h2>Your Notifications</h2>
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                            onClick={() => markAsRead(notification.id)}
                        >
                            {notification.message}
                        </div>
                    ))
                ) : (
                    <p>No notifications available.</p>
                )}
            </div>
        </div>
    );
};

export default Notifications;
