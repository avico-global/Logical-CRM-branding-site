import React from "react";

export default function IndustryHero({ industryName }) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#FFB700]/20 to-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#FFB700]/15 to-yellow-200/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#FFB700]/10 to-amber-200/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
          <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
            ALL INDUSTRIES
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#293146] mb-6 leading-tight">
          Professional {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB700] to-orange-500">
            {industryName}
          </span>{" "}
          Services
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          Trusted {industryName} solutions designed to boost efficiency, improve
          customer satisfaction, and maximize revenue.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-[#FFB700] text-white font-bold rounded-2xl hover:bg-orange-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}
