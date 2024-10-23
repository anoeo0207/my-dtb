import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login', // Thay đổi nếu cần
  },
  callbacks: {
    async redirect({ url }) {
      return '/dashboard'; // Tự động chuyển hướng đến dashboard
    },
    async authorized({ auth }) {
      return true; // Luôn cho phép truy cập
    },
  },
  providers: [], // Định nghĩa providers của bạn ở đây
  secret: process.env.NEXTAUTH_SECRET, // Đảm bảo secret được định nghĩa
} satisfies NextAuthConfig;
