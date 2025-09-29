/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",  // This enables static exports
  images: {
    unoptimized: true,  // Required for static export with images
  },
  basePath: isProd ? "/portfolio_2025" : "",
  assetPrefix: isProd ? "/portfolio_2025/" : "",
};

export default nextConfig;
