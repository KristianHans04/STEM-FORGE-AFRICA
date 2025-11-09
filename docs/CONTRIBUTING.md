# Contributing to STEM FORGE AFRICA LTD Website

Thank you for your interest in contributing to the STEM FORGE AFRICA LTD website! We welcome contributions from the community to help us build a world-class platform for STEM education.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Testing Requirements](#testing-requirements)
6. [Security Guidelines](#security-guidelines)
7. [Submitting Changes](#submitting-changes)
8. [Review Process](#review-process)

## Code of Conduct

By participating in this project, you agree to:

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other contributors

## Getting Started

### Prerequisites

- Python 3.12+
- Node.js 22+
- Git
- PostgreSQL (optional, for production-like testing)

### Setup Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork**
```bash
git clone https://github.com/YOUR_USERNAME/STEM-FORGE-AFRICA.git
cd STEM-FORGE-AFRICA
```

3. **Add upstream remote**
```bash
git remote add upstream https://github.com/KristianHans04/STEM-FORGE-AFRICA.git
```

4. **Set up virtual environment**
```bash
python3 -m venv venv
source venv/bin/activate
```

5. **Install dependencies**
```bash
pip install -r requirements.txt
npm install
```

6. **Configure environment**
```bash
cp .env.example .env
# Edit .env with your development settings
```

7. **Run migrations**
```bash
python manage.py migrate
```

8. **Build Tailwind CSS**
```bash
npm run build:css
```

9. **Run the development server**
```bash
python manage.py runserver
```

## Development Workflow

### Creating a Feature Branch

```bash
# Update your local main branch
git checkout main
git pull upstream main

# Create a new feature branch
git checkout -b feature/your-feature-name
```

### Branch Naming Convention

- `feature/feature-name` - New features
- `bugfix/issue-description` - Bug fixes
- `docs/documentation-update` - Documentation changes
- `refactor/component-name` - Code refactoring
- `test/test-description` - Adding or updating tests

### Making Changes

1. Make your changes in your feature branch
2. Write or update tests for your changes
3. Ensure all tests pass
4. Format your code
5. Commit your changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Add feature: brief description"
```

### Commit Message Guidelines

Follow the conventional commits format:

- `feat: add new feature`
- `fix: resolve bug in contact form`
- `docs: update setup instructions`
- `style: format code with Black`
- `refactor: restructure views module`
- `test: add tests for contact form`
- `chore: update dependencies`

## Coding Standards

### Python Style

**We use Black for formatting and Flake8 for linting.**

```bash
# Format code
black .

# Check code style
flake8
```

**Python Guidelines:**
- Follow PEP 8
- Line length: 119 characters (Black default)
- Use type hints where applicable
- Write docstrings for all functions, classes, and modules
- Keep functions small and focused (Single Responsibility Principle)

**Example:**
```python
def calculate_total_students(programs: list) -> int:
    """
    Calculate the total number of students across all programs.
    
    Args:
        programs: List of program dictionaries with student counts
        
    Returns:
        Total number of students
    """
    return sum(program.get('students', 0) for program in programs)
```

### HTML/Template Style

- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, etc.)
- Ensure accessibility (alt text, labels, ARIA attributes)
- Use Tailwind CSS utility classes (no inline styles)
- Follow mobile-first responsive design
- Support both light and dark modes

**Example:**
```html
<button 
    type="submit" 
    class="w-full bg-primary-600 text-white px-6 py-3 rounded-lg 
           hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600
           focus:outline-none focus:ring-2 focus:ring-primary-500
           transition"
    aria-label="Submit contact form">
    Send Message
</button>
```

### CSS/Tailwind

- Use Tailwind v4 utility classes
- No custom CSS unless absolutely necessary
- Use dark: variant for dark mode
- Mobile-first approach (sm:, md:, lg: breakpoints)
- Maintain consistent spacing and sizing

### JavaScript

- Use modern ES6+ syntax
- Keep JavaScript minimal (prefer server-side rendering)
- Comment complex logic
- Ensure accessibility (keyboard navigation)

## Testing Requirements

### Writing Tests

**All new features must include tests.**

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=. --cov-report=html

# Run specific test file
pytest pages/tests.py
```

### Test Coverage

- **Minimum coverage**: 80%
- **Target coverage**: 90%+
- Cover both success and failure cases
- Test edge cases and validation

### Test Types

**Unit Tests**: Test individual functions and methods
```python
def test_contact_form_valid_data(self):
    """Test contact form with valid data."""
    form = ContactForm(data={
        'name': 'John Doe',
        'email': 'john@example.com',
        'subject': 'Test',
        'message': 'Test message',
    })
    self.assertTrue(form.is_valid())
```

**Integration Tests**: Test views and full request/response cycle
```python
def test_home_page_status_code(self):
    """Test that home page returns 200 status code."""
    response = self.client.get(reverse('pages:home'))
    self.assertEqual(response.status_code, 200)
```

## Security Guidelines

**MANDATORY security requirements** (see `.github/copilot-instructions.md`):

### Input Validation
-  Use Django Forms for all user input
-  Validate and sanitize all data
-  Use parameterized queries (Django ORM)

### XSS Protection
-  Use Django's auto-escaping in templates
-  Never use `|safe` unless absolutely necessary
-  Sanitize user-generated content

### CSRF Protection
-  Include `{% csrf_token %}` in all forms
-  CSRF middleware must be enabled

### Authentication & Authorization
-  Use Django's built-in auth system
-  Check permissions before sensitive operations
-  Never expose sensitive data in logs or errors

### Secrets Management
-  NEVER commit secrets or API keys
-  Use environment variables
-  .env files must be in .gitignore

### Database Safety
-  NEVER use destructive commands in migrations
-  Use safe migrations only (makemigrations, migrate)
-  Test migrations on staging before production

## Submitting Changes

### Before Submitting

**Checklist:**
- [ ] Code follows style guidelines (Black, Flake8)
- [ ] Tests written and passing (pytest)
- [ ] Coverage is at least 80%
- [ ] Security guidelines followed
- [ ] Documentation updated (if needed)
- [ ] No secrets committed
- [ ] Commit messages are clear and descriptive

### Running Pre-submission Checks

```bash
# Format code
black .

# Check style
flake8

# Run tests
pytest --cov=. --cov-report=term-missing

# Security audit
pip-audit

# Build CSS
npm run build:css
```

### Creating a Pull Request

1. **Push your branch to your fork**
```bash
git push origin feature/your-feature-name
```

2. **Open a Pull Request** on GitHub
   - Base: `KristianHans04/STEM-FORGE-AFRICA` main
   - Compare: `YOUR_USERNAME/STEM-FORGE-AFRICA` feature/your-feature-name

3. **Fill out the PR template**
   - Description of changes
   - Related issues (if any)
   - Screenshots (for UI changes)
   - Testing notes

4. **Request review** from maintainers

### Pull Request Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Test addition

## Related Issues
Closes #123

## Testing
- [ ] All tests pass
- [ ] Coverage is adequate
- [ ] Manual testing completed

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## Review Process

### What to Expect

1. **Automated checks** run (linting, tests)
2. **Code review** by maintainers
3. **Feedback** and requested changes (if needed)
4. **Approval** once all criteria met
5. **Merge** into main branch

### Responding to Feedback

- Be receptive to feedback
- Ask questions if something is unclear
- Make requested changes promptly
- Push updates to the same branch

### After Merge

- Delete your feature branch
- Update your fork's main branch
```bash
git checkout main
git pull upstream main
git push origin main
```

## Common Contribution Areas

### Good First Issues

Looking to get started? Check issues labeled:
- `good first issue` - Beginner-friendly
- `help wanted` - Community help needed
- `documentation` - Docs improvements

### High-Priority Areas

- **Testing**: Increase test coverage
- **Accessibility**: Improve WCAG compliance
- **Performance**: Optimize page load times
- **SEO**: Enhance search engine optimization
- **Documentation**: Improve guides and examples

## Getting Help

### Questions?

- **GitHub Discussions**: For general questions
- **Issues**: For bug reports and feature requests
- **Email**: support@stemforgeafrica.org

### Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [pytest Documentation](https://docs.pytest.org/)
- [Project Architecture](PROJECT_ARCHITECTURE.md)

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project website (future)

Thank you for contributing to STEM FORGE AFRICA LTD!

---

**Questions?** Open an issue or contact support@stemforgeafrica.org
