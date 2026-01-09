# Agent Instructions for Link Shortener Project

This file contains instructions for AI agents (LLMs) working on this project. These guidelines ensure consistency, maintainability, and adherence to best practices across the codebase.

## Overview

This is a **Link Shortener** application built with modern web technologies. The project enables users to create, manage, and track shortened URLs.

**Tech Stack:**
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Authentication:** Clerk
- **Database:** PostgreSQL (Neon)
- **ORM:** Drizzle ORM
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## ⚠️ CRITICAL: Read Documentation First

**🚨 MANDATORY REQUIREMENT: You MUST read the relevant documentation file(s) in the `/docs` directory BEFORE generating ANY code. This is not optional.**

Failing to read the documentation first will result in:
- Incorrect implementation patterns
- Security vulnerabilities
- Code that doesn't follow project conventions
- Breaking existing functionality
- Wasted time on rework

**Available Documentation:**
- **[authentication.md](docs/authentication.md)** - Authentication setup, route protection, and Clerk configuration
- **[ui-components.md](docs/ui-components.md)** - UI component architecture using shadcn/ui

**Workflow:**
1. **READ** the relevant `.md` file(s) first
2. **UNDERSTAND** the patterns and conventions
3. **THEN** generate code following those guidelines


## Core Principles

### 1. Server-First Approach
- Prefer React Server Components (RSC) by default
- Use Client Components (`'use client'`) only when necessary (interactivity, hooks, browser APIs)
- Keep business logic on the server when possible

### 2. Type Safety
- All code must be fully typed with TypeScript
- No `any` types unless absolutely necessary and documented
- Use Drizzle ORM's type inference for database operations

### 3. Performance
- Optimize for Core Web Vitals
- Use Next.js Image component for all images
- Implement proper loading states and suspense boundaries
- Minimize client-side JavaScript

### 4. Security
- Never expose sensitive data to the client
- Use Clerk for authentication/authorization
- Validate all inputs on the server
- Use environment variables for secrets

### 5. Code Quality
- Write self-documenting code with clear naming
- Keep functions small and focused (single responsibility)
- Use meaningful comments only when necessary
- Follow existing patterns in the codebase

## Project-Specific Conventions

### Path Aliases
Use TypeScript path aliases for imports:
```typescript
import { db } from '@/db';
import { cn } from '@/lib/utils';
```

### Component Organization
- Server Components: Default export from file
- Client Components: Mark with `'use client'` directive at top
- Shared utilities: Export named functions from `/lib`

### Database Operations
- Use Drizzle ORM for all database interactions
- Define schema in `/db/schema.ts`
- Run migrations with `drizzle-kit`
- Always use prepared statements to prevent SQL injection

### Error Handling
- Use try-catch for async operations
- Provide user-friendly error messages
- Log errors server-side for debugging
- Never expose stack traces to users

## Getting Started for Agents

**⚠️ STEP ZERO: READ THE DOCS FIRST!**

Before doing ANYTHING else, check if there's relevant documentation in `/docs` for your task and READ IT COMPLETELY.

When working on this project:

1. **🚨 READ DOCUMENTATION FIRST**: Check `/docs` for relevant `.md` files and read them completely before writing any code
2. **Understand the context**: Review existing code for consistency
3. **Follow patterns**: Implement using established conventions from the docs
4. **Test changes**: Ensure code runs without errors
5. **Respect types**: Maintain full TypeScript compatibility
6. **Document decisions**: Add comments for non-obvious choices

## File Structure

```
link-shortener-project/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── db/                    # Database layer
│   ├── schema.ts          # Drizzle schema
│   └── index.ts           # Database client
├── lib/                   # Shared utilities
│   └── utils.ts           # Helper functions
├── docs/                  # Agent instructions (detailed)
├── public/                # Static assets
└── drizzle/               # Database migrations (generated)
```

## Commands Reference

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Building
npm run build           # Build for production
npm run start           # Start production server

# Database
npx drizzle-kit generate # Generate migrations
npx drizzle-kit push     # Push schema to database
npx drizzle-kit studio   # Open Drizzle Studio

# Linting
npm run lint            # Run ESLint
```

## Environment Variables

Required environment variables (create `.env.local`):

```env
DATABASE_URL=           # PostgreSQL connection string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

## Important Notes

- This project uses **Next.js App Router** (not Pages Router)
- Tailwind CSS v4 has breaking changes from v3 - check docs
- Clerk middleware is required for protected routes
- Database uses Neon serverless PostgreSQL
- All dates should use ISO 8601 format

## Questions or Issues?

When encountering ambiguity:
1. Check existing code for similar patterns
2. Refer to specific documentation in `/docs`
3. Default to Next.js and React best practices
4. Ask for clarification if needed

---

**Last Updated:** January 9, 2026  
**Project Version:** 0.1.0
