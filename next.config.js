const withTM = require('next-transpile-modules')(['react-pdf', 'pdfjs-dist']); // Add the pdfjs-dist module if it's not already included

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['de', 'en'],
        defaultLocale: 'en',
        localeDetection: false,
      },
      reactStrictMode: true,
      images: {
        domains: [
         
        ],
      },


  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,

      use: ['@svgr/webpack'],
    });
    config.resolve.alias.canvas = false;

    config.experiments = {...config.experiments, topLevelAwait: true};

    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });

    config.resolve.fallback = {fs: false};

    return config;
  },
 

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
