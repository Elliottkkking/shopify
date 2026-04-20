import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchModal from '../components/SearchModal';
import Footer from '../components/Footer';
import { storefrontAPI } from '../lib/shopifyClient';
import { ShopifyProduct, ProductVariant } from '../lib/shopifyTypes';

export default function Product() {
  const { id } = useParams();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const fetchedProduct = await storefrontAPI.getProduct(id || 'smart-air-fryers');
      setProduct(fetchedProduct);
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-20 text-center">Loading product...</div>;
  if (!product) return <div className="p-20 text-center">Product not found</div>;

  const currentVariant = product.variants.edges[0]?.node;
  const price = currentVariant?.price?.amount || '0.00';
  const currency = currentVariant?.price?.currencyCode || 'USD';
  const featuredImage = product.images.edges[0]?.node?.url;

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text-main)] selection:bg-[var(--color-accent)] selection:text-white">
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-[40px] py-[24px] w-full bg-[var(--color-bg)] border-b border-[var(--color-border)]">
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
            <Link className="transition-opacity text-[var(--color-text-main)] hover:opacity-70 bg-transparent border-none cursor-pointer flex items-center relative" to="/cart">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
            <button className="transition-opacity text-[var(--color-text-main)] hover:opacity-70 bg-transparent border-none cursor-pointer">
              <span className="material-symbols-outlined">person</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-[40px] py-[32px]">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-[8px] text-[12px] font-medium text-[var(--color-text-secondary)] mb-[40px] tracking-[1px] uppercase">
          <Link to="/" className="hover:text-[var(--color-text-main)] transition-colors">Home</Link> <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="hover:text-[var(--color-text-main)] transition-colors cursor-pointer">{product.productType || 'Kitchen'}</span> <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="hover:text-[var(--color-text-main)] transition-colors cursor-pointer">{product.vendor} Series</span> <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-[var(--color-text-main)] border-b border-[var(--color-text-main)] pb-[2px]">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px]">
          {/* Media Section (Left Column) */}
          <div className="lg:col-span-7 space-y-[24px]">
            {/* Main Image Area */}
            <div className="relative aspect-[4/3] bg-[#f0f0f0] overflow-hidden group">
              {featuredImage && (
                <img className="w-full h-full object-cover mix-blend-multiply" src={featuredImage} alt={product.title} />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg)]/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-[64px] h-[64px] bg-[var(--color-bg)] rounded-full flex items-center justify-center border border-[var(--color-border)]">
                  <span className="material-symbols-outlined text-[var(--color-text-main)] text-[32px]">play_arrow</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery (9 Items) */}
            <div className="grid grid-cols-5 md:grid-cols-9 gap-[8px]">
              {product.images.edges.map((imgEdge, idx) => (
                <button key={idx} className="aspect-square bg-[#f0f0f0] border border-[var(--color-text-main)] overflow-hidden">
                  <img className="w-full h-full object-cover mix-blend-multiply" src={imgEdge.node.url} alt={imgEdge.node.altText} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info (Right Column) */}
          <div className="lg:col-span-5 flex flex-col pt-[16px]">
            <div className="mb-[16px]">
              <span className="inline-block border border-[var(--color-text-main)] px-[12px] py-[6px] text-[var(--color-text-main)] text-[11px] font-semibold uppercase tracking-[1px]">New Arrival</span>
            </div>
            <h1 className="text-[32px] font-semibold text-[var(--color-text-main)] tracking-tight mb-[16px] leading-[1.2] headline">{product.title}</h1>
            <div className="flex items-center gap-[16px] mb-[32px]">
              <div className="flex items-center gap-[4px] text-[var(--color-text-secondary)]">
                <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined text-[16px]">star_half</span>
              </div>
              <span className="text-[12px] font-medium text-[var(--color-text-secondary)] tracking-[1px] uppercase">4.8 (1,240 Reviews)</span>
            </div>
            <p className="text-[14px] text-[var(--color-text-secondary)] mb-[24px] leading-relaxed">
              {product.description}
            </p>
            <div className="flex items-baseline gap-[16px] mb-[40px]">
              <span className="text-[32px] font-medium text-[var(--color-text-main)]">{price}</span>
              <span className="text-[12px] font-semibold text-[var(--color-text-main)] tracking-[1px] uppercase border-b border-[var(--color-text-main)] mt-auto mb-2">{currency}</span>
            </div>

            <div className="space-y-[32px] pb-[40px] border-b border-[var(--color-border)]">
              {/* Variant: Color */}
              <div>
                <label className="block text-[12px] font-medium text-[var(--color-text-secondary)] uppercase tracking-[1px] mb-[16px]">Color: Carbon Black</label>
                <div className="flex items-center gap-[12px]">
                  <button className="w-[40px] h-[40px] rounded-full bg-[#111] ring-1 ring-offset-2 ring-offset-[var(--color-bg)] ring-[var(--color-text-main)]"></button>
                  <button className="w-[40px] h-[40px] rounded-full bg-[#e5e5e5] border border-[var(--color-border)]"></button>
                  <button className="w-[40px] h-[40px] rounded-full bg-[#2c4046] border border-[var(--color-border)]"></button>
                </div>
              </div>
              {/* Variant: Size */}
              <div>
                <label className="block text-[12px] font-medium text-[var(--color-text-secondary)] uppercase tracking-[1px] mb-[16px]">Capacity</label>
                <div className="grid grid-cols-3 gap-[16px]">
                  <button className="py-[16px] px-[16px] border border-[var(--color-text-main)] bg-[var(--color-surface)] text-[var(--color-text-main)] text-[13px] font-medium tracking-[1px] transition-colors">5.8 Qt</button>
                  <button className="py-[16px] px-[16px] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-main)] text-[13px] font-medium tracking-[1px] transition-colors">7.5 Qt</button>
                  <button className="py-[16px] px-[16px] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-main)] text-[13px] font-medium tracking-[1px] transition-colors">10 Qt Duo</button>
                </div>
              </div>
            </div>

            <div className="py-[40px] space-y-[24px]">
              <div className="flex gap-[16px]">
                <button className="flex-1 border border-[var(--color-text-main)] text-[var(--color-text-main)] font-semibold uppercase text-[12px] tracking-[1px] py-[16px] px-[32px] hover:bg-[var(--color-text-main)] hover:text-white transition-colors">Add to Cart</button>
                <button className="flex-1 bg-[var(--color-accent)] text-white font-semibold uppercase text-[12px] tracking-[1px] py-[16px] px-[32px] hover:opacity-80 transition-opacity">Buy Now</button>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-[16px] text-[11px] text-[var(--color-text-secondary)] font-medium uppercase tracking-[1px] pt-[16px]">
                <div className="flex items-center gap-[4px]"><span className="material-symbols-outlined text-[16px]">local_shipping</span> Free Shipping</div>
                <div className="flex items-center gap-[4px]"><span className="material-symbols-outlined text-[16px]">verified</span> 2-Year Warranty</div>
                <div className="flex items-center gap-[4px]"><span className="material-symbols-outlined text-[16px]">assignment_return</span> 30-Day Returns</div>
              </div>
            </div>
          </div>
        </div>

        {/* Watch it in Action (TikTok Section) */}
        <section className="mt-[120px] mb-[120px]">
          <div className="bg-[#111] text-white flex flex-col md:flex-row items-center overflow-hidden relative">
            <div className="flex-1 space-y-[40px] px-[40px] py-[80px] lg:px-[80px]">
              <div className="space-y-[16px]">
                <h2 className="text-[40px] font-medium tracking-tight headline leading-[1.1]">Watch it in Action</h2>
                <p className="text-[#a1a1aa] text-[16px] max-w-xl leading-relaxed">See why over 50,000 home chefs switched to TMWINGS. Professional results, zero effort.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
                <div className="flex gap-[16px] items-start border-t border-[#333] pt-[24px]">
                  <span className="material-symbols-outlined text-[var(--color-bg)]">speed</span>
                  <div>
                    <h4 className="font-semibold mb-[8px] text-[13px] tracking-[1px] uppercase">TurboHeat™ Tech</h4>
                    <p className="text-[12px] text-[#a1a1aa] leading-relaxed">Heats up to 450°F in under 2 minutes for instant cooking.</p>
                  </div>
                </div>
                <div className="flex gap-[16px] items-start border-t border-[#333] pt-[24px]">
                  <span className="material-symbols-outlined text-[var(--color-bg)]">smartphone</span>
                  <div>
                    <h4 className="font-semibold mb-[8px] text-[13px] tracking-[1px] uppercase">Smart Control</h4>
                    <p className="text-[12px] text-[#a1a1aa] leading-relaxed">Monitor progress and get notifications from your phone.</p>
                  </div>
                </div>
              </div>
              <button className="bg-[var(--color-bg)] text-[var(--color-text-main)] font-semibold uppercase text-[12px] tracking-[1px] px-[32px] py-[16px] flex items-center gap-[12px] hover:bg-[#e5e5e5] transition-colors mt-[32px]">
                Explore Full Features <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
            
            <div className="w-full md:w-[450px] shrink-0 border-l border-[#333]">
              <div className="relative aspect-[4/5] w-full overflow-hidden group bg-[#000]">
                <img className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ78bCiOaojVlf2_epNecFru-amzw1jbswKAOWQgP7ZV9tvon4Sg_yEnBkoI4oZdPpDJCt2Ke4scIEZ10SxdDF-uKpapQ_jfgAIKfqJZPXpm2A4rHb8HycUSXhGnflkPdZwD2m8tMRsz8_s-dIhoExLu88CGC9Y0TjG5XZMdidDzBDJhjPcdaW6tQtVmiLqh9bIaKGmzGKbcQV6zTOo3Vj-IW5l3ou91VPoCt-tvtjVWI01ma7CP0CrhJ_GeW2umOpMpp59V8sF64"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-[32px] left-[32px] right-[32px]">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-white/20 backdrop-blur"></div>
                    <span className="text-[13px] font-medium tracking-[1px] uppercase">@ChefMilo</span>
                  </div>
                  <p className="text-[14px] text-white/80 line-clamp-2 leading-relaxed font-serif italic">"The crunch is unbelievable! Best wings I've ever made at home. #AirFryerMagic"</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-[80px] h-[80px] bg-[var(--color-bg)] text-[var(--color-text-main)] rounded-full flex items-center justify-center border border-[var(--color-border)] hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A+ Content */}
        <section className="space-y-[120px] mb-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">
            <div className="space-y-[32px] order-2 lg:order-1 border-l border-[var(--color-border)] pl-[40px]">
              <span className="text-[var(--color-text-main)] font-semibold text-[11px] tracking-[2px] uppercase">Culinary Excellence</span>
              <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight leading-[1.1] headline">The Art of Healthy Frying.</h2>
              <p className="text-[var(--color-text-secondary)] text-[16px] leading-relaxed">Experience the perfect balance of crispy texture and juicy flavor with 85% less oil than traditional deep frying. Our patented air circulation technology ensures every wing is cooked to perfection, every single time.</p>
              <ul className="space-y-[16px]">
                <li className="flex items-center gap-[12px] font-medium text-[14px] text-[var(--color-text-main)]"><span className="material-symbols-outlined text-[16px]">check</span> Uniform heat distribution</li>
                <li className="flex items-center gap-[12px] font-medium text-[14px] text-[var(--color-text-main)]"><span className="material-symbols-outlined text-[16px]">check</span> Minimal moisture loss for juicy meat</li>
                <li className="flex items-center gap-[12px] font-medium text-[14px] text-[var(--color-text-main)]"><span className="material-symbols-outlined text-[16px]">check</span> Professional-grade non-stick coating</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 border border-[var(--color-border)] bg-[var(--color-surface)] p-[8px]">
              <img className="w-full aspect-[4/5] object-cover mix-blend-multiply opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChQ3k3J0ukkdX7QJUPHrOS54JkSiixhEEIxW4--fWfsCh58ngE5atufAEhuDbU8JwesQwN0JnDy13gBqsVP38JVgIBXhMsrfNPBKV9jwvql5ybqJTMrErdhVJgYOKc6dH2TOf3oWsZR2UUffzwSeUqxVPT8nH4DVYkaCGjnJKLLHeJaNZ5ETP4DyqRdGi_qEZWCHqy1zeHwZacBPq1GQPd8oDnK6yYqtrRJ-dcm7zaMj2q2VeUrNOkQD7-YNvk0BETqhp4UhYdFbo"/>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] h-auto lg:h-[600px]">
            <div className="lg:col-span-8 relative border border-[var(--color-border)] group">
              <img className="w-full h-[400px] lg:h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTm4x4m-kOVbjUF9mff0_G-t0K7qe9AhHAUwplfMVanUrw1zJZtgdsBbKjToozIputTgHHXDVSqI9RAIzIVFo4hYuLIflwJTgrAOM4r49mjiIoQxLj55PvpZE155gHFhHxPoGFQXCCO3p3AGwikc4n11W20rZTY1hOdFMixbDbMdwxuoIuASSoq7jevkzSA42Hqt5YyzvZhXTIFrFrMgGDs0ej2S_I4jzj4McRMPsorBdSL6KgjIB9vVOZnBaawn6aZBtAuNURBvk"/>
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent flex items-center p-[48px]">
                <div className="max-w-md text-white space-y-[16px]">
                  <h3 className="text-[32px] font-semibold headline leading-[1.2]">Engineered for Performance</h3>
                  <p className="text-[#a1a1aa] leading-relaxed">The core of TMWINGS is a high-torque 1800W motor paired with a stainless steel heating element that delivers consistent, reliable heat for years to come.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 bg-[var(--color-surface)] border border-[var(--color-border)] p-[48px] flex flex-col justify-between">
              <div className="space-y-[24px]">
                <div className="w-[48px] h-[48px] border border-[var(--color-text-main)] flex items-center justify-center bg-[var(--color-bg)]">
                  <span className="material-symbols-outlined text-[var(--color-text-main)]">security</span>
                </div>
                <h4 className="text-[24px] font-semibold headline tracking-tight">Safe & Reliable</h4>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed">Auto-shutoff sensors, cool-touch housing, and BPA-free materials ensure your family's safety is never compromised.</p>
              </div>
              <div className="pt-[40px] border-t border-[var(--color-border)]">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[1px] text-[var(--color-text-main)]">
                  <span>Durability Score</span>
                  <span>98%</span>
                </div>
                <div className="mt-[16px] w-full h-[2px] bg-[var(--color-border)] overflow-hidden">
                  <div className="w-[98%] h-full bg-[var(--color-text-main)]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-[120px] border-t border-[var(--color-border)]">
          <div className="flex flex-col lg:flex-row gap-[64px]">
            <div className="lg:w-1/3 space-y-[40px]">
              <h2 className="text-[32px] font-semibold headline">Customer Reviews</h2>
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-[40px] text-center space-y-[16px]">
                <div className="text-[64px] font-medium text-[var(--color-text-main)] leading-none">4.8</div>
                <div className="flex justify-center text-[var(--color-text-secondary)] text-[24px]">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <p className="text-[12px] uppercase tracking-[1px] text-[var(--color-text-secondary)]">Based on 1,240 verified purchases</p>
                <button className="w-full bg-[var(--color-text-main)] text-[var(--color-bg)] font-semibold uppercase text-[12px] tracking-[1px] py-[16px] mt-[16px] hover:opacity-80 transition-opacity">Write a Review</button>
              </div>
              
              <div className="space-y-[12px]">
                <div className="flex items-center gap-[16px]">
                  <span className="w-[16px] text-[12px] font-semibold">5</span>
                  <div className="flex-1 h-[2px] bg-[var(--color-border)] overflow-hidden">
                    <div className="w-[85%] h-full bg-[var(--color-text-main)]"></div>
                  </div>
                  <span className="w-[32px] text-[12px] text-[var(--color-text-secondary)] text-right">85%</span>
                </div>
                <div className="flex items-center gap-[16px]">
                  <span className="w-[16px] text-[12px] font-semibold">4</span>
                  <div className="flex-1 h-[2px] bg-[var(--color-border)] overflow-hidden">
                    <div className="w-[10%] h-full bg-[var(--color-text-main)]"></div>
                  </div>
                  <span className="w-[32px] text-[12px] text-[var(--color-text-secondary)] text-right">10%</span>
                </div>
                <div className="flex items-center gap-[16px]">
                  <span className="w-[16px] text-[12px] font-semibold">3</span>
                  <div className="flex-1 h-[2px] bg-[var(--color-border)] overflow-hidden">
                    <div className="w-[3%] h-full bg-[var(--color-text-main)]"></div>
                  </div>
                  <span className="w-[32px] text-[12px] text-[var(--color-text-secondary)] text-right">3%</span>
                </div>
                <div className="flex items-center gap-[16px]">
                  <span className="w-[16px] text-[12px] font-semibold">2</span>
                  <div className="flex-1 h-[2px] bg-[var(--color-border)] overflow-hidden">
                    <div className="w-[1%] h-full bg-[var(--color-text-main)]"></div>
                  </div>
                  <span className="w-[32px] text-[12px] text-[var(--color-text-secondary)] text-right">1%</span>
                </div>
                <div className="flex items-center gap-[16px]">
                  <span className="w-[16px] text-[12px] font-semibold">1</span>
                  <div className="flex-1 h-[2px] bg-[var(--color-border)] overflow-hidden">
                    <div className="w-[1%] h-full bg-[var(--color-text-main)]"></div>
                  </div>
                  <span className="w-[32px] text-[12px] text-[var(--color-text-secondary)] text-right">1%</span>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-[48px]">
              <div className="pb-[48px] border-b border-[var(--color-border)]">
                <div className="flex items-center justify-between mb-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[48px] h-[48px] bg-[var(--color-bg)] border border-[var(--color-text-main)] flex items-center justify-center font-semibold text-[14px]">JS</div>
                    <div>
                      <h4 className="font-semibold text-[14px]">Jason Sterling</h4>
                      <div className="flex text-[var(--color-text-secondary)] mt-[4px]">
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[12px] text-[var(--color-text-secondary)] uppercase tracking-[1px]">2 days ago</span>
                </div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-[15px]">Absolutely life changing! I use this every single day now. It's so fast and everything comes out perfectly crispy. The smart app is actually useful, not just a gimmick.</p>
                <div className="mt-[24px] flex gap-[16px]">
                  <img className="w-[80px] h-[80px] object-cover border border-[var(--color-border)] p-[4px] bg-[var(--color-surface)] mix-blend-multiply opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw-3zkTRV8k11ofAx_dgsY7XQA3vpVFYDmUlaMuxvTYX5eyxAI5WvyV0UfzqqK5FV0Y7Z0GKatSRRAxCFXJtL3FlLMZ1-3uF08bq_oMFjh0fi-tPG2ZPv9kTd-RY590SHGFSU3GE_0duGb3ZJ7d1TwZMrsu0_bErIvjBOW12mYRceyC_Sc0CKQtvdVEBnJLh1kBSn0uKMHQQ1N-J2elLrr2cVnBN1OvLiNVI_SrNk7a3Abj8gnJFlWlau0BIsycjcDn7h3LSsSmq8"/>
                </div>
              </div>

              <div className="pb-[48px] border-b border-[var(--color-border)]">
                <div className="flex items-center justify-between mb-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="w-[48px] h-[48px] bg-[var(--color-bg)] border border-[var(--color-text-secondary)] text-[var(--color-text-secondary)] flex items-center justify-center font-semibold text-[14px]">EM</div>
                    <div>
                      <h4 className="font-semibold text-[14px]">Elena Martinez</h4>
                      <div className="flex text-[var(--color-text-secondary)] mt-[4px]">
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                        <span className="material-symbols-outlined text-[14px]">star</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[12px] text-[var(--color-text-secondary)] uppercase tracking-[1px]">1 week ago</span>
                </div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-[15px]">Solid build quality and looks great in the kitchen. Very easy to clean as the basket is dishwasher safe. Only downside is the fan can be a bit loud on max power.</p>
              </div>

              <button className="flex items-center gap-[8px] font-semibold text-[12px] uppercase tracking-[1px] text-[var(--color-text-main)] hover:text-[var(--color-text-secondary)] transition-colors border border-[var(--color-text-main)] px-[32px] py-[16px]">
                Load More Reviews <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
