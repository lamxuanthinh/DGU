import { HEADER } from "@/utils/nameHeaders";
import { DataResponse, LoginPayload, SignUpPayload, VerifyEmailPayload } from "@/model/auth";
import axiosClient from "./axiosClient";

export const auth = {
    signUp: (payload: SignUpPayload) => {
        return axiosClient.post<DataResponse>("/signup", payload).then((res) => res.data);
    },

    verifyEmail: (payload: VerifyEmailPayload, token: String) => {
        if (token) {
            axiosClient.interceptors.request.use(
                (config) => {
                    config.headers["Content-Type"] = "application/json";
                    config.headers[HEADER.VERIFY_EMAIL_TOKEN] = token;
                    return config;
                },
                (error) => {
                    return Promise.reject(error);
                },
            );
        }
        return axiosClient.post<DataResponse>("/signup", payload).then((res) => res.data);
    },

    login: (payload: LoginPayload) => {
        return axiosClient.post<DataResponse>("/login", payload).then((res) => res.data);
    },

    logout: () => {
        return axiosClient.post("/logout").then((res) => res.data);
    },

    refreshToken: () => {
        return axiosClient.get("/refreshtoken").then((res) => res.data);
    },
};
