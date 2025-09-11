import React from "react";

export default function ProductHero({ data }) {
  if (!data?.hero) {
    return null;
  }

  const { hero } = data;

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-cover bg-center h-screen bg-gradient-to-l from-slate-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-yellow-50/30 to-indigo-50/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-yellow-200/30 to-cyan-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-200/30 to-cyan-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 bg-white border border-[#FFB700] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
              <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
                {hero.subtitle}
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-[#FFB700] capitalize">
                  {hero.title.highlight}
                </span>
                <br />
                <span className="text-gray-900 capitalize">
                  {hero.title.main}
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                {hero.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#FFB700] text-white font-bold rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                {hero.ctaButton}
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
                View Demo
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl opacity-50 blur-2xl"></div>

            {/* Main image container */}
            <div className="relative bg-white rounded-3xl p-5 shadow-xl">
              <div className="h-[500px] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden">
                <img
                  src={hero.heroImage}
                  alt={`${hero.subtitle} management dashboard`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-2 shadow-lg">
                <div className="text-sm font-semibold text-green-600">
                  📈 +40% Growth
                </div>
              </div>

              <div className="absolute bottom-8 left-4 bg-white rounded-2xl px-4 py-3 shadow-lg">
                <div className="text-xs text-gray-500 mb-1">
                  Customer Satisfaction
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-bold text-gray-900">98%</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional floating element */}
              <div className="absolute top-1/2 -right-4 bg-[#FFB700] text-white rounded-2xl px-4 py-3 shadow-lg transform -rotate-3">
                <div className="text-sm font-bold">⚡ 5-Min Setup</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 animate-bounce delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
