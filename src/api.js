import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cdn.rawgit.com/akabab/superhero-api',
});

export default api;