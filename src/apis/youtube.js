import axios from 'axios';

const KEY = "AIzaSyAIoLcVPITIHYojpzIl6jfijZalRxZCEeA";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY,
    }
})