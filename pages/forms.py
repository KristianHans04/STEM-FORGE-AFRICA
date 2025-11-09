"""
Secure forms for STEM FORGE AFRICA pages app.
"""

from django import forms
from django.core.validators import EmailValidator


class ContactForm(forms.Form):
    """
    Secure contact form with input validation and XSS protection.
    Django's auto-escaping handles XSS in templates.
    """
    
    name = forms.CharField(
        max_length=100,
        required=True,
        widget=forms.TextInput(attrs={
            'class': 'w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white',
            'placeholder': 'Your Name'
        })
    )
    
    email = forms.EmailField(
        required=True,
        validators=[EmailValidator()],
        widget=forms.EmailInput(attrs={
            'class': 'w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white',
            'placeholder': 'your.email@example.com'
        })
    )
    
    subject = forms.CharField(
        max_length=200,
        required=True,
        widget=forms.TextInput(attrs={
            'class': 'w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white',
            'placeholder': 'Subject'
        })
    )
    
    message = forms.CharField(
        required=True,
        widget=forms.Textarea(attrs={
            'class': 'w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white',
            'rows': 6,
            'placeholder': 'Your message...'
        })
    )
    
    def clean_name(self):
        """Sanitize name input."""
        name = self.cleaned_data.get('name')
        if name:
            name = name.strip()
        return name
    
    def clean_subject(self):
        """Sanitize subject input."""
        subject = self.cleaned_data.get('subject')
        if subject:
            subject = subject.strip()
        return subject
    
    def clean_message(self):
        """Sanitize message input."""
        message = self.cleaned_data.get('message')
        if message:
            message = message.strip()
        return message
