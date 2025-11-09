# STEM FORGE AFRICA LTD - Deployment Guide (Northflank)

This guide covers deploying the STEM FORGE AFRICA website to Northflank, a modern cloud platform that simplifies deployment and scaling.

## Prerequisites

- Git repository hosted on GitHub
- Northflank account (sign up at https://northflank.com)
- Domain name (optional, for custom domain)
- Zoho email account configured for SMTP

## Deployment Architecture

```
┌─────────────────────────────────────────────┐
│           Northflank Platform               │
│                                             │
│  ┌──────────────┐      ┌──────────────┐   │
│  │   Service    │      │  PostgreSQL  │   │
│  │   (Django)   │─────▶│   Database   │   │
│  │   Gunicorn   │      │              │   │
│  └──────────────┘      └──────────────┘   │
│         │                                   │
│         ▼                                   │
│  ┌──────────────┐                          │
│  │   WhiteNoise │                          │
│  │ (Static Files)│                         │
│  └──────────────┘                          │
└─────────────────────────────────────────────┘
```

## Step 1: Prepare Your Repository

Ensure your repository has all required files:

- [x] `Procfile` - Defines the web process
- [x] `requirements.txt` - Python dependencies
- [x] `.gitignore` - Excludes sensitive files
- [x] `core/settings.py` - Configured with environment variables

Commit and push all changes:

```bash
git add .
git commit -m "Prepare for Northflank deployment"
git push origin main
```

## Step 2: Create Northflank Project

1. Log in to Northflank: https://app.northflank.com
2. Click "Create Project"
3. Name: `STEM FORGE AFRICA`
4. Region: Choose closest to your target audience
5. Click "Create Project"

## Step 3: Create PostgreSQL Database

1. In your project, click "Add Database"
2. Select "PostgreSQL"
3. Configuration:
   - Name: `stemforgeafrica-db`
   - Version: Latest stable (e.g., PostgreSQL 15)
   - Plan: Select based on needs (start with smallest)
4. Click "Create Database"
5. Wait for database to be provisioned
6. Note the connection details (available in database settings)

## Step 4: Create Django Service

1. Click "Add Service"
2. Select "Combined Service" (includes build and runtime)
3. Source:
   - Repository: Connect your GitHub account and select `STEM-FORGE-AFRICA`
   - Branch: `main`
   - Build Directory: `/` (root)

4. Build Settings:
   - Dockerfile: Not needed (Northflank detects requirements.txt)
   - Build Command: Leave empty or add:
     ```bash
     pip install -r requirements.txt && npm install && npm run build:css
     ```

5. Runtime Settings:
   - Port: `8000`
   - Start Command: Will use Procfile automatically
   - Health Check: `/` (HTTP GET)

## Step 5: Configure Environment Variables

In the service settings, add environment variables:

### Required Variables

```env
SECRET_KEY=<generate-strong-secret-key>
DEBUG=False
ALLOWED_HOSTS=<your-northflank-domain>.northflank.app,<custom-domain-if-any>

DATABASE_URL=<use-northflank-database-url>

EMAIL_HOST=smtp.zoho.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@yourdomain.com
EMAIL_HOST_PASSWORD=<your-zoho-password>
DEFAULT_FROM_EMAIL=your-email@yourdomain.com

SECURE_SSL_REDIRECT=True
SESSION_COOKIE_SECURE=True
CSRF_COOKIE_SECURE=True
```

### Database URL

Northflank provides the DATABASE_URL automatically. To link it:

1. Go to your service's "Environment" tab
2. Click "Add Variable"
3. Select "Link to Database"
4. Choose your PostgreSQL database
5. Variable name: `DATABASE_URL`
6. Northflank will auto-populate the connection string

### Generating SECRET_KEY

Use Python to generate a secure key:

```python
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Copy the output and use it as your SECRET_KEY.

## Step 6: Build and Deploy

1. Save all environment variables
2. Click "Build & Deploy"
3. Northflank will:
   - Clone your repository
   - Install dependencies
   - Build Tailwind CSS
   - Start Gunicorn server
   - Connect to PostgreSQL

Monitor the build logs for any errors.

## Step 7: Run Database Migrations

After the first successful deployment:

1. Go to your service's "Jobs" or "Terminal" tab
2. Open a terminal session
3. Run migrations:

```bash
python manage.py migrate
```

4. Create superuser (optional):

```bash
python manage.py createsuperuser
```

5. Collect static files (if not done in build):

```bash
python manage.py collectstatic --noinput
```

## Step 8: Configure Custom Domain (Optional)

1. In your service settings, go to "Domains"
2. Click "Add Domain"
3. Enter your custom domain (e.g., `stemforgeafrica.org`)
4. Northflank will provide DNS records:
   - Add CNAME or A record to your domain's DNS settings
   - Wait for DNS propagation (up to 48 hours)
5. Enable HTTPS (automatic with Let's Encrypt)

Update `ALLOWED_HOSTS` in environment variables:

```env
ALLOWED_HOSTS=stemforgeafrica.org,www.stemforgeafrica.org,<northflank-domain>.northflank.app
```

## Step 9: Verify Deployment

1. Visit your Northflank URL: `https://<your-service>.northflank.app`
2. Test all pages:
   - Home
   - About
   - Programs
   - Contact (send test email)
3. Check admin panel: `https://<your-service>.northflank.app/admin/`
4. Verify email sending via contact form
5. Test dark mode toggle
6. Test mobile responsiveness

## Continuous Deployment

Northflank supports automatic deployments:

1. Go to service settings → "Git"
2. Enable "Auto-deploy on push"
3. Select branch: `main`
4. Now, every push to `main` will trigger a new deployment

### Deployment Workflow

```
Code Change → Push to GitHub → Northflank Auto-Build → Deploy → Success
```

## Monitoring & Logs

### View Logs

1. Go to your service
2. Click "Logs" tab
3. Filter by:
   - Build logs
   - Runtime logs
   - Error logs

### Metrics

1. Click "Metrics" tab
2. Monitor:
   - CPU usage
   - Memory usage
   - HTTP requests
   - Response times

### Alerts (Optional)

Set up alerts for:
- Service downtime
- High error rates
- Resource limits

## Scaling

### Vertical Scaling (More Resources)

1. Go to service → "Plan"
2. Upgrade to a larger plan
3. Apply changes (service will restart)

### Horizontal Scaling (More Instances)

1. Go to service → "Replicas"
2. Increase replica count
3. Northflank handles load balancing automatically

## Database Management

### Backups

1. Go to database settings
2. Enable automatic backups
3. Set backup schedule (daily recommended)
4. Backups are retained based on your plan

### Manual Backup

```bash
# From local machine
pg_dump <DATABASE_URL> > backup.sql

# Restore
psql <DATABASE_URL> < backup.sql
```

### Database Console

1. Go to database → "Console"
2. Run SQL queries directly
3. Useful for debugging

## Security Best Practices

### Environment Variables

-  Never commit `.env` to Git
-  Use Northflank's encrypted environment variables
-  Rotate secrets regularly
-  Use different SECRET_KEY for production

### HTTPS

-  Always use HTTPS in production
-  Set `SECURE_SSL_REDIRECT=True`
-  Enable HSTS (add to settings.py):

```python
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
```

### Database

-  Use strong database passwords
-  Restrict database access to your service only
-  Enable automated backups

## Troubleshooting

### Build Fails

**Check:**
- requirements.txt is up to date
- All dependencies are installable
- Build logs for specific errors

**Solution:**
```bash
# Test build locally
pip install -r requirements.txt
```

### Service Won't Start

**Check:**
- Procfile is correct
- Environment variables are set
- Database is accessible

**Solution:**
- Check runtime logs
- Verify DATABASE_URL
- Test Gunicorn locally: `gunicorn core.wsgi`

### Static Files Not Loading

**Check:**
- WhiteNoise is in MIDDLEWARE
- STATIC_ROOT is set
- collectstatic was run

**Solution:**
```bash
python manage.py collectstatic --noinput
```

### Email Not Sending

**Check:**
- Zoho SMTP credentials
- EMAIL_USE_TLS=True
- Port 587 is accessible

**Solution:**
- Test SMTP credentials locally
- Check Zoho account for blocks
- Verify email logs in Django

### Database Connection Errors

**Check:**
- DATABASE_URL is correct
- Database is running
- Network connectivity

**Solution:**
- Check database status in Northflank
- Verify connection string
- Test from terminal

## Rollback

If a deployment fails:

1. Go to service → "Deployments"
2. Find previous successful deployment
3. Click "Redeploy"
4. Service will revert to that version

## Cost Optimization

### Development vs. Production

- Use smaller plans for development/staging
- Scale up for production
- Use database plans appropriate for load

### Monitor Usage

- Check monthly usage reports
- Optimize database queries (N+1 problems)
- Enable caching (Redis) if needed

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Contact form sends emails
- [ ] Admin panel accessible
- [ ] HTTPS enabled
- [ ] Custom domain configured (if applicable)
- [ ] Database backups enabled
- [ ] Monitoring/alerts set up
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] SEO meta tags present
- [ ] Performance acceptable (Lighthouse score)

## Maintenance

### Regular Tasks

- **Weekly**: Review logs for errors
- **Monthly**: Check dependency updates (`pip-audit`)
- **Quarterly**: Review resource usage and costs
- **As needed**: Scale resources based on traffic

### Updates

```bash
# Update dependencies locally
pip install --upgrade -r requirements.txt
pip freeze > requirements.txt

# Test thoroughly
python manage.py test

# Commit and push (triggers auto-deploy)
git add requirements.txt
git commit -m "Update dependencies"
git push origin main
```

## Support

### Northflank Support
- Documentation: https://northflank.com/docs
- Support: support@northflank.com

### Project Support
- Email: support@stemforgeafrica.org
- GitHub Issues: https://github.com/KristianHans04/STEM-FORGE-AFRICA/issues

## Additional Resources

- [Northflank Django Guide](https://northflank.com/docs/guides/deploying-django)
- [Django Deployment Checklist](https://docs.djangoproject.com/en/stable/howto/deployment/checklist/)
- [WhiteNoise Documentation](http://whitenoise.evans.io/)
