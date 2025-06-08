import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.PAGES_BASE_PATH || "", // 支援 GitHub Pages 子路徑
  /* config options here */
};

export default nextConfig;
