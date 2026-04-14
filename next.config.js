/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'www.google.com'],
  },
  experimental: {
    // Only bundle icons you import instead of the whole library (faster compile)
    optimizePackageImports: ['react-icons'],
  },
  // Skip ESLint during dev/build to speed up (run `npm run lint` separately)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
  
  // Use userland punycode instead of deprecated Node.js built-in
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: require.resolve('punycode/'),
      };
    }
    return config;
  },
}

module.exports = nextConfig
