"use client";

import React, { useState, useEffect } from "react";

const features = [
  {
    icon: "fas fa-layer-group",
    title: "All-in-One Platform",
    description:
      "Manage scheduling, dispatching, invoicing, payments, and customer communications from a single, intuitive dashboard.",
    color: "bg-gray-200",
    iconColor: "text-white",
  },
  {
    icon: "fas fa-bolt",
    title: "Instant Efficiency Boost",
    description:
      "Automate repetitive tasks and streamline workflows. Most customers see 40% productivity gains within the first month.",
    color: "bg-gray-200",
    iconColor: "text-white",
  },
  {
    icon: "fas fa-crosshairs",
    title: "Smart Job Management",
    description:
      "AI-powered scheduling and routing optimization ensures your technicians take the most efficient routes and maximize daily jobs.",
    color: "bg-gray-200",
    iconColor: "text-white",
  },
  {
    icon: "fas fa-credit-card",
    title: "Faster Payments",
    description:
      "Get paid instantly with integrated payment processing, digital invoicing, and automatic payment reminders.",
    color: "bg-gray-200",
    iconColor: "text-white",
  },
];

export default function ChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/animationCrm/whychoose.png",
    "/animationCrm/whychoose1.png",
  ];

  // Auto-cycle through features every 4 seconds for smoother experience
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Auto-cycle through images every 3 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
            <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
              WHY US
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#293146] text-center mb-4 leading-tight">
            Why Choose Logical CRM?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The field service management platform built specifically for growing
            businesses
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features List */}
          <div className="space-y-6 relative">
            {/* Progress Line */}
            <div className="absolute left-0 top-0 w-1 h-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="w-full bg-gradient-to-b from-[#FFB700] to-[#FF8C00] transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  height: `${((activeIndex + 1) / features.length) * 100}%`,
                  transform: "translateY(0)",
                  borderRadius:
                    activeIndex === features.length - 1 ? "4px" : "4px 4px 0 0",
                }}
              />
            </div>

            {features.map((feature, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              return (
                <div
                  key={index}
                  className={`group flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive
                      ? "shadow-lg border-[#FFB700] scale-[1.02]"
                      : isPast
                      ? "border-[#FFB700]/30 shadow-md"
                      : "border-gray-100 hover:shadow-lg hover:border-[#FFB700]"
                  }`}
                >
                  {/* Icon Container */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive
                        ? "bg-[#FFB700] scale-110"
                        : isPast
                        ? "bg-[#FFB700]/20"
                        : `${feature.color} group-hover:bg-[#FFB700] group-hover:scale-110`
                    }`}
                  >
                    <i
                      className={`${
                        feature.icon
                      } transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isActive || isPast
                          ? "text-white"
                          : `${feature.iconColor} group-hover:text-white`
                      }`}
                    ></i>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-1 transition-colors duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isActive
                          ? "text-[#FFB700]"
                          : isPast
                          ? "text-[#FFB700]/80"
                          : "text-gray-900 group-hover:text-[#FFB700]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`leading-tight text-sm transition-colors duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isActive ? "text-gray-700" : "text-gray-500"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="flex-shrink-0 w-3 h-3 bg-[#FFB700] rounded-full animate-pulse transition-all duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side - Enhanced Image Gallery */}
          <div className="relative">
            {/* Enhanced background decoration */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#FFB700]/20 via-orange-500/15 to-red-500/10 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/15 via-purple-500/10 to-pink-500/5 rounded-3xl blur-2xl"></div>

            {/* Main image container with enhanced styling */}
            <div className="relative bg-gradient-to-br from-white via-gray-50/50 to-white rounded-3xl p-6 shadow-2xl border border-gray-200/50 overflow-hidden backdrop-blur-sm">
              {/* Decorative border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB700]/20 via-transparent to-[#FFB700]/20 rounded-3xl p-[1px]">
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>

              {/* Image container with overlay effect */}
              <div className="relative h-[510px] rounded-2xl overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFB700]/10 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFB700%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                </div>

                {/* Images with smooth transitions */}
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${
                      currentImage === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Why Choose Us ${index + 1}`}
                      className="w-full h-full object-contain drop-shadow-lg"
                      loading={currentImage === index ? "eager" : "lazy"}
                      style={{
                        filter:
                          currentImage === index
                            ? "brightness(1.05) contrast(1.02) saturate(1.1)"
                            : "brightness(0.9) contrast(0.9) saturate(0.8)",
                      }}
                    />
                    {/* Image glow effect */}
                    {currentImage === index && (
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#FFB700]/5 rounded-2xl"></div>
                    )}
                  </div>
                ))}

                {/* Image indicator dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImage === index
                          ? "bg-[#FFB700] scale-125"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Enhanced floating stats/badges */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="text-sm font-bold text-blue-600">
                    📈 +40% Productivity
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-6 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-white/20">
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

              {/* Enhanced CRM-specific badge */}
              <div className="absolute top-1/2 right-4 bg-[#FFB700] text-white rounded-2xl px-4 py-3 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="text-sm font-bold flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  ⚡ 5-Min Setup
                </div>
              </div>

              {/* Enhanced floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-[#FFB700] to-orange-500 rounded-full opacity-80 animate-bounce shadow-xl">
                <div className="absolute inset-1 bg-white/30 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-80 animate-bounce delay-1000 shadow-xl">
                <div className="absolute inset-1 bg-white/30 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 -right-3 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-70 animate-bounce delay-500 shadow-lg">
                <div className="absolute inset-1 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
