/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  trailingSlash: true, // Recommended for clean routing on standard web servers
  images: {
    unoptimized: true, // Images must be unoptimized for static sites
  },
};

module.exports = nextConfig;
