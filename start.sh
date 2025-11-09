#!/bin/bash

# STEM FORGE AFRICA - Development Server Startup Script

echo "Starting STEM FORGE AFRICA development server..."
echo ""

# Activate virtual environment
source venv/bin/activate

# Build CSS (important!)
echo "Building Tailwind CSS..."
npm run build:css

echo ""
echo "Starting Django development server..."
echo "Visit http://127.0.0.1:8000 to view the website"
echo "Press Ctrl+C to stop the server"
echo ""

# Start Django server
python manage.py runserver
