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
    emailSent?: String;
    message?: string;
    userId?: string;
}

export interface SignupResponse {
    code: number;
    metaData: {
        emailSent?: string;
    };
}

