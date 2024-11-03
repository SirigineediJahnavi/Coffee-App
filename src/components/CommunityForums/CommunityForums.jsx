import React, { useState } from 'react';
import './CommunityForums.css';

const CommunityForums = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'How to handle relationship conflicts?', content: 'I need advice on resolving conflicts in a relationship...', author: 'User1', reported: false },
        { id: 2, title: 'Tips for online dating', content: 'What are some good tips for online dating?', author: 'User2', reported: false },
    ]);
    const [newPost, setNewPost] = useState({ title: '', content: '' });

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (newPost.title && newPost.content) {
            setPosts([...posts, { id: posts.length + 1, ...newPost, author: 'CurrentUser', reported: false }]);
            setNewPost({ title: '', content: '' });
        }
    };

    const handleReportPost = (id) => {
        setPosts(posts.map(post => post.id === id ? { ...post, reported: !post.reported } : post));
    };

    const handleDeletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    return (
        <div className="community-forums-container">
            <h1 className="header">Community Forums</h1>
            <form className="post-form" onSubmit={handlePostSubmit}>
                <input
                    type="text"
                    className="post-title-input"
                    placeholder="Title of your post..."
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    required
                />
                <textarea
                    className="post-content-input"
                    placeholder="What do you want to share?"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    required
                />
                <button type="submit" className="submit-button">Submit Post</button>
            </form>
            <div className="posts-list">
                {posts.map(post => (
                    <div key={post.id} className="post-item">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <small>Posted by: {post.author}</small>
                        <div className="post-actions">
                            <button onClick={() => handleReportPost(post.id)} className="report-button">
                                {post.reported ? 'Unreport' : 'Report'}
                            </button>
                            <button onClick={() => handleDeletePost(post.id)} className="delete-button">Delete</button>
                        </div>
                        {post.reported && <p className="reported-text">This post has been reported.</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunityForums;
