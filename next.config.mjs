/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "yt3.googleusercontent.com",
      "lh3.googleusercontent.com",
      "i.ytimg.com",
      "yt3.ggpht.com",
    ],
  },
};

export default nextConfig;
