import React from "react";

export default function FinalCta({ heading }) {
  return (
    <section className="relative w-full py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white/10 border border-[#FFB700] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
            <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
              Let's Talk
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200 leading-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {heading || "Grow faster with Logical CRM"}
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Schedule jobs, dispatch teams, send invoices, and get paid — all
            from one modern, easy‑to‑use platform.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 rounded-2xl font-bold text-gray-900 bg-[#FFB700]  hover:  transition-transform ">
              Start Free Trial
              <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
            <button className="px-8 py-4 rounded-2xl font-bold text-white border-2 border-white/30 hover:border-white/60 bg-white/5 backdrop-blur-sm transition-colors">
              Book a Demo
            </button>
          </div>

          {/* Benefits row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/70 text-sm">
            <div className="inline-flex items-center gap-2">
              <CheckIcon /> No credit card required
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckIcon /> 14‑day free trial
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckIcon /> Cancel anytime
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckIcon /> 24/7 support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="text-emerald-300"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
