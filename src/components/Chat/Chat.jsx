import React, { useState, useEffect } from "react";
import "./Chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [notification, setNotification] = useState("");
  const [fileName, setFileName] = useState("No file chosen");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "You",
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
        read: false,
        type: "text"
      };
      setMessages((prevMessages) => [...prevMessages, message]);
      setNewMessage("");
      updateNotification("Message sent!");
    }
  };

  const handleSendImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const message = {
          id: messages.length + 1,
          sender: "You",
          text: reader.result,
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          type: "image"
        };
        setMessages((prevMessages) => [...prevMessages, message]);
        updateNotification("Image sent!");
        setFileName(file.name); // Set the chosen file name
      };
      reader.readAsDataURL(file);
    } else {
      setFileName("No file chosen"); // Reset file name if no file is chosen
    }
  };

  const updateNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const incomingMessage = {
        id: messages.length + 1,
        sender: "User1",
        text: "New message from User1!",
        timestamp: new Date().toLocaleTimeString(),
        read: false,
        type: "text"
      };
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
      updateNotification("New message received!");
    }, 10000); // Every 10 seconds for demo

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="chat-container">
      <h1 className="header">Chat</h1>
      {notification && <div className="notification">{notification}</div>}
      <div className="messages-container">
        {messages.map((message) => (
          <div className={`message ${message.sender === "You" ? "sent" : "received"}`} key={message.id}>
            <div className="message-content">
              {message.type === "text" ? (
                <p>{message.text}</p>
              ) : (
                <img src={message.text} alt="sent" className="sent-image" />
              )}
              <span className="timestamp">{message.timestamp}</span>
            </div>
            <div className="read-receipt">{message.sender === "You" ? (message.read ? "✓✓" : "✓") : ""}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleSendImage}
          className="file-input"
          id="file-input" // Add an id to associate the label
        />
        <label htmlFor="file-input" className="file-label">Choose File</label> {/* Custom label for file input */}
        <span className="no-file-message">{fileName}</span> {/* Display chosen file name or message */}
        <button className="send-button" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
