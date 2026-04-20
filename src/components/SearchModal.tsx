import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Delay focus slightly to ensure the modal has rendered and input is focusable
      setTimeout(() => inputRef.current?.focus(), 100);
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const popularSearches = [
    "Air Purifier Pro",
    "Ceramic Heater",
    "Smart Fans",
    "Kitchen Series",
    "Slushi Machine",
    "HEPA Filters"
  ];

  const suggestedProducts = [
    {
      name: "TMWINGS Pro Air Fryer 5qt",
      price: "189.00 USD",
      image: "https://images.unsplash.com/photo-1626880054770-ae060a0b6863?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Aero Purifier Series 300",
      price: "249.50 USD",
      image: "https://images.unsplash.com/photo-1581452178044-8fc161f38e55?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Silent Flow Desk Heater",
      price: "120.00 USD",
      image: "https://images.unsplash.com/photo-1582218413233-a3d168d89e5a?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="fixed inset-0 z-[200] bg-[var(--color-bg)] flex flex-col">
      {/* Search Header */}
      <div className="p-[40px] md:p-[64px] border-b border-[var(--color-border)] flex flex-col justify-end min-h-[30vh] bg-[var(--color-surface)] relative">
        <button 
          onClick={onClose}
          className="absolute top-[40px] right-[40px] md:top-[64px] md:right-[64px] text-[var(--color-text-main)] hover:opacity-70 transition-opacity p-[16px] -m-[16px] z-10 cursor-pointer"
          aria-label="Close search"
        >
          <span className="material-symbols-outlined text-[32px] md:text-[40px] font-light">close</span>
        </button>

        <div className="flex items-center gap-[24px] max-w-7xl mx-auto w-full relative">
          <span className="material-symbols-outlined text-[40px] md:text-[56px] font-light text-[var(--color-text-secondary)] hidden sm:block">search</span>
          <input 
            ref={inputRef}
            type="text" 
            placeholder="WHAT ARE YOU LOOKING FOR?"
            className="w-full bg-transparent border-none outline-none text-[28px] sm:text-[48px] md:text-[64px] font-semibold text-[var(--color-text-main)] placeholder:text-[var(--color-text-secondary)] placeholder:opacity-40 tracking-tight"
          />
        </div>
      </div>

      {/* Search Body */}
      <div className="flex-1 overflow-y-auto p-[40px] md:p-[64px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[120px]">
          {/* Left Column: Trending/Popular */}
          <div className="lg:col-span-4">
            <h3 className="text-[12px] font-semibold uppercase tracking-[2px] text-[var(--color-text-secondary)] mb-[32px]">Trending Searches</h3>
            <ul className="flex flex-col gap-[24px]">
              {popularSearches.map((term, i) => (
                <li key={i}>
                  <button className="text-[20px] font-medium text-[var(--color-text-main)] hover:text-[var(--color-text-secondary)] transition-colors flex items-center gap-[16px] cursor-pointer bg-transparent border-none p-0 text-left">
                    <span className="material-symbols-outlined text-[20px] font-light opacity-50">trending_up</span>
                    {term}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Suggested Products */}
          <div className="lg:col-span-8">
            <h3 className="text-[12px] font-semibold uppercase tracking-[2px] text-[var(--color-text-secondary)] mb-[32px]">Suggested Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px]">
              {suggestedProducts.map((prod, i) => (
                <Link to="/product" key={i} className="group block" onClick={onClose}>
                  <div className="aspect-[4/5] bg-[#f0f0f0] mb-[24px] overflow-hidden border border-[var(--color-border)]">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <h4 className="font-semibold text-[14px] leading-tight mb-[8px] text-[var(--color-text-main)] uppercase tracking-[1px]">{prod.name}</h4>
                  <p className="text-[13px] text-[var(--color-text-secondary)]">{prod.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
