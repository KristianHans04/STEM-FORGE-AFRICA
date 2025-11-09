"""
Tests for the pages app.
"""

from django.test import TestCase, Client
from django.urls import reverse
from .forms import ContactForm


class HomePageTests(TestCase):
    """Test cases for the home page."""

    def setUp(self):
        self.client = Client()

    def test_home_page_status_code(self):
        """Test that home page returns 200 status code."""
        response = self.client.get(reverse('pages:home'))
        self.assertEqual(response.status_code, 200)

    def test_home_page_uses_correct_template(self):
        """Test that home page uses the correct template."""
        response = self.client.get(reverse('pages:home'))
        self.assertTemplateUsed(response, 'pages/home.html')
        self.assertTemplateUsed(response, 'base.html')

    def test_home_page_contains_expected_content(self):
        """Test that home page contains expected content."""
        response = self.client.get(reverse('pages:home'))
        self.assertContains(response, 'STEM FORGE AFRICA')
        self.assertContains(response, 'Empowering Innovation Through STEM')


class AboutPageTests(TestCase):
    """Test cases for the about page."""

    def setUp(self):
        self.client = Client()

    def test_about_page_status_code(self):
        """Test that about page returns 200 status code."""
        response = self.client.get(reverse('pages:about'))
        self.assertEqual(response.status_code, 200)

    def test_about_page_uses_correct_template(self):
        """Test that about page uses the correct template."""
        response = self.client.get(reverse('pages:about'))
        self.assertTemplateUsed(response, 'pages/about.html')

    def test_about_page_contains_mission_vision(self):
        """Test that about page contains mission and vision."""
        response = self.client.get(reverse('pages:about'))
        self.assertContains(response, 'Our Vision')
        self.assertContains(response, 'Our Mission')


class ProgramsPageTests(TestCase):
    """Test cases for the programs page."""

    def setUp(self):
        self.client = Client()

    def test_programs_page_status_code(self):
        """Test that programs page returns 200 status code."""
        response = self.client.get(reverse('pages:programs'))
        self.assertEqual(response.status_code, 200)

    def test_programs_page_contains_flagship_program(self):
        """Test that programs page contains FIRST Global Team Kenya."""
        response = self.client.get(reverse('pages:programs'))
        self.assertContains(response, 'FIRST Global Team Kenya')
        self.assertContains(response, 'FLAGSHIP PROGRAM')


class ContactPageTests(TestCase):
    """Test cases for the contact page."""

    def setUp(self):
        self.client = Client()

    def test_contact_page_status_code(self):
        """Test that contact page returns 200 status code."""
        response = self.client.get(reverse('pages:contact'))
        self.assertEqual(response.status_code, 200)

    def test_contact_page_contains_form(self):
        """Test that contact page contains the contact form."""
        response = self.client.get(reverse('pages:contact'))
        self.assertContains(response, '<form')
        self.assertContains(response, 'csrf')


class ContactFormTests(TestCase):
    """Test cases for the contact form."""

    def test_contact_form_valid_data(self):
        """Test contact form with valid data."""
        form = ContactForm(data={
            'name': 'John Doe',
            'email': 'john@example.com',
            'subject': 'Test Subject',
            'message': 'Test message content',
        })
        self.assertTrue(form.is_valid())

    def test_contact_form_missing_name(self):
        """Test contact form without name."""
        form = ContactForm(data={
            'email': 'john@example.com',
            'subject': 'Test Subject',
            'message': 'Test message',
        })
        self.assertFalse(form.is_valid())
        self.assertIn('name', form.errors)

    def test_contact_form_invalid_email(self):
        """Test contact form with invalid email."""
        form = ContactForm(data={
            'name': 'John Doe',
            'email': 'invalid-email',
            'subject': 'Test Subject',
            'message': 'Test message',
        })
        self.assertFalse(form.is_valid())
        self.assertIn('email', form.errors)

    def test_contact_form_missing_subject(self):
        """Test contact form without subject."""
        form = ContactForm(data={
            'name': 'John Doe',
            'email': 'john@example.com',
            'message': 'Test message',
        })
        self.assertFalse(form.is_valid())
        self.assertIn('subject', form.errors)

    def test_contact_form_missing_message(self):
        """Test contact form without message."""
        form = ContactForm(data={
            'name': 'John Doe',
            'email': 'john@example.com',
            'subject': 'Test Subject',
        })
        self.assertFalse(form.is_valid())
        self.assertIn('message', form.errors)

    def test_contact_form_sanitizes_name(self):
        """Test that contact form sanitizes name input."""
        form = ContactForm(data={
            'name': '  John Doe  ',
            'email': 'john@example.com',
            'subject': 'Test',
            'message': 'Test message',
        })
        self.assertTrue(form.is_valid())
        self.assertEqual(form.cleaned_data['name'], 'John Doe')


class URLTests(TestCase):
    """Test URL routing."""

    def test_home_url_resolves(self):
        """Test that home URL resolves correctly."""
        url = reverse('pages:home')
        self.assertEqual(url, '/')

    def test_about_url_resolves(self):
        """Test that about URL resolves correctly."""
        url = reverse('pages:about')
        self.assertEqual(url, '/about/')

    def test_programs_url_resolves(self):
        """Test that programs URL resolves correctly."""
        url = reverse('pages:programs')
        self.assertEqual(url, '/programs/')

    def test_contact_url_resolves(self):
        """Test that contact URL resolves correctly."""
        url = reverse('pages:contact')
        self.assertEqual(url, '/contact/')
