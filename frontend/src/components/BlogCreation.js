import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import blogService from '../services/blogService';
import { useHistory } from 'react-router-dom';

const BlogCreation = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { user } = useSelector((state) => state.auth);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await blogService.createBlog({ title, content }, user.token);
            history.push('/blog');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Create Blog</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default BlogCreation;
