import axios from "axios";

const axiosUpload = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "x-apikey": process.env.API_KEY_SCAN_VIRUS,
    },
});

// Add a request interceptor
axiosUpload.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },

    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosUpload.interceptors.response.use(
    function (response) {
        return response.data;
    },

    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosUpload;








