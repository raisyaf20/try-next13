/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.dummyjson.com"],
  },
  topLevelAwait: true,
};

module.exports = nextConfig;
