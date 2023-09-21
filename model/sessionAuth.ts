export interface SessionAuthType {
    user: {
        _id: string;
    };
    tokens: {
        accessToken: string;
        refreshToken: string;
    };
}
