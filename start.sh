#!/bin/bash

# Pagada Mentor App - Quick Start Script

echo "🎉 Welcome to Pagada Mentor App!"
echo "================================"
echo ""

# Check if node is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm found: $(npm --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    echo "   This may take a few minutes..."
    npm install
    
    if [ $? -eq 0 ]; then
        echo "✅ Dependencies installed successfully!"
    else
        echo "❌ Failed to install dependencies"
        exit 1
    fi
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🚀 Starting Expo development server..."
echo ""
echo "📱 Next steps:"
echo "   1. Install 'Expo Go' app on your phone"
echo "   2. Scan the QR code that appears"
echo "   3. Wait for the app to load"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start Expo
npx expo start
