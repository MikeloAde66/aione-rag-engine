import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { MediaGrid } from './components/MediaGrid';
import { DetailPanel } from './components/DetailPanel';
import { VideoPlayer } from './components/VideoPlayer';
import { AssetsPanel } from './components/AssetsPanel';
import { MediaFlowsPanel } from './components/MediaFlowsPanel';

export type MediaType = 'image' | 'video';

export interface MediaItem {
  id: string;
  type: MediaType;
  url: string;
  thumbnailUrl?: string;
  title: string;
  artist: string;
  date: string;
  format: string;
  fileSize: string;
  dimensions: string;
  duration?: string;
  location: string;
  lastReplaced: {
    user: string;
    date: string;
  };
  created: {
    user: string;
    date: string;
  };
}

export type ActiveView = 'home' | 'assets' | 'image' | 'video' | 'mediaflows' | '3d' | 'finaltouch';

export default function App() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video'>('all');
  const [showAssetsPanel, setShowAssetsPanel] = useState(false);
  const [showMediaFlows, setShowMediaFlows] = useState(false);

  const handleViewChange = (view: ActiveView) => {
    setActiveView(view);
    if (view === 'mediaflows') {
      setShowMediaFlows(true);
    } else if (view === 'assets') {
      setShowAssetsPanel(true);
    }
  };

  return (
    <div className="flex h-screen bg-black text-gray-100 overflow-hidden">
      <Sidebar activeView={activeView} onViewChange={handleViewChange} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterType={filterType}
          onFilterChange={setFilterType}
          checkedItems={checkedItems}
          onShowAssets={() => setShowAssetsPanel(true)}
        />
        <div className="flex-1 flex overflow-hidden relative">
          <MediaGrid 
            selectedMedia={selectedMedia} 
            onSelectMedia={setSelectedMedia}
            checkedItems={checkedItems}
            onCheckedItemsChange={setCheckedItems}
            searchQuery={searchQuery}
            filterType={filterType}
            activeView={activeView}
          />
          {selectedMedia && selectedMedia.type === 'video' && (
            <VideoPlayer media={selectedMedia} onClose={() => setSelectedMedia(null)} />
          )}
          {selectedMedia && selectedMedia.type === 'image' && (
            <DetailPanel artwork={selectedMedia} onClose={() => setSelectedMedia(null)} />
          )}
          {showAssetsPanel && (
            <AssetsPanel onClose={() => setShowAssetsPanel(false)} />
          )}
          {showMediaFlows && (
            <MediaFlowsPanel 
              onClose={() => setShowMediaFlows(false)} 
              onSelectFormat={(format) => console.log('Selected format:', format)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
