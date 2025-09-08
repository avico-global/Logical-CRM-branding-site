import React from "react";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
            <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
              ABOUT US
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
            <span className="text-[#293146]">Built by field service</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB700] to-amber-500">
              professionals
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
            We create simple, powerful tools that help growing field service
            businesses run smarter every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-7 py-3 bg-[#FFB700] text-gray-900 font-bold rounded-2xl hover:bg-[#e6a600] transition-colors shadow-md">
              Start Free Trial
            </button>
            <button className="px-7 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-colors">
              Meet the Team
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
            <img
              src="/images/automations-illustration-2.webp"
              alt="Field Service Team"
              className="w-full h-72 object-cover rounded-2xl"
            />
            <div className="absolute -left-3 -top-3 bg-white/90 border border-gray-200 rounded-2xl shadow p-3 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#FFB700]/15 text-[#FFB700] flex items-center justify-center">
                <i className="fas fa-star" />
              </div>
              <div className="text-sm font-semibold text-gray-800">
                Trusted by 5,000+ teams
              </div>
            </div>
            <div className="absolute -right-3 bottom-6 bg-white/90 border border-gray-200 rounded-2xl shadow p-3 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
                <i className="fas fa-shield-alt" />
              </div>
              <div className="text-sm font-semibold text-gray-800">
                99.9% uptime
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto mt-10">
        <div className="h-2 w-full bg-gradient-to-r from-transparent via-[#FFB700] to-transparent rounded-full opacity-70" />
      </div>
    </section>
  );
}
