import axios from "axios";
import { auth } from "./auth";

const axiosClient = axios.create({
    baseURL: process.env.BASE_URL,
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
    async (response: any) => {
        return response.data;
    },
    async (error) => {
        let refreshTokenRequest = null;
        const response = error.response;
        const originalRequest = error.config;
        if (response.status === 401 && response.data.message === "TokenExpired" && !originalRequest._retry) {
            originalRequest._retry = true;
            refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : auth.refreshToken();
            try {
                const holdRefreshToken = await refreshTokenRequest;
                refreshTokenRequest = null;
            } catch (error) {
                console.log("::[ERROR REFRESH TOKEN]::", error);
            }
            return axiosClient(originalRequest);
        }
        return Promise.reject(error);
    },
);

export default axiosClient;
