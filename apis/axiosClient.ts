import axios, { AxiosInstance, AxiosResponse } from "axios";

const axiosClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
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
    (response: AxiosResponse<any>) => {
        return response;
    },
    async (error) => {
        // let refreshTokenRequest = null;
        const response = error.response;
        console.log("::ERROR::", error);
        console.log("::STATUS::", response.status);
        console.log("::MESSAGE::", response.data.message);
        // const originalRequest = error.config;
        // console.log("::check::", !originalRequest._retry);
        // if (response.status === 401 && response.data.message === "TokenExpired" && !originalRequest._retry) {
        //     originalRequest._retry = true;
        //     // refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : auth.refreshToken();
        //     try {
        //         // const holdRefreshToken = await refreshTokenRequest;
        //         const holdRefreshToken = await auth.refreshToken();
        //         console.log("holdRefreshToken", holdRefreshToken);
        //         // refreshTokenRequest = null;
        //     } catch (error) {
        //         console.log("::[ERROR REFRESH TOKEN]::", error);
        //     }
        //     return axiosClient(originalRequest);
        // }
        return Promise.reject(error);
    },
);

export default axiosClient;
