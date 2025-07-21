import React from "react";

export default function Business() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
      <h2 className="text-[#23282b] font-bold text-2xl md:text-4xl text-left w-full mb-12" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        For your business
      </h2>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
        {/* Scheduling */}
        <div className="flex flex-col items-start justify-start h-full">
          <div className="flex items-center justify-center h-14 mb-2 w-14">
            <svg width="36" height="36" fill="none" stroke="#3B82F6" strokeWidth="2.5" viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 9h18"/></svg>
          </div>
          <h3 className="text-[#23282b] font-bold text-xl mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Scheduling</h3>
          <p className="text-[#23282b] text-base mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Increase your availability and streamline your scheduling process with custom job and client profiles.
          </p>
          <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Learn More <span className="ml-1">→</span>
          </a>
        </div>
        {/* Invoicing */}
        <div className="flex flex-col items-start justify-start h-full">
          <div className="flex items-center justify-center h-14 mb-2 w-14">
            <svg width="36" height="36" fill="none" stroke="#3B82F6" strokeWidth="2.5" viewBox="0 0 24 24">
              <rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h2"/></svg>
          </div>
          <h3 className="text-[#23282b] font-bold text-xl mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Invoicing</h3>
          <p className="text-[#23282b] text-base mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Get paid on time with customized invoices and automatic follow ups on overdue payments.
          </p>
          <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Learn More <span className="ml-1">→</span>
          </a>
        </div>
        {/* Communication */}
        <div className="flex flex-col items-start justify-start h-full">
          <div className="flex items-center justify-center h-14 mb-2 w-14">
            <svg
              width="36"
              height="36"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#3b82f6"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"
              />
            </svg>
          </div>
          <h3 className="text-[#23282b] font-bold text-xl mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Communication</h3>
          <p className="text-[#23282b] text-base mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Comprehensive solution for managing customer interactions, including email & text messaging, and a built-in phone system.
          </p>
          <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Learn more <span className="ml-1">→</span>
          </a>
        </div>
        {/* Service Plans */}
        <div className="flex flex-col items-start justify-start h-full">
          <div className="flex items-center justify-center h-14 mb-2 w-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#3b82f6"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"
              />
              <rect
                x="9"
                y="13"
                width="6"
                height="7"
                rx="1"
                stroke="#3b82f6"
                strokeWidth="2.5"
              />
            </svg>
          </div>
          <h3 className="text-[#23282b] font-bold text-xl mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Service Plans</h3>
          <p className="text-[#23282b] text-base mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Make attractive, professional invoices in a single click with the invoice generator.
          </p>
          <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Learn more <span className="ml-1">→</span>
          </a>
        </div>
        {/* Automations */}
        <div className="flex flex-col items-start justify-start h-full">
          <div className="flex items-center justify-center h-14 mb-2 w-14">
            {/* Gear Icon 1 */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.591 1.018c1.527-.878 3.304.899 2.426 2.426a1.724 1.724 0 001.018 2.592c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.018 2.591c.878 1.527-.899 3.304-2.426 2.426a1.724 1.724 0 00-2.591 1.018c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.592-1.018c-1.527.878-3.304-.899-2.426-2.426a1.724 1.724 0 00-1.018-2.591c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.018-2.592c-.878-1.527.899-3.304 2.426-2.426a1.724 1.724 0 002.592-1.018z"
              />
              <circle cx="12" cy="12" r="3" stroke="#3b82f6" strokeWidth="2" />
            </svg>
            {/* Gear Icon 2 */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.591 1.018c1.527-.878 3.304.899 2.426 2.426a1.724 1.724 0 001.018 2.592c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.018 2.591c.878 1.527-.899 3.304-2.426 2.426a1.724 1.724 0 00-2.591 1.018c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.592-1.018c-1.527.878-3.304-.899-2.426-2.426a1.724 1.724 0 00-1.018-2.591c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.018-2.592c-.878-1.527.899-3.304 2.426-2.426a1.724 1.724 0 002.592-1.018z"
              />
              <circle cx="12" cy="12" r="3" stroke="#3b82f6" strokeWidth="2" />
            </svg>
          </div>
          <h3 className="text-[#23282b] font-bold text-xl mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Automations</h3>
          <p className="text-[#23282b] text-base mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Increase productivity by 40% with automated responses to leads, jobs, estimates, and review requests.
          </p>
          <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Learn more <span className="ml-1">→</span>
          </a>
        </div>
        {/* Reports and analytics */}
        <div className="flex flex-col items-start justify-start h-full">
          <div className="flex items-center justify-center h-14 mb-2 w-14">
            <svg width="36" height="36" fill="none" stroke="#3B82F6" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M3 3v18h18"/><rect x="7" y="13" width="2" height="5"/><rect x="11" y="9" width="2" height="9"/><rect x="15" y="5" width="2" height="13"/>
            </svg>
          </div>
          <h3 className="text-[#23282b] font-bold text-xl mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Reports and anaytics</h3>
          <p className="text-[#23282b] text-base mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Optimize your daily processes and see how your business is performing in just one click.
          </p>
          <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Learn more <span className="ml-1">→</span>
          </a>
        </div>
        {/* Inventory management */}
        <div className="flex flex-col items-start justify-start h-full">
          <div className="flex items-center justify-center h-14 mb-2 w-14">
            <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 14 L14 18 L22 10" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="28" y="12" width="24" height="4" rx="2" fill="#3b82f6" />
              <path d="M10 30 L14 34 L22 26" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="28" y="28" width="24" height="4" rx="2" fill="#3b82f6" />
              <circle cx="16" cy="48" r="4" fill="#3b82f6" />
              <rect x="28" y="46" width="24" height="4" rx="2" fill="#3b82f6" />
            </svg>
          </div>
          <h3 className="text-[#23282b] font-bold text-xl mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Inventory management</h3>
          <p className="text-[#23282b] text-base mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Keep track of your inventory and optimize your warehouse processes with real-time activity reports
          </p>
          <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            learn more <span className="ml-1">→</span>
          </a>
        </div>
        {/* Online Booking */}
        <div className="flex flex-col items-start justify-start h-full">
          <div className="flex items-center justify-center h-14 mb-2 w-14">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline 
                points="10,8 26,16 18,18 16,26 10,8" 
                fill="none" 
                stroke="#2563eb" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <line 
                x1="18" y1="18" x2="22" y2="22"
                stroke="#2563eb"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3 className="text-[#23282b] font-bold text-xl mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Online Booking</h3>
          <p className="text-[#23282b] text-base mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Increase job opportunities by 30% and give your clients the fastest way to book your services.
          </p>
          <a href="#" className="text-[#23282b] font-bold text-base flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Learn More <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
} 