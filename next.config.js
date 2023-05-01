/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images : {
    domains : ["avatars.githubusercontent.com", "lh3.googleusercontent.com", "phinf.pstatic.net"]
  }
}

module.exports = nextConfig
