/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["firebasestorage.googleapis.com", "flagicons.lipis.dev"],
  },
};

module.exports = nextConfig;