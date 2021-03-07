import axios from 'axios';

const KEY = 'AIzaSyBrBeUN-PuPSHKAJPkUxHR4PUYhi6s2ljg';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults: 5,
        type:'video',
        key:KEY
    }
});
