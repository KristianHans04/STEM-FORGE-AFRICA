# STEM FORGE AFRICA LTD

Official website for STEM FORGE AFRICA LTD - a global organization dedicated to advancing STEM education across Africa through world-class programs, competitions, and learning opportunities.

## About

STEM FORGE AFRICA LTD provides platforms, resources, and opportunities for young people to develop their skills in Science, Technology, Engineering, and Mathematics, preparing them to compete on the global stage and become the next generation of African innovators and leaders.

## Features

- ✅ Modern, responsive design with dark/light mode
- ✅ Secure contact form with Zoho SMTP integration
- ✅ Mobile-first responsive design
- ✅ SEO-optimized with OpenGraph tags
- ✅ WCAG 2.1 Level AA accessibility
- ✅ Production-ready for Northflank deployment
- ✅ Type-safe with TypeScript
- ✅ Kenyan flag color palette

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL + Prisma ORM
- **Email**: Nodemailer (Zoho SMTP)
- **Deployment**: Northflank
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React

## Quick Start

### Prerequisites
- Node.js 18.17 or higher
- PostgreSQL
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/KristianHans04/STEM-FORGE-AFRICA.git
cd STEM-FORGE-AFRICA

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your database and SMTP credentials

# Setup database
npm run db:generate
npm run db:push

# Start development server
npm run dev
```

Visit http://localhost:3000 to see the website.

## Development

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm start
```

## Database Management

```bash
# Generate Prisma client
npm run db:generate

# Push schema changes (development)
npm run db:push

# Create migration (production)
npm run db:migrate

# Open Prisma Studio GUI
npm run db:studio
```

## Testing

```bash
# Run tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

## Project Structure

```
STEM-FORGE-AFRICA/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── components/     # React components
│   ├── lib/           # Utilities
│   ├── about/         # About page
│   ├── programs/      # Programs page
│   ├── contact/       # Contact page
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── prisma/            # Database schema
├── public/            # Static assets
├── types/             # TypeScript declarations
├── docs/              # Documentation
└── package.json       # Dependencies
```

## Documentation

Comprehensive guides in the `docs/` directory:

- **NEXTJS_SETUP.md** - Complete setup guide
- **NEXTJS_ARCHITECTURE.md** - Technical architecture

## Configuration

### Environment Variables

Required environment variables in `.env`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/stemforgeafrica"

# Zoho SMTP
SMTP_HOST="smtp.zoho.com"
SMTP_PORT="465"
SMTP_USER="your-email@stemforgeafrica.org"
SMTP_PASSWORD="your-smtp-password"
SMTP_FROM_EMAIL="your-email@stemforgeafrica.org"
SMTP_FROM_NAME="STEM FORGE AFRICA"

# Application
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NODE_ENV="development"
```

See `.env.example` for complete configuration options.

## Deployment to Northflank

**Build Command:**
```bash
npm install && npm run db:generate && npm run build
```

**Start Command:**
```bash
npm start
```

**Environment Variables:**
- Add all variables from `.env`
- Set `NODE_ENV=production`
- Use Northflank PostgreSQL addon for `DATABASE_URL`

## Security

Industry-standard security practices implemented:
- ✅ Secure HTTP headers (CSP, HSTS, X-Frame-Options)
- ✅ XSS protection via React and input validation
- ✅ SQL injection prevention via Prisma ORM
- ✅ Input validation with Zod schemas
- ✅ CSRF protection (Next.js built-in)
- ✅ Environment-based secrets management
- ✅ Rate limiting ready (TODO)

## Contributing

Contributions welcome! Please ensure:
- TypeScript compilation passes (`npm run type-check`)
- Production build succeeds (`npm run build`)
- Code follows project structure and conventions
- Security guidelines followed

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### TypeScript Errors

```bash
# Run type check
npm run type-check

# Clear cache
rm -rf .next
npm run dev
```

### Database Issues

```bash
# Regenerate Prisma client
npm run db:generate

# Reset database (warning: deletes data)
npm run db:push -- --force-reset
```

### Build Errors

```bash
# Clear everything
rm -rf .next node_modules
npm install
npm run build
```

## Support

For questions or support:
- **Email**: info@stemforgeafrica.org
- **Documentation**: `docs/` directory
- **Issues**: GitHub Issues
- **Website**: https://stemforgeafrica.org

## Related Projects

- **FIRST Global Team Kenya**: https://fgckenya.com

## License

MIT License - See LICENSE file for details
