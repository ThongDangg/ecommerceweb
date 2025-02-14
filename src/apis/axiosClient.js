import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 10000, // Optional: Set timeout for requests (in ms)
    headers: {
        'Content-Type': 'application/json' // Set common headers (optional)
    }
});

export default axiosClient;
