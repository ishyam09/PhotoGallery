/* eslint-disable prettier/prettier */
import axios from 'axios';

const API_KEY = 'Xk3v-HHcB-7c7exd6r7nnhIB7fjOHdXoDlQfCIXtQH0';
const BASE_URL = 'https://api.unsplash.com';

export const fetchPublicFeed = async () => {
    const response = await axios.get(`${BASE_URL}/photos`, {
        params: {
            client_id: API_KEY,
            per_page: 20, // Number of images to fetch
        },
    });

    return response.data;
};

export const searchPhotos = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
        params: {
            client_id: API_KEY,
            query: query,
            per_page: 20,
        },
    });

    return response.data.results;
};
