import {
    IVerifyEmailApiResponse,
    ISignInPayload,
    ISignUpPayload,
    ISignUpApiResponse,
    IVerifyEmailPayload,
    ISignInApiResponse,
    IConfigAuth,
    IConfigResfreshToken,
    IRefreshTokenApiResponse,
    ILogoutApiResponse,
} from "@/model";
import axiosClient from "./axiosClient";
import { AxiosRequestConfig } from "axios";

export const authServices = {
    signUp: async (payload: ISignUpPayload): Promise<ISignUpApiResponse> => {
        return axiosClient.post("/signup", payload);
    },

    verifyEmail: async (payload: IVerifyEmailPayload, token: String): Promise<IVerifyEmailApiResponse> => {
        const config: AxiosRequestConfig = {
            headers: {
                "verify-email-token": `${token}`,
            },
        };
        return axiosClient.post("/verifysignup", payload, config);
    },

    signIn: async (payload: ISignInPayload): Promise<ISignInApiResponse> => {
        return await axiosClient.post("/signin", payload);
    },

    logout: async (config: IConfigAuth): Promise<ILogoutApiResponse> => {
        return axiosClient.get("/logout", config);
    },

    refreshToken: async (config: IConfigResfreshToken): Promise<IRefreshTokenApiResponse> => {
        return axiosClient.get("/refreshtoken", config);
    },
};
