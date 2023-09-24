import {
    IVerifyEmailApiResponse,
    ISignInPayload,
    ISignUpPayload,
    ISignUpApiResponse,
    IVerifyEmailPayload,
    ISignInApiResponse
} from "@/model";
import axiosClient from "./axiosClient";
import {AxiosRequestConfig} from "axios";


export const authServices = {
    signUp: async (payload: ISignUpPayload): Promise<ISignUpApiResponse> => {
        return axiosClient.post("/signup", payload)
    },

    verifyEmail: async (payload: IVerifyEmailPayload, token: String): Promise<IVerifyEmailApiResponse>=> {
        const config: AxiosRequestConfig = {
            headers: {
                "verify-email-token": `${token}`
            }
        }
        return axiosClient.post("/verifysignup", payload, config)
    },

    signIn: async (payload: ISignInPayload): Promise<ISignInApiResponse> => {
        return axiosClient.post("/login", payload)
    },

    logout: async () => {
        return axiosClient.post("/logout")
    },

    refreshToken: async () => {
        return axiosClient.get("/refreshtoken")
    },
};
