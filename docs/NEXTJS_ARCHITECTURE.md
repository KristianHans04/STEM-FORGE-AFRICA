# STEM FORGE AFRICA - Next.js Architecture

## Overview
This document outlines the technical architecture of the Next.js implementation for STEM FORGE AFRICA LTD website.

## Technology Stack

### Frontend & Backend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL via Prisma ORM
- **Email**: Nodemailer with Zoho SMTP
- **State Management**: React Hooks
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Animation**: Framer Motion

### Development Tools
- **Linting**: ESLint (Next.js config)
- **Type Checking**: TypeScript
- **Testing**: Jest (configured)
- **Package Manager**: npm

## Project Structure

```
STEM-FORGE-AFRICA/
├── app/                        # Next.js App Router
│   ├── api/                   # API routes
│   │   └── contact/          # Contact form endpoint
│   │       └── route.ts      # POST handler with validation
│   ├── components/           # Reusable components
│   │   ├── Header.tsx       # Navigation with mobile menu
│   │   ├── Footer.tsx       # Footer component
│   │   ├── ThemeProvider.tsx # Theme context provider
│   │   └── ThemeToggle.tsx  # Dark/light mode toggle
│   ├── lib/                 # Utility functions
│   │   └── utils.ts        # Helper functions (cn)
│   ├── about/              # About page
│   │   └── page.tsx
│   ├── programs/           # Programs page
│   │   └── page.tsx
│   ├── contact/            # Contact page
│   │   └── page.tsx
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── prisma/                # Database schema & migrations
│   └── schema.prisma     # PostgreSQL models
├── public/               # Static assets
│   ├── images/          # Images and graphics
│   └── fonts/           # Custom fonts (if any)
├── docs/                # Documentation
├── .env                 # Environment variables (not committed)
├── .env.example        # Example environment configuration
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies and scripts
└── .gitignore         # Git ignore rules
```

## Security Architecture

### Input Validation
- **Zod Schema Validation**: All form inputs validated server-side
- **Rate Limiting**: TODO - Implement with middleware
- **XSS Protection**: React's built-in escaping + sanitization
- **CSRF Protection**: Next.js SameSite cookies

### API Security
- **Type Safety**: TypeScript for all API routes
- **Error Handling**: Structured error responses
- **Input Sanitization**: Zod validation before processing
- **Secure Headers**: Implemented in next.config.ts

### Email Security
- **SMTP over TLS**: Zoho SMTP with port 465
- **Environment Variables**: All credentials from .env
- **No Hardcoded Secrets**: All sensitive data externalized

### Database Security
- **Parameterized Queries**: Prisma ORM prevents SQL injection
- **Connection Pooling**: Managed by Prisma
- **Environment Variables**: Database URL from .env

## Database Schema

### ContactMessage
- Stores contact form submissions for record-keeping
- Fields: id, name, email, subject, message, createdAt

### Program
- Future model for managing multiple programs
- Fields: id, name, slug, description, isActive, isFlagship, websiteUrl, imageUrl

### TeamMember
- Future model for team member profiles
- Fields: id, name, role, bio, imageUrl, email, isActive, order

### Partner
- Future model for sponsors/partners
- Fields: id, name, logoUrl, websiteUrl, tier, isActive, order

## API Routes

### POST /api/contact
**Purpose**: Handle contact form submissions and send email

**Request Body**:
```json
{
  "name": "string (2-100 chars)",
  "email": "string (valid email)",
  "subject": "string (5-200 chars)",
  "message": "string (10-2000 chars)"
}
```

**Response (Success)**:
```json
{
  "message": "Email sent successfully"
}
```

**Response (Error)**:
```json
{
  "error": "Error message",
  "details": [] // Optional validation errors
}
```

**Security Measures**:
- Zod validation for all inputs
- Email sanitization
- HTML email template with inline styles
- Reply-To set to sender's email

## Styling System

### Tailwind CSS v4
- Custom color palette based on Kenyan flag colors
- Dark mode support via `dark:` variant
- Mobile-first responsive design
- Custom utility classes defined in globals.css

