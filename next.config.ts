import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/agents/space-travel-agent/generate',
        destination: 'http://localhost:4111/api/agents/space-travel-agent/generate',
      },
    ]
  },
};

export default nextConfig;
