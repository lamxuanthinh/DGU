import { HEADER } from "@/utils/nameHeaders";
import { DataResponse, LoginPayload, SignUpPayload, SignupResponse, VerifyEmailPayload } from "@/model/auth";
import axiosClient from "./axiosClient";

export const auth = {
    signUp: async (payload: SignUpPayload) => {
        const res = await axiosClient.post<SignupResponse>("/signup", payload);
        return res.data;
    },

    verifyEmail: async (payload: VerifyEmailPayload, token: String) => {
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
        const res = await axiosClient.post<DataResponse>("/verifysignup", payload);
        return res.data;
    },

    login: async (payload: LoginPayload) => {
        const res = await axiosClient.post<DataResponse>("/login", payload);
        return res.data;
    },

    logout: async () => {
        const res = await axiosClient.post("/logout");
        return res.data;
    },

    refreshToken: async () => {
        const res = await axiosClient.get("/refreshtoken");
        return res.data;
    },
};
