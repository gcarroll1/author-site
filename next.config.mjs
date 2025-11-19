/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect www.gregorymcarroll.com → gregorymcarroll.com
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.gregorymcarroll.com',
          },
        ],
        destination: 'https://gregorymcarroll.com/:path*',
        permanent: true,
      },

      // (Optional, but safe) Ensure canonical HTTPS for the apex domain as well.
      // Vercel usually already forces HTTP → HTTPS, but this doesn't hurt.
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'gregorymcarroll.com',
          },
        ],
        destination: 'https://gregorymcarroll.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
