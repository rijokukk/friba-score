import axios from 'axios';

// Axios instance for easier usage
const instance = axios.create({
    baseURL: 'https://friba-score.firebaseio.com/games.json'
});

export default instance;