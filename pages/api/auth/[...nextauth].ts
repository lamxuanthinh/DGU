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
                console.log("credentials", credentials);
                const { email, password } = credentials as LoginPayload;

                const holdLoginResponse = await auth.login({ email, password });
                console.log("holdLoginResponse", holdLoginResponse);
                if (holdLoginResponse.code !== 200) return null;
                return holdLoginResponse.metaData;
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
