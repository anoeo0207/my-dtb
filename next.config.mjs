/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental', //incremental value allows to adopt PPR for specific routes
    },
    rules: {
        "react/prop-types": "off",
      },
};

export default nextConfig;
