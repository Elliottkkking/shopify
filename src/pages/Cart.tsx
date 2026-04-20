import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchModal from '../components/SearchModal';
import Footer from '../components/Footer';
import { ProductVariant } from '../lib/shopifyTypes';

// Mock structure representing a Shopify Cart line item
type ShopifyCartLine = {
  id: string;
  quantity: number;
  merchandise: ProductVariant & {
    product: {
      id: string;
      handle: string;
    }
  };
};

export default function Cart() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Storefront API typical cart return payload structure
  const [cartLines, setCartLines] = useState<ShopifyCartLine[]>([
    {
      id: "gid://shopify/CartLine/1",
      quantity: 1,
      merchandise: {
        id: "gid://shopify/ProductVariant/smart-air-fryers-default",
        title: "Default Title",
        availableForSale: true,
        price: { amount: "189.00", currencyCode: "USD" },
        compareAtPrice: null,
        selectedOptions: [{ name: "Color", value: "Matte Black" }],
        image: {
          url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZutS4PnOmi3rOR1xrHxrJ8025zmSkKU8twaYKq1FqFuLAWV2bfeBGEJQeUuAy3o4lyRiBgfI9RYj-fhU_DruQCXVz3DT1MTAmmaSuQcrbtK0_mUPFM-Kamp1K6kADfuDIGKK5WIVdN05MuakG9AsuO6bvOp3foVB6vYA4GRibScHMsQcWSZHUNtyEZNS23vj2zD3e9Rc7s4zAta3WVeam99p88PnrLyD18AGYWMda_o5J97ce2bNRoFZ5wmoVUTKsgGi6L3lTSM8",
          altText: "Smart Air Fryer Pro"
        },
        product: {
          id: "gid://shopify/Product/smart-air-fryers",
          handle: "smart-air-fryers"
        }
      }
    },
    {
      id: "gid://shopify/CartLine/2",
      quantity: 1,
      merchandise: {
        id: "gid://shopify/ProductVariant/space-heaters-default",
        title: "Default Title",
        availableForSale: true,
        price: { amount: "120.00", currencyCode: "USD" },
        compareAtPrice: null,
        selectedOptions: [{ name: "Color", value: "Cloud White" }],
        image: {
          url: "https://lh3.googleusercontent.com/aida/ADBb0uiessnM-KOoJw2-onKF08sEC20KpTh_X4Mj_bcabjt-dG04BZ_dGWuhwE3-ZpCdtYKR3f2NKV2sx_BnntU0lVHEPXAFwL1ZeK-C6auSkDketIgdxYzLhAZcVZ8YF9aB7W-VX6vgzrXEe08LNBPDhldzQ35bFeSCWm-fZ_5Rjm_ccTJUdxZv6DEMcvsVIPkUc7JjGSyrKTe8haIufkh2NKgTh64Li8J_JRrmuFL3cQPUdYFdVXFHW3femaN-0Kz-xOAD0nCapO9Oqg",
          altText: "Silent Flow Desk Heater"
        },
        product: {
          id: "gid://shopify/Product/space-heaters",
          handle: "space-heaters"
        }
      }
    }
  ]);

  const updateQty = (id: string, delta: number) => {
    setCartLines(prev => prev.map(line => {
      if (line.id === id) {
        const newQty = Math.max(1, line.quantity + delta);
        return { ...line, quantity: newQty };
      }
      return line;
    }));
  };

  const removeItem = (id: string) => {
    setCartLines(prev => prev.filter(line => line.id !== id));
  };

  const subtotal = cartLines.reduce((sum, line) => sum + (parseFloat(line.merchandise.price.amount) * line.quantity), 0);
  const discount = subtotal * 0.20; // 20% discount
  const total = subtotal - discount;

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text-main)] selection:bg-[var(--color-accent)] selection:text-white min-h-screen">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Promo Banner */}
      <div className="w-full bg-[var(--color-text-main)] text-[var(--color-bg)] py-[12px] px-[24px] flex items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.1)] relative z-50">
        <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[2px] headline">
          ⚡ 20% OFF SITEWIDE. DISCOUNTS AUTO-CALCULATED IN CART.
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
            <Link to="/cart" className="transition-opacity text-[var(--color-text-main)] opacity-100 bg-transparent border-none cursor-pointer flex items-center relative">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
              <span className="absolute -top-1.5 -right-1.5 bg-[var(--color-accent)] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">{cartLines.reduce((acc, c) => acc + c.quantity, 0)}</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-[40px] py-[64px]">
        <h1 className="text-[32px] md:text-[40px] font-semibold text-[var(--color-text-main)] mb-[64px] headline tracking-tight border-b border-[var(--color-border)] pb-[24px]">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-[120px]">
          {/* Cart Items */}
          <div className="lg:col-span-7 flex flex-col gap-[40px]">
            {cartLines.length === 0 ? (
              <p className="text-[var(--color-text-secondary)]">Your cart is empty.</p>
            ) : (
              cartLines.map((line) => (
                <div key={line.id} className="flex gap-[32px] pb-[40px] border-b border-[var(--color-border)]">
                  <Link to={`/product/${line.merchandise.product.handle}`} className="w-[120px] md:w-[160px] aspect-[4/5] bg-[var(--color-surface)] flex-shrink-0 relative overflow-hidden border border-[var(--color-border)] opacity-100 hover:opacity-90 transition-opacity">
                    <img src={line.merchandise.image?.url} alt={line.merchandise.image?.altText} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
                  </Link>
                  <div className="flex flex-col flex-1 justify-between py-[8px]">
                    <div>
                      <div className="flex justify-between items-start mb-[8px]">
                        <Link to={`/product/${line.merchandise.product.handle}`} className="font-semibold text-[16px] text-[var(--color-text-main)] uppercase tracking-[1px] hover:opacity-70 transition-opacity">
                          {line.merchandise.image?.altText || line.merchandise.title}
                        </Link>
                        <button onClick={() => removeItem(line.id)} className="text-[var(--color-text-secondary)] hover:text-red-500 transition-colors bg-transparent border-none cursor-pointer p-0 w-auto h-auto">
                          <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>
                      </div>
                      {line.merchandise.selectedOptions.reduce((acc, opt) => `${acc} ${opt.name}: ${opt.value} |`, '').slice(0, -1).trim() && (
                        <p className="text-[13px] text-[var(--color-text-secondary)] mb-[16px]">
                           {line.merchandise.selectedOptions.reduce((acc, opt) => `${acc} ${opt.name}: ${opt.value} | `, '').slice(0, -2).trim()}
                        </p>
                      )}
                      
                      <div className="flex items-center gap-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] w-max px-[8px] py-[4px]">
                        <button onClick={() => updateQty(line.id, -1)} className="text-[18px] text-[var(--color-text-main)] bg-transparent border-none cursor-pointer w-[24px] h-[24px] flex items-center justify-center hover:bg-[var(--color-border)] rounded-full transition-colors">-</button>
                        <span className="text-[12px] font-medium w-[24px] text-center">{line.quantity}</span>
                        <button onClick={() => updateQty(line.id, 1)} className="text-[18px] text-[var(--color-text-main)] bg-transparent border-none cursor-pointer w-[24px] h-[24px] flex items-center justify-center hover:bg-[var(--color-border)] rounded-full transition-colors">+</button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[16px] text-[var(--color-text-main)]">${(parseFloat(line.merchandise.price.amount) * line.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-[32px] sticky top-[120px]">
              <h2 className="text-[18px] font-semibold uppercase tracking-[1px] mb-[32px] text-[var(--color-text-main)]">Order Summary</h2>
              
              <div className="flex justify-between text-[14px] text-[var(--color-text-secondary)] mb-[16px]">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[14px] text-[var(--color-text-secondary)] mb-[16px]">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              
              {/* Highlighted Automatic Discount */}
              <div className="flex justify-between text-[14px] font-medium text-[var(--color-text-main)] mb-[32px] pb-[16px] border-b border-[var(--color-border)]">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">local_offer</span>
                  Spring Sale (20% OFF)
                </span>
                <span>-${discount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-baseline mb-[40px]">
                <span className="text-[14px] font-bold uppercase tracking-[1px] text-[var(--color-text-main)]">Total</span>
                <span className="text-[24px] font-semibold text-[var(--color-text-main)]">${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-[var(--color-text-main)] text-[var(--color-bg)] py-[16px] text-[13px] font-semibold uppercase tracking-[2px] hover:opacity-80 transition-opacity border-none cursor-pointer flex items-center justify-center gap-[8px]">
                Proceed to Checkout <span className="material-symbols-outlined text-[18px]">lock</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
