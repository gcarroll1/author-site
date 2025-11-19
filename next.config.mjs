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

      // IMPORTANT: no redirect rule for host "gregorymcarroll.com" itself.
      // Vercel's "primary domain" + HTTPS enforcement handles that.
    ];
  },
};

export default nextConfig;