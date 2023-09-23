import NextAuth, { NextAuthOptions } from "next-auth";
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
            return token;
        },
        async session({ token, session }: any) {
            session.user = token.user;
            session.tokens = token.tokens;
            return session;
        },
    },
};

export default NextAuth(authOption);
