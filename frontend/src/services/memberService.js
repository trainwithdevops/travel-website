import axios from 'axios';

const API_URL = '/api/members/';

const getMembers = async (filters) => {
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
};

export default {
    getMembers,
};
