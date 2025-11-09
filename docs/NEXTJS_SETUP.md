# STEM FORGE AFRICA - Setup Guide

## Prerequisites

- Node.js 18.17 or later
- PostgreSQL database
- npm or yarn package manager
- Git

## Initial Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd STEM-FORGE-AFRICA
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env
```

Update the `.env` file with your actual credentials:

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

### 4. Database Setup

Generate Prisma client:
```bash
npm run db:generate
```

Push schema to database:
```bash
npm run db:push
```

Or run migrations (recommended for production):
```bash
npm run db:migrate
```

### 5. Start Development Server
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
# Development
npm run dev              # Start dev server on port 3000

# Building
npm run build            # Build for production
npm run start            # Start production server

# Type Checking
npm run type-check       # Run TypeScript compiler

# Database
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema without migrations
npm run db:migrate       # Create and run migrations
npm run db:studio        # Open Prisma Studio GUI

# Testing
npm run test             # Run Jest tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate coverage report

# Linting
npm run lint             # Run ESLint
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
├── public/            # Static files
├── docs/              # Documentation
├── .env               # Environment variables (not committed)
├── .env.example       # Example environment file
├── next.config.ts     # Next.js config
├── tsconfig.json      # TypeScript config
└── package.json       # Dependencies
```

## Development Workflow

### 1. Making Changes

Edit files in the `app/` directory. Changes will hot-reload automatically.

### 2. Adding New Pages

Create a new directory in `app/` with a `page.tsx` file:

```bash
mkdir app/new-page
touch app/new-page/page.tsx
```

### 3. Adding Components

Create components in `app/components/`:

```bash
touch app/components/MyComponent.tsx
```

### 4. Database Changes

1. Update `prisma/schema.prisma`
2. Run migration:
   ```bash
   npm run db:migrate
   ```
3. Prisma client will auto-regenerate

### 5. Testing Contact Form Locally

1. Ensure `.env` has valid SMTP credentials
2. Navigate to `/contact`
3. Fill and submit the form
4. Check email inbox for received message

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Database Connection Issues
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Test connection
psql -U username -d stemforgeafrica -h localhost
```

### Prisma Client Errors
```bash
# Regenerate Prisma client
npm run db:generate

# Clear .next cache
rm -rf .next
npm run dev
```

### TypeScript Errors
```bash
# Run type check
npm run type-check

# Clear TypeScript cache
rm -rf .next
rm -rf node_modules/.cache
```

### SMTP/Email Issues
- Verify Zoho credentials in `.env`
- Check SMTP port (465 for SSL, 587 for TLS)
- Ensure Zoho account has SMTP enabled
- Check firewall/network settings

## Deployment to Northflank

### 1. Prepare for Deployment

Build the project locally to verify:
```bash
npm run build
npm start
```

### 2. Connect Repository

1. Log in to Northflank
2. Create new service
3. Connect to GitHub repository
4. Select your production branch

### 3. Configure Build

**Build Command**:
```bash
npm install && npm run db:generate && npm run build
```

**Start Command**:
```bash
npm start
```

**Port**: `3000`

### 4. Environment Variables

Add all variables from `.env` in Northflank dashboard:
- DATABASE_URL (from Northflank PostgreSQL addon)
- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASSWORD
- SMTP_FROM_EMAIL
- SMTP_FROM_NAME
- NEXT_PUBLIC_SITE_URL (your production URL)
- NODE_ENV=production

### 5. Database Setup

1. Add PostgreSQL addon in Northflank
2. Copy DATABASE_URL to environment variables
3. Run migrations via Northflank shell:
   ```bash
   npm run db:migrate
   ```

### 6. Deploy

1. Push changes to your repository
2. Northflank will auto-deploy
3. Monitor build logs for errors

## Security Checklist

- [ ] `.env` file is in `.gitignore`
- [ ] No secrets in code or commits
- [ ] HTTPS enabled in production
- [ ] Database credentials secured
- [ ] SMTP credentials secured
- [ ] CORS properly configured
- [ ] Rate limiting implemented (TODO)
- [ ] Input validation on all forms
- [ ] SQL injection prevention (via Prisma)
- [ ] XSS protection enabled

## Testing Checklist

- [ ] All pages load correctly
- [ ] Dark/light mode works
- [ ] Mobile responsive on all pages
- [ ] Contact form submits successfully
- [ ] Email is received
- [ ] Navigation works on mobile and desktop
- [ ] Links to FGC Kenya website work
- [ ] SEO metadata appears correctly
- [ ] Accessibility (keyboard navigation, screen readers)

## Getting Help

- **Documentation**: Check `/docs` directory
- **Issues**: Create GitHub issue
- **Email**: support@stemforgeafrica.org

## Reference

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
