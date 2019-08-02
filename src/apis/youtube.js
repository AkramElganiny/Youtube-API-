import axios from 'axios';

const KEY = 'AIzaSyBi9RE6OPYvVHn5qBYQTTmniktxtsLVhak';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});