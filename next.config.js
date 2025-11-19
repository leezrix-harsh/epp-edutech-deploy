/** @type {import('next').NextConfig} */
const path = require('path');

// Disable Turbopack by setting the environment variable
process.env.TURBOPACK = '0';

const nextConfig = {
  // Basic configuration
  reactStrictMode: false,
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Path configuration
  basePath: '',
  assetPrefix: '.',
  outputFileTracingRoot: path.join(__dirname, './'),
  
  // Disable Turbopack in development
  experimental: {
    forceSwcTransforms: true,
  },
  
  // Webpack configuration
  webpack: (config) => {
    return config;
  },
}

module.exports = nextConfig;
