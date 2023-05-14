/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_IMAGE_URL,
      },
    ],
  },
};

module.exports = nextConfig;
