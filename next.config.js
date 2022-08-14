/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  images: {
    domains: ['media.timeout.com','lh3.googleusercontent.com','encrypted-tbn0.gstatic.com', 'www.google.com','www.deviantart.com']
  }
}

module.exports = nextConfig
