import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SearchModal from '../components/SearchModal';
import CouponModal from '../components/CouponModal';
import { storefrontAPI } from '../lib/shopifyClient';
import { ShopifyCollection } from '../lib/shopifyTypes';

const categoryThemes: Record<string, any> = {
  cooling: {
    subtitle: 'Precision climate control for ultimate comfort',
    description: 'Explore our state-of-the-art collection of air conditioners and sculptural fans engineered for silent, powerful cooling.',
    theme: 'bg-blue-50/50',
    accent: 'bg-blue-600',
    textColor: 'text-blue-900',
    heroImg: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=2000&auto=format&fit=crop',
  },
  heating: {
    subtitle: 'Silent warmth for the cold months',
    description: 'Transform your space into a cozy haven with our energy-efficient heaters, towel warmers, and electric fireplaces.',
    theme: 'bg-amber-50/50',
    accent: 'bg-amber-700',
    textColor: 'text-amber-950',
    heroImg: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2000&auto=format&fit=crop',
  },
  kitchen: {
    subtitle: 'Culinary technology refined',
    description: 'Upgrade your countertops with smart air fryers, professional blenders, and precision cookers.',
    theme: 'bg-zinc-100',
    accent: 'bg-zinc-800',
    textColor: 'text-zinc-900',
    heroImg: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2000&auto=format&fit=crop',
  },
  outdoor: {
    subtitle: 'Extend your comfort outside',
    description: 'Create the ultimate patio experience with our fire pit grills, pizza ovens, and durable outdoor fans.',
    theme: 'bg-stone-100',
    accent: 'bg-stone-700',
    textColor: 'text-stone-900',
    heroImg: 'https://images.unsplash.com/photo-1605335105282-f5fcd66a1a15?q=80&w=2000&auto=format&fit=crop',
  }
};

export default function Category() {
  const { id } = useParams();
  const handle = id || 'cooling';
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [collection, setCollection] = useState<ShopifyCollection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCollection() {
      setLoading(true);
      const fetchedCollection = await storefrontAPI.getCollection(handle);
      setCollection(fetchedCollection);
      setLoading(false);
    }
    fetchCollection();
  }, [handle]);
  
  const themeData = categoryThemes[handle.toLowerCase()] || categoryThemes['cooling'];

  if (loading) return <div className="p-20 text-center">Loading collection...</div>;
  if (!collection) return <div className="p-20 text-center">Collection not found</div>;

  return (
    <div className={`min-h-screen ${themeData.theme} selection:bg-[var(--color-accent)] selection:text-white pb-0 transition-colors duration-500`}>
      <CouponModal />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* TopNavBar */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-[40px] py-[24px] w-full bg-white/90 backdrop-blur-md border-b border-[var(--color-border)] transition-all">
        <Link to="/" className="flex-none flex items-center">
          <img alt="TMWINGS Logo" className="h-[48px] md:h-[72px] w-auto mix-blend-multiply object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ugtS65c4Xoe-7ZGZ09RxfgQ2FN1rdDuSrTe-0rZB0BPPum7nE98hK1nKcj2N0hvyNh83cHwq6uV8Hh65uDtx_0Wa0B5MmQ9ecrXzsAY_qX2XC9OxuRpsqPBlPavRu_wy6QmdhZ1oNdswiwpVM1Eg4nU983p7gOdD6vjd6AYBmuWFTnYw5NXaPdguuSuf37ca_DvJLPCw9XrgduwU0ur6zSLdLJzn7uaY3Y1Y04lcG6rieWVunIwXBgIs1WmuBdkaFjdV13aRiyv6g" />
        </Link>
        <nav className="hidden md:flex items-center gap-[32px]">
          <Link className="text-[12px] font-bold text-[var(--color-text-main)] hover:opacity-70 transition-colors pb-[4px] uppercase tracking-[1px]" to="/category/kitchen">Kitchen</Link>
          <Link className="text-[12px] font-bold text-[var(--color-text-main)] hover:opacity-70 transition-colors pb-[4px] uppercase tracking-[1px]" to="/category/cooling">Airflow</Link>
          <Link className="text-[12px] font-bold text-[var(--color-text-main)] hover:opacity-70 transition-colors pb-[4px] uppercase tracking-[1px]" to="/category/heating">Heating</Link>
          <Link className="text-[12px] font-bold text-[var(--color-text-main)] hover:opacity-70 transition-colors pb-[4px] uppercase tracking-[1px]" to="/category/outdoor">Outdoor</Link>
        </nav>
        <div className="flex-none flex justify-end items-center gap-[24px] text-[var(--color-text-main)]">
          <button onClick={() => setIsSearchOpen(true)} className="flex items-center hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer"><span className="material-symbols-outlined">search</span></button>
          <Link className="flex items-center relative hover:opacity-70 transition-opacity" to="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute -top-1.5 -right-1.5 bg-[var(--color-accent)] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">2</span>
          </Link>
        </div>
      </header>

      {/* Category Hero */}
      <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden border-b border-[var(--color-border)]">
        <img src={collection.image?.url || themeData.heroImg} alt={collection.title} className="w-full h-full object-cover opacity-90" />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent`}></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-5xl mx-auto w-full text-white">
          <span className="text-[11px] font-bold uppercase tracking-[2px] mb-3 opacity-90 drop-shadow-sm">{themeData.subtitle}</span>
          <h1 className="text-[40px] md:text-[60px] font-extrabold tracking-tight headline leading-none drop-shadow-md">{collection.title}</h1>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 xl:px-[40px] py-[60px] md:py-[100px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
          <div className="max-w-xl">
            <h2 className={`text-[24px] font-bold ${themeData.textColor} headline`}>Explore {collection.title}</h2>
            <p className="text-[15px] font-medium text-gray-600 mt-3">{themeData.description}</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4 hidden md:flex">
             <div className="px-4 py-2 border border-gray-300 text-xs font-bold uppercase tracking-wider text-gray-700 bg-white">Filters</div>
             <div className="px-4 py-2 border border-gray-300 text-xs font-bold uppercase tracking-wider text-gray-700 bg-white">Sort By</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {collection.products.edges.map(({ node: product }) => {
            const price = product.priceRange.minVariantPrice;
            const image = product.images.edges[0]?.node?.url;
            return (
              <Link to={`/product/${product.handle}`} key={product.id} className="group relative block cursor-pointer bg-white">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-4 border border-gray-100">
                  {image && (
                    <img src={image} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  )}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-black">Quick View</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[14px] font-bold text-gray-900 group-hover:text-black transition-colors">{product.title}</h3>
                    <p className="text-[13px] font-medium text-gray-500 mt-1">{price.amount} {price.currencyCode}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
