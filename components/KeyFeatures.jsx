"use client";

import React, { useState, useEffect } from "react";

const features = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="#B0B7BC"
        strokeWidth="2"
        viewBox="0 0 28 28"
      >
        <path d="M20 20L8 8M8 16V8h8" />
      </svg>
    ),
    title: "Book more jobs",
    description: (
      <span>
        Book 3× more jobs and be available 24/7 with an online booking widget
        right on your website. Give your customers the convenience to book your
        service.
      </span>
    ),
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="#B0B7BC"
        strokeWidth="2"
        viewBox="0 0 28 28"
      >
        <rect x="4" y="6" width="20" height="16" rx="2" />
        <path d="M8 2v4M20 2v4" />
      </svg>
    ),
    title: "Schedule more efficiently",
    description: (
      <span>
        Convert new leads into jobs with just a few clicks and automatically
        dispatch the right tech that there is a new job in their schedule.
      </span>
    ),
  },
  {
    icon: (
      <img
        src="/images/comments.png"
        width={28}
        height={28}
        alt="Easy communication icon"
      />
    ),
    title: "Easy communication",
    description: (
      <span>
        Connect with your team and your customers with a built-in phone system.
        Track your ads, track and record calls, automate messages, and so much
        more.
      </span>
    ),
  },
  {
    icon: (
      <img
        src="/images/settings.png"
        width={28}
        height={28}
        alt="Automate tedious tasks icon"
      />
    ),
    title: "Automate tedious tasks",
    description: (
      <span>
        Get more done in less time with alerting tech before their next job,
        "on-my-way" text messages, review requests, reminders for unpaid
        invoices and so much more.
      </span>
    ),
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="#B0B7BC"
        strokeWidth="2"
        viewBox="0 0 28 28"
      >
        <rect x="4" y="8" width="20" height="12" rx="2" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      </svg>
    ),
    title: "Accept payments anywhere, anytime",
    description: (
      <span>
        Get paid every time, on time with an all in one financial solution that
        let's you get paid with online payments, card readers, tap-to-pay, and
        more.
      </span>
    ),
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="#B0B7BC"
        strokeWidth="2"
        viewBox="0 0 28 28"
      >
        <path d="M14 2l3.09 6.26L24 9.27l-5 4.87L20.18 22 14 18.27 7.82 22 9 14.14l-5-4.87 6.91-1.01z" />
      </svg>
    ),
    title: "AI Automations",
    description: (
      <span>
        Work smarter, not harder with the easy to use AI powered toolset.
        Deliver perfect responses every time with smart messaging and get more
        insights from customer calls.
      </span>
    ),
  },
];

