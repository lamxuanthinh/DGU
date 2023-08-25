import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";
import { HEADER } from "@/utils/nameHeaders";

export const config = {
    api: {
        bodyParser: false,
    },
};

const proxy = httpProxy.createProxyServer();

export default async function handlerAll(req: NextApiRequest, res: NextApiResponse) {
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get("accessToken");
    const userId = cookies.get("userId");

    // if (!accessToken && userId) return res.status(401).json({ message: "TokenExpired" });

    return new Promise(() => {
        if (accessToken && userId) {
            req.headers[HEADER.AUTHORIZATION] = `Bearer ${accessToken}`;
            req.headers[HEADER.CLIENT_ID] = userId;
        }
        req.headers.cookie = "";

        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: false,
        });
    });
}
