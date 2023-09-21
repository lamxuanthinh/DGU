import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginPayload } from "@/model";
import { auth } from "@/apis/auth";

const authOption: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials): Promise<any> {
                const { email, password } = credentials as LoginPayload;

                const { code, metaData } = (await auth.login({ email, password })) || {};
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
// export { handler as POST, handler as GET };
