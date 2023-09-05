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
        req.headers.authorization = `Apisecret ${process.env.VDOCYPHER_API_KEY}`;

        proxy.web(req, res, {
            target: process.env.API_URL_VDOCYPHER,
            changeOrigin: true,
            selfHandleResponse: false,
        });

        proxy.once("proxyRes", () => {
            resolve(true);
        });
    });
}
