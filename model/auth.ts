import {IApiResponse} from "@/model";

export interface ISignUpPayload {
    email: string;
    name: string;
    password: string;
}

export interface IVerifyEmailPayload {
    email: string;
}

export interface ISignInPayload {
    email: string;
    password?: string;
    token?: string;
}

export interface ISignUpApiResponse extends IApiResponse {
    metaData?: {
        emailSent: string;
    };
}

export interface ISignInApiResponse extends IApiResponse {
    metaData?: {
        user: {
            _id: string;
            email: string;
            avatar: string;
        };
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
    };
}

export interface IVerifyEmailApiResponse extends ISignUpApiResponse {
}

export type IConfigAuthType = {
    headers: {
        "x-api-client": string;
        authorization: string;
        "x-refresh-token": string;
    };
};

export interface IAuthorize {
    error?: string,
    ok?: boolean,
    status?: string
    url?: string
}