export default function KeyFeatures() {
  const [activeIndex, setActiveIndex] = useState(0); // Start with first feature
  const [progress, setProgress] = useState(0); // For progress line animation
  const PROGRESS_DURATION = 5000; // ms for each feature (smoother timing)
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pause auto-cycling when user is hovering

    setShouldAnimate(false);
    setProgress(0); // Reset to 0 immediately, no transition
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
      setProgress(100); // Animate to 100% after a tick
    }, 50); // Small delay to allow DOM to update

    const nextTimeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, PROGRESS_DURATION + 300);
    return () => {
      clearTimeout(timeout);
      clearTimeout(nextTimeout);
    };
    // eslint-disable-next-line
  }, [activeIndex, isHovered]);

  const handleFeatureClick = (idx) => {
    setActiveIndex(idx);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <section className="w-full relative overflow-hidden py-12 px-4">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20"></div>

        {/* Enhanced animated background elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-100/30 to-cyan-100/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-100/30 to-pink-100/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-[#FFB700]/20 to-orange-100/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700]  rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700]  mr-2 animate-pulse" />
            <span className="text-[#FFB700]  text-sm font-semibold tracking-wide">
              KEY FEATURES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#293146] text-center mb-4 leading-tight">
            Key Features That Drive Results
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light text-center max-w-3xl leading-relaxed mb-12">
            Powerful features designed to streamline your field service
            operations,
            <span className="text-[#293146] font-medium">
              {" "}
              boost productivity
            </span>
            , and
            <span className="text-[#293146] font-medium">
              grow your business efficiently
            </span>
            .
          </p>
          <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-10 max-w-6xl">
            {/* Enhanced Features on the left */}
            <div className="flex-1 w-full space-y-2 relative">
              {features.map((feature, idx) => {
                const isActive = idx === activeIndex;
                const isPast = idx < activeIndex;

                return (
                  <div key={feature.title} className="group relative">
                    <button
                      className={`flex items-start w-full p-5 rounded-2xl border transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none ${
                        isActive
                          ? "bg-white border-[#FFB700] shadow-xl shadow-[#FFB700]/20 scale-[1.02]"
                          : isPast
                          ? "bg-white/80 border-[#FFB700]/30 shadow-lg"
                          : "bg-white/60 border-gray-100 hover:bg-white/90 hover:border-[#FFB700]/50 hover:shadow-lg hover:scale-[1.01]"
                      }`}
                      onClick={() => handleFeatureClick(idx)}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Enhanced Icon Container */}
                      <div
                        className={`mr-4 mt-0.5 p-3 rounded-xl transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          isActive
                            ? "bg-[#FFB700] shadow-lg scale-110"
                            : isPast
                            ? "bg-[#FFB700]/20"
                            : "bg-gray-100 group-hover:bg-[#FFB700]/20 group-hover:scale-105"
                        }`}
                      >
                        {React.cloneElement(feature.icon, {
                          width: 22,
                          height: 22,
                          stroke: isActive || isPast ? "#ffffff" : "#6B7280",
                        })}
                      </div>

                      {/* Enhanced Content */}
                      <div className="flex-1 text-left">
                        <h3
                          className={`font-bold text-lg mb-2 transition-colors duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            isActive
                              ? "text-[#FFB700]"
                              : isPast
                              ? "text-[#FFB700]/80"
                              : "text-gray-800 group-hover:text-[#FFB700]"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        {isActive && (
                          <p className="text-gray-600 text-sm leading-relaxed animate-fadeIn">
                            {feature.description}
                          </p>
                        )}
                      </div>

                      {/* Active indicator dot */}
                      {isActive && (
                        <div className="flex-shrink-0 w-3 h-3 bg-[#FFB700] rounded-full animate-pulse transition-all duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
                      )}
                    </button>

                    {/* Enhanced progress bar */}
                    {isActive && (
                      <div className="ml-6 mt-3 mb-2">
                        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#FFB700] to-[#FF8C00] rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                            style={{
                              width: `${progress}%`,
                              transition: shouldAnimate
                                ? `width ${PROGRESS_DURATION}ms cubic-bezier(0.4,0,0.2,1)`
                                : "none",
                            }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* Enhanced Video on the right */}
            <div className="flex-[1.3] relative">
              {/* Enhanced video backdrop effects */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#FFB700]/20 to-orange-500/20 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-2xl blur-xl"></div>

              <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-gray-100 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-3xl hover:scale-[1.02]">
                <video
                  src="/videos/Automations-transcode-smartabs-home-2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[500px] object-cover rounded-2xl shadow-lg transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Enhanced video overlay elements */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg transition-all duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-800">
                      Live Demo
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg transition-all duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105">
                  <span className="text-sm font-bold text-gray-800">
                    Interactive Features
                  </span>
                </div>

                {/* Enhanced floating elements */}
                <div className="absolute -top-3 -right-3 w-5 h-5 bg-gradient-to-r from-[#FFB700] to-orange-500 rounded-full opacity-70 animate-bounce shadow-lg"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-70 animate-bounce delay-1000 shadow-lg"></div>
                <div className="absolute top-1/2 -right-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-60 animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
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

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slideIn {
          animation: slideInFromLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}
