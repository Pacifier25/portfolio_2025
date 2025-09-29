/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // required for GitHub Pages
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/portfolio_2025" : "",
  assetPrefix: isProd ? "/portfolio_2025/" : "",
};

export default nextConfig;
