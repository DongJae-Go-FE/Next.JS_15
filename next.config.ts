import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shopping-phinf.pstatic.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
