import { useState, useRef } from 'react';
import { Check, Upload, Play } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import type { MediaItem, ActiveView } from '../App';

interface MediaGridProps {
  selectedMedia: MediaItem | null;
  onSelectMedia: (media: MediaItem) => void;
  checkedItems: Set<string>;
  onCheckedItemsChange: (items: Set<string>) => void;
  searchQuery: string;
  filterType: 'all' | 'image' | 'video';
  activeView: ActiveView;
}

const mastersList: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1763070605752-fe349372a651?w=800&q=80',
    title: 'Sacred Plane: Substrate Texture',
    artist: 'Michael Bradley',
    date: '2026',
    format: 'JPG',
    fileSize: '2.4 MB',
    dimensions: '1920 × 1080',
    location: 'Masters Collection',
    lastReplaced: {
      user: 'Michael Bradley',
      date: 'Jan 19, 2026 4:24 am'
    },
    created: {
      user: 'Michael Bradley',
      date: 'Jan 19, 2026 4:24 am'
    }
  },
  {
    id: '2',
    type: 'video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1694727504199-44bebbe72ad2?w=400&q=80',
    title: 'Sign in for Style',
    artist: 'Veridian Studios',
    date: '2026',
    format: 'MP4',
    fileSize: '8.5 MB',
    dimensions: '1920 × 1080',
    duration: '0:10',
    location: 'Masters Collection',
    lastReplaced: {
      user: 'Michael Bradley',
      date: 'Jan 19, 2026 4:22 am'
    },
    created: {
      user: 'Michael Bradley',
      date: 'Jan 19, 2026 4:22 am'
    }
  },
  {
    id: '3',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1673016551086-450206827c73?w=800&q=80',
    title: 'Portrait Study',
    artist: 'Michael Bradley',
    date: '2026',
    format: 'JPG',
    fileSize: '3.1 MB',
    dimensions: '1920 × 1080',
    location: 'Masters Collection',
    lastReplaced: {
      user: 'Michael Bradley',
      date: 'Jan 19, 2026 4:20 am'
    },
    created: {
      user: 'Michael Bradley',
      date: 'Jan 19, 2026 4:20 am'
    }
  },
  {
    id: '4',
    type: 'video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1725711362403-6bea76639643?w=400&q=80',
    title: 'Q_BONDS WEATHER',
    artist: 'Veridian Studios',
    date: '2026',
    format: 'MP4',
    fileSize: '7.2 MB',
    dimensions: '1920 × 1080',
    duration: '0:10',
    location: 'Masters Collection',
    lastReplaced: {
      user: 'Michael Bradley',
      date: 'Jan 19, 2026 4:18 am'
    },
    created: {
      user: 'Michael Bradley',
      date: 'Jan 19, 2026 4:18 am'
    }
  }
];

export function MediaGrid({ 
  selectedMedia, 
  onSelectMedia, 
  checkedItems, 
  onCheckedItemsChange,
  searchQuery,
  filterType,
  activeView
}: MediaGridProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleCheck = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    onCheckedItemsChange(newChecked);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter(file => 
      file.type.startsWith('image/') || file.type.startsWith('video/')
    );
    
    if (validFiles.length > 0) {
      alert(`Uploading ${validFiles.length} file(s)...`);
    }
  };

  // Filter media based on search and filter type
  const filteredMedia = mastersList.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.artist.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || item.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div 
      className="flex-1 overflow-auto bg-black p-4 lg:p-6"
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*,video/*"
        onChange={(e) => {
          if (e.target.files) {
            const files = Array.from(e.target.files);
            handleFiles(files);
          }
        }}
        className="hidden"
      />

      {checkedItems.size > 0 && (
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-3 lg:p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-300">{checkedItems.size} item(s) selected</span>
          </div>
        </div>
      )}

      <div className="mb-4">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Masters Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
          {filteredMedia.map((media) => (
            <div
              key={media.id}
              onClick={() => onSelectMedia(media)}
              className={`relative group cursor-pointer rounded-lg overflow-hidden bg-gray-900 border-2 transition-all ${
                selectedMedia?.id === media.id
                  ? 'border-yellow-600 ring-2 ring-yellow-600 ring-opacity-50'
                  : 'border-transparent hover:border-gray-700'
              }`}
            >
              <div className="aspect-video relative bg-black">
                <ImageWithFallback
                  src={media.type === 'video' ? media.thumbnailUrl! : media.url}
                  alt={media.title}
                  className="w-full h-full object-cover"
                />
                
                {media.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-black/70 rounded-full flex items-center justify-center group-hover:bg-yellow-600 transition-colors">
                      <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-2 left-2">
                  <button
                    onClick={(e) => toggleCheck(media.id, e)}
                    className={`w-6 h-6 rounded flex items-center justify-center transition-all ${
                      checkedItems.has(media.id)
                        ? 'bg-yellow-600 text-white'
                        : 'bg-black/50 text-transparent group-hover:text-white group-hover:bg-gray-700/70'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>

                {media.duration && (
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                    {media.duration}
                  </div>
                )}
              </div>
              
              <div className="p-3 bg-black/40 border-t border-gray-800">
                <h3 className="text-sm font-medium text-white truncate">{media.title}</h3>
                <p className="text-xs text-gray-400 truncate">{media.artist}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-gray-600">{media.format}</p>
                  <p className="text-xs text-gray-600">{media.fileSize}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredMedia.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No media found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
