import React from "react";

export default function ProductTour() {
  return (
    <section className="w-full overflow-hidden py-14 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-700 text-sm font-semibold tracking-wide">
              PRODUCT TOUR
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 text-center mb-4 leading-tight">
            See Logical CRM in action
          </h2>
          <p className="text-[#23282b] opacity-80 max-w-2xl mx-auto mt-3">
            Schedule jobs, dispatch teams, send invoices, and get paid — all
            from one modern, easy-to-use platform.
          </p>
        </div>

        {/* Centered responsive video with 16:9 ratio */}
        <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 shadow-md overflow-hidden">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <video
              src="/videos/crm-feature.mp4"
              controls
              autoPlay
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
