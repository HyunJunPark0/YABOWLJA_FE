/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bowlingmall.co.kr",
      },
    ]
  }
}

module.exports = nextConfig
