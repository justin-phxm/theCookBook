/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      // "www.themealdb.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
