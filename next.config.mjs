/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["apiv3.apifootball.com", "via.placeholder.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apiv3.apifootball.com",
        port: "",
        pathname: "/badges/logo_country/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/20",
      },
    ],
  },
};

export default nextConfig;
