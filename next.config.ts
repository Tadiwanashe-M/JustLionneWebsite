import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Browsers request /favicon.ico by default; serve the real logo (no duplicate .ico file).
      { source: "/favicon.ico", destination: "/images/logo.jpeg" },
    ];
  },
};

export default nextConfig;
