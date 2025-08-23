/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      new URL('https://placehold.co/**')
    ],
  },
}

module.exports = nextConfig
