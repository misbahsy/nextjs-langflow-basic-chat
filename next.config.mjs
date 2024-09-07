/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    LANGFLOW_API_TOKEN: process.env.LANGFLOW_API_TOKEN,
  },
};

export default nextConfig;
