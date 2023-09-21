import { ConfigAuthType, SessionAuthType } from "@/model";

export const configAuth = (session: SessionAuthType): ConfigAuthType => {
    const { user, tokens } = session;
    const config = {
        headers: {
            "x-api-client": `${user._id}`,
            authorization: `Bearer ${tokens.accessToken}`,
            "x-refresh-token": `Bearer ${tokens.refreshToken}`,
        },
    };
    return config;
};
