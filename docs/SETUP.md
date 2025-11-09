# STEM FORGE AFRICA LTD - Setup Guide

This guide will walk you through setting up the STEM FORGE AFRICA LTD website on your local development environment.

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.12+ 
- Node.js 22+ and npm
- PostgreSQL (for production-like setup) or SQLite (for quick development)
- Git

## Step 1: Clone the Repository

```bash
git clone https://github.com/KristianHans04/STEM-FORGE-AFRICA.git
cd STEM-FORGE-AFRICA
```

## Step 2: Set Up Python Virtual Environment

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
# venv\Scripts\activate
```

## Step 3: Install Python Dependencies

```bash
pip install -r requirements.txt
```

The following packages will be installed:
- Django (web framework)
- gunicorn (WSGI server for production)
- whitenoise (static file serving)
- psycopg2-binary (PostgreSQL adapter)
- python-decouple (environment variable management)
- dj-database-url (database URL parsing)
- pytest-django (testing framework)
- black (code formatter)
- flake8 (linter)
- pip-audit (security auditing)

## Step 4: Install Node.js Dependencies

```bash
npm install
```

This installs:
- Tailwind CSS v4
- Tailwind CLI

## Step 5: Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and configure the following:

### Development Configuration (SQLite)
```env
SECRET_KEY=your-unique-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

DATABASE_URL=sqlite:///db.sqlite3

EMAIL_HOST=smtp.zoho.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@yourdomain.com
EMAIL_HOST_PASSWORD=your-zoho-password
DEFAULT_FROM_EMAIL=your-email@yourdomain.com

SECURE_SSL_REDIRECT=False
SESSION_COOKIE_SECURE=False
CSRF_COOKIE_SECURE=False
```

### Production Configuration (PostgreSQL)
```env
SECRET_KEY=your-strong-secret-key
DEBUG=False
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com

DATABASE_URL=postgresql://user:password@localhost:5432/stemforgeafrica

EMAIL_HOST=smtp.zoho.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@yourdomain.com
EMAIL_HOST_PASSWORD=your-zoho-password
DEFAULT_FROM_EMAIL=your-email@yourdomain.com

SECURE_SSL_REDIRECT=True
SESSION_COOKIE_SECURE=True
CSRF_COOKIE_SECURE=True
```

### Generating a SECRET_KEY

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

## Step 6: Set Up Zoho SMTP (Email Configuration)

1. Log in to your Zoho Mail account
2. Go to Settings → Mail Accounts → SMTP
3. Enable SMTP access
4. Generate an app-specific password (recommended)
5. Update your `.env` file with these credentials

**Note**: Never commit your `.env` file to version control!

## Step 7: Build Tailwind CSS

```bash
# Development (with watch mode)
npm run dev:css

# Production (minified)
npm run build:css
```

For development, run `npm run dev:css` in a separate terminal to auto-compile CSS on changes.

## Step 8: Run Database Migrations

```bash
# Make sure virtual environment is activated
source venv/bin/activate

# Run migrations
python manage.py migrate
```

## Step 9: Create a Superuser (Optional)

```bash
python manage.py createsuperuser
```

Follow the prompts to create an admin account for accessing `/admin/`.

## Step 10: Collect Static Files (Production)

```bash
python manage.py collectstatic --noinput
```

This is only needed for production. In development, Django serves static files automatically.

## Step 11: Run the Development Server

```bash
python manage.py runserver
```

The site will be available at: http://127.0.0.1:8000/

### Available Pages:
- Home: http://127.0.0.1:8000/
- About: http://127.0.0.1:8000/about/
- Programs: http://127.0.0.1:8000/programs/
- Contact: http://127.0.0.1:8000/contact/
- Admin: http://127.0.0.1:8000/admin/

## Development Workflow

### Running the Development Server

```bash
# Terminal 1: Activate venv and run Django
source venv/bin/activate
python manage.py runserver

# Terminal 2: Watch and compile Tailwind CSS
npm run dev:css
```

### Running Tests

```bash
# Run all tests
pytest

# Run with coverage report
pytest --cov=. --cov-report=html

# Run specific test file
pytest pages/tests.py
```

### Code Formatting

```bash
# Format code with Black
black .

# Check code style with Flake8
flake8
```

### Security Auditing

```bash
# Check for vulnerable dependencies
pip-audit
```

## Database Setup

### Using SQLite (Development - Default)
No additional setup needed. Django creates `db.sqlite3` automatically.

### Using PostgreSQL (Production-like)

1. Install PostgreSQL
```bash
# Ubuntu/Debian
sudo apt install postgresql postgresql-contrib

# macOS (with Homebrew)
brew install postgresql
```

2. Create database and user
```bash
sudo -u postgres psql

# In PostgreSQL shell:
CREATE DATABASE stemforgeafrica;
CREATE USER stemforge WITH PASSWORD 'your_password';
ALTER ROLE stemforge SET client_encoding TO 'utf8';
ALTER ROLE stemforge SET default_transaction_isolation TO 'read committed';
ALTER ROLE stemforge SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE stemforgeafrica TO stemforge;
\q
```

3. Update `.env` with PostgreSQL URL
```env
DATABASE_URL=postgresql://stemforge:your_password@localhost:5432/stemforgeafrica
```

4. Run migrations
```bash
python manage.py migrate
```

## Troubleshooting

### Issue: ModuleNotFoundError
**Solution**: Make sure your virtual environment is activated.

### Issue: Tailwind CSS not compiling
**Solution**: 
```bash
npm install
npm run build:css
```

### Issue: Database connection errors
**Solution**: 
- Check DATABASE_URL in `.env`
- Ensure PostgreSQL is running
- Verify database credentials

### Issue: Email not sending
**Solution**:
- Verify Zoho SMTP credentials in `.env`
- Check if EMAIL_HOST_USER and EMAIL_HOST_PASSWORD are correct
- Ensure EMAIL_USE_TLS=True

### Issue: Static files not loading
**Solution**:
```bash
python manage.py collectstatic --clear
npm run build:css
```

## Git Configuration

Set your git credentials for this repository:

```bash
git config user.name "KristianHans04"
git config user.email "theatwoodvlogers@gmail.com"
```

## Next Steps

1. Test the contact form by sending a test email
2. Customize templates in `templates/pages/`
3. Add your own branding and content
4. Set up a PostgreSQL database for production
5. Deploy to Northflank (see DEPLOYMENT.md)

## Additional Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Zoho Mail SMTP Settings](https://www.zoho.com/mail/help/adminconsole/smtp-imap-pop-access.html)

## Support

If you encounter any issues:
1. Check the documentation in `docs/`
2. Review the `PROJECT_ARCHITECTURE.md`
3. Contact: support@stemforgeafrica.org
