import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://friba-score.firebaseio.com/games.json'
});

export default instance;