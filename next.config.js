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
      {
        hostname: "github.com", // 테스트를 위해 추가
      },
    ],
  },
};

module.exports = nextConfig;
