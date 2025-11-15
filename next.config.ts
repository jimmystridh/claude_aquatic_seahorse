import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/claude_aquatic_seahorse',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
