import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/project-goal-sample",
  /* config options here */
};

export default nextConfig;
