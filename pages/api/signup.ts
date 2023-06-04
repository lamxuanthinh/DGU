import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";

interface Data {
  message: string;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
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
              expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            });
            cookies.set("userId", user._id, {
              httpOnly: true,
              sameSite: "lax",
              expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            });
            (res as NextApiResponse)
              .status(200)
              .json({ message: "SignUp successfully" });
            resolve(true);
          }
        } catch (error) {
          (res as NextApiResponse).json({ message: "ErrorData" });
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
