export interface ISessionAuth {
    user: {
        userId: string;
        avatar: string;
    };
    tokens: {
        accessToken: string;
        refreshToken: string;
    };
    expires: string;
}
