/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  experimental: {
    // Only bundle icons you import instead of the whole library (faster compile)
    optimizePackageImports: ['react-icons'],
  },
  // Skip ESLint during dev/build to speed up (run `npm run lint` separately)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
}

module.exports = nextConfig
