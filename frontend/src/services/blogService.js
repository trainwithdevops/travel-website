import axios from 'axios';

const API_URL = '/api/blogs/';

const createBlog = async (blogData, token) => {
    const response = await axios.post(API_URL, blogData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export default {
    createBlog,
};
