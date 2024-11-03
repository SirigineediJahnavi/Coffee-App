import React, { useState } from 'react';
import './ShareProfile.css';

const ShareProfile = () => {
    const [customMessage, setCustomMessage] = useState("");
    const [shareFormat, setShareFormat] = useState("default"); // New state for sharing format
    const [shareLink] = useState("https://example.com/user-profile");

    const handleShare = (platform) => {
        let shareUrl = "";

        if (platform === "facebook") {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}&quote=${encodeURIComponent(customMessage)}`;
        } else if (platform === "twitter") {
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareLink)}&text=${encodeURIComponent(customMessage)}`;
        } else if (platform === "whatsapp") {
            shareUrl = `https://wa.me/?text=${encodeURIComponent(customMessage + ' ' + shareLink)}`;
        }

        window.open(shareUrl, '_blank');
    };

    return (
        <div className="share-profile-container">
            <h1 className="header">Share Your Profile</h1>
            <textarea
                className="custom-message-input"
                placeholder="Add a personal note..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                rows="4"
            />
            <div className="format-selection">
                <label className="format-label">Select Format:</label>
                <select 
                    className="format-dropdown" 
                    value={shareFormat} 
                    onChange={(e) => setShareFormat(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="detailed">Detailed</option>
                    <option value="simple">Simple</option>
                </select>
            </div>
            <div className="share-buttons">
                <button onClick={() => handleShare("facebook")} className="share-button">Share on Facebook</button>
                <button onClick={() => handleShare("twitter")} className="share-button">Share on Twitter</button>
                <button onClick={() => handleShare("whatsapp")} className="share-button">Share on WhatsApp</button>
            </div>
        </div>
    );
};

export default ShareProfile;
