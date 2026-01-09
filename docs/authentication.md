# Authentication Instructions

This document outlines the authentication architecture and rules for the Link Shortener application.

## Core Principle

**All authentication is handled exclusively by Clerk.** No other authentication methods, libraries, or custom auth implementations should be used.

## Authentication Provider

- **Provider:** Clerk
- **Implementation:** Use Clerk's Next.js SDK
- **Required Package:** `@clerk/nextjs`

## Route Protection Rules

### Protected Routes

The following routes require authentication:

- **`/dashboard`** - User must be logged in to access
- Any future admin or user-specific routes should follow the same pattern

### Redirect Logic

1. **Logged-in users accessing homepage (`/`):**
   - **Action:** Redirect to `/dashboard`
   - **Reason:** Authenticated users should land on their dashboard

2. **Non-authenticated users accessing protected routes:**
   - **Action:** Redirect to sign-in (handled by Clerk middleware)

## Sign In & Sign Up Experience

**Modal-based authentication:**
- Sign-in should launch as a modal overlay
- Sign-up should launch as a modal overlay
- Do not use dedicated full-page routes for auth forms

**Implementation:** Use Clerk's modal components:
```typescript
import { SignInButton, SignUpButton } from '@clerk/nextjs';
```

## Implementation Checklist

When implementing authentication features:

- [ ] Use Clerk middleware to protect routes
- [ ] Configure middleware in `middleware.ts` at project root
- [ ] Set public routes appropriately (e.g., homepage for logged-out users)
- [ ] Implement redirect logic for authenticated users on homepage
- [ ] Use `<SignInButton>` and `<SignUpButton>` components
- [ ] Configure Clerk to use modal mode (not redirect mode)
- [ ] Never implement custom JWT handling, session management, or password hashing

## Middleware Configuration

Place authentication middleware at the project root (`middleware.ts`):

```typescript
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
```

## User Data Access

To access user information in components:

**Server Components:**
```typescript
import { auth, currentUser } from '@clerk/nextjs/server';

const { userId } = await auth();
const user = await currentUser();
```

**Client Components:**
```typescript
import { useUser } from '@clerk/nextjs';

const { user, isLoaded, isSignedIn } = useUser();
```

## Environment Variables

Required Clerk environment variables (`.env.local`):

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

## What NOT to Do

❌ Do not use NextAuth.js, Passport, or any other auth library  
❌ Do not implement custom session management  
❌ Do not create custom login/signup pages (use Clerk modals)  
❌ Do not manually handle JWTs or tokens  
❌ Do not implement password hashing or user credential storage  
❌ Do not create custom authentication middleware outside of Clerk

## Resources

- [Clerk Next.js Documentation](https://clerk.com/docs/quickstarts/nextjs)
- [Clerk Middleware Reference](https://clerk.com/docs/references/nextjs/clerk-middleware)

---

**Last Updated:** January 9, 2026
