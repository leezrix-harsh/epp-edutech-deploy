/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Disable Turbopack
  experimental: {
    turbo: false
  },
  
  // Configure page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Configure images
  images: {
    unoptimized: true, // Required for static exports
  },
  
  // Enable static exports
  output: 'export',
  
  // Add a trailing slash to all paths
  trailingSlash: true,
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  },
  
  // Disable React's strict mode for production builds
  // to prevent double-rendering in development
  reactStrictMode: process.env.NODE_ENV !== 'production',
}

// Conditionally export the config
module.exports = nextConfig
