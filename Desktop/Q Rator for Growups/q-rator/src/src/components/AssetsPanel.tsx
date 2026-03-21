import { X, Plus, Database, Folder, Image, Video, ShoppingCart, Download } from 'lucide-react';

interface AssetsPanelProps {
  onClose: () => void;
}

const packs = [
  { 
    id: '1', 
    name: 'Masters Pack', 
    type: 'mixed', 
    count: 156,
    price: '$49.99',
    thumbnail: 'https://images.unsplash.com/photo-1763070605752-fe349372a651?w=400&q=80',
    description: 'Complete collection of classical masterpieces'
  },
  { 
    id: '2', 
    name: 'Portrait Studies', 
    type: 'image', 
    count: 42,
    price: '$29.99',
    thumbnail: 'https://images.unsplash.com/photo-1673016551086-450206827c73?w=400&q=80',
    description: 'Professional portrait artwork collection'
  },
  { 
    id: '3', 
    name: 'Story Reels', 
    type: 'video', 
    count: 28,
    price: '$39.99',
    thumbnail: 'https://images.unsplash.com/photo-1694727504199-44bebbe72ad2?w=400&q=80',
    description: '10-second cinematic storytelling videos'
  },
  { 
    id: '4', 
    name: 'Landscape Collection', 
    type: 'image', 
    count: 73,
    price: '$34.99',
    thumbnail: 'https://images.unsplash.com/photo-1725711362403-6bea76639643?w=400&q=80',
    description: 'Stunning landscape artwork bundle'
  },
  { 
    id: '5', 
    name: 'Abstract Motion', 
    type: 'video', 
    count: 19,
    price: '$44.99',
    thumbnail: 'https://images.unsplash.com/photo-1627757886697-0c1bd96176fa?w=400&q=80',
    description: 'Modern abstract video art collection'
  },
  { 
    id: '6', 
    name: 'Renaissance Bundle', 
    type: 'mixed', 
    count: 89,
    price: '$54.99',
    thumbnail: 'https://images.unsplash.com/photo-1763070605752-fe349372a651?w=400&q=80',
    description: 'Renaissance era art and animations'
  },
  { 
    id: '7', 
    name: 'Cinematic Presets', 
    type: 'video', 
    count: 35,
    price: '$59.99',
    thumbnail: 'https://images.unsplash.com/photo-1760723986612-f12e9e9855a0?w=400&q=80',
    description: 'Professional cinematic video templates'
  },
  { 
    id: '8', 
    name: 'Texture Library', 
    type: 'image', 
    count: 124,
    price: '$39.99',
    thumbnail: 'https://images.unsplash.com/photo-1673016551086-450206827c73?w=400&q=80',
    description: 'High-resolution texture collection'
  },
];

export function AssetsPanel({ onClose }: AssetsPanelProps) {
  const handlePurchase = (pack: typeof packs[0]) => {
    alert(`Purchase ${pack.name} for ${pack.price}`);
  };

  const handleDownloadPack = (pack: typeof packs[0]) => {
    alert(`Downloading ${pack.name}...`);
  };

  return (
    <div className="absolute inset-y-0 right-0 w-full lg:w-[28rem] bg-black border-l border-gray-900 z-40 overflow-auto">
      <div className="sticky top-0 bg-black border-b border-gray-900 z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="w-5 h-5 text-yellow-600" />
            <h2 className="text-lg font-medium text-white">Packs & Collections</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-6 p-4 bg-gradient-to-r from-yellow-600/20 to-amber-700/20 rounded-lg border border-yellow-600/30">
          <h3 className="text-sm font-medium text-white mb-1">Premium Content</h3>
          <p className="text-xs text-gray-400">Professional packs curated for creatives</p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Available Packs</h3>
          <div className="space-y-4">
            {packs.map((pack) => (
              <div
                key={pack.id}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-600/50 transition-all group"
              >
                <div className="aspect-video relative bg-black">
                  <img 
                    src={pack.thumbnail} 
                    alt={pack.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute top-2 right-2">
                    <div className="px-2 py-1 bg-yellow-600 text-white text-xs font-bold rounded">
                      {pack.price}
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center space-x-2 text-white">
                      {pack.type === 'video' ? (
                        <Video className="w-4 h-4 text-yellow-500" />
                      ) : pack.type === 'image' ? (
                        <Image className="w-4 h-4 text-yellow-500" />
                      ) : (
                        <Folder className="w-4 h-4 text-yellow-500" />
                      )}
                      <span className="text-xs text-gray-400">{pack.count} items</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-3">
                  <h4 className="text-sm font-medium text-white mb-1">{pack.name}</h4>
                  <p className="text-xs text-gray-400 mb-3">{pack.description}</p>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePurchase(pack)}
                      className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-yellow-600 to-amber-700 hover:from-yellow-700 hover:to-amber-800 rounded text-white transition-colors text-xs"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      <span>Purchase</span>
                    </button>
                    <button
                      onClick={() => handleDownloadPack(pack)}
                      className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white transition-colors"
                      title="Download Preview"
                    >
                      <Download className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
