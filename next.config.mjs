/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://localhost:8000/", // You must have a base API URL
  },
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com"],
  },
};

export default nextConfig;
