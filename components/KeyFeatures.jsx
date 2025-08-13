"use client";

import React, { useState, useRef, useEffect } from "react";

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
  const [progress, setProgress] = useState(0); // For blue line animation
  const descriptionRefs = useRef([]);
  const intervalRef = useRef();
  const PROGRESS_DURATION = 6000; // ms for each feature (slower)
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(false);
    setProgress(0); // Reset to 0 immediately, no transition
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
      setProgress(100); // Animate to 100% after a tick
    }, 30); // Small delay to allow DOM to update

    const nextTimeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, PROGRESS_DURATION + 200);
    return () => {
      clearTimeout(timeout);
      clearTimeout(nextTimeout);
    };
    // eslint-disable-next-line
  }, [activeIndex]);

  const handleFeatureClick = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <>
      <section className="w-full relative overflow-hidden py-12 px-4">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20"></div>

        {/* Subtle animated background elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-100/20 to-pink-100/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-700 text-sm font-semibold tracking-wide">
              KEY FEATURES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 text-center mb-4 leading-tight">
            Key Features That Drive Results
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light text-center max-w-3xl leading-relaxed mb-12">
            Powerful features designed to streamline your field service
            operations,
            <span className="text-blue-600 font-medium">
              {" "}
              boost productivity
            </span>
            , and
            <span className="text-purple-600 font-medium">
              grow your business efficiently
            </span>
            .
          </p>
          <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-10 max-w-6xl">
            {/* Compact Features on the left */}
            <div className="flex-1 w-full space-y-1">
              {features.map((feature, idx) => (
                <div key={feature.title} className="group">
                  <button
                    className={`flex items-start w-full p-4 rounded-xl border transition-all duration-300 focus:outline-none ${
                      activeIndex === idx
                        ? "bg-white border-blue-200 shadow-lg shadow-blue-100/50 scale-[1.01]"
                        : "bg-white/50 border-gray-100 hover:bg-white/80 hover:border-blue-100 hover:shadow-md"
                    }`}
                    onClick={() => handleFeatureClick(idx)}
                  >
                    <div
                      className={`mr-3 mt-0.5 p-2 rounded-lg transition-all duration-300 ${
                        activeIndex === idx
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md"
                          : "bg-gray-100 group-hover:bg-blue-100"
                      }`}
                    >
                      {React.cloneElement(feature.icon, {
                        width: 20,
                        height: 20,
                        stroke: activeIndex === idx ? "#ffffff" : "#6B7280",
                      })}
                    </div>
                    <div className="flex-1 text-left">
                      <h3
                        className={`font-bold text-base mb-1 transition-colors duration-300 ${
                          activeIndex === idx
                            ? "text-gray-900"
                            : "text-gray-700"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      {activeIndex === idx && (
                        <p className="text-gray-600 text-sm leading-relaxed animate-fadeIn">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </button>
                  {/* Compact progress bar */}
                  {activeIndex === idx && (
                    <div className="ml-4 mt-2 mb-1">
                      <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          style={{
                            width: `${progress}%`,
                            transition: shouldAnimate
                              ? `width ${PROGRESS_DURATION}ms linear`
                              : "none",
                          }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Compact Video on the right */}
            <div className="flex-[1.3] relative">
              {/* Video backdrop effects */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>

              <div className="relative bg-white rounded-2xl p-3 shadow-xl border border-gray-100">
                <video
                  src="/videos/Automations-transcode-smartabs-home-2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[500px] object-cover rounded-xl shadow-md"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Compact video overlay elements */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 shadow-md">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-gray-700">
                      Live Demo
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 bg-white/90 backdrop-blur-sm rounded-md px-3 py-1 shadow-md">
                  <span className="text-xs font-semibold text-gray-700">
                    Interactive Features
                  </span>
                </div>
              </div>

              {/* Smaller floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
