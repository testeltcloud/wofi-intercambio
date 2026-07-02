import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF/WebP responsivos a partir dos JPGs em /public/images
    formats: ["image/avif", "image/webp"],
    // qualidades permitidas no prop `quality` do next/image
    qualities: [60, 75],
  },
  experimental: {
    // CSS crítico inline no HTML: remove o request bloqueante de renderização
    inlineCss: true,
  },
};

export default nextConfig;
