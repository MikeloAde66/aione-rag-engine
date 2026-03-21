# Quick Start Guide

## Prerequisites

Make sure you have Node.js installed (version 18 or higher recommended).

Download from: https://nodejs.org/

## Getting Started

### Option 1: Use the Start Script

**On Windows:**
```
Double-click start.bat
```

**On Mac/Linux:**
```bash
chmod +x start.sh
./start.sh
```

### Option 2: Manual Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open your browser:**
The app will automatically open at `http://localhost:3000`

## What to Expect

After starting the server, you'll see the Q-rator interface with:

- ✅ Dark-themed media library with gold accents
- ✅ Sidebar navigation with icons
- ✅ Media grid with sample images and videos
- ✅ Search and filter functionality
- ✅ Assets panel with 8 premium content packs
- ✅ MediaFlows panel for format selection
- ✅ Video player with playback controls

## Common Issues

### Port Already in Use

If port 3000 is already in use, Vite will automatically try the next available port (3001, 3002, etc.)

### Module Not Found Errors

Run:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Make sure you're using Node.js 18+:
```bash
node --version
```

## Need Help?

Check the main README.md for detailed documentation and project structure.
