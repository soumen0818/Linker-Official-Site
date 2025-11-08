import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output configuration for Vercel
  output: 'standalone',

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  compress: true,

  // Production-ready settings
  poweredByHeader: false,

  // Strict mode for better error catching
  reactStrictMode: true,

  // TypeScript in production
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
