import {IConfigAuthType, ISessionAuth} from "@/model";

export const configAuth = (session: ISessionAuth): IConfigAuthType => {
    const { user, tokens } = session;
    return {
        headers: {
            "x-api-client": `${user._id}`,
            "authorization": `Bearer ${tokens.accessToken}`,
            "x-refresh-token": `Bearer ${tokens.refreshToken}`,
        },
    };
};
