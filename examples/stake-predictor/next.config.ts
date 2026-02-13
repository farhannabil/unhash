import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/unhash',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
