/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'emojicdn.elk.sh',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
