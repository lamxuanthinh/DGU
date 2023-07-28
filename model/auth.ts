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
    message?: string;
    emailSent?: String;
}
