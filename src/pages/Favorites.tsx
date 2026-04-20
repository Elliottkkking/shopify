import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchModal from '../components/SearchModal';
import Footer from '../components/Footer';

export default function Favorites() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const favItems = [
    {
      id: 1,
      name: "Smart Air Fryer Pro",
      brand: "TMWINGS Series",
      price: "$189.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZutS4PnOmi3rOR1xrHxrJ8025zmSkKU8twaYKq1FqFuLAWV2bfeBGEJQeUuAy3o4lyRiBgfI9RYj-fhU_DruQCXVz3DT1MTAmmaSuQcrbtK0_mUPFM-Kamp1K6kADfuDIGKK5WIVdN05MuakG9AsuO6bvOp3foVB6vYA4GRibScHMsQcWSZHUNtyEZNS23vj2zD3e9Rc7s4zAta3WVeam99p88PnrLyD18AGYWMda_o5J97ce2bNRoFZ5wmoVUTKsgGi6L3lTSM8"
    },
    {
      id: 2,
      name: "Silent Flow Desk Heater",
      brand: "TMWINGS Series",
      price: "$120.00",
      image: "https://lh3.googleusercontent.com/aida/ADBb0uiessnM-KOoJw2-onKF08sEC20KpTh_X4Mj_bcabjt-dG04BZ_dGWuhwE3-ZpCdtYKR3f2NKV2sx_BnntU0lVHEPXAFwL1ZeK-C6auSkDketIgdxYzLhAZcVZ8YF9aB7W-VX6vgzrXEe08LNBPDhldzQ35bFeSCWm-fZ_5Rjm_ccTJUdxZv6DEMcvsVIPkUc7JjGSyrKTe8haIufkh2NKgTh64Li8J_JRrmuFL3cQPUdYFdVXFHW3femaN-0Kz-xOAD0nCapO9Oqg"
    },
    {
      id: 3,
      name: "Aero Purifier Series 300",
      brand: "Air Flow Co.",
      price: "$249.50",
      image: "https://lh3.googleusercontent.com/aida/ADBb0ujMSH_RbeM1jLtk0_G-iLoDJVX-aSYUl0hTsEfcZnjzyrBXW106unbBDLpITiMCVOuOn5NZ8sUw_Wb68bEpjIM-QS6-2pEa7xiThsI7s4xaQ0aLQOxOhr6rDidpogoNcvAok-NqVdGk9sQiXaIQzSiOuZV6eWqag-FajFlhWTvW2IqBizUe5SMZW2uUwpiIO1YjFQ5GPWwLQXmtEdbEhlR8cVnNSEFJ5oTAE8YvRiynCt8x6PisCBOmcZaMuv8ToHgqzE23MI-XOg"
    }
  ];

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text-main)] selection:bg-[var(--color-accent)] selection:text-white min-h-screen">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Promo Banner */}
      <div className="w-full bg-[var(--color-text-main)] text-[var(--color-bg)] py-[12px] px-[24px] flex items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.1)] relative z-50">
        <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[2px] headline">
          ⚡ 20% OFF SITEWIDE. AUTOMATICALLY APPLIED AT CHECKOUT.
        </span>
      </div>

      {/* TopNavBar */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-[40px] py-[24px] w-full bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <Link to="/" className="flex-none flex items-center">
          <img alt="TMWINGS Logo" className="h-[72px] md:h-[96px] w-auto mix-blend-multiply object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ugtS65c4Xoe-7ZGZ09RxfgQ2FN1rdDuSrTe-0rZB0BPPum7nE98hK1nKcj2N0hvyNh83cHwq6uV8Hh65uDtx_0Wa0B5MmQ9ecrXzsAY_qX2XC9OxuRpsqPBlPavRu_wy6QmdhZ1oNdswiwpVM1Eg4nU983p7gOdD6vjd6AYBmuWFTnYw5NXaPdguuSuf37ca_DvJLPCw9XrgduwU0ur6zSLdLJzn7uaY3Y1Y04lcG6rieWVunIwXBgIs1WmuBdkaFjdV13aRiyv6g" />
        </Link>
        <nav className="hidden md:flex items-center gap-[32px]">
          <a className="text-[12px] font-medium text-[var(--color-text-main)] border-b border-[var(--color-text-main)] pb-[4px] uppercase tracking-[1px]" href="#">Kitchen</a>
          <a className="text-[12px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-main)] transition-colors pb-[4px] uppercase tracking-[1px]" href="#">Laundry</a>
          <a className="text-[12px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-main)] transition-colors pb-[4px] uppercase tracking-[1px]" href="#">Smart Home</a>
          <a className="text-[12px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-main)] transition-colors pb-[4px] uppercase tracking-[1px]" href="#">Outlet</a>
        </nav>
        <div className="flex items-center gap-[24px]">
          <button onClick={() => setIsSearchOpen(true)} className="hidden lg:flex items-center bg-[var(--color-surface)] border border-[var(--color-border)] px-[16px] py-[8px] cursor-pointer hover:bg-[var(--color-border)] transition-colors">
            <span className="material-symbols-outlined text-[var(--color-text-secondary)] text-[18px]">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-[12px] w-48 outline-none pl-2 text-[var(--color-text-main)] placeholder:text-[var(--color-text-secondary)] placeholder:tracking-[1px] pointer-events-none" placeholder="SEARCH APPLIANCES..." type="text" readOnly/>
          </button>
          <div className="flex items-center gap-[16px]">
            <Link to="/favorites" className="transition-opacity text-[var(--color-text-main)] opacity-100 bg-transparent border-none cursor-pointer flex items-center">
              <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </Link>
            <Link to="/cart" className="transition-opacity text-[var(--color-text-main)] hover:opacity-70 bg-transparent border-none cursor-pointer flex items-center relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute -top-1.5 -right-1.5 bg-[var(--color-accent)] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">2</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-[40px] py-[64px]">
        <h1 className="text-[32px] md:text-[40px] font-semibold text-[var(--color-text-main)] mb-[16px] headline tracking-tight">Saved Items</h1>
        <p className="text-[var(--color-text-secondary)] text-[14px] uppercase tracking-[1px] font-medium mb-[64px] border-b border-[var(--color-border)] pb-[24px]">
          {favItems.length} Products
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[32px]">
          {favItems.map((item) => (
            <Link to="/product" key={item.id} className="group block relative border border-[var(--color-border)] p-[16px] hover:border-[var(--color-text-main)] transition-colors">
              <button className="absolute top-[20px] right-[20px] z-10 text-[var(--color-text-main)] hover:text-red-500 transition-colors bg-white w-8 h-8 flex items-center justify-center shadow-md cursor-pointer border-none rounded-full">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </button>
              
              <div className="aspect-[4/5] bg-[var(--color-surface)] mb-[24px] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <h4 className="font-semibold text-[14px] leading-tight mb-[4px] text-[var(--color-text-main)] uppercase tracking-[1px]">{item.brand}</h4>
              <h3 className="text-[13px] text-[var(--color-text-secondary)] mb-[12px]">{item.name}</h3>
              <p className="text-[14px] font-medium text-[var(--color-text-main)]">{item.price}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
