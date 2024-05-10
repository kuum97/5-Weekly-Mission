/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-front.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
        port: "",
        pathname: "/badges/**",
      },
      {
        protocol: "https",
        hostname: "ssl.pstatic.net",
        port: "",
        pathname: "/sstatic/**",
      },
      {
        protocol: "https",
        hostname: "data1.pokemonkorea.co.kr",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s.pstatic.net",
        port: "",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "jasonwatmore.com",
        port: "",
        pathname: "/_content/**",
      },
    ],
  },
};

export default nextConfig;
