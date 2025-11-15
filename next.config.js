/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images and reduce warnings
  images: {
    domains: ['i.ytimg.com'],
  },
  // Suppress console warnings in production
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig

