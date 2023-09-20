import axios, { AxiosInstance, AxiosResponse } from "axios";
// import { HEADER } from "@/utils/nameHeaders";


const axiosClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        // config.headers[HEADER.AUTHORIZATION] = `Bearer ${tokens.accessToken}`;
        // config.headers[HEADER.CLIENT_ID] = `Bearer ${tokens.refreshToken}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosClient.interceptors.response.use(
    (response: AxiosResponse<any>) => {
        return response;
    },
    async (error) => {
        return Promise.reject(error);
    },
);

export default axiosClient;
