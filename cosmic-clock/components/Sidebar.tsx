import { Home, Image, Video, Layers, Box, Wand2, Database } from 'lucide-react';
import type { ActiveView } from '../App';
import veridianLogo from 'figma:asset/e6039bbb8d1d079ac4e56e00ae93e35338e4cb35.png';
import React from 'react';

const navItems: { icon: any; label: string; view: ActiveView }[] = [
  { icon: Home, label: 'Home', view: 'home' },
  { icon: Database, label: 'Assets', view: 'assets' },
  { icon: Image, label: 'Image', view: 'image' },
  { icon: Video, label: 'Video', view: 'video' },
  { icon: Layers, label: 'MediaFlows', view: 'mediaflows' },
  { icon: Box, label: '3D', view: '3d' },
  { icon: Wand2, label: 'FinalTouch', view: 'finaltouch' },
];

interface SidebarProps {
  activeView: ActiveView;
  onViewChange: (view: ActiveView) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleNavClick = (view: ActiveView) => {
    if (view === 'image' || view === 'video') {
      fileInputRef.current?.click();
    } else {
      onViewChange(view);
    }
  };

  return (
    <div className="w-16 lg:w-20 bg-black flex flex-col items-center py-6 space-y-6 border-r border-gray-900">
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,video/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files) {
            alert(`Uploading ${e.target.files.length} file(s)...`);
          }
        }}
      />
      <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
        <img src={veridianLogo} alt="Veridian Q" className="w-full h-full object-contain" />
      </div>
      <div className="flex-1 flex flex-col space-y-3 pt-6">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => handleNavClick(item.view)}
            className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg transition-all ${
              activeView === item.view
                ? 'bg-gradient-to-br from-yellow-600 to-amber-700 text-white shadow-lg shadow-yellow-900/50' 
                : 'text-gray-500 hover:text-white hover:bg-gray-900'
            }`}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}