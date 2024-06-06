const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';  // Base URL for TMDB images with width 500px

const searchMovie = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                query: query
            }
        });
        
        const results = response.data.results.map(movie => ({
            ...movie,
            poster_url: `${IMAGE_BASE_URL}${movie.poster_path}`
        }));
        return results;
    } catch (error) {
        console.error(error);
        return [];
    }
    
};

module.exports = { searchMovie };
