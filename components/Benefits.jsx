"use client";

import React, { useState, useRef, useEffect } from "react";

const features = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#B0B7BC" strokeWidth="2" viewBox="0 0 28 28"><path d="M20 20L8 8M8 16V8h8"/></svg>
    ),
    title: "Book more jobs",
    description: (
      <span>
        Book 3× more jobs and be available 24/7 with an online booking widget right on your website. Give your customers the convenience to book your service.
      </span>
    ),
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#B0B7BC" strokeWidth="2" viewBox="0 0 28 28"><rect x="4" y="6" width="20" height="16" rx="2"/><path d="M8 2v4M20 2v4"/></svg>
    ),
    title: "Schedule more efficiently",
    description: (
      <span>
        Convert new leads into jobs with just a few clicks and automatically dispatch the right tech that there is a new job in their schedule.
      </span>
    ),
  },
  {
    icon: (
      <img src="/images/comments.png" width={28} height={28} alt="Easy communication icon" />
    ),
    title: "Easy communication",
    description: (
      <span>
        Connect with your team and your customers with a built-in phone system. Track your ads, track and record calls, automate messages, and so much more.
      </span>
    ),
  },
  {
    icon: (
      <img src="/images/settings.png" width={28} height={28} alt="Automate tedious tasks icon" />
    ),
    title: "Automate tedious tasks",
    description: (
      <span>
        Get more done in less time with alerting tech before their next job, “on-my-way” text messages, review requests, reminders for unpaid invoices and so much more.
      </span>
    ),
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#B0B7BC" strokeWidth="2" viewBox="0 0 28 28"><rect x="4" y="8" width="20" height="12" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg>
    ),
    title: "Accept payments anywhere, anytime",
    description: (
      <span>
        Get paid every time, on time with an all in one financial solution that let’s you get paid with online payments, card readers, tap-to-pay, and more.
      </span>
    ),
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#B0B7BC" strokeWidth="2" viewBox="0 0 28 28"><path d="M14 2l3.09 6.26L24 9.27l-5 4.87L20.18 22 14 18.27 7.82 22 9 14.14l-5-4.87 6.91-1.01z"/></svg>
    ),
    title: "Workiz Genius",
    description: (
      <span>
        Work smarter, not harder with the easy to use AI powered toolset. Deliver perfect responses every time with smart messaging and get more insights from customer calls.
      </span>
    ),
  },
];

export default function Benefits() {
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
    // Scroll into view when feature changes
    // if (descriptionRefs.current[activeIndex]) {
    //   descriptionRefs.current[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }
    // Move to next feature after duration
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
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white">
      <h2 className="text-[#23282b] font-extrabold text-3xl md:text-5xl text-center mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Built by the pros for the pros
      </h2>
      <p className="text-[#23282b] text-base md:text-lg font-normal text-center max-w-3xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Everything you need to make your business run more efficiently, increase your revenue and manage your team all in one place.
      </p>
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 mt-8 max-w-7xl">
        {/* Features on the left */}
        <div className="flex-1 w-full pr-8 ml-4">
          {features.map((feature, idx) => (
            <div key={feature.title}>
              <button
                className={`flex items-start w-full py-3 border-0 border-b border-[#E5E7EB] focus:outline-none transition-colors ${activeIndex === idx ? 'bg-white' : 'bg-transparent'}`}
                style={{ cursor: 'pointer', textAlign: 'left', width: '100%' }}
                onClick={() => handleFeatureClick(idx)}
              >
                <span className="mr-3 mt-1" style={{ color: activeIndex === idx ? '#3B82F6' : '#B0B7BC' }}>
                  {React.cloneElement(feature.icon, { width: 20, height: 20, stroke: activeIndex === idx ? '#3B82F6' : '#B0B7BC' })}
                </span>
                <span
                  className={`font-bold text-base md:text-lg`}
                  style={{
                    fontSize: '1.2rem',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '2.4rem',
                    letterSpacing: '-0.0375rem',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    margin: 0,
                    color: '#23282b',
                  }}
                >
                  {feature.title}
                </span>
              </button>
              {/* Description and blue underline for active */}
              {activeIndex === idx && feature.description && (
                <div
                  ref={el => descriptionRefs.current[idx] = el}
                  className="pl-8 pr-2 pb-3 font-normal animate-fade-in"
                  style={{
                    display: 'block',
                    marginTop: '1.5rem',
                    marginBottom: '1.5rem',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    color: '#23282b',
                    fontSize: '1.15rem',
                  }}
                >
                  {feature.description}
                </div>
              )}
              {activeIndex === idx && (
                <div className="h-1 ml-8 mb-2 rounded transition-all bg-[#E5E7EB] relative overflow-hidden" style={{ width: '100%' }}>
                  <div
                    className="absolute top-0 left-0 h-full bg-[#3B82F6]"
                    style={{
                      width: `${activeIndex === idx ? progress : 0}%`,
                      transition: shouldAnimate ? `width ${PROGRESS_DURATION}ms linear` : 'none',
                    }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Video on the right */}
        <div className="flex-[1.5] flex justify-center">
          <video
            src="/videos/Automations-transcode-smartabs-home-2.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ maxWidth: '1100px', width: '100%', height: '700px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}


