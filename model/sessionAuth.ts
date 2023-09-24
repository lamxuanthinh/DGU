export interface ISessionAuth {
    user: {
        _id: string;
    };
    tokens: {
        accessToken: string;
        refreshToken: string;
    };
}
