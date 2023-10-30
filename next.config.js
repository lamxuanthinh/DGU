const { i18n } = require("./next-i18next.config");
/** @type {import("next").NextConfig} */

const nextConfig = {
    swcMinify: true,
    i18n,
    images: {
        domains: ["papik.pro", "player.vdocipher.com", "res.cloudinary.com"],
    },
};

module.exports = nextConfig;
