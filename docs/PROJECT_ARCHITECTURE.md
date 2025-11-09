# STEM FORGE AFRICA LTD - Project Architecture

## Overview
This document outlines the technical architecture of the STEM FORGE AFRICA LTD website, a Django-based web application designed to establish the organization's global online presence and facilitate corporate sponsorships.

## Technology Stack

### Backend
- **Framework**: Django 5.2.8
- **Web Server**: Gunicorn (production)
- **Database**: PostgreSQL (production), SQLite (development)
- **Email**: Zoho SMTP integration
- **Static Files**: WhiteNoise for production static file serving

### Frontend
- **CSS Framework**: Tailwind CSS v4
- **Theme**: Light/Dark mode support via JavaScript
- **Icons**: SVG-based icons (Heroicons style)
- **Responsive**: Mobile-first design

### Development Tools
- **Linting**: Flake8, Black
- **Testing**: pytest-django
- **Security**: pip-audit for dependency scanning
- **Configuration**: python-decouple for environment variables

## Project Structure

```
STEM-FORGE-AFRICA/
├── core/                   # Django project configuration
│   ├── settings.py        # Main settings with environment variable loading
│   ├── urls.py            # Root URL configuration
│   └── wsgi.py            # WSGI application entry point
├── pages/                 # Main application
│   ├── forms.py          # Secure contact form with validation
│   ├── views.py          # View functions for all pages
│   ├── urls.py           # URL routing for pages
│   └── tests.py          # Unit and integration tests
├── templates/             # Django templates
│   ├── base.html         # Base template with SEO optimization
│   ├── partials/         # Reusable template components
│   │   ├── navbar.html   # Navigation with dark mode toggle
│   │   └── footer.html   # Footer component
│   └── pages/            # Page-specific templates
│       ├── home.html
│       ├── about.html
│       ├── programs.html
│       └── contact.html
├── static/               # Static assets
│   ├── css/
│   │   ├── input.css     # Tailwind source file
│   │   └── output.css    # Compiled Tailwind CSS
│   └── js/               # JavaScript files
├── staticfiles/          # Collected static files (production)
├── media/                # User-uploaded media files
├── docs/                 # Project documentation
├── venv/                 # Python virtual environment
├── .env                  # Environment variables (not committed)
├── .env.example          # Example environment configuration
├── .gitignore           # Git ignore rules
├── requirements.txt      # Python dependencies
├── package.json         # Node.js dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── Procfile             # Deployment configuration for Northflank
├── pytest.ini           # Pytest configuration
├── .flake8              # Flake8 linting rules
└── pyproject.toml       # Black formatter configuration
```

## Security Architecture

### Input Validation
- Django Forms with built-in validators
- Email validation using Django's EmailValidator
- Input sanitization in form clean methods
- XSS protection via Django's auto-escaping in templates

### CSRF Protection
- CSRF tokens required on all forms
- CSRF middleware enabled globally

### Secure Communication
- HTTPS enforcement in production (SECURE_SSL_REDIRECT)
- Secure cookies (SECURE, HTTPONLY, SAMESITE attributes)
- Email sent via TLS-encrypted SMTP

### Clickjacking Protection
- X-Frame-Options set to DENY

### Database Security
- PostgreSQL with parameterized queries via Django ORM
- Connection pooling with health checks

### Secrets Management
- All sensitive data loaded from environment variables
- .env file excluded from version control
- python-decouple for secure configuration loading

## Database Schema

### Contact Form (handled in view, no model persistence)
- Messages are sent via email, not stored in database
- Future enhancement: Add ContactMessage model for record keeping

### Future Models
- Team members
- Programs
- Blog posts
- Sponsors/Partners

## API Architecture
Currently, no API endpoints. Future considerations:
- RESTful API using Django REST Framework
- JWT authentication
- Rate limiting with django-ratelimit

## Deployment Architecture

