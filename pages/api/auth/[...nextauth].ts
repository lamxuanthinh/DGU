import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { authServices } from "@/apis";
import { ISignInPayload } from "@/model";

const authOption: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials): Promise<any> {
                const { email, password, token } = credentials as ISignInPayload;
                try {
                    if (token && email) {
                        const payload = { email };
                        const { code, metaData } = await authServices.verifyEmail(payload, token);
                        if (code !== 200) return null;
                        return metaData;
                    }
                    //@ts-ignore
                    const { code, metaData, stack } = await authServices.signIn({ email, password });
                    console.log(":::CODE:::", code);
                    console.log(":::STACK:::", stack);
                    console.log(":::DATA:::", metaData);

                    if (code !== 200) return null;
                    return metaData;
                } catch (error) {
                    console.log("Error during authentication API call :", error);
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) return { ...token, ...user };
            if (new Date().getTime() < token.expiresIn) {
                return token;
            }

            const newToken = await handleRefreshToken(token);
            if (!newToken) return null;
            return newToken;
        },
        async session({ token, session }: any) {
            session.user = token.user;
            session.tokens = token.tokens;
            session.expires = token.expiresIn;
            return session;
        },
    },
    pages: {
        signIn: "/signin",
    },
};

const handleRefreshToken = async (token: JWT) => {
    try {
        const { code, metaData } = await authServices.refreshToken({
            headers: {
                "x-api-client": `${token.user.userId}`,
                "x-refresh-token": `Refresh ${token.tokens.refreshToken}`,
            },
        });
        if (code !== 200) return null;

        const { user, tokens, expiresIn } = metaData || {};
        return {
            ...token,
            user,
            tokens,
            expiresIn,
        };
    } catch (error) {
        console.log("Error during refresh token API call :", error);
    }
};

export default NextAuth(authOption);
