# STEM FORGE AFRICA LTD - Quick Start Guide

Get the STEM FORGE AFRICA website running in 5 minutes!

## Prerequisites

- Python 3.12+
- Node.js 22+
- Git

## Installation (5 Steps)

### 1. Clone & Navigate

```bash
git clone https://github.com/KristianHans04/STEM-FORGE-AFRICA.git
cd STEM-FORGE-AFRICA
```

### 2. Setup Python Environment

```bash
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Configure Environment

```bash
cp .env.example .env
# Edit .env with your settings (optional for dev)
```

### 4. Setup Database & CSS

```bash
npm install
npm run build:css
python manage.py migrate
```

### 5. Run Development Server

```bash
python manage.py runserver
```

Visit: **http://127.0.0.1:8000**

## Development Workflow

### Two Terminal Setup

**Terminal 1: Django Server**
```bash
source venv/bin/activate
python manage.py runserver
```

**Terminal 2: Tailwind CSS (Watch Mode)**
```bash
npm run dev:css
```

## Testing

```bash
source venv/bin/activate
pytest                    # Run all tests
pytest --cov=.           # With coverage
```

Current coverage: **85%** 

## Code Quality

```bash
black .                  # Format code
flake8                   # Check style
pip-audit                # Security check
```

## Available Pages

- **Home**: http://127.0.0.1:8000/
- **About Us**: http://127.0.0.1:8000/about/
- **Our Programs**: http://127.0.0.1:8000/programs/
- **Contact**: http://127.0.0.1:8000/contact/
- **Admin**: http://127.0.0.1:8000/admin/

## Next Steps

1. **Create superuser** (optional):
   ```bash
   python manage.py createsuperuser
   ```

2. **Configure email** (for contact form):
   - Update EMAIL_HOST_USER and EMAIL_HOST_PASSWORD in `.env`

3. **Read full documentation**:
   - [SETUP.md](SETUP.md) - Detailed setup
   - [DEPLOYMENT.md](DEPLOYMENT.md) - Northflank deployment
   - [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
   - [PROJECT_ARCHITECTURE.md](PROJECT_ARCHITECTURE.md) - Technical details

## Common Issues

### Issue: "No module named 'decouple'"
**Fix**: `pip install -r requirements.txt`

### Issue: Tailwind CSS not loading
**Fix**: `npm run build:css`

### Issue: Database errors
**Fix**: `python manage.py migrate`

## Features Included

 Django 5.2.8 with PostgreSQL support  
 Tailwind CSS v4 with dark mode  
 Secure contact form with Zoho SMTP  
 Mobile-responsive design  
 WCAG 2.1 Level AA accessibility  
 85%+ test coverage  
 SEO optimized  
 Production-ready (Northflank/Gunicorn)  

## Tech Stack

- **Backend**: Django, PostgreSQL, Gunicorn
- **Frontend**: Tailwind CSS v4, Vanilla JS
- **Email**: Zoho SMTP
- **Testing**: pytest-django
- **Deployment**: Northflank

## Support

- **Email**: support@stemforgeafrica.org
- **Docs**: `/docs` directory
- **Issues**: GitHub Issues

---

**Ready to build?** Start with `python manage.py runserver`! 
