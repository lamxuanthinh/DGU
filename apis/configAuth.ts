import { IConfigAuth, ISessionAuth } from "@/model";

export const configAuth = (session: ISessionAuth): IConfigAuth => {
    const { user, tokens } = session;

    return {
        headers: {
            "x-api-client": `${user.userId}`,
            "authorization": `Bearer ${tokens.accessToken}`,
        },
    };
};
