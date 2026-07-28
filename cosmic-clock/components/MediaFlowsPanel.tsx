import { X, Square, RectangleHorizontal, Monitor } from 'lucide-react';

interface MediaFlowsPanelProps {
  onClose: () => void;
  onSelectFormat: (format: string) => void;
}

const formats = [
  { 
    id: 'cinematic', 
    name: 'Cinematic', 
    icon: RectangleHorizontal, 
    aspectRatio: '21:9',
    description: 'Ultra-wide cinematic format'
  },
  { 
    id: 'widescreen', 
    name: 'Widescreen', 
    icon: Monitor, 
    aspectRatio: '16:9',
    description: 'Standard widescreen format'
  },
  { 
    id: 'square', 
    name: 'Square', 
    icon: Square, 
    aspectRatio: '1:1',
    description: 'Perfect for social media'
  },
];

export function MediaFlowsPanel({ onClose, onSelectFormat }: MediaFlowsPanelProps) {
  return (
    <div className="absolute inset-y-0 right-0 w-full lg:w-96 bg-black border-l border-gray-900 z-40 overflow-auto">
      <div className="sticky top-0 bg-black border-b border-gray-900 z-10">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-medium text-white">MediaFlows</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-400 mb-6">
          Select your preferred aspect ratio for storytelling
        </p>

        <div className="space-y-3">
          {formats.map((format) => (
            <button
              key={format.id}
              onClick={() => {
                onSelectFormat(format.id);
                alert(`Selected ${format.name} (${format.aspectRatio}) format`);
              }}
              className="w-full flex items-start space-x-4 p-4 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors border border-gray-800 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-amber-700/20 rounded-lg flex items-center justify-center border border-yellow-600/30 flex-shrink-0">
                <format.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-medium text-white">{format.name}</h3>
                  <span className="text-xs text-yellow-600 font-mono">{format.aspectRatio}</span>
                </div>
                <p className="text-xs text-gray-400">{format.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-800">
          <h3 className="text-sm font-medium text-white mb-2">Preview Settings</h3>
          <div className="space-y-2 text-xs text-gray-400">
            <div className="flex justify-between">
              <span>Quality:</span>
              <span className="text-white">High (1080p)</span>
            </div>
            <div className="flex justify-between">
              <span>Frame Rate:</span>
              <span className="text-white">24 fps</span>
            </div>
            <div className="flex justify-between">
              <span>Export Format:</span>
              <span className="text-white">MP4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
