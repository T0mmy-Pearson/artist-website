import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    images: {
    domains: ['your-image-domain.com'], // add if you use external images
    formats: ['image/webp'],
  },
    experimental: {
      optimizeCss: process.env.NODE_ENV === "production",
    },
};

export default nextConfig;
