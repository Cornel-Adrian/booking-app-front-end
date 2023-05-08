import axios from 'axios';

const axiosClient = axios.create();

// Replace this with our own backend base URL
axiosClient.defaults.baseURL = 'http://localhost:3000/';

axiosClient.defaults.headers.common['Accept'] = 'application/json';
axiosClient.defaults.headers.common['Content-Type'] = 'application/json';

// Adding Authorization header for all requests

axiosClient.interceptors.request.use(
    (config: { headers: any; }) => {
        const token = localStorage.getItem('_auth');
        if (token) {
            // Configure this as per your backend requirements
            config.headers!['Authorization'] = token;
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

export default axiosClient;
