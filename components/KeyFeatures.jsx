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

  // Interactive image stage state
  const scenes = {
    crm1: "/animationCrm/crm1.png",
    crm2: "/animationCrm/crm2.png",
    crm3: "/animationCrm/crm3.png",
    crm4: "/animationCrm/crm4.png",
  };
  const [currentScene, setCurrentScene] = useState("crm1");
  const [isZooming, setIsZooming] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });
  const [crm1TicketClicks, setCrm1TicketClicks] = useState(0);

  // Auto-cycling state
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [autoPlayStep, setAutoPlayStep] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });

  // Handlers for interactive flow
  const handleCrm1TicketClick = (e) => {
    // Calculate click position relative to container for zoom origin
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin({ x, y });
    setIsZooming(true);

    // After a brief zoom, navigate based on click order
    setTimeout(() => {
      setIsZooming(false);
      if (crm1TicketClicks === 0) {
        setCurrentScene("crm2");
      } else {
        setCurrentScene("crm4");
      }
      setCrm1TicketClicks((c) => (c + 1) % 2);
    }, 450);
  };

  const handleCrm2MerchantClick = () => {
    setIsZooming(false);
    setCurrentScene("crm3");
    // Auto return to crm1 after showing merchant
    setTimeout(() => {
      setCurrentScene("crm1");
    }, 1500);
  };

  // Auto-play sequence configuration
  const autoPlaySequence = [
    {
      scene: "crm1",
      cursor: { x: 72, y: 38 },
      duration: 3000,
      action: "ticket",
    },
    {
      scene: "crm2",
      cursor: { x: 60, y: 30 },
      duration: 3000,
      action: "merchant",
    },
    { scene: "crm3", cursor: { x: 50, y: 50 }, duration: 2000, action: "wait" },
    {
      scene: "crm1",
      cursor: { x: 72, y: 38 },
      duration: 3000,
      action: "ticket2",
    },
    { scene: "crm4", cursor: { x: 50, y: 50 }, duration: 3000, action: "wait" },
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const currentStep = autoPlaySequence[autoPlayStep];
    if (!currentStep) {
      // Reset to beginning
      setAutoPlayStep(0);
      setCurrentScene("crm1");
      return;
    }

    // Set scene and cursor position
    setCurrentScene(currentStep.scene);
    setCursorPosition(currentStep.cursor);

    // Show cursor after a brief delay
    const cursorTimeout = setTimeout(() => {
      setShowCursor(true);
    }, 500);

    // Hide cursor and move to next step
    const nextStepTimeout = setTimeout(() => {
      setShowCursor(false);
      setAutoPlayStep((prev) => (prev + 1) % autoPlaySequence.length);
    }, currentStep.duration);

    return () => {
      clearTimeout(cursorTimeout);
      clearTimeout(nextStepTimeout);
    };
  }, [autoPlayStep, isAutoPlaying]);

  // Pause auto-play on hover
  const handleImageStageMouseEnter = () => {
    setIsAutoPlaying(false);
    setShowCursor(false);
  };

  const handleImageStageMouseLeave = () => {
    setIsAutoPlaying(true);
  };

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
            {/* Interactive Image Stage on the right */}
            <div className="flex-[1.3] relative">
              {/* Enhanced backdrop effects */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FFB700]/30 via-orange-500/20 to-red-500/15 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-500/20 via-purple-500/15 to-pink-500/10 rounded-3xl blur-2xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-2xl blur-xl"></div>

              <div
                className="relative bg-gradient-to-br from-white via-gray-50/50 to-white rounded-3xl p-6 shadow-2xl border border-gray-200/50 overflow-hidden backdrop-blur-sm"
                onMouseEnter={handleImageStageMouseEnter}
                onMouseLeave={handleImageStageMouseLeave}
              >
                {/* Decorative border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFB700]/20 via-transparent to-[#FFB700]/20 rounded-3xl p-[1px]">
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>

                {/* Scene container with enhanced styling */}
                <div
                  className="relative w-full h-[400px] rounded-2xl overflow-hidden"
                  style={{
                    transform: isZooming ? "scale(1.05)" : "scale(1)",
                    transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                    transition: "transform 450ms cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFB700]/10 to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFB700%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                  </div>

                  {/* Images layered with enhanced effects */}
                  {Object.entries(scenes).map(([key, src]) => (
                    <div
                      key={key}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        currentScene === key
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                    >
                      <img
                        src={src}
                        alt={key}
                        className="w-full h-full object-contain drop-shadow-lg"
                        loading={currentScene === key ? "eager" : "lazy"}
                        style={{
                          filter:
                            currentScene === key
                              ? "brightness(1.05) contrast(1.02) saturate(1.1)"
                              : "brightness(0.9) contrast(0.9) saturate(0.8)",
                        }}
                      />
                      {/* Image glow effect */}
                      {currentScene === key && (
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#FFB700]/5 rounded-2xl"></div>
                      )}
                    </div>
                  ))}

                  {/* Enhanced Auto-play cursor */}
                  {showCursor && (
                    <div
                      className="absolute z-20 w-10 h-10 pointer-events-none"
                      style={{
                        left: `${cursorPosition.x}%`,
                        top: `${cursorPosition.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="relative">
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 w-10 h-10 bg-[#FFB700]/20 rounded-full animate-ping"></div>
                        {/* Middle ring */}
                        <div className="absolute inset-1 w-8 h-8 bg-white border-2 border-[#FFB700] rounded-full animate-pulse shadow-lg"></div>
                        {/* Inner dot */}
                        <div className="absolute inset-2 w-6 h-6 bg-[#FFB700] rounded-full animate-bounce shadow-md"></div>
                        {/* Center highlight */}
                        <div className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full opacity-80"></div>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Interactive Hotspots (only show when not auto-playing) */}
                  {!isAutoPlaying && currentScene === "crm1" && (
                    <button
                      aria-label="Open Ticket"
                      title="Open Ticket"
                      onClick={handleCrm1TicketClick}
                      className="absolute z-10 group"
                      style={{ top: "38%", left: "72%" }}
                    >
                      <div className="relative">
                        {/* Outer glow */}
                        <div className="absolute inset-0 w-8 h-8 bg-[#FFB700]/30 rounded-full animate-ping"></div>
                        {/* Main button */}
                        <div className="relative w-6 h-6 bg-gradient-to-br from-[#FFB700] to-orange-500 rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 ease-out">
                          <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                          <div className="absolute top-1 left-1 w-4 h-4 bg-white/30 rounded-full"></div>
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          Click Ticket
                        </div>
                      </div>
                    </button>
                  )}

                  {!isAutoPlaying && currentScene === "crm2" && (
                    <button
                      aria-label="Open Merchant"
                      title="Open Merchant"
                      onClick={handleCrm2MerchantClick}
                      className="absolute z-10 group"
                      style={{ top: "30%", left: "60%" }}
                    >
                      <div className="relative">
                        {/* Outer glow */}
                        <div className="absolute inset-0 w-8 h-8 bg-[#FFB700]/30 rounded-full animate-ping"></div>
                        {/* Main button */}
                        <div className="relative w-6 h-6 bg-gradient-to-br from-[#FFB700] to-orange-500 rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 ease-out">
                          <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                          <div className="absolute top-1 left-1 w-4 h-4 bg-white/30 rounded-full"></div>
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                          Open Merchant
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Enhanced Labels */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FFB700] rounded-full animate-pulse"></div>
                    <div className="text-sm font-bold text-gray-800">
                      {currentScene.toUpperCase()}
                    </div>
                  </div>
                  {isAutoPlaying && (
                    <div className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                      <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                      Auto Demo
                    </div>
                  )}
                </div>

                {/* Enhanced Auto-play indicator */}
                {isAutoPlaying && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-white/20">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                      </div>
                      <span className="text-xs font-bold text-gray-800">
                        Auto
                      </span>
                    </div>
                  </div>
                )}

                {/* Progress indicator */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg border border-white/20">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>Demo Progress</span>
                      <span>
                        {Math.round(
                          ((autoPlayStep + 1) / autoPlaySequence.length) * 100
                        )}
                        %
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#FFB700] to-orange-500 rounded-full transition-all duration-500 ease-out"
                        style={{
                          width: `${
                            ((autoPlayStep + 1) / autoPlaySequence.length) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
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
                <div className="absolute top-1/4 -left-2 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-60 animate-bounce delay-700 shadow-md"></div>
                <div className="absolute bottom-1/4 -right-1 w-2 h-2 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-50 animate-bounce delay-300"></div>
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
