# 🎨 Q-rator - Standalone Installation Guide

Welcome! Your Q-rator media library interface is ready to run completely outside of Figma Make.

## ⚡ Quick Start (2 Steps)

### 1. Install Node.js (if you haven't already)

Download and install from: **https://nodejs.org/**
- Recommended: LTS version (18.x or higher)
- This includes npm (Node Package Manager)

### 2. Run the Application

**Windows Users:**
```
1. Open the project folder
2. Double-click "start.bat"
3. Wait for installation and server to start
4. Browser will open automatically
```

**Mac/Linux Users:**
```bash
# In terminal, navigate to project folder, then:
chmod +x start.sh
./start.sh
```

**Or use npm commands:**
```bash
npm install
npm run dev
```

## 🎯 What You'll See

Once started, Q-rator will open at `http://localhost:3000` with:

### Navigation Sidebar (Left)
- 🏠 **Home** - Main view
- 💾 **Assets** - Premium content packs marketplace
- 🖼️ **Image** - Upload images (click to open file picker)
- 🎥 **Video** - Upload videos (click to open file picker)
- 🎬 **MediaFlows** - Select aspect ratios (Cinematic/Widescreen/Square)
- 📦 **3D** - 3D assets view
- ✨ **FinalTouch** - Final touches panel

### Main Interface
- **Search bar** - Find media by title or artist
- **Filter tabs** - All / Images / Videos
- **Media grid** - Browse 4 sample items (images and videos)
- **Checkboxes** - Select multiple items for batch operations
- **Share button** - Golden gradient button (top right)

### Content Packs (Click "Assets" button)
8 premium packs available:
1. **Masters Pack** - $49.99 (156 items)
2. **Portrait Studies** - $29.99 (42 items)
3. **Story Reels** - $39.99 (28 videos)
4. **Landscape Collection** - $34.99 (73 items)
5. **Abstract Motion** - $44.99 (19 videos)
6. **Renaissance Bundle** - $54.99 (89 items)
7. **Cinematic Presets** - $59.99 (35 videos)
8. **Texture Library** - $39.99 (124 items)

### Video Player
- Click any video thumbnail to open full-screen player
- Controls: Play/Pause, Mute, Seek, Fullscreen
- Time display and progress bar

### Detail Panel
- Click any image to view details
- Shows: Title, Artist, Dimensions, File info
- Download and Version History buttons

## 🛠️ Available Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📁 Project Structure

```
q-rator/
├── src/
│   ├── components/          # All React components
│   │   ├── AssetsPanel.tsx
│   │   ├── DetailPanel.tsx
│   │   ├── ImageWithFallback.tsx
│   │   ├── MediaFlowsPanel.tsx
│   │   ├── MediaGrid.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TopHeader.tsx
│   │   └── VideoPlayer.tsx
│   ├── styles/
│   │   └── globals.css      # Tailwind CSS v4 styles
│   ├── App.tsx              # Main component
│   └── main.tsx             # Entry point
├── public/
│   └── vite.svg             # Favicon
├── index.html               # HTML entry
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
├── start.sh                 # Mac/Linux start script
├── start.bat                # Windows start script
└── README.md                # Full documentation
```

## 🎨 Design System

**Color Palette:**
- Background: Black (#000000)
- Accents: Gold/Amber (#F59E0B, #FCD34D)
- Text: White/Gray scale
- Borders: Dark gray (#1F1F1F)

**Typography:**
- Clean, modern sans-serif
- Light weight for headings
- Small caps for labels

## 🔧 Troubleshooting

### "Command not found: npm"
Install Node.js from https://nodejs.org/

### Port 3000 already in use
Vite will automatically use the next available port (3001, 3002, etc.)

### Blank screen or errors
1. Stop the server (Ctrl+C)
2. Delete node_modules: `rm -rf node_modules`
3. Delete package-lock.json: `rm package-lock.json`
4. Reinstall: `npm install`
5. Start again: `npm run dev`

### Module errors
Make sure Node.js version is 18 or higher:
```bash
node --version
```

## 🚀 Deployment

To deploy to production:

```bash
# Build the app
npm run build

# The build output will be in the 'dist' folder
# Upload this folder to your hosting provider
```

**Recommended Hosting:**
- Vercel (vercel.com) - Zero config
- Netlify (netlify.com) - Drag and drop
- GitHub Pages
- Any static hosting service

## 📦 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first styling
- **Lucide React** - Beautiful icons

## ✨ Features Summary

✅ Dark theme with gold accents (Veridian-Q branding)
✅ Responsive design (mobile, tablet, desktop)
✅ Video player with full controls
✅ Search & filter functionality
✅ Batch selection and operations
✅ File upload capability
✅ 8 premium content packs marketplace
✅ Multiple format options (MediaFlows)
✅ Professional UI/UX

## 📝 License

Part of the Veridian-Q digital content platform.

---

**Need more help?** Check the other documentation files:
- `README.md` - Full documentation
- `QUICKSTART.md` - Quick start guide
- `SETUP_COMPLETE.md` - Setup completion checklist

**Enjoy using Q-rator!** 🎉
