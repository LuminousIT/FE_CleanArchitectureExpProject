import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? 'https://apis.touchandpay.me/tojue/' : '';

const axiosInstance = axios.create({
    baseURL: baseURL,
});

axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');

    if (token) {
        config.headers = {
            Authorization: `bearer ${token}`,
            'Content-Type': 'Application/json',
        };
    }
    return config;
});

axiosInstance.interceptors.response.use((response) => {
    //   trigger an action when a particular response comes in.

    return response;
});

export default axiosInstance;
