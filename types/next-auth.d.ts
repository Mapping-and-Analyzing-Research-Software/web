// types/next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    handle: string; // or whatever type your ID is
    // Add other custom properties as needed
  }

  interface Session {
    user: User;
  }
}
