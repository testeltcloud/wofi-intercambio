import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF/WebP responsivos a partir dos JPGs em /public/images
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
