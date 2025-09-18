import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    images: {
    domains: ['your-image-domain.com'], // add if you use external images
    formats: ['image/webp'],
  },
    experimental: {
      optimizeCss: true,
    },
};

export default nextConfig;
