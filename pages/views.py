from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm


def home(request):
    """Home page view."""
    return render(request, 'pages/home.html')


def about(request):
    """About Us page view."""
    return render(request, 'pages/about.html')


def programs(request):
    """Programs page view."""
    return render(request, 'pages/programs.html')


def contact(request):
    """Contact Us page view with secure form handling."""
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            
            # Construct email
            full_message = f"From: {name} <{email}>\n\n{message}"
            
            try:
                send_mail(
                    subject=f"Contact Form: {subject}",
                    message=full_message,
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.EMAIL_HOST_USER],
                    fail_silently=False,
                )
                messages.success(request, 'Your message has been sent successfully!')
                return redirect('pages:contact')
            except Exception as e:
                messages.error(request, 'An error occurred. Please try again later.')
    else:
        form = ContactForm()
    
    return render(request, 'pages/contact.html', {'form': form})
