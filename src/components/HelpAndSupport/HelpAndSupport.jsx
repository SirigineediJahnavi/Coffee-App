// src/components/HelpAndSupport.js

import React, { useState } from 'react';
import './HelpAndSupport.css'; // Import your CSS file for styling

const HelpAndSupport = () => {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        // Implement functionality to send feedback to your server or API
        setSubmitted(true);
        setFeedback('');
        
        // Optionally reset submission status after a timeout
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="help-and-support-container">
            <h1 className="header">Help and Support</h1>

            <div className="faq-section">
                <h2>FAQs</h2>
                <ul>
                    <li><strong>Q:</strong> How do I reset my password?</li>
                    <li><strong>A:</strong> You can reset your password from the login page by clicking on "Forgot Password".</li>
                    <li><strong>Q:</strong> How do I contact support?</li>
                    <li><strong>A:</strong> You can contact support through the contact form below.</li>
                </ul>
            </div>

            <div className="tutorial-section">
                <h2>Tutorials</h2>
                <p>Check out our tutorials to help you get started:</p>
                <ul>
                    <li><a href="#tutorial1">Getting Started</a></li>
                    <li><a href="#tutorial2">Profile Optimization</a></li>
                    <li><a href="#tutorial3">Using Chat Features</a></li>
                </ul>
            </div>

            <div className="feedback-section">
                <h2>Contact Support</h2>
                <form onSubmit={handleFeedbackSubmit}>
                    <textarea
                        placeholder="Please enter your feedback or issue here..."
                        value={feedback}
                        onChange={handleFeedbackChange}
                        required
                    />
                    <button type="submit">Submit Feedback</button>
                </form>
                {submitted && <p className="success-message">Thank you for your feedback!</p>}
            </div>
        </div>
    );
};

export default HelpAndSupport;
