import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";

export const config = {
    api: {
        bodyParser: false,
    },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    return new Promise((resolve) => {

        req.headers["x-apikey"] = process.env.API_KEY_SCAN_VIRUS;

        proxy.web(req, res, {
            target: process.env.API_URL_SCAN_VIRUS,
            changeOrigin: true,
            selfHandleResponse: false,
        });

        proxy.once("proxyRes", () => {
            resolve(true);
        });
    });
}



