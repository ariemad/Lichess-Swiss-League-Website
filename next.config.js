/** @type {import('next').NextConfig} */
const nextConfig = {
  server: {
    port: process.env.PORT || 3000, // Set the desired port number here
  },
};

module.exports = nextConfig;
