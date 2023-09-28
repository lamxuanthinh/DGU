import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { authServices } from "@/apis";
import { ISignInPayload } from "@/model";

const authOption: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials): Promise<any> {
                const { email, password, token } = credentials as ISignInPayload;

                if (token && email) {
                    const payload = { email };
                    const { code, metaData } = (await authServices.verifyEmail(payload, token)) || {};
                    if (code !== 200) return null;
                    return metaData;
                }

                const { code, metaData } = (await authServices.signIn({ email, password })) || {};
                if (code !== 200) return null;
                return metaData;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) return { ...token, ...user };
            if (new Date().getTime() < token.expiresIn) return token;
            return await handleRefreshToken(token);
        },
        async session({ token, session }: any) {
            session.user = token.user;
            session.tokens = token.tokens;
            return session;
        },
    },
    pages: {
        signIn: "/signin",
    },
};

const handleRefreshToken = async (token: JWT): Promise<JWT> => {
    const { metaData } =
        (await authServices.refreshToken({
            headers: {
                "x-api-client": `${token.user.userId}`,
                "x-refresh-token": `Refresh ${token.tokens.refreshToken}`,
            },
        })) || {};
    if (!metaData) return token;

    const { user, tokens, expiresIn } = metaData;
    return {
        ...token,
        user,
        tokens,
        expiresIn,
    };
};

export default NextAuth(authOption);
