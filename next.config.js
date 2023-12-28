/** @type {import('next').NextConfig} */

const repository = "next-profile";

const nextConfig = {
  basePath: `/${repository}`,
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
