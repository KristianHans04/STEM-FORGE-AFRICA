# STEM FORGE AFRICA LTD

Official website for STEM FORGE AFRICA LTD - a global organization dedicated to advancing STEM education across Africa through world-class programs, competitions, and learning opportunities.

## About

STEM FORGE AFRICA LTD provides platforms, resources, and opportunities for young people to develop their skills in Science, Technology, Engineering, and Mathematics, preparing them to compete on the global stage and become the next generation of African innovators and leaders.

## Features

- Modern, responsive design with dark mode support
- Secure contact form with email integration
- Mobile-optimized for all devices
- SEO-friendly architecture
- Accessibility compliant (WCAG 2.1 Level AA)
- Production-ready deployment configuration

## Technology Stack

### Backend
- Django 5.2.8
- PostgreSQL (production) / SQLite (development)
- Gunicorn WSGI server
- WhiteNoise static file serving

### Frontend
- Tailwind CSS v4
- Google Fonts (Inter & Poppins)
- Vanilla JavaScript

### Development
- pytest for testing
- Black for code formatting
- Flake8 for linting

## Quick Start

### Prerequisites
- Python 3.12 or higher
- Node.js 22 or higher
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/KristianHans04/STEM-FORGE-AFRICA.git
cd STEM-FORGE-AFRICA

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt

# Install Node.js dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your settings (email credentials, etc.)

# Build CSS (IMPORTANT: Run this before starting server)
npm run build:css

# Run database migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

Visit http://127.0.0.1:8000 to see the website.

**Important:** Always run `npm run build:css` before starting the server, or styling won't load!

### Using the Startup Script (Recommended)

For convenience, use the provided startup script:

```bash
# Make sure you're in the project directory
./start.sh
```

This script automatically:
1. Activates the virtual environment
2. Builds the CSS
3. Starts the Django server

### Development Workflow

For active development, run these in separate terminals:

```bash
# Terminal 1: Django development server
source venv/bin/activate
python manage.py runserver

# Terminal 2: Tailwind CSS watch mode (auto-rebuild on changes)
npm run dev:css
```

## Testing

```bash
# Run all tests
pytest

# Run with coverage report
pytest --cov=. --cov-report=html

# View coverage report
open htmlcov/index.html  # Or your browser of choice
```

Current test coverage: 85%

## Code Quality

```bash
# Format code with Black
black .

# Check code style with Flake8
flake8

# Security audit
pip-audit
```

## Project Structure

```
STEM-FORGE-AFRICA/
├── core/              # Django project settings
├── pages/             # Main application
├── templates/         # HTML templates
├── static/            # Static files (CSS, JS, images)
├── docs/              # Documentation
├── requirements.txt   # Python dependencies
└── package.json       # Node.js dependencies
```

## Documentation

Comprehensive guides available in the `docs/` directory:

- **SETUP.md** - Detailed installation and configuration
- **DEPLOYMENT.md** - Production deployment on Northflank
- **PROJECT_ARCHITECTURE.md** - Technical architecture and design decisions
- **CONTRIBUTING.md** - Guidelines for contributing to the project

## Configuration

### Environment Variables

Key environment variables in `.env`:

```env
SECRET_KEY=<your-secret-key>
DEBUG=True  # Set to False in production
DATABASE_URL=<your-database-url>
EMAIL_HOST_USER=<your-email>
EMAIL_HOST_PASSWORD=<your-password>
```

See `.env.example` for all available options.

### Email Setup

The contact form requires email configuration. Update these in `.env`:

```env
EMAIL_HOST=smtp.zoho.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@domain.com
EMAIL_HOST_PASSWORD=your-app-password
```

## Deployment

This project is configured for production deployment on Northflank. See `docs/DEPLOYMENT.md` for step-by-step instructions.

Key deployment files:
- `Procfile` - Gunicorn configuration
- `requirements.txt` - Python dependencies
- Static files served via WhiteNoise

## Security

This project implements industry-standard security practices:
- CSRF protection on all forms
- XSS prevention via template escaping
- SQL injection protection via Django ORM
- Secure session cookies
- Environment-based secrets management

## Contributing

Contributions are welcome! Please read `docs/CONTRIBUTING.md` for guidelines on:
- Code style and formatting
- Testing requirements
- Security considerations
- Pull request process

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Troubleshooting

### Styling Not Loading / Website Looks Plain

**Problem:** The website appears unstyled (black text on white background, no colors).

**Solution:** You need to build the CSS before starting the server:

```bash
npm run build:css
```

Then start the server:

```bash
python manage.py runserver
```

**Why:** Tailwind CSS is a build-time tool. The `static/css/output.css` file must be generated from `static/css/input.css` before Django can serve it.

### Dark Mode Not Working

Make sure JavaScript is enabled in your browser. The dark mode toggle uses localStorage and requires JavaScript.

### Module Not Found Errors

Ensure your virtual environment is activated:

```bash
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

Then reinstall dependencies:

```bash
pip install -r requirements.txt
```

## Support

For questions, issues, or support:
- Email: info@stemforgeafrica.org
- Documentation: See `docs/` directory
- Issues: GitHub Issues

## Acknowledgments

Built with Django, Tailwind CSS, and modern web development best practices to create a professional, accessible, and performant website for STEM education in Africa.
