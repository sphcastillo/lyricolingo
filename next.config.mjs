/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "github.com",
                pathname: "**"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "**"
            }
        ]
    }
};

export default nextConfig;
