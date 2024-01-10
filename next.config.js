/** @type {import('next').NextConfig} */

const repository = "next-profile";

const nextConfig = {
  // basePath: `/${repository}`,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
