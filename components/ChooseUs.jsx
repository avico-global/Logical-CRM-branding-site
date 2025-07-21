import React from "react";


const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="4" fill="#2966F6"/>
        <circle cx="15" cy="7" r="4" fill="#2966F6"/>
        <path d="M2 21v-4c0-2.2 1.8-4 4-4h6c2.2 0 4 1.8 4 4v4" fill="#2966F6"/>
        <path d="M14 21v-4c0-1.3-.5-2.5-1.3-3.4" stroke="#2966F6" strokeWidth="2" fill="none"/>
        <path d="M22 21v-4c0-2.2-1.8-4-4-4" stroke="#2966F6" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: "Your teams gets it, fast",
    description: "Built for field pros, not IT people. Workiz is intuitive, with no big learning curves.",
  },
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="16" width="24" height="12" rx="6" fill="#2966F6"/>
        <circle cx="26" cy="22" r="4" fill="white"/>
      </svg>
    ),
    title: "Get running in days",
    description: "Set up fast without disrupting your business. You can fully onboard in days.",
  },
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
        <path d="M20 8C15.6 8 12 11.6 12 16v8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-2v-2c0-3.3 2.7-6 6-6s6 2.7 6 6v2h-2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-8c0-4.4-3.6-8-8-8z" fill="#2966F6"/>
        <path d="M14 20h2v4h-2v-4zm10 0h2v4h-2v-4z" fill="#2966F6"/>
        <circle cx="20" cy="28" r="1.5" fill="#2966F6"/>
        <path d="M20 29.5v2.5" stroke="#2966F6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Onboarding specialist",
    description: "Work 1–on–1 with a real person who really cares about your success.",
  },
];

export default function ChooseUs() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
        <h2
          className="text-[#111] font-extrabold text-3xl md:text-4xl text-center mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Why Workiz?
        </h2>
        <p
          className="text-[#111] text-base md:text-lg font-normal text-center mb-8"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Trusted by over 120,000 field service pros, get up and running in no time.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
          <button
            className="bg-[#2966F6] text-white font-bold text-base md:text-lg rounded-full px-8 py-4 shadow-none border-2 border-[#2966F6] focus:outline-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Easy to onboard
          </button>
          <button
            className="bg-white text-[#23282b] font-bold text-base md:text-lg rounded-full px-8 py-4 border-2 border-[#23282b] focus:outline-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Easy to use
          </button>
          <button
            className="bg-white text-[#23282b] font-bold text-base md:text-lg rounded-full px-8 py-4 border-2 border-[#23282b] focus:outline-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            AI that helps
          </button>
        </div>
      </section>
      {/* New feature section as in screenshot */}
      <section className="w-full flex flex-col items-center justify-center py-8 px-4 bg-white">
        <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 md:gap-0 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div key={feature.title} className={`flex-1 flex flex-col items-center text-center px-4 md:px-8 mb-10 md:mb-0 bg-white py-10 border-none border-0 border-transparent shadow-none ${idx === 0 ? 'mt-8' : ''}`} style={{ boxShadow: 'none', border: 'none', borderColor: 'transparent', borderRadius: '12px' }}>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-[#111] font-extrabold text-xl md:text-2xl mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{feature.title}</h3>
              <p className="text-[#111] text-base md:text-lg font-normal" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonial card section */}
      <section className="w-full flex flex-col items-center justify-center py-8 px-4 bg-white">
        <div className="w-full max-w-7xl mx-auto bg-[#f3f4f6] rounded-[48px] flex flex-col items-center justify-center py-8 px-4 md:px-16" style={{ boxShadow: '0 0 0 0 rgba(0,0,0,0.01)' }}>
          <p className="text-[#111] text-2xl md:text-4xl font-normal text-center mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, lineHeight: 1.15 }}>
            “Since we started with Workiz, my company has grown 3 times in revenue every year”
          </p>
          <div className="flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Yuri Dyomkin" className="w-16 h-16 rounded-full object-cover mb-2" />
            <span className="font-bold text-lg text-[#111]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Yuri Dyomkin</span>
            <span className="text-[#23282b] text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Owner, Garage door ninja</span>
          </div>
        </div>
      </section>
    </>
  );
}

