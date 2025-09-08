import React from "react";

export default function PartnerHero() {
  return (
    <section className="relative pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
            <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
              PARTNER PROGRAM
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
            <span className="text-[#293146]">Grow with a trusted</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB700] to-amber-500">
              field service platform
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
            Join our partner network and build recurring revenue with software
            teams love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3 bg-[#FFB700] text-gray-900 font-bold rounded-2xl hover:bg-[#e6a600] transition-colors shadow-md">
              Apply Now
            </button>
            <button className="px-7 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
            <img
              src="/images/communications.webp"
              alt="Partner Collaboration"
              className="w-full h-72 object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
