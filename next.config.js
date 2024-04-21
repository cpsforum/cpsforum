/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.cpsforum.com.br',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
