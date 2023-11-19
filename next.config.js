/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
