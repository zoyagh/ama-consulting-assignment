const withTM = require('next-transpile-modules')([]); 

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/:path*`,
      },
    ];
  },
};

module.exports = withTM(nextConfig);
