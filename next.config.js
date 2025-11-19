/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable React strict mode to avoid double rendering in development
  reactStrictMode: false,
  
  // Configure images
  images: {
    domains: [],
  },

  // Enable TypeScript type checking in development
  typescript: {
    ignoreBuildErrors: false,
  },

  // Configure webpack
  webpack: (config, { isServer }) => {
    // Add custom webpack configurations here if needed
    return config;
  },

  // Configure page extensions
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  // Explicitly disable Turbopack for now to avoid build issues
  experimental: {
    turbo: false
  },
  
  // Disable Turbopack for this build
  webpack5: true,
  
  // Environment variables
  env: {
    // Add your environment variables here
    // Example: API_URL: process.env.API_URL,
  },
}

// Conditionally export the config
module.exports = nextConfig
