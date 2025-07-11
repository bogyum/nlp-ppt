import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/nlp-ppt',
  assetPrefix: '/nlp-ppt/',
};

export default nextConfig;
