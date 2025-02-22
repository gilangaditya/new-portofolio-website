

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Nonaktifkan image optimization untuk export mode
      },
};

export default nextConfig;
