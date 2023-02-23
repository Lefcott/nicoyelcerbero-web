/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    MERCADO_PAGO_PUBLIC_KEY: process.env.MERCADO_PAGO_PUBLIC_KEY,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { domains: ["res.cloudinary.com", "dl.dropboxusercontent.com"] },
};

module.exports = nextConfig;
