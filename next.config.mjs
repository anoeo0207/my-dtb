/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      ppr: 'incremental', // 'incremental' cho phép áp dụng PPR cho các route cụ thể
    },
    eslint: {
      // Warning: Điều này cho phép quá trình build hoàn tất ngay cả khi có lỗi ESLint
      ignoreDuringBuilds: true,
    },
  };
  
  module.exports = nextConfig;
  