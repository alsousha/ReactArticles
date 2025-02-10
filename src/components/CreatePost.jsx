import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/CreatePost.css';

function CreatePost() {
    const [msg, setMsg] = useState('');
    const [newPost, setNewPost] = useState({
        title: '',
        author: '',
        content: '',
        image: '',
    });
    const [imageFile, setImageFile] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle changes to form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const cleanString = (str) => {
        return str.trim().replace(/\s+/g, ' ');
    };

    const createPost = async (postToSend) => {
        try {
            const formData = new FormData();
            formData.append('title', postToSend.title);
            formData.append('author', postToSend.author);
            formData.append('content', postToSend.content);
            if (imageFile) {
                formData.append('image', imageFile);
            }
            
            const res = await axios.post('/post/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            console.log('Post created:', res.data);
            setMsg('Post was created');
            setTimeout(() => {
                setMsg('');
                navigate('/');
            }, 2000);
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to create post. Try again.');
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Cleaning data from extra spaces
        const cleanedPost = {
            title: cleanString(newPost.title),
            author: cleanString(newPost.author),
            content: cleanString(newPost.content)
        };
        
        // Check if required fields are filled
        if (!cleanedPost.title || !cleanedPost.author || !cleanedPost.content) {
            setError('Please fill in all the required fields.');
            return;
        }
        if (cleanedPost.title.length < 3) {
            setError('The title length must be more than 3 characters.');
            return;
        }
        createPost(cleanedPost);
    };

    return (
        <div className="main">
            <div className="create-post">
                <div className="msg">{msg}</div>
                <h2>Create a New Post</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={newPost.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Author:</label>
                        <input
                            type="text"
                            name="author"
                            value={newPost.author}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Content:</label>
                        <textarea
                            name="content"
                            value={newPost.content}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Upload Image:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button type="submit">Create Post</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;
