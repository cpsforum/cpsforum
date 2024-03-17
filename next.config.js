/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'd2caspv51kzhac.cloudfront.net',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
