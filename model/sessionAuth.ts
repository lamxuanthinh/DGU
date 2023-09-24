export interface ISessionAuth {
    user: {
        userId: string;
    };
    tokens: {
        accessToken: string;
        refreshToken: string;
    };
}
