"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ProductFeatures({ title, features }) {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardsRef = useRef([]);

  // Intersection Observer for staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 150); // Staggered delay
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [features]);

  const renderIcon = (icon) => {
    if (typeof icon === "string") {
      const isFaClass =
        icon.includes("fa-") ||
        icon.startsWith("fa ") ||
        icon.startsWith("fas ") ||
        icon.startsWith("far ") ||
        icon.startsWith("fab ");
      return isFaClass ? (
        <i className={icon} aria-hidden="true"></i>
      ) : (
        <span>{icon}</span>
      );
    }
    return icon;
  };
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 animate-fadeInUp">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
            Powerful capabilities designed to streamline your workflow and boost
            productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isVisible = visibleCards.includes(index);
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                data-index={index}
                className={`group relative rounded-3xl p-8 shadow-lg border border-gray-100 bg-white overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${
                  isHovered
                    ? "shadow-2xl shadow-[#FFB700]/20 scale-[1.03] border-[#FFB700]/30"
                    : "hover:shadow-xl hover:scale-[1.02] hover:border-[#FFB700]/20"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Enhanced top gradient line */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#FFB700] to-transparent transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isHovered
                      ? "opacity-100 scale-x-100"
                      : "opacity-60 scale-x-75"
                  }`}
                />

                {/* Enhanced Icon Container */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isHovered
                      ? "bg-[#FFB700] text-white scale-110 shadow-lg shadow-[#FFB700]/30"
                      : "bg-[#FFB700]/10 text-[#FFB700] group-hover:bg-[#FFB700] group-hover:text-white group-hover:scale-105"
                  }`}
                >
                  {renderIcon(feature.icon || feature.iconClass)}
                </div>

                {/* Enhanced Content */}
                <h3
                  className={`text-2xl font-bold mb-3 transition-colors duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isHovered
                      ? "text-[#FFB700]"
                      : "text-gray-900 group-hover:text-[#293146]"
                  }`}
                >
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed transition-colors duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                  {feature.description}
                </p>

                {/* Enhanced Benefits Section */}
                <div className="space-y-3">
                  <h4
                    className={`font-semibold transition-colors duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isHovered ? "text-[#FFB700]" : "text-gray-900"
                    }`}
                  >
                    Benefits:
                  </h4>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center gap-2 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                        style={{
                          animationDelay: `${benefitIndex * 100}ms`,
                          animation: isHovered
                            ? "slideInFromLeft 0.4s ease-out forwards"
                            : "none",
                        }}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            isHovered
                              ? "bg-[#FFB700] scale-125"
                              : "bg-[#FFB700] group-hover:bg-[#e6a600] group-hover:scale-110"
                          }`}
                        />
                        <span
                          className={`text-sm transition-colors duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            isHovered ? "text-gray-700" : "text-gray-600"
                          }`}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle background glow effect */}
                <div
                  className={`absolute inset-0 rounded-3xl transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isHovered
                      ? "bg-gradient-to-br from-[#FFB700]/5 to-transparent"
                      : "bg-transparent"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </section>
  );
}
