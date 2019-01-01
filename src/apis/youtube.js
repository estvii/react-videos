import axios from 'axios';

const KEY = 'AIzaSyCUoTesp0_-ingujnNi9smYzmx33S_TOGU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});