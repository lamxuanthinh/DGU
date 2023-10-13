import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
    baseURL: "https://services.dgu.io.vn/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosClient.interceptors.response.use(
    async (response) => {
        return response.data;
    },
    async (error) => {
        return error.response.data;
    },
);

export default axiosClient;
