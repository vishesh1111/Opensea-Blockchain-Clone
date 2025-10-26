#!/bin/bash

echo "🧹 Cleaning previous installation..."
rm -rf node_modules package-lock.json .next

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Installation successful!"
    echo "🚀 Starting development server..."
    npm run dev
else
    echo "❌ Installation failed. Please check the error above."
    exit 1
fi
