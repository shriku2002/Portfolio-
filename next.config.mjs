/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true // 👈 THIS disables the built-in image optimization
    }
};

export default nextConfig;