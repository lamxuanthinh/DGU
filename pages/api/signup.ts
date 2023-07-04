import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";
import { dataResponse } from "@/model";
import { TIME_EXPIRED_ACCESS_TOKEN, TIME_EXPIRED_REFRESH_TOKEN, TIME_EXPIRED_USER_ID } from "@/utils/timeExpired";

export const config = {
    api: {
        bodyParser: false,
    },
};

const proxy = httpProxy.createProxyServer();

export default function handleSignUp(req: NextApiRequest, res: NextApiResponse<dataResponse>) {
    if (req.method !== "POST") {
        return res.status(401).json({ message: "Method Not Supported" });
    }

    return new Promise((resolve) => {
        req.headers.cookie = "";

        const handleSignUpResponse: ProxyResCallback = (proxyRes, req, res) => {
            let body = "";
            proxyRes.on("data", function (chunk) {
                body += chunk;
            });

            proxyRes.on("end", function () {
                try {
                    const {
                        metaData: { user, tokens },
                    } = JSON.parse(body);
                    console.log("[P]::Body::");
                    console.log(tokens.accessToken, tokens.refreshToken);
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
                        cookies.set("refreshToken", tokens.refreshToken, {
                            httpOnly: true,
                            sameSite: "lax",
                            expires: new Date(Date.now() + TIME_EXPIRED_REFRESH_TOKEN),
                        });
                        cookies.set("userId", user._id, {
                            httpOnly: true,
                            sameSite: "lax",
                            expires: new Date(Date.now() + TIME_EXPIRED_USER_ID),
                        });
                        (res as NextApiResponse).status(200).json({ message: "SignUp successfully" });
                        resolve(true);
                    }
                } catch (error) {
                    (res as NextApiResponse).json({ message: "ErrorServer" });
                }
            });
        };

        proxy.once("proxyRes", handleSignUpResponse);

        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true,
        });
    });
}
