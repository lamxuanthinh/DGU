export interface signUpPayload {
    email: String;
    name: String;
    password: String;
}

export interface loginPayload {
    email: String;
    password: String;
}

export interface dataResponse {
    message: any;
}
