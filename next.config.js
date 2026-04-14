/** @type {import('next').NextConfig} */
const nextConfig = {
  // Default `.next` holds the trace file Next.js appends to (see next/dist/trace/report/to-json.js).
  // EPERM on `.next/trace` on Windows is usually a locked file (another `node` process, Defender,
  // or cloud sync). Options: stop all dev servers & `npm run clean`, exclude the folder in Defender,
  // move the repo out of a synced folder, or set NEXT_DIST_DIR to a path that is not locked
  // (relative to project root), e.g. `../next-dot-next-cache`.
  distDir: process.env.NEXT_DIST_DIR || '.next',
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
