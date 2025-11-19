import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  typescript: {
    // Only use this if you're confident your types are correct
    // Remove this line if you want strict type checking during build
    ignoreBuildErrors: false,
  },
  eslint: {
    // Only use this if you're confident your code is lint-free
    // Remove this line if you want strict linting during build
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
