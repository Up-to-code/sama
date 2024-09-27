import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Ensure the Middleware matches the routes or pages where clerkMiddleware() is used
    '/',
    '/api(.*)',
    '/sign-in(.*)',
    '/sign-up(.*)',
 
  ],
};