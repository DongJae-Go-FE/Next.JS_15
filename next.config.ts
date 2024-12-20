import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/server",
        permanent: true,
      },
    ];
  },
  //캐싱 여부 콘솔 체크
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
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
