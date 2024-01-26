/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // hostname: "images.dog.ceo",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