### Northflank Deployment
- Platform: Northflank
- Web server: Gunicorn
- Static files: WhiteNoise
- Database: PostgreSQL managed by Northflank
- Environment variables: Managed via Northflank dashboard

### Static Files Workflow
1. Development: Tailwind CSS compiled via npm scripts
2. Production: `python manage.py collectstatic` collects all static files
3. WhiteNoise serves static files with compression and caching

### Email Configuration
- SMTP provider: Zoho
- All credentials loaded from environment variables
- Fallback error handling for email failures

## Performance Considerations

### Database Optimization
- Database connection pooling (conn_max_age=600)
- Connection health checks enabled
- Use of select_related/prefetch_related for complex queries (future)

### Static Files
- WhiteNoise compression and caching
- Tailwind CSS minification in production
- CDN integration possible (future enhancement)

### Caching Strategy (Future)
- Django cache framework
- Redis for session storage and caching
- Template fragment caching

## Internationalization (i18n) & Localization (l10n)

### Current Setup
- Django i18n/l10n enabled
- Default language: English (en-us)
- UTC timezone
- Ready for multi-language expansion

### Future Enhancements
- Translation files for multiple languages
- Language switcher in navigation
- Region-specific content

## Testing Strategy

### Test Types
- **Unit Tests**: Models, forms, utilities
- **Integration Tests**: Views, templates, email sending
- **Coverage Target**: 80%+

### Test Tools
- pytest-django for test execution
- coverage.py for code coverage reports
- Automated testing in CI/CD pipeline

## CI/CD Pipeline (Future)

### Proposed Workflow
1. Code pushed to repository
2. Linting: Black, Flake8
3. Security: pip-audit
4. Tests: pytest with coverage
5. Build: Collect static files
6. Deploy: Northflank automatic deployment

## Monitoring & Logging (Future)

### Logging
- Sensitive data excluded from logs
- Error tracking with Sentry (future)
- Access logs via Gunicorn

### Monitoring
- Application performance monitoring
- Database query performance
- Uptime monitoring

## SEO Optimization

### Implemented
- Semantic HTML structure
- Unique titles and descriptions per page
- Open Graph meta tags
- Mobile-responsive design
- Fast load times

### Future Enhancements
- Django sitemap framework
- robots.txt
- Structured data (JSON-LD)
- Image optimization (WebP format)
- Lazy loading

## Accessibility

### WCAG 2.1 Level AA Compliance
- Semantic HTML elements
- Alt text for images
- Form labels
- Keyboard navigation support
- Focus states for interactive elements
- Proper heading hierarchy

## Dark Mode Implementation

### Technical Approach
- CSS: Tailwind's dark: variant
- JavaScript: Theme preference stored in localStorage
- Default: Light mode
- Toggle button in navigation

## Contact Form Flow

1. User fills out contact form
2. Django Form validates input
3. CSRF token verified
4. Data sanitized
5. Email constructed with user details
6. Sent via Zoho SMTP
7. Success/error message displayed
8. Form cleared on success

## Future Roadmap

### Phase 1 (Current)
- Core pages (Home, About, Programs, Contact)
- Contact form with email integration
- Light/Dark mode
- Mobile responsive design

### Phase 2
- Blog/News section
- Team member profiles
- Sponsor/Partner showcase
- Admin dashboard

### Phase 3
- Online donations/payments
- User authentication
- Program registration
- Newsletter subscription

### Phase 4
- API for mobile app
- Advanced analytics
- Multi-language support
- CMS integration

## Maintenance

### Regular Tasks
- Dependency updates (pip-audit)
- Security patches
- Database backups
- Log review
- Performance monitoring

### Backup Strategy
- Database: Automated daily backups via Northflank
- Media files: Cloud storage backup
- Code: Version controlled in Git

## Support & Contact

For technical support or questions about this architecture:
- Email: support@stemforgeafrica.org
- Repository: GitHub (KristianHans04/STEM-FORGE-AFRICA)
