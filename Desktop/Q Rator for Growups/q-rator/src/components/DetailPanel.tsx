import { X, FileText, Info, History, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { MediaItem } from '../App';

interface DetailPanelProps {
  artwork: MediaItem;
  onClose: () => void;
}

export function DetailPanel({ artwork, onClose }: DetailPanelProps) {
  const handleDownload = () => {
    alert(`Downloading ${artwork.title}...`);
  };

  return (
    <div className="w-full lg:w-96 bg-black border-l border-gray-900 overflow-auto">
      <div className="sticky top-0 bg-black border-b border-gray-900 z-10">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-sm font-medium text-white truncate">{artwork.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex border-b border-gray-900">
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-yellow-600 border-b-2 border-yellow-600">
            <Info className="w-4 h-4" />
            <span className="text-sm">Summary</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-gray-400 hover:text-white transition-colors">
            <FileText className="w-4 h-4" />
            <span className="text-sm">Metadata</span>
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
          <ImageWithFallback
            src={artwork.url}
            alt={artwork.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium text-white mb-1">{artwork.title}</h3>
          <p className="text-sm text-yellow-500">{artwork.artist}</p>
          <p className="text-sm text-gray-400">{artwork.date}</p>
        </div>

        <div className="space-y-4">
          <DetailRow label="Location" value={artwork.location} />
          <DetailRow label="Format" value={artwork.format} />
          <DetailRow label="File size" value={artwork.fileSize} />
          <DetailRow label="Dimensions" value={artwork.dimensions} />
          
          <div className="pt-2 border-t border-gray-800">
            <DetailRow 
              label="Last replaced" 
              value={
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-600 to-amber-700 flex items-center justify-center text-xs text-white">
                      MB
                    </div>
                    <div>
                      <div className="text-sm text-white">{artwork.lastReplaced.user}</div>
                      <div className="text-xs text-gray-400">{artwork.lastReplaced.date}</div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          <div className="pt-2 border-t border-gray-800">
            <DetailRow 
              label="Created" 
              value={
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-600 to-amber-700 flex items-center justify-center text-xs text-white">
                      MB
                    </div>
                    <div>
                      <div className="text-sm text-white">{artwork.created.user}</div>
                      <div className="text-xs text-gray-400">{artwork.created.date}</div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <button 
            onClick={handleDownload}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-600 to-amber-700 hover:from-yellow-700 hover:to-amber-800 rounded-lg text-white transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Download</span>
          </button>

          <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-white transition-colors border border-gray-800">
            <History className="w-4 h-4" />
            <span className="text-sm">Version History</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ 
  label, 
  value
}: { 
  label: string; 
  value: React.ReactNode;
}) {
  return (
    <div className="flex justify-between items-start">
      <span className="text-sm text-gray-400">{label}</span>
      <div className="text-sm text-white text-right">
        {value}
      </div>
    </div>
  );
}
