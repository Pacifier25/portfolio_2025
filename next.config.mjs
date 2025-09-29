
/** @type {import('next').NextConfig} */
const repo = 'portfolio_2025'; // Your exact repo name

const nextConfig = {
  output: 'export',  // Required for GitHub Pages
  trailingSlash: true,  // Stable folder-based routing
  images: {
    unoptimized: true  // Required for static export with images
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
