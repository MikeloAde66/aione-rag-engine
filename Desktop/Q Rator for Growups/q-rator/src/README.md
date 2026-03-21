# Q-rator - Media Library Interface

A dark-themed media library interface for the Veridian-Q system, designed for selling digital content packs. Built with React, TypeScript, Tailwind CSS v4, and Vite.

## Features

- 🎨 Dark navy/black theme with gold/amber accents
- 📱 Fully responsive (desktop, tablet, mobile)
- 🎥 Video player for 10-second storytelling videos
- 🔍 Search and filtering functionality
- ✅ Batch operations for selected items
- 🗂️ Working sidebar navigation (Home, Assets, Image, Video, MediaFlows, 3D, FinalTouch)
- 📤 File upload through Image and Video icons
- 🎬 MediaFlows panel with cinematic/widescreen/square format options
- 💰 Assets panel with 8 premium content packs (pricing, thumbnails, purchase buttons)

## Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will open automatically in your browser at `http://localhost:3000`

## Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Lucide React** - Icons

## Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── AssetsPanel.tsx       # Premium content packs panel
│   │   ├── DetailPanel.tsx       # Image detail view
│   │   ├── MediaFlowsPanel.tsx   # Format selection panel
│   │   ├── MediaGrid.tsx         # Main media grid
│   │   ├── Sidebar.tsx           # Navigation sidebar
│   │   ├── TopHeader.tsx         # Search and filters
│   │   ├── VideoPlayer.tsx       # Video playback
│   │   └── ImageWithFallback.tsx # Image component
│   ├── styles/
│   │   └── globals.css           # Global styles
│   ├── App.tsx                   # Main app component
│   └── main.tsx                  # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Usage

### Navigation
- Click icons in the left sidebar to navigate between views
- **Image/Video icons** - Open file upload dialogs
- **Assets** - View and purchase premium content packs
- **MediaFlows** - Select video aspect ratios

### Media Management
- Click any media item to view details
- Use checkboxes to select multiple items for batch operations
- Search media using the top search bar
- Filter by media type (All, Images, Videos)

### Content Packs
- Browse 8 premium content packs in the Assets panel
- Each pack includes:
  - Preview thumbnail
  - Item count
  - Pricing
  - Purchase and download options

## Browser Support

Modern browsers with ES2020 support:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

Part of the Veridian-Q system for selling digital content packs.
