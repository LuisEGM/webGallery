import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT,
    headers: {
        "Content-Type": "application/json"
    }
})
