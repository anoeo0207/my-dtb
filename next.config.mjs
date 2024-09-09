/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental', //incremental value allows to adopt PPR for specific routes
    },
};

export default nextConfig;
