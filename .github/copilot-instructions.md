1. Security Best Practices

MANDATORY security measures for every feature:

SQL Injection Prevention: Use parameterized queries (Prisma ORM provides this protection).

XSS Protection: Sanitize all user input and escape all output (React handles auto-escaping, Zod validates inputs).

CSRF Protection: Implement anti-CSRF tokens in all forms (Next.js provides built-in protection).

Rate Limiting: Implement limits on API endpoints and form submissions.

DDoS Protection: Recommend middleware or settings for request throttling.

Input Validation: Use Zod schemas for whitelisting and format enforcement on all inputs.

Authentication: Use secure, industry-standard auth systems (NextAuth, JWT, etc.).

Authorization: Always check user permissions before granting access to resources.

File Upload Security: Validate file types, scan for malware, and restrict sizes.

Dependency Security: Use npm audit and keep dependencies updated.

Content Security Policy (CSP): Apply strict CSP headers via next.config.ts.

Secure Headers: Implement all standard HTTP security headers (HSTS, X-Frame-Options, etc.).

API Security: Use token-based authentication with proper validation.

Password Security: Use bcrypt or similar for password hashing.

Sensitive Data Logging: Exclude sensitive fields from logs and error messages.

Session Security: Set cookies with secure, httpOnly, and sameSite attributes.

Directory Traversal Protection: Sanitize and validate file paths.

Mass Assignment Protection: Use explicit field validation in API routes.

Information Disclosure Prevention: Never expose internal errors or stack traces in production.

Clickjacking Protection: Use X-Frame-Options: DENY header.

2. API Keys & Secrets Management

NEVER commit API keys or secrets.

Use environment variables loaded from a .env file.

The .env file must be in .gitignore.

3. Database Protection – NEVER DESTROY DATA

NEVER suggest destructive commands (dropdb, reset, flush).

ONLY use safe Prisma migrations (prisma migrate dev, prisma db push).

ALWAYS recommend backing up before migrations.

If data needs cleanup, recommend soft deletes (isActive = false) or archiving.

4. Testing & CI/CD Requirements – MANDATORY

MUST write tests for all code using Jest and React Testing Library.

Unit tests for components, utilities, and API routes.

Integration tests for user flows and API endpoints.

Test Coverage: Aim for 80%+ coverage.

CI/CD Pipeline MUST PASS: All code must pass TypeScript checks and tests.

5. Data Structures & Algorithms (DSA) Best Practices

Prioritize Efficiency: Always consider time/space complexity (Big O).

Data Structure Selection: Use appropriate data structures (Map for O(1) lookups, Set for uniqueness, etc.).

Algorithm Optimization: Avoid O(n^2) loops in database queries (use Prisma's include and select for efficient queries).

6. Code Organization & Modern Practices

Next.js Project Structure: Follow the App Router conventions with proper file organization.

CSS/Styling: Use Tailwind v4. No inline styles.

Components: Create reusable React components. Keep components focused and single-purpose.

Services/Modules: Follow the Single Responsibility Principle.

TypeScript: Use proper typing for all functions, components, and API routes.

7. Documentation Best Practices

All project documentation belongs in a dedicated docs/ directory.

Architecture details in docs/PROJECT_ARCHITECTURE.md.

A temp_docs/ folder can be used for temporary notes but must be in .gitignore.

8. Global Website Requirements

This is a global website, not region-specific.

DO NOT use region-specific references.

MUST support internationalization (i18n) and localization (l10n) from the start (use next-intl or similar).

Support USD as the primary currency for any donation/sponsorship features.

9. Mobile Responsiveness

Every UI component must be mobile-first, using Tailwind's responsive prefixes.

Test at all standard viewport widths.

10. Accessibility Requirements

Minimum WCAG 2.1 Level AA compliance.

Use semantic HTML (<nav>, <main>).

All images must have alt text.

All forms must have <label> tags.

Ensure keyboard navigation and visible focus states (Tailwind's focus: utilities are good for this).

Maintain proper heading hierarchy.

11. Theme Support (Light/Dark Mode)

All UI components must support both light and dark themes.

Implement this using Tailwind's dark: variant, toggled by a class on the <html> tag.

12. SEO Optimization (Target: 95%+ Lighthouse Score)

Meta Tags: Unique <title> and <description> for every page (use Next.js Metadata API).

Semantic HTML: Use correct HTML5 semantic elements.

Performance: Use Next/Image for optimization, lazy load content, use modern formats (WebP, AVIF).

Core Web Vitals: Optimize for LCP, FID, and CLS metrics.

URLs: Use clean, descriptive slugs in routing.

Sitemap: Generate sitemap.xml using next-sitemap or similar tools.

13. No Emojis Policy

ABSOLUTELY NO EMOJIS in any part of the application (UI, templates, logs, API responses, etc.). Unless it makes sense like maybe you want to talk about a country and you use its flag emoji

Use SVG or font-based icons (like Heroicons, which integrates with Tailwind).