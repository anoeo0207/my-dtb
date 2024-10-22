/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental', //incremental value allows to adopt PPR for specific routes
    },
    eslint: {
        ignoreDuringBuilds: true, 
    },
};

export default nextConfig;
