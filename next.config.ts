import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dkstatics-public.digikala.com",
      },
    ],
  },
};



module.exports = nextConfig;

export default nextConfig;
