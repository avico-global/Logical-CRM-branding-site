import React from "react";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/44.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
];  

export default function Hero() {
  return (
    <div className="min-h-screen w-full relative pb-12" style={{marginTop: '-80px', paddingTop: '170px'}}>
      {/* Video Background - covers navbar, hero section, and cards */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bannerVideoNew.DXW5LSDC.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for text readability */}
      <div 
        className="absolute inset-0 z-10" 
        style={{background: 'linear-gradient(to right, rgba(26, 29, 34, 0.8), rgba(32, 35, 37, 0.8))'}}
      ></div>

      {/* Hero Section */}
      <div className="relative z-20 w-full flex flex-col justify-center items-center px-4" style={{minHeight: '100vh'}}>
        <div className="max-w-5xl w-full flex flex-col items-center justify-center text-center mt-8 mb-20">
          <h1
            className="text-white font-extrabold text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[1.15] mb-4 z-10"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              overflow: "visible",
              fontVariantLigatures: "none", // ✅ Fix for 'fi' touching
            }}
          >
            The #1 field service<br />management software
          </h1>

          <div
            className="text-white text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-normal mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The leading platform for field service teams, trusted by over 120,000 pros.
          </div>

          <div
            className="text-white text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-bold mb-18"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Schedule jobs, dispatch, invoice, track performance, and get paid — all in one place.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <button
              className="rounded-md border border-white text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold px-[24px] sm:px-[32px] md:px-[40px] py-[14px] sm:py-[16px] md:py-[18px] bg-transparent hover:bg-[#23282b] transition w-full sm:w-auto"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Product overview
            </button>
            <button
              className="rounded-md text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold px-[24px] sm:px-[32px] md:px-[40px] py-[14px] sm:py-[16px] md:py-[18px] transition w-full sm:w-auto"
              style={{
                backgroundColor: "#FFD400",
                color: "#23282B",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="relative z-20 w-full flex justify-center items-center px-2 py-16">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-black rounded-2xl border border-white/20 shadow-lg flex flex-col items-center px-8 pt-12 pb-8" style={{minHeight: 380}}>
            <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-4 text-center whitespace-nowrap" style={{fontFamily: "'Plus Jakarta Sans', sans-serif"}}>Win more jobs</h2>
            <p className="text-[#bfc8d1] text-lg md:text-xl font-normal mb-8 text-center" style={{fontFamily: "'Plus Jakarta Sans', sans-serif"}}>
              Increase your online presence and never miss a call again.
            </p>
            {/* Visual - revert to previous independent layout */}
            <div className="relative w-full h-[180px] mt-8 flex items-end justify-center">
              {/* Installation + New job */}
              <div className="absolute -left-4 top-8 flex items-center z-10">
                <div className="bg-[#3164e0] rounded-xl px-4 py-3 text-white font-bold text-[20px] leading-tight shadow-lg relative" style={{fontFamily: 'Plus Jakarta Sans, sans-serif', minWidth: 240}}>
                  {/* New job badge in top right */}
                  <span className="absolute -top-4 -right-14 bg-[#FFD400] rounded-full px-3 py-1 text-sm font-bold text-[#23282b] flex items-center shadow border border-yellow-300 whitespace-nowrap z-20" style={{fontFamily: 'Plus Jakarta Sans, sans-serif'}}>
                    <span className="mr-2 text-base w-3 inline-block text-center">🔔</span>New job
                  </span>
                  Installation
                  <div className="text-[12px] font-normal mt-1" style={{fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px'}}>
                    14525 Greenleaf St,<br/>Sherman Oaks
                  </div>
                </div>
              </div>
              {/* Repair */}
              <div className="absolute right-4 top-24 z-20">
                <div className="relative bg-[#5a686d] rounded-xl px-4 py-2 text-white font-bold text-[18px] leading-tight shadow-lg" style={{fontFamily: 'Plus Jakarta Sans, sans-serif', minWidth: 150, minHeight: 100}}>
                  Repair
                  <div className="text-[12px] font-normal mt-1" style={{fontFamily: 'Plus Jakarta Sans, sans-serif'}}>
                    54321 Hazeltine<br/>Avn,<br/>San Diego
                  </div>
                  <img src={avatars[1]} alt="avatar2" className="w-12 h-12 rounded-full border-2 border-white absolute right-[-18px] bottom-[-18px] z-30" />
                </div>
              </div>
              {/* Service + Avatars */}
              <div className="absolute left-0 bottom-[-70px] flex items-center z-30">
                <div className="relative">
                  <img src={avatars[0]} alt="avatar1" className="w-12 h-12 rounded-full border-2 border-white absolute -top-5 -left-5 z-20" />
                  <div className="bg-[#22b573] rounded-xl px-3 py-2 text-white font-bold text-[16px] leading-tight shadow-lg flex flex-col items-start justify-center relative" style={{fontFamily: 'Plus Jakarta Sans, sans-serif', minWidth: 90, minHeight: 48}}>
                    <span className="text-left w-full ml-4">Service</span>
                    <div className="text-[12px] font-normal mt-1 text-left w-full ml-4" style={{fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '12px'}}>
                      Knowxwilee blvd. 6<br/>San Diego
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          {/* Card 2 - Dashboard style, exact match */}
          <div className="relative bg-black rounded-2xl border border-white/20 shadow-lg flex flex-col items-center justify-center px-4 pt-8 pb-8" style={{minHeight: 380}}>
            {/* Boost revenue heading and subtitle */}
            <div className="w-full flex flex-col items-center mb-2 mt-4">
              <h2 className="text-white font-extrabold text-2xl md:text-3xl text-center" style={{fontFamily: "'Plus Jakarta Sans', sans-serif"}}>Boost revenue</h2>
              <div className="text-[#bfc8d1] text-base md:text-lg font-normal text-center mt-1" style={{fontFamily: "'Plus Jakarta Sans', sans-serif"}}>
                Improve the profitability of your business’s bottom line.
              </div>
            </div>
            <div className="w-full max-w-[260px] bg-[#f5f7fa] rounded-xl shadow p-1.5 mt-56" style={{fontFamily: 'Plus Jakarta Sans, sans-serif', minHeight: 200, paddingTop: 4, paddingBottom: 4, fontSize: '10px'}}>
              {/* Top bar */}
              <div className="flex items-center justify-between mb-0.5" style={{fontSize: '9px'}}>
                <span className="bg-[#FFD400] text-[#23282b] font-extrabold text-xs px-2 py-0.5 rounded-lg border border-[#23282b]" style={{fontSize: '9px'}}>WORKIZ</span>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#23282b" strokeWidth="2"/><path d="M20 20l-3-3" stroke="#23282b" strokeWidth="2" strokeLinecap="round"/></svg>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#23282b" strokeWidth="2"/><path d="M7 7V5a5 5 0 0110 0v2" stroke="#23282b" strokeWidth="2"/></svg>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" stroke="#23282b" strokeWidth="2"/><circle cx="12" cy="20" r="2" stroke="#23282b" strokeWidth="2"/></svg>
                  <img src={avatars[1]} alt="avatar" className="w-6 h-6 rounded-full border-2 border-white" />
                </div>
              </div>
              {/* Sidebar and main content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="flex flex-col items-center gap-3 pt-2 pr-3">
                  <div className="bg-white rounded-2xl py-2 px-1 flex flex-col items-center gap-3 shadow" style={{height: '180px', width: '44px'}}>
                    {/* Home */}
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10.5z" stroke="#23282b" strokeWidth="1.5"/><rect x="9" y="14" width="6" height="7" rx="1" stroke="#23282b" strokeWidth="1.5"/></svg>
                    {/* Calendar */}
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" stroke="#23282b" strokeWidth="1.5"/><path d="M16 3v4M8 3v4M3 9h18" stroke="#23282b" strokeWidth="1.5"/></svg>
                    {/* Users */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.8)" stroke="#000" strokeWidth="1.2">
     <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>



                    {/* Wrench */}
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.7518 6.24359C12.983 5.01246 14.782 4.69543 16.3057 5.29249L13.5532 8.04496C13.2216 8.37659 13.2216 8.91425 13.5532 9.24588L14.7541 10.4468C15.0857 10.7784 15.6234 10.7784 15.955 10.4468L18.7075 7.69432C19.3046 9.21796 18.9875 11.017 17.7564 12.2482C16.5253 13.4793 14.7262 13.7963 13.2026 13.1993L7.89927 18.5026C7.23602 19.1658 6.16068 19.1658 5.49744 18.5026C4.83419 17.8393 4.83419 16.764 5.49744 16.1007L10.8007 10.7974C10.2037 9.2738 10.5207 7.47472 11.7518 6.24359Z" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>

                    {/* Phone (improved) */}
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v2a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.09 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 7 7l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" stroke="#23282b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {/* Document */}
                    <svg width="26" height="26" fill="none" viewBox="0 0 28 28">
                      <rect x="4" y="2" width="18" height="22" rx="2.5" stroke="#23282b" strokeWidth="1.5"/>
                      {/* Folded corner at top right */}
                      <polygon points="22,2 16,2 22,8" fill="#e5e7eb" stroke="#23282b" strokeWidth="1.1"/>
                      <text x="9" y="15" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#23282b">$</text>
                      <path d="M9 18h10M9 21h5" stroke="#23282b" strokeWidth="1.5"/>
                    </svg>
                    {/* Chart */}
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#3b4b52" strokeWidth="1.5"/>
                      <line x1="7" y1="7" x2="13" y2="7" stroke="#3b4b52" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="7" y1="10" x2="10" y2="10" stroke="#3b4b52" strokeWidth="1.5" strokeLinecap="round"/>
                      <polyline points="7,15 11,13 14,16 17,12" fill="none" stroke="#3b4b52" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
                      <polyline points="16,12 17,12 17,13" fill="none" stroke="#3b4b52" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                {/* Main dashboard area */}
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-0.5" style={{fontSize: '10px'}}>
                  {/* Sales */}
                  <div className="col-span-1 row-span-1 bg-white rounded-lg p-1 flex flex-col justify-between">
                    <span className="text-xs text-[#23282b] font-semibold" style={{fontSize: '9px'}}>Sales</span>
                    <span className="text-lg font-bold text-[#23282b]" style={{fontSize: '11px'}}>$10,564</span>
                    {/* Bar chart */}
                    <div className="flex items-end gap-1 mt-1 h-10">
                      <div className="w-2 h-3 bg-[#FFD400] rounded"></div>
                      <div className="w-2 h-5 bg-[#FFD400] rounded"></div>
                      <div className="w-2 h-7 bg-[#FFD400] rounded"></div>
                      <div className="w-2 h-9 bg-[#FFD400] rounded"></div>
                      <div className="w-2 h-11 bg-[#FFD400] rounded"></div>
                      <div className="w-2 h-14 bg-[#FFD400] rounded"></div>
                    </div>
                  </div>
                  {/* Invoices */}
                  <div className="col-span-1 row-span-1 bg-white rounded-lg p-1 flex flex-col justify-between">
                    <span className="text-xs text-[#23282b] font-semibold" style={{fontSize: '9px'}}>Invoices</span>
                    <div className="flex flex-col mt-1 gap-2">
                      <div className="flex items-center">
                        <span className="inline-block w-1.5 h-6 bg-[#22b573] mr-1.5"></span>
                        <div className="flex flex-col leading-tight">
                          <span className="text-xs text-[#6b6f72] font-semibold" style={{fontSize: '7.5px', lineHeight: '1.1'}}>DUE</span>
                          <span className="text-[12px] font-extrabold text-[#23282b]">$46,455</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="inline-block w-1.5 h-6 bg-[#ff6b6b] mr-1.5"></span>
                        <div className="flex flex-col leading-tight">
                          <span className="text-xs text-[#6b6f72] font-semibold" style={{fontSize: '7.5px', lineHeight: '1.1'}}>PAST DUE</span>
                          <span className="text-[12px] font-extrabold text-[#23282b]">$2,433</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Job types (pie chart) */}
                  <div className="col-span-1 row-span-1 bg-white rounded-lg p-1 flex flex-col justify-between">
                    <span className="text-xs text-[#23282b] font-semibold mb-1" style={{fontSize: '9px'}}>Job types</span>
                    <div className="flex items-center gap-2">
                      {/* Pie chart */}
                      <svg width="32" height="32" viewBox="0 0 40 40">
                        <circle r="16" cx="20" cy="20" fill="#e5e7eb" />
                        <path d="M20 20 L20 4 A16 16 0 0 1 36 20 Z" fill="#FFD400" />
                        <path d="M20 20 L36 20 A16 16 0 0 1 20 36 Z" fill="#22b573" />
                        <path d="M20 20 L20 36 A16 16 0 0 1 4 20 Z" fill="#5a686d" />
                      </svg>
                      <div className="flex flex-col gap-0.5 text-xs">
                        <span className="flex items-center" style={{fontSize: '9px'}}><span className="inline-block w-2 h-2 rounded-full bg-[#FFD400] mr-1"></span>Installation</span>
                        <span className="flex items-center" style={{fontSize: '9px'}}><span className="inline-block w-2 h-2 rounded-full bg-[#22b573] mr-1"></span>Service</span>
                        <span className="flex items-center" style={{fontSize: '9px'}}><span className="inline-block w-2 h-2 rounded-full bg-[#5a686d] mr-1"></span>Repair</span>
                      </div>
                    </div>
                  </div>
                  {/* Today */}
                  <div className="col-span-1 row-span-1 bg-white rounded-lg p-1 flex flex-col justify-between">
                    <span className="text-xs text-[#23282b] font-semibold mb-1" style={{fontSize: '9px'}}>Today</span>
                    <div className="flex flex-col gap-0.5 text-xs">
                      <span style={{fontSize: '9px'}}>Sales <span className="font-bold text-[#23282b]">$5,443</span></span>
                      <span style={{fontSize: '9px'}}>Collected <span className="font-bold text-[#23282b]">$539</span></span>
                      <span style={{fontSize: '9px'}}>Jobs done <span className="font-bold text-[#23282b]">4</span></span>
                      <span style={{fontSize: '9px'}}>Jobs created <span className="font-bold text-[#23282b]">6</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Card 3 */}
            <div className="relative bg-black rounded-2xl border border-white/20 shadow-lg flex flex-col items-center px-8 pt-12 pb-8" style={{minHeight: 380}}>
            {/* Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#ff4d6d] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg flex items-center z-10 whitespace-nowrap">
              Now also in Spanish <span className="ml-2">🔊</span>
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-4 text-center whitespace-nowrap" style={{fontFamily: "'Plus Jakarta Sans', sans-serif"}}>Automate with AI</h2>
            <p className="text-[#bfc8d1] text-lg md:text-xl font-normal mb-8 text-center" style={{fontFamily: "'Plus Jakarta Sans', sans-serif"}}>
              Genius Answering answers every call you'd otherwise miss.
            </p>
            {/* Visual */}
            <div className="absolute left-0 right-0 bottom-8 flex flex-col items-center px-8">
              <div className="relative w-48 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#232b5a] to-[#181c20] blur-2xl opacity-80"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="#232b5a" />
                    <rect x="28" y="16" width="8" height="32" rx="4" fill="#fff" />
                    <circle cx="44" cy="32" r="4" fill="#fff" />
                    <circle cx="20" cy="32" r="4" fill="#fff" />
                    <path d="M32 24L36 32L32 40" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <img src={avatars[2]} alt="avatar3" className="absolute -bottom-4 left-0 w-12 h-12 rounded-full border-2 border-white" />
                <img src={avatars[1]} alt="avatar4" className="absolute -top-4 right-0 w-12 h-12 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* Trusted By Text (no separate section, same background as Hero) */}
        <div className="relative z-20 w-full flex justify-center items-center mt-8">
          <span className="text-[#bfc8d1] text-base md:text-lg font-extrabold text-center tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            5,000+ ORGANIZATIONS TRUST WORKIZ
          </span>
        </div>
        {/* Moving Logos Row */}
        <div className="relative z-20 w-full overflow-hidden mt-8">
          <div className="flex items-center gap-8 logo-marquee" style={{minWidth: 'max-content'}}>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
              <img key={num} src={`/images/logo-${num}.svg`} alt={`logo-${num}`} className="h-7 w-auto" />
            ))}
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
              <img key={`dup-${num}`} src={`/images/logo-${num}.svg`} alt={`logo-${num}`} className="h-7 w-auto" />
            ))}
          </div>
        </div>

    </div>
  );
}
