1. Security Best Practices

MANDATORY security measures for every feature:

SQL Injection Prevention: Use parameterized queries (Django ORM handles this, but be explicit).

XSS Protection: Sanitize all user input and escape all output (use Django templates' auto-escaping).

CSRF Protection: Implement anti-CSRF tokens in all forms ({% csrf_token %}).

Rate Limiting: Show how to enforce limits on login and API access.

DDoS Protection: Recommend middleware or settings for request throttling.

Input Validation: Use Django Forms or Serializers for whitelisting and format enforcement.

Authentication: Use Django's built-in, secure auth system.

Authorization: Always check user permissions (@permission_required, etc.).

File Upload Security: Validate file types, scan for malware, and restrict sizes.

Dependency Security: Use tools like pip-audit or safety.

Content Security Policy (CSP): Show how to apply strict CSP headers.

Secure Headers: Implement all standard HTTP security headers (django-secure or middleware).

API Security: If we build an API, use token-based authentication (e..g., DRF's JWT).

Password Security: Use Django's default password hashers.

Sensitive Data Logging: Exclude sensitive fields from logs.

Session Security: Set cookies with SECURE_COOKIE, HTTPONLY_COOKIE, and SESSION_COOKIE_SAMESITE.

Directory Traversal Protection: Sanitize and validate file paths.

Mass Assignment Protection: Use explicit fields in forms/serializers.

Information Disclosure Prevention: Set DEBUG = False in production.

Clickjacking Protection: Use X-Frame-Options middleware.

2. API Keys & Secrets Management

NEVER commit API keys or secrets.

Use environment variables (e.g., via python-decouple or django-environ) loaded from a .env file.

The .env file must be in .gitignore.

3. Database Protection – NEVER DESTROY DATA

NEVER suggest destructive commands (dropdb, reset_db, flush).

ONLY use safe Django migrations (makemigrations, migrate).

ALWAYS recommend backing up before migrations.

If data needs cleanup, recommend soft deletes (is_active = False) or archiving.

4. Testing & CI/CD Requirements – MANDATORY

MUST write tests for all code using pytest-django.

Unit tests for models and services.

Integration tests for APIs and views.

Test Coverage: Aim for 80%+ coverage.

CI/CD Pipeline MUST PASS: All code must pass linting (e.g., black, flake8) and all tests.

5. Data Structures & Algorithms (DSA) Best Practices

Prioritize Efficiency: Always consider time/space complexity (Big O).

Data Structure Selection: Use appropriate Python data structures (dict for O(1) lookups, set for uniqueness, etc.).

Algorithm Optimization: Avoid O(n^2) loops in database queries (fix N+1 problems with select_related and prefetch_related).

6. Code Organization & Modern Practices

Django Project Structure: Follow a clean, scalable structure.

CSS/Styling: Use Tailwind v4. No inline styles.

HTML/Templates: Use reusable Django template partials/includes. No business logic in templates.

Services/Modules: Follow the Single Responsibility Principle.

7. Documentation Best Practices

All project documentation belongs in a dedicated docs/ directory.

Architecture details in docs/PROJECT_ARCHITECTURE.md.

A temp_docs/ folder can be used for temporary notes but must be in .gitignore.

8. Global Website Requirements

This is a global website, not region-specific.

DO NOT use region-specific references.

MUST support internationalization (i18n) and localization (l10n) from the start (use Django's built-in features).

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

Meta Tags: Unique <title> and <description> for every page (use Django template blocks).

Semantic HTML: Use it correctly.

Performance: Lazy load images, use modern formats (WebP), etc.

Core Web Vitals: Keep them in mind.

URLs: Use clean, descriptive slugs (e.g., slugify).

Sitemap: Show how to use Django's sitemap framework.

13. No Emojis Policy

ABSOLUTELY NO EMOJIS in any part of the application (UI, templates, logs, API responses, etc.). Unless it makes sense like maybe you want to talk about a country and you use its flag emoji

Use SVG or font-based icons (like Heroicons, which integrates with Tailwind).