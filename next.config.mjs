const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com"
      }
    ]
  }
};

export default nextConfig;
