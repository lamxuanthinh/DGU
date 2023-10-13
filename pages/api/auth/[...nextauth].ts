import NextAuth, { NextAuthOptions } from "next-auth";
// import { JWT } from "next-auth/jwt";
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
                console.log("::EMAIL::", email);
                console.log("::PASSWORD::", password);
                console.log("::TOKEN::", token);

                try {
                    if (token && email) {
                        const payload = { email };
                        const { code, metaData } = await authServices.verifyEmail(payload, token);
                        if (code !== 200) return null;
                        return metaData;
                    }
                    const resFetch = await fetch("https://services.dgu.io.vn/api/v1/signin", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email, password }),
                    });
                    const resData = await resFetch.json();
                    console.log(":::resFetch:::", resData);
                    const res = await authServices.signIn({ email, password });
                    console.log(":::RES:::", res);

                    const check = {
                        user: {
                            userId: "65180cbaf043610beed8f8b6",
                            avatar: "https://res.cloudinary.com/dqa5ffq01/image/upload/v1692901773/Public/Avatar%20Default%20User/male.png",
                        },
                        tokens: {
                            accessToken:
                                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE4MGNiYWYwNDM2MTBiZWVkOGY4YjYiLCJhdmF0YXIiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kcWE1ZmZxMDEvaW1hZ2UvdXBsb2FkL3YxNjkyOTAxNzczL1B1YmxpYy9BdmF0YXIlMjBEZWZhdWx0JTIwVXNlci9tYWxlLnBuZyIsImlhdCI6MTY5NzE5Nzg4NiwiZXhwIjoxNjk3MjE1ODg2fQ.LzR7v4gVBLuc1ir3NNtxseI-HP0sQ3lTlXNCjD1_J8k",
                            refreshToken:
                                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE4MGNiYWYwNDM2MTBiZWVkOGY4YjYiLCJhdmF0YXIiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kcWE1ZmZxMDEvaW1hZ2UvdXBsb2FkL3YxNjkyOTAxNzczL1B1YmxpYy9BdmF0YXIlMjBEZWZhdWx0JTIwVXNlci9tYWxlLnBuZyIsImlhdCI6MTY5NzE5Nzg4NiwiZXhwIjoxNjk3ODAyNjg2fQ.ENkx2MXvvlXb2HfPPW_AmyI1KD68kD7W4sLM73LaAg8",
                        },
                        expiresIn: 1697215886229,
                    };

                    // if (code !== 200) return null;
                    return check;
                } catch (error) {
                    console.log("Error during authentication API call :", error);
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) return { ...token, ...user };
            return token;
            // if (new Date().getTime() < token.expiresIn) {
            //     return token;
            // }

            // const newToken = await handleRefreshToken(token);
            // if (!newToken) return null;
            // return newToken;
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

// const handleRefreshToken = async (token: JWT) => {
//     try {
//         const { code, metaData } = await authServices.refreshToken({
//             headers: {
//                 "x-api-client": `${token.user.userId}`,
//                 "x-refresh-token": `Refresh ${token.tokens.refreshToken}`,
//             },
//         });
//         if (code !== 200) return null;

//         const { user, tokens, expiresIn } = metaData || {};
//         return {
//             ...token,
//             user,
//             tokens,
//             expiresIn,
//         };
//     } catch (error) {
//         console.log("Error during refresh token API call :", error);
//     }
// };

export default NextAuth(authOption);
