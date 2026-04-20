import { Link } from 'react-router-dom';
import { useState } from 'react';
import CouponModal from '../components/CouponModal';
import SocialVideoModal from '../components/SocialVideoModal';
import SearchModal from '../components/SearchModal';
import Footer from '../components/Footer';

export default function Home() {
  const [selectedVideoData, setSelectedVideoData] = useState<any>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text-main)] selection:bg-[var(--color-accent)] selection:text-white pb-0">
      <CouponModal />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Hero Container (16:9 Aspect Ratio) */}
      <section className="relative hero-aspect-ratio w-full overflow-hidden bg-[var(--color-surface)] h-screen md:h-auto border-b border-[var(--color-border)]">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Reserved for video playback */}
          <div className="w-full h-full bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>

        {/* Header & Navigation */}
        <header className="absolute top-0 left-0 w-full z-50 flex flex-col transition-all duration-300 group bg-transparent hover:bg-white" id="main-header">
          <nav className="w-full flex flex-col relative">
            {/* Brand Row */}
            <div className="flex justify-between items-center px-6 md:px-12 relative h-20 md:h-28">
              <div className="flex-1"></div>
              <div className="flex-none text-center">
                <Link to="/">
                  <img alt="TMWINGS Logo" className="w-auto h-[72px] md:h-[96px] object-contain transition-all duration-300 mix-blend-normal group-hover:mix-blend-multiply brightness-0 invert group-hover:brightness-100 group-hover:invert-0" id="logo-img" src="https://lh3.googleusercontent.com/aida/ADBb0ugtS65c4Xoe-7ZGZ09RxfgQ2FN1rdDuSrTe-0rZB0BPPum7nE98hK1nKcj2N0hvyNh83cHwq6uV8Hh65uDtx_0Wa0B5MmQ9ecrXzsAY_qX2XC9OxuRpsqPBlPavRu_wy6QmdhZ1oNdswiwpVM1Eg4nU983p7gOdD6vjd6AYBmuWFTnYw5NXaPdguuSuf37ca_DvJLPCw9XrgduwU0ur6zSLdLJzn7uaY3Y1Y04lcG6rieWVunIwXBgIs1WmuBdkaFjdV13aRiyv6g" />
                </Link>
              </div>
              <div className="flex-1 flex justify-end items-center gap-4 md:gap-6 text-white group-hover:text-[var(--color-text-main)] transition-colors duration-300">
                <button onClick={() => setIsSearchOpen(true)} className="flex items-center hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer"><span className="material-symbols-outlined text-xl">search</span></button>
                <Link className="flex items-center relative hover:opacity-70 transition-opacity" to="/cart">
                  <span className="material-symbols-outlined text-xl">shopping_cart</span>
                  <span className="absolute -top-1.5 -right-1.5 bg-white group-hover:bg-[var(--color-accent)] text-black group-hover:text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-extrabold transition-colors">2</span>
                </Link>
              </div>
            </div>

            {/* Navigation Links Row */}
            <div className="max-w-7xl mx-auto w-full hidden md:flex justify-center items-center h-14 px-12 pb-2">
              <div className="flex items-center justify-between w-full relative">
                <div className="flex-1 flex justify-center">
                  <Link to="/category/cooling" className="nav-link text-[12px] font-bold text-white group-hover:text-[var(--color-text-secondary)] hover:opacity-70 group-hover:hover:text-[var(--color-text-main)] transition-colors uppercase tracking-[1px] py-3 cursor-pointer">Air Conditioners</Link>
                </div>
                <div className="flex-1 flex justify-center">
                  <Link to="/category/cooling" className="nav-link text-[12px] font-bold text-white group-hover:text-[var(--color-text-secondary)] hover:opacity-70 group-hover:hover:text-[var(--color-text-main)] transition-colors uppercase tracking-[1px] py-3 cursor-pointer">Fans & Airflow</Link>
                </div>
                <div className="flex-1 flex justify-center">
                  <Link to="/category/heating" className="nav-link text-[12px] font-bold text-white group-hover:text-[var(--color-text-secondary)] hover:opacity-70 group-hover:hover:text-[var(--color-text-main)] transition-colors uppercase tracking-[1px] py-3 cursor-pointer">Heating</Link>
                </div>
                <div className="flex-1 flex justify-center">
                  <Link to="/category/outdoor" className="nav-link text-[12px] font-bold text-white group-hover:text-[var(--color-text-secondary)] hover:opacity-70 group-hover:hover:text-[var(--color-text-main)] transition-colors uppercase tracking-[1px] py-3 cursor-pointer">Outdoor Living</Link>
                </div>
                <div className="flex-1 flex justify-center">
                  <Link to="/category/kitchen" className="nav-link text-[12px] font-bold text-white group-hover:text-[var(--color-text-secondary)] hover:opacity-70 group-hover:hover:text-[var(--color-text-main)] transition-colors uppercase tracking-[1px] py-3 cursor-pointer">Kitchen</Link>
                </div>
                <div className="flex-1 flex justify-center">
                  <Link to="/product" className="nav-link text-[12px] font-bold text-white group-hover:text-[var(--color-text-secondary)] hover:opacity-70 group-hover:hover:text-[var(--color-text-main)] transition-colors uppercase tracking-[1px] py-3 cursor-pointer">Support</Link>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

            {/* Mega Menu Panel */}
            <div className="absolute top-full left-0 w-full bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible z-40 py-12 border-t border-gray-50 transition-all duration-300 hidden md:block">
              <div className="max-w-7xl mx-auto px-12 grid grid-cols-6 h-full">
                {/* Column 1 */}
                <div className="flex justify-center border-r border-gray-50 last:border-0 px-4">
                  <ul className="space-y-4 text-center">
                    <li><Link to="/product/wall-mounted-ac" className="text-gray-500 hover:text-black text-[14px] transition-colors">Wall-Mounted AC</Link></li>
                    <li><Link to="/product/portable-ac" className="text-gray-500 hover:text-black text-[14px] transition-colors">Portable AC</Link></li>
                    <li><Link to="/product/window-ac" className="text-gray-500 hover:text-black text-[14px] transition-colors">Window AC</Link></li>
                    <li><Link to="/product/car-ac" className="text-gray-500 hover:text-black text-[14px] transition-colors">Car AC</Link></li>
                  </ul>
                </div>
                {/* Column 2 */}
                <div className="flex justify-center border-r border-gray-50 last:border-0 px-4">
                  <ul className="space-y-4 text-center">
                    <li><Link to="/product/industrial-fans" className="text-gray-500 hover:text-black text-[14px] transition-colors">Industrial Fans</Link></li>
                    <li><Link to="/product/pedestal-fans" className="text-gray-500 hover:text-black text-[14px] transition-colors">Pedestal Fans</Link></li>
                    <li><Link to="/product/mist-fans" className="text-gray-500 hover:text-black text-[14px] transition-colors">Mist Fans</Link></li>
                    <li><Link to="/product/tower-fans" className="text-gray-500 hover:text-black text-[14px] transition-colors">Tower Fans</Link></li>
                    <li><Link to="/product/wall-fans" className="text-gray-500 hover:text-black text-[14px] transition-colors">Wall Fans</Link></li>
                    <li><Link to="/product/bladeless-fans" className="text-gray-500 hover:text-black text-[14px] transition-colors">Bladeless Fans</Link></li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div className="flex justify-center border-r border-gray-50 last:border-0 px-4">
                  <ul className="space-y-4 text-center">
                    <li><Link to="/product/towel-warmers" className="text-gray-500 hover:text-black text-[14px] transition-colors">Towel Warmers</Link></li>
                    <li><Link to="/product/radiators" className="text-gray-500 hover:text-black text-[14px] transition-colors">Radiators</Link></li>
                    <li><Link to="/product/space-heaters" className="text-gray-500 hover:text-black text-[14px] transition-colors">Space Heaters</Link></li>
                    <li><Link to="/product/fireplaces" className="text-gray-500 hover:text-black text-[14px] transition-colors">Fireplaces</Link></li>
                  </ul>
                </div>
                {/* Column 4 */}
                <div className="flex justify-center border-r border-gray-50 last:border-0 px-4">
                  <ul className="space-y-4 text-center">
                    <li><Link to="/product/fire-pit-grills" className="text-gray-500 hover:text-black text-[14px] transition-colors">Fire Pit Grills</Link></li>
                    <li><Link to="/product/pizza-ovens" className="text-gray-500 hover:text-black text-[14px] transition-colors">Pizza Ovens</Link></li>
                  </ul>
                </div>
                {/* Column 5: Kitchen (Link to Air Fryer) */}
                <div className="flex justify-center border-r border-gray-50 last:border-0 px-4">
                  <ul className="space-y-4 text-center">
                    <li><Link to="/product/smart-air-fryers" className="text-gray-500 hover:text-black text-[14px] transition-colors">Smart Air Fryers</Link></li>
                    <li><Link to="/product/hot-dog-rollers" className="text-gray-500 hover:text-black text-[14px] transition-colors">Hot Dog Rollers</Link></li>
                    <li><Link to="/product/egg-cookers" className="text-gray-500 hover:text-black text-[14px] transition-colors">Egg Cookers</Link></li>
                    <li><Link to="/product/ice-shavers" className="text-gray-500 hover:text-black text-[14px] transition-colors">Ice Shavers</Link></li>
                  </ul>
                </div>
                {/* Column 6 */}
                <div className="flex justify-center border-r border-gray-50 last:border-0 px-4">
                  <ul className="space-y-4 text-center">
                    <li><a className="text-gray-500 hover:text-black text-[14px] transition-colors" href="#">Live Chat</a></li>
                    <li><a className="text-gray-500 hover:text-black text-[14px] transition-colors" href="#">Manuals</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Content (Bottom Left) */}
        <div className="absolute bottom-16 left-6 md:left-12 lg:left-20 z-10 max-w-xl text-white">
          <span className="text-[11px] font-extrabold uppercase tracking-[1px] text-white/80 mb-3 block">Keep the comfort flowing</span>
          <h1 className="font-extrabold mb-6 leading-[1.1] text-[48px] headline text-white drop-shadow-md">
            Comfort for<br/>every season.
          </h1>
          <Link to="/product" className="inline-flex bg-white text-black px-[28px] py-[14px] font-bold text-[13px] tracking-[1px] uppercase items-center gap-3 transition-opacity hover:opacity-80">
            Shop TMWINGS <span className="material-symbols-outlined text-lg font-bold">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Promo Strip */}
      <section className="w-full bg-[var(--color-surface)] border-b border-[var(--color-border)] text-[var(--color-text-main)] py-4 px-8 flex flex-col md:flex-row items-center justify-center gap-5">
        <span className="text-[13px] font-medium tracking-wide text-center">Spring Savings Are Here — Up to 20% Off Select Favorites</span>
        <Link to="/product" className="text-[12px] font-medium border-b border-[var(--color-text-main)] hover:opacity-80 transition-opacity uppercase tracking-[1px]">Explore The Sale</Link>
      </section>

      {/* Category Worlds */}
      <section className="py-[40px] px-[40px] bg-[var(--color-bg)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[24px] h-auto lg:h-[450px]">
          {/* Card 1 */}
          <Link to="/category/cooling" className="relative group overflow-hidden cursor-pointer h-[400px] lg:h-full bg-[var(--color-surface)] border border-[var(--color-border)]">
            <img alt="Air Conditioners" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0ugXPA5fqnpAzWgH4pySyp7X3TXH4RgLbzCpu0Ngb0fHY1qZupL407xgWYvLtug_K9OJdHzKnI5A3FDkBmT_QxOtMy4DFjsvv6bLwn5PM6mziuBbxJwQzaCK_Be8CQpSSikpUUugI2ZNZCk52kIbjL8Rc86AJe8xFyUtISHWEcw9Fnrj7p8VGzIVqw5fTkxXat4Bl167BNboUu45Y3JjQqSy0dEGEnT1ligZIpFSeC80ErwH_-8S2tiioV9vtVnn7XbW9fz8sDWOfA"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
            <div className="absolute bottom-[20px] left-[20px] z-20">
              <h3 className="text-[var(--color-text-main)] text-[14px] font-semibold mb-1 headline">Air Conditioners</h3>
              <span className="text-[var(--color-text-secondary)] text-[13px]">Shop Precision Cooling</span>
            </div>
          </Link>
          {/* Card 2 */}
          <Link to="/category/cooling" className="relative group overflow-hidden cursor-pointer h-[400px] lg:h-full bg-[var(--color-surface)] border border-[var(--color-border)]">
            <img alt="Fans" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0ujMSH_RbeM1jLtk0_G-iLoDJVX-aSYUl0hTsEfcZnjzyrBXW106unbBDLpITiMCVOuOn5NZ8sUw_Wb68bEpjIM-QS6-2pEa7xiThsI7s4xaQ0aLQOxOhr6rDidpogoNcvAok-NqVdGk9sQiXaIQzSiOuZV6eWqag-FajFlhWTvW2IqBizUe5SMZW2uUwpiIO1YjFQ5GPWwLQXmtEdbEhlR8cVnNSEFJ5oTAE8YvRiynCt8x6PisCBOmcZaMuv8ToHgqzE23MI-XOg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
            <div className="absolute bottom-[20px] left-[20px] z-20">
              <h3 className="text-[var(--color-text-main)] text-[14px] font-semibold mb-1 headline">Fans & Airflow</h3>
              <span className="text-[var(--color-text-secondary)] text-[13px]">Shop Sculptural Air</span>
            </div>
          </Link>
          {/* Card 3 */}
          <Link to="/category/heating" className="relative group overflow-hidden cursor-pointer h-[400px] lg:h-full bg-[var(--color-surface)] border border-[var(--color-border)]">
            <img alt="Heating" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0uiessnM-KOoJw2-onKF08sEC20KpTh_X4Mj_bcabjt-dG04BZ_dGWuhwE3-ZpCdtYKR3f2NKV2sx_BnntU0lVHEPXAFwL1ZeK-C6auSkDketIgdxYzLhAZcVZ8YF9aB7W-VX6vgzrXEe08LNBPDhldzQ35bFeSCWm-fZ_5Rjm_ccTJUdxZv6DEMcvsVIPkUc7JjGSyrKTe8haIufkh2NKgTh64Li8J_JRrmuFL3cQPUdYFdVXFHW3femaN-0Kz-xOAD0nCapO9Oqg"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
            <div className="absolute bottom-[20px] left-[20px] z-20">
              <h3 className="text-[var(--color-text-main)] text-[14px] font-semibold mb-1 headline">Heating & Comfort</h3>
              <span className="text-[var(--color-text-secondary)] text-[13px]">Shop Silent Warmth</span>
            </div>
          </Link>
          {/* Card 4 */}
          <Link to="/category/outdoor" className="relative group overflow-hidden cursor-pointer h-[400px] lg:h-full bg-[var(--color-surface)] border border-[var(--color-border)]">
            <img alt="Outdoor" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0uhom4iAoWXXxOWELdf_y3h1Xg7FPjCl9bOkq9yksqHpIYur7GkofuvQzxpi02GIWNCyDCAyNpREmyQbGEtHtCSZo8n8LCPKLD8RGbPVX77QQVEgvDYakh-ouboJie7HREXfoERfm86YHXkfksQ0L0YpENgVX0Vj9LmOfEN4Jctmh4Qk1VKtJWZHeU7bqaw5dDBIdacfuXr_F7CCbq53pOSfLwVBSwKsV_32-YXRH6kqglmgpPGepFUEPcAwa8iMAIFdJGFMPozFfQ"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
            <div className="absolute bottom-[20px] left-[20px] z-20">
              <h3 className="text-[var(--color-text-main)] text-[14px] font-semibold mb-1 headline">Outdoor Living</h3>
              <span className="text-[var(--color-text-secondary)] text-[13px]">Shop The Exterior</span>
            </div>
          </Link>
          {/* Card 5 */}
          <Link to="/category/kitchen" className="relative group overflow-hidden cursor-pointer h-[400px] lg:h-full bg-[var(--color-surface)] border border-[var(--color-border)]">
            <img alt="Kitchen" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0uhHW5fJBqGmUT2_fguACs_Y9nPV7kFuUPJpvDXNvysc6iRmzdUc30zIzTwaMBzrvLChZKFHh5Mm3RyKYnDOmSdZ2pEm0x1XsYi9BxS95eXgeBV8FS_Sm6jX18il3cIEIgADJsftlNYN_y-C58prbTGObN2rfEYbp89q6Nb2mWFOlgS8tPtQ6-jk2K2eTmdtQM5HIX6btfZeyAx24kzf2I3oPm1emaWyRhpDwJ7AAYFKJT-NcM6gDqf0ms5We_oqyI3ssZ_EKCIw"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
            <div className="absolute bottom-[20px] left-[20px] z-20">
              <h3 className="text-[var(--color-text-main)] text-[14px] font-semibold mb-1 headline">Kitchen Essentials</h3>
              <span className="text-[var(--color-text-secondary)] text-[13px]">Shop Culinary Tech</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Trending on Social Section */}
      <section className="max-w-7xl mx-auto px-[40px] py-[60px] bg-[var(--color-bg)]">
        <div className="flex flex-col items-center text-center mb-[40px]">
          <h2 className="text-[48px] font-semibold text-[var(--color-text-main)] mb-[24px] headline">Trending on Social</h2>
          <p className="text-[var(--color-text-secondary)] max-w-[400px] text-[16px] leading-[1.6]">Discover how real customers use TMWINGS products every day.</p>
        </div>
        {/* Vertical Video Carousel Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Componentizing these would be better, but doing it fast */}
          {[
            {
               img: "https://images.unsplash.com/photo-1544265548-a0f5a702d7cc?q=80&w=800&auto=format&fit=crop",
               avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLf3teClDjM2j0TpAfPLSBXBbLfpxbIA8N18Qck3iI5gW4VQ2PQmzZieVJxalLTEDftalRPvxwdZIIUwmP0ZOp-HneKRI6G0Q8yLdCc1bKkrSTUW6ceX8CdCn2sXBhZeI-7dtnB37plHpon_DYsZ1mAO8IIvPBc6yPUSBiTnYZX8BRBEKjjTMQlOtTzzX1Gh0gHmWTWoOmLtFylrRvkD5vQaBgDV36wVg7QTX7q9EGxBVNWgBPtnOoDiXJphi9YU4f5u4mTENtpCM",
               handle: "@sarah_cooks",
               text: "My morning routine has never been this smooth. ✨ #tmwingslife",
               product: {
                 brand: "Ninja",
                 name: "Ninja SLUSHi XL Slushie Machine in Cream in Crema | FS601BR | SharkNinja",
                 price: "349.99 USD",
                 image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=400&auto=format&fit=crop",
               }
            },
            {
               img: "https://images.unsplash.com/photo-1626245037199-ca027cc8ebaa?q=80&w=800&auto=format&fit=crop",
               avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuClG8R2Eugoc1schFzhrAEHJkSWvZiZYfv2EEfUUGRhHPJo9Eo0xoDTLWX_esE2hVxjY7efUthuWrZ9TricLTrNBqc-j5eJcIAPu4Pm5j80RCoJC5NQu3HLx1eSvgVcoqwEkxIQmKz6h7ZrliKcY10J7NxvLYVlv7mBJ7gBu3A1w6IX3pHb3_x_HLoYW9QH0eDJ6GvkqUMYrzgbaCexPQLUH4oEZNxyUskCaeWnNl_y4pety5XqxCHwPrjNAB3hH5nvI2VfKzT-DHA",
               handle: "@chef_marcus",
               text: "Crispy in 10 mins. TMWINGS Air Fryer is a game changer. 🍟",
               product: {
                 brand: "TMWINGS",
                 name: "Pro Air Fryer 5qt. Rapid Crisp Technology",
                 price: "189.00 USD",
                 image: "https://images.unsplash.com/photo-1626880054770-ae060a0b6863?q=80&w=400&auto=format&fit=crop",
               }
            },
            {
               img: "https://images.unsplash.com/photo-1534151240838-f9bde2a5b2fc?q=80&w=800&auto=format&fit=crop",
               avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdwNbmK4HPFA1LNeKUo4LZ4F_Gn9CjAzAihW1NnpUqLYCQU3DmJ8g4necjPoHg4AycGVUxY8h1PtUdEb0wTbxKrPMhHveDk4ukfMnju9k0x0luADkh2uPmkDZxhZxfG-iBQJRy2vwxWJ_nS6V3I7JGuXx_L3Ce54UQSKtrUtal5MM0-QrG-0xvkAwi21cIrkEEi7pxum4lXb5qnm9MUW6x3h3jMgsw9fRjmPu7xbhEstoXGnX8o_YMndKLPGvnW9qo3m6zqJMAOCk",
               handle: "@lifestyle_lucy",
               text: "Fresh air only. Can't believe I waited this long for a TMWINGS.",
               product: {
                 brand: "TMWINGS",
                 name: "Aero Purifier Series 300 HEPA Advanced",
                 price: "249.50 USD",
                 image: "https://images.unsplash.com/photo-1581452178044-8fc161f38e55?q=80&w=400&auto=format&fit=crop",
               }
            },
            {
               img: "https://images.unsplash.com/photo-1498837167922-41c54ba251da?q=80&w=800&auto=format&fit=crop",
               avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmNf8FoB00zfsP69Gr_uJwachQpdjtX9Noc6FjHVlcAjWeqDUCdkqjVobeA0dTWoVfzXCtI-_NOxxRP6bagxg16ATDgP56d0askP0KmqHpjQpbWeSWLIy8eTv9XAP2ls3B-CqwoGWS5Qfk5gRXmU5AjGR93Fv25bW-ApFfPbaNknzcK7WIKW9Q8gttcYYhMUC7AVpvYYoKziYKutFc3RMcCK9BrrPbzg9IqacykleK1-ieQ6vwSN4qWxPq8bxXSWqHwOLQxpllggw",
               handle: "@david_designs",
               text: "Silent, efficient, and fits the aesthetic perfectly. 🧼",
               product: {
                 brand: "TMWINGS",
                 name: "Silent Flow Ceramic Heater Tower",
                 price: "120.00 USD",
                 image: "https://images.unsplash.com/photo-1582218413233-a3d168d89e5a?q=80&w=400&auto=format&fit=crop",
               }
            },
            {
               img: "https://images.unsplash.com/photo-1502741126161-b048400d085d?q=80&w=800&auto=format&fit=crop",
               avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk3mHOTf3O83I7JzugzRq5I6ZUA4a9DkobBXFj6OyxwFm1z2X6lvC95s6xR0l3AGbYyBx1nB6X717GQhIuTTxn8_dfIOjG_OBqk_WniEHFM7ATC4l9euE6yZYJacl1r3ihrwGJmDn6pD5jR10fHIQu5SgIH8Tsb0vRvlMEKT4YkqlUui0lWBpG2I8KrZZ63vcXEZziFmkkH-pmK9j6BJuxZeWqRmbkcGiYZFRE1l8UFb0frMi-cTwHh71PDEnSJXJTglHKut38go8",
               handle: "@anna_fit",
               text: "Smoothie prep has never been so aesthetic. 💚 #TMWINGS",
               product: {
                 brand: "Ninja",
                 name: "Ninja Pro Blender Combo 1200W",
                 price: "159.00 USD",
                 image: "https://images.unsplash.com/photo-1610992389657-69fa6d1cfaf5?q=80&w=400&auto=format&fit=crop",
               }
            }
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div 
                className="relative aspect-[9/16] overflow-hidden rounded-sm bg-neutral-200 mb-4 shadow-sm"
                onClick={() => setSelectedVideoData({
                  videoImg: item.img,
                  description: item.text,
                  product: item.product
                })}
              >
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.img}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 overflow-hidden">
                      <img className="w-full h-full object-cover" src={item.avatar}/>
                    </div>
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">{item.handle}</span>
                  </div>
                </div>
              </div>
              <p className="text-xs font-medium text-neutral-800 line-clamp-2 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-[64px]">
          <button className="px-[32px] py-[16px] border border-[var(--color-text-main)] text-[var(--color-text-main)] font-semibold uppercase text-[13px] tracking-[1px] hover:bg-[var(--color-text-main)] hover:text-[var(--color-bg)] transition-colors">
            View More Inspiration
          </button>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-[80px] px-[40px] bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="flex justify-between items-end mb-[48px]">
          <div>
            <h2 className="text-[32px] font-semibold tracking-tight headline text-[var(--color-text-main)]">Best Sellers</h2>
          </div>
          <Link className="text-[14px] font-medium border-b border-[var(--color-text-main)] pb-[2px] text-[var(--color-text-main)] hover:opacity-80 transition-opacity" to="/product">View All Products</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {[
            {name: "AeroFlow 900 Smart AC", cat: "Air Conditioning", price: "$549.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB1ro_12E_ErV0BjsJUWbjL6jz7JHuQC7dBOQgZ80WkunabzPR84FzhSq8isA4rBhQm4vdvfT5VKw3c362n-UFudR96-iWjahdmMD95_k_a8KPhHDd8ksRtBGCPEHoveQOz5MIqgN4JdWRS6Ns8PB_UXH3OwRQQH2xmsmqLmuF5XAq6WXn_KeETP8BXEb1M--My9ywlC4PzzGwASPHUAWE2QwK0iLtoFkDi5bPlCxGtFowOkz3lx4gmFEfuEADTZyoc3JNDrWrNwc"},
            {name: "Vertex V2 Silent Fan", cat: "Fans & Airflow", price: "$229.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzMVn1aJ-fPfHlKGyP71cwK9yMUq67cwF3LHHLANAUxc3m3cPx2jw9r0U64ybFUQxOuyiAIGvCW5RyalXthE7ylF6dEIpe_fAnWLdlDHkj6bpYqQhLpTBx7ktXItONCKzhvk5eIdzh2ecQQbnbOeZllPQLCHVRlxGeIJSepTq2HwzngNVWCBCmxnuOWEZGMy395T8ie7CzuV4pDfkt2sI49pntMeTsmIyIjQXN6bfOgwN3YAo54zF1sh29rtd5dlXkviUVhimSM84"},
            {name: "OmniOven Professional", cat: "Kitchen Essentials", price: "$399.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwFEZwxJSRdTWy5ldtlP7ceQJzTLXZnD472g9SisejP-mg4F4TnvCMDrhE9xLXkLiNLdV3_1XlE_Ubr2nvmcqPOuD0GMdAXWBPmXy5en7hh3Vsne8NsnZZtZPYKyAH_b-LtvAdn76ByX71UZqUG7h1MzwN4rnSvBoC-h7vpnP6uXsoolUXtyWmIlM4i9hg9fJ285JoqSE8rhRGzisbUMXwgbwMa2vp8rt1_MzpgnN_Msc9J-7foh87cPdouxGSxX4dqk38l5gLswo"},
            {name: "ZenFlow Pure", cat: "Air Quality", price: "$299.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB1ro_12E_ErV0BjsJUWbjL6jz7JHuQC7dBOQgZ80WkunabzPR84FzhSq8isA4rBhQm4vdvfT5VKw3c362n-UFudR96-iWjahdmMD95_k_a8KPhHDd8ksRtBGCPEHoveQOz5MIqgN4JdWRS6Ns8PB_UXH3OwRQQH2xmsmqLmuF5XAq6WXn_KeETP8BXEb1M--My9ywlC4PzzGwASPHUAWE2QwK0iLtoFkDi5bPlCxGtFowOkz3lx4gmFEfuEADTZyoc3JNDrWrNwc", opacity: true}
          ].map((prod, idx) => (
            <Link key={idx} to="/product" className="group cursor-pointer bg-[var(--color-bg)] border border-[var(--color-border)] p-[20px] transition-colors hover:border-[var(--color-text-secondary)]">
              <div className="relative aspect-square bg-[#f0f0f0] overflow-hidden mb-[24px] flex items-center justify-center p-[20px]">
                <span className="absolute top-[10px] left-[10px] bg-[var(--color-bg)] text-[var(--color-text-main)] text-[11px] font-semibold uppercase tracking-[1px] px-[12px] py-[6px] border border-[var(--color-border)] z-10">Best Seller</span>
                <img className={`max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 opacity-90 ${prod.opacity ? '!opacity-30' : ''}`} src={prod.img}/>
                <button className="absolute bottom-[20px] left-[20px] right-[20px] bg-[var(--color-accent)] text-white py-[14px] font-medium uppercase text-[12px] tracking-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Add to cart</button>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold text-[15px] text-[var(--color-text-main)]">{prod.name}</h4>
                  <span className="font-medium text-[15px] text-[var(--color-text-main)]">{prod.price}</span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-[12px] font-medium tracking-[1px] uppercase mt-2">{prod.cat}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Buy From Us Section */}
      <section className="py-[100px] px-[40px] bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-[64px]">
            <h2 className="text-[36px] font-semibold tracking-tight text-[var(--color-text-main)] headline mb-[16px]">Shop direct and unlock premium benefits</h2>
            <span className="text-[14px] font-medium text-[var(--color-text-secondary)]">Experience the TMWINGS difference when you buy directly from us.</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-[32px]">
            <div className="flex flex-col border-t border-[var(--color-border)] pt-[32px]">
              <div className="mb-[24px]">
                <span className="material-symbols-outlined text-[var(--color-text-main)] text-[32px]">shopping_bag</span>
              </div>
              <h4 className="text-[18px] font-semibold text-[var(--color-text-main)] mb-[16px]">Exclusive products, colors & deals</h4>
              <p className="text-[var(--color-text-secondary)] text-[14px] leading-relaxed">Elevate your shopping experience with one-of-a-kind finds and exclusive deals available only here.</p>
            </div>
            <div className="flex flex-col border-t border-[var(--color-border)] pt-[32px]">
              <div className="mb-[24px]">
                <span className="material-symbols-outlined text-[var(--color-text-main)] text-[32px]">verified_user</span>
              </div>
              <h4 className="text-[18px] font-semibold text-[var(--color-text-main)] mb-[16px]">90-day guarantee</h4>
              <p className="text-[var(--color-text-secondary)] text-[14px] leading-relaxed">Shop with absolute confidence. If you're not satisfied, we offer a hassle-free 90-day return policy.</p>
            </div>
            <div className="flex flex-col border-t border-[var(--color-border)] pt-[32px]">
              <div className="mb-[24px]">
                <span className="material-symbols-outlined text-[var(--color-text-main)] text-[32px]">local_shipping</span>
              </div>
              <h4 className="text-[18px] font-semibold text-[var(--color-text-main)] mb-[16px]">Free shipping on all orders</h4>
              <p className="text-[var(--color-text-secondary)] text-[14px] leading-relaxed">We believe in transparent pricing. That's why every single order ships to your door for free.</p>
            </div>
            <div className="flex flex-col border-t border-[var(--color-border)] pt-[32px]">
              <div className="mb-[24px]">
                <span className="material-symbols-outlined text-[var(--color-text-main)] text-[32px]">app_registration</span>
              </div>
              <h4 className="text-[18px] font-semibold text-[var(--color-text-main)] mb-[16px]">Easy warranty registration</h4>
              <p className="text-[var(--color-text-secondary)] text-[14px] leading-relaxed">At TMWINGS, we stand behind the quality and performance of every architectural piece we create.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <SocialVideoModal 
        isOpen={!!selectedVideoData} 
        onClose={() => setSelectedVideoData(null)} 
        videoData={selectedVideoData} 
      />
    </div>
  );
}
