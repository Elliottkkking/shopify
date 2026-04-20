import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface SocialVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoData: {
    videoImg: string;
    description: string;
    product: {
      brand: string;
      name: string;
      price: string;
      image: string;
    };
  } | null;
}

export default function SocialVideoModal({ isOpen, onClose, videoData }: SocialVideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !videoData) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity z-10"
      >
        <span className="material-symbols-outlined text-4xl">close</span>
      </button>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl px-12 h-full max-h-screen py-12">
        {/* Left Video Area */}
        <div className="relative h-[80vh] aspect-[9/16] bg-zinc-900 rounded-[32px] overflow-hidden shrink-0 shadow-2xl">
          <img 
            src={videoData.videoImg} 
            alt="Social Video" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Play button or overlay could go here, for now it matches the image upload placeholder */}
            <h2 className="text-white text-3xl font-medium tracking-tight text-center px-8 shadow-black drop-shadow-lg leading-tight">
              {videoData.description}
            </h2>
          </div>
        </div>

        {/* Right Product Area */}
        <div className="w-full md:w-[400px] flex flex-col justify-center">
          <h3 className="text-white text-2xl font-bold mb-4 font-sans">Shop now</h3>
          
          <Link 
            to="/product" 
            className="bg-[#EBEBEB] p-4 rounded-2xl flex items-center gap-4 hover:scale-[1.02] transition-transform"
            onClick={onClose}
          >
            <div className="w-20 h-20 bg-white rounded-lg shrink-0 overflow-hidden flex items-center justify-center">
              <img 
                src={videoData.product.image} 
                alt={videoData.product.name}
                className="w-full h-full object-contain p-2"
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <h4 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-1">{videoData.product.brand}</h4>
              <p className="text-[12px] text-gray-800 leading-tight mb-2 line-clamp-2 pr-2">
                {videoData.product.name}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[13px] font-bold text-black">{videoData.product.price}</span>
                <span className="bg-[#E81E57] text-white text-[12px] font-bold py-1.5 px-4 rounded-md uppercase tracking-wider">
                  Shop
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 flex flex-col items-center justify-center text-white cursor-pointer hover:opacity-70 transition-opacity">
        <span className="material-symbols-outlined text-2xl">keyboard_arrow_up</span>
        <span className="text-xs font-medium tracking-wide">Scroll up for more</span>
      </div>
    </div>
  );
}
