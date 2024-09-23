/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/demo",
        destination: "https://ianua.interactivevalley.com/index.html",
      },
      {
        // Proxying all Next.js assets from the external site
        source: "/_next/:path*",
        destination: "https://ianua.interactivevalley.com/_next/:path*", // External Next.js asset paths
      },
    ];
  },
};

export default nextConfig;
