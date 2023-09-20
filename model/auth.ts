export interface SignUpPayload {
    email: String;
    name: String;
    password: String;
}

export interface VerifyEmailPayload {
    email: String;
}

export interface LoginPayload {
    email: String;
    password: String;
}

export interface DataResponse {
    metaData: any;
    code: number;
    emailSent?: string;
    message?: string;
    userId?: string;
    body?: any;
}

export interface SignupResponse {
    code: number;
    metaData: {
        emailSent?: string;
    };
}

