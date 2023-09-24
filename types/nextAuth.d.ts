import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            userId: string;
            avatar: string;
        };
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        expiresIn: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user: {
            userId: string;
            avatar: string;
        };
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        expiresIn: string;
    }
}
