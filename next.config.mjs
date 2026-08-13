/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/ads.txt",
        destination: "https://srv.adstxtmanager.com/84937/thestockit.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
