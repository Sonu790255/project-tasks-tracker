import axios from 'axios';

const api = axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
                'Content-Type': 'application/json'
        }
});

// Log requests for debugging
api.interceptors.request.use(config => {
        console.log('Making request to:', config.url);
        console.log('Request data:', config.data);
        return config;
});

// Log responses for debugging
api.interceptors.response.use(
        response => {
                console.log('API Response:', response.data);
                return response;
        },
        error => {
                console.error('API Error:', {
                        status: error.response?.status,
                        data: error.response?.data,
                        message: error.message
                });
                return Promise.reject(error);
        }
);

export default api; 