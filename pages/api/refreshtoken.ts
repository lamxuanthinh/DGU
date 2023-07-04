import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";
import { HEADER } from "@/utils/nameHeaders";
import { dataResponse } from "@/model";
import { TIME_EXPIRED_ACCESS_TOKEN, TIME_EXPIRED_REFRESH_TOKEN, TIME_EXPIRED_USER_ID } from "@/utils/timeExpired";

export const config = {
    api: {
        bodyParser: false,
    },
};

const proxy = httpProxy.createProxyServer();

export default function handleRefreshToken(req: NextApiRequest, res: NextApiResponse<dataResponse>) {
    const cookies = new Cookies(req, res);
    const userId = cookies.get("userId");
    const refreshToken = cookies.get("refreshToken");

    return new Promise((resolve) => {
        if (!refreshToken && !userId) {
            (res as NextApiResponse).json({ message: "ErrorData" });
        }
        req.headers[HEADER.CLIENT_ID] = userId;
        req.headers[HEADER.REFRESH_TOKEN] = refreshToken;
        req.headers.cookie = "";

        const handleRefreshTokenResponse: ProxyResCallback = (proxyRes, req, res) => {
            let body = "";
            proxyRes.on("data", function (chunk) {
                body += chunk;
            });

            proxyRes.on("end", function () {
                try {
                    const {
                        metaData: { user, tokens },
                    } = JSON.parse(body);

                    if (!tokens.accessToken) {
                        (res as NextApiResponse).json({ message: "ErrorData" });
                    } else {
                        const cookies = new Cookies(req, res, {
                            secure: process.env.NODE_ENV !== "development",
                        });
                        cookies.set("accessToken", tokens.accessToken, {
                            httpOnly: true,
                            sameSite: "lax",
                            expires: new Date(Date.now() + TIME_EXPIRED_ACCESS_TOKEN),
                        });
                        cookies.set("userId", user._id, {
                            httpOnly: true,
                            sameSite: "lax",
                            expires: new Date(Date.now() + TIME_EXPIRED_USER_ID),
                        });
                        cookies.set("refreshToken", tokens.refreshToken, {
                            httpOnly: true,
                            sameSite: "lax",
                            expires: new Date(Date.now() + TIME_EXPIRED_REFRESH_TOKEN),
                        });
                        (res as NextApiResponse).status(200).json({ message: "Refresh Token successfully" });
                        resolve(true);
                    }
                } catch (error) {
                    (res as NextApiResponse).json(error);
                }
            });
        };

        proxy.once("proxyRes", handleRefreshTokenResponse);

        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true,
        });
    });
}