### Color Palette
- **Primary (Green)**: #006600 and variants
- **Accent (Red)**: #BB0000 and variants
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Sans**: Inter (body text)
- **Display**: Poppins (headings)
- Responsive font sizes with Tailwind utilities

## Theme System

### Light/Dark Mode
- Implemented with next-themes
- User preference stored in localStorage
- System preference detection enabled
- Toggle component in header
- All components support both themes

## Performance Optimization

### Next.js Features
- **Static Generation**: Pages pre-rendered at build time
- **Image Optimization**: Next/Image for automatic optimization
- **Font Optimization**: next/font for Google Fonts
- **Code Splitting**: Automatic by Next.js App Router

### Build Optimization
- **Standalone Output**: Minimal production build
- **Compression**: Gzip enabled
- **Tree Shaking**: Unused code eliminated
- **Minification**: CSS and JS minified in production

## Accessibility (WCAG 2.1 Level AA)

### Implemented Features
- Semantic HTML elements (<nav>, <main>, <footer>, <article>)
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Alt text for images (TODO: Add actual images)
- Proper heading hierarchy
- Color contrast meets AA standards
- Form labels properly associated

## SEO Optimization

### Metadata
- Unique title and description per page
- Open Graph tags for social sharing
- Twitter Card metadata
- Robots meta tags
- Sitemap (TODO: Generate with next-sitemap)

### Technical SEO
- Semantic HTML structure
- Fast load times
- Mobile-responsive
- Clean URL structure
- Structured data (TODO: Implement JSON-LD)

## Deployment (Northflank)

### Build Command
```bash
npm run build
```

### Start Command
```bash
npm start
```

### Environment Variables Required
- DATABASE_URL
- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASSWORD
- SMTP_FROM_EMAIL
- SMTP_FROM_NAME
- NEXT_PUBLIC_SITE_URL

### Database Setup
1. Create PostgreSQL database on Northflank
2. Copy DATABASE_URL to environment variables
3. Run migrations: `npm run db:migrate`
4. Generate Prisma client: `npm run db:generate`

## Testing Strategy

### Unit Tests (TODO)
- Component rendering tests
- Utility function tests
- API route tests

### Integration Tests (TODO)
- Form submission flow
- Email sending
- Database operations

### E2E Tests (TODO)
- User journey tests
- Cross-browser testing

## Future Enhancements

### Phase 1 (Current)
- ✅ Core pages (Home, About, Programs, Contact)
- ✅ Contact form with Zoho SMTP
- ✅ Dark/light mode
- ✅ Mobile responsive design
- ✅ Basic SEO optimization

### Phase 2
- [ ] Blog/News section
- [ ] Admin dashboard
- [ ] Program management
- [ ] Team member profiles
- [ ] Partner/Sponsor showcase

### Phase 3
- [ ] User authentication
- [ ] Program registration
- [ ] Payment integration for donations
- [ ] Newsletter subscription
- [ ] Event management

### Phase 4
- [ ] API for mobile app
- [ ] Advanced analytics
- [ ] Multi-language support (i18n)
- [ ] CMS integration

## Monitoring & Logging

### Production Monitoring (TODO)
- Error tracking with Sentry
- Performance monitoring
- Uptime monitoring
- Analytics integration

### Logging Strategy
- Server-side logs for API errors
- Client-side error boundary
- Structured logging format
- Sensitive data exclusion

## Maintenance

### Regular Tasks
- Dependency updates (npm audit)
- Security patches
- Database backups via Northflank
- Performance monitoring
- SEO audit

### Backup Strategy
- Database: Automated daily backups via Northflank
- Code: Version controlled in Git
- Media files: TODO - Cloud storage backup

## Support & Contact

For technical support or questions about this architecture:
- Email: support@stemforgeafrica.org
- Repository: GitHub (KristianHans04/STEM-FORGE-AFRICA)
- Branch: nextjs-main
