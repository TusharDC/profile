import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: 'https://advisor.cibc.com/himanshu-gandhi',
      //   // permanent: false,
      //   statusCode: 301,
      // },
      {
        source: '/:path*',
        destination: 'https://advisor.cibc.com/himanshu-gandhi',
        // permanent: false,
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
