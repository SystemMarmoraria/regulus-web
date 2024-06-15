import axios from 'axios';


axios.interceptors.request.use(config => 
    {
        config.baseURL = 'https://localhost:7229/'; 
        const token = localStorage.getItem('accessToken');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }, 
    error => {
        return Promise.reject(error);
    });
  
  export default axios;
