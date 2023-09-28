import { IApiResponse } from "@/model";

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
            userId: string;
            avatar: string;
        };
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        expiresIn: string;
    };
}

export interface ILogoutApiResponse extends IApiResponse {
    metaData?: {
        logout: {
            acknowledged: boolean;
            deletedCount: number;
        };
    };
}

export interface IVerifyEmailApiResponse extends ISignUpApiResponse {}

export interface IRefreshTokenApiResponse extends IApiResponse {
    metaData?: {
        user: {
            userId: string;
            avatar: string;
        };
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        expiresIn: string;
    };
}

export type IConfigAuth = {
    headers: {
        "x-api-client": string;
        authorization: string;
    };
};

export type IConfigResfreshToken = {
    headers: {
        "x-api-client": string;
        "x-refresh-token": string;
    };
};

export interface IAuthorize {
    error?: string;
    ok?: boolean;
    status?: string;
    url?: string;
}
