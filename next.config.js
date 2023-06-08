/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["papik.pro", "player.vdocipher.com"],
  },
};

module.exports = nextConfig;
