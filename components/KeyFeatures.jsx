"use client";

import React, { useState, useEffect } from "react";

const features = [
  {
    id: "booking",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Book more jobs",
    description:
      "Book 3× more jobs and be available 24/7 with an online booking widget right on your website. Give your customers the convenience to book your service.",
    color: "#FFB700",
    lightColor: "#FFF3D1",
    darkColor: "#293146",
  },
  {
    id: "scheduling",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Schedule more efficiently",
    description:
      "Convert new leads into jobs with just a few clicks and automatically dispatch the right tech that there is a new job in their schedule.",
    color: "#FFB700",
    lightColor: "#FFF3D1",
    darkColor: "#293146",
  },
  {
    id: "communication",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Easy communication",
    description:
      "Connect with your team and your customers with a built-in phone system. Track your ads, track and record calls, automate messages, and so much more.",
    color: "#FFB700",
    lightColor: "#FFF3D1",
    darkColor: "#293146",
  },
  {
    id: "automation",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Automate tedious tasks",
    description:
      "Get more done in less time with alerting tech before their next job, 'on-my-way' text messages, review requests, reminders for unpaid invoices and so much more.",
    color: "#FFB700",
    lightColor: "#FFF3D1",
    darkColor: "#293146",
  },
  {
    id: "payments",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <path d="M1 10h22" />
      </svg>
    ),
    title: "Accept payments anywhere, anytime",
    description:
      "Get paid every time, on time with an all in one financial solution that let's you get paid with online payments, card readers, tap-to-pay, and more.",
    color: "#FFB700",
    lightColor: "#FFF3D1",
    darkColor: "#293146",
  },
];

// UI Mockup Components with Brand Colors
const BookingWidget = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-[#293146]">Book Service</h3>
      <div className="w-3 h-3 bg-[#FFB700] rounded-full animate-pulse"></div>
    </div>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-[#293146] mb-1">
          Service Type
        </label>
        <div className="bg-[#FFF3D1] border border-[#FFB700]/30 rounded-md p-3">
          <span className="text-[#293146] font-medium">Plumbing Repair</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-[#293146] mb-1">
            Date
          </label>
          <div className="bg-gray-50 border border-gray-300 rounded-md p-2 text-center">
            <span className="text-sm text-[#293146]">Dec 15</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#293146] mb-1">
            Time
          </label>
          <div className="bg-gray-50 border border-gray-300 rounded-md p-2 text-center">
            <span className="text-sm text-[#293146]">2:00 PM</span>
          </div>
        </div>
      </div>
      <button className="w-full bg-[#FFB700] text-[#293146] py-3 rounded-md font-bold hover:bg-[#e6a600] transition-all duration-200 shadow-md">
        Book Now
      </button>
    </div>
  </div>
);

const SchedulingDashboard = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-[#293146]">Today's Schedule</h3>
      <span className="bg-[#FFF3D1] text-[#293146] text-xs px-2 py-1 rounded-full font-medium">
        5 Jobs
      </span>
    </div>
    <div className="space-y-3">
      {[
        {
          time: "9:00 AM",
          client: "John Smith",
          service: "AC Repair",
          status: "completed",
        },
        {
          time: "11:30 AM",
          client: "Sarah Johnson",
          service: "Heating Install",
          status: "in-progress",
        },
        {
          time: "2:00 PM",
          client: "Mike Davis",
          service: "Maintenance",
          status: "scheduled",
        },
      ].map((job, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
        >
          <div className="flex items-center space-x-3">
            <div
              className={`w-3 h-3 rounded-full ${
                job.status === "completed"
                  ? "bg-[#FFB700]"
                  : job.status === "in-progress"
                  ? "bg-[#FFB700] animate-pulse"
                  : "bg-gray-300"
              }`}
            ></div>
            <div>
              <p className="font-medium text-[#293146]">{job.client}</p>
              <p className="text-sm text-gray-600">{job.service}</p>
            </div>
          </div>
          <span className="text-sm font-medium text-[#293146]">{job.time}</span>
        </div>
      ))}
    </div>
  </div>
);

const CommunicationPanel = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-[#293146]">Messages</h3>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-[#FFB700] rounded-full animate-pulse"></div>
        <span className="text-xs text-[#293146] font-medium">Online</span>
      </div>
    </div>
    <div className="space-y-3 mb-4">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-[#293146] rounded-full flex items-center justify-center text-white text-sm font-medium">
          C
        </div>
        <div className="flex-1">
          <div className="bg-gray-100 rounded-lg p-3">
            <p className="text-sm text-[#293146]">
              Hi, when will the technician arrive?
            </p>
          </div>
          <span className="text-xs text-gray-500">2 min ago</span>
        </div>
      </div>
      <div className="flex items-start space-x-3 justify-end">
        <div className="flex-1 text-right">
          <div className="bg-[#FFB700] text-[#293146] rounded-lg p-3 inline-block">
            <p className="text-sm font-medium">
              Our tech will be there in 15 minutes!
            </p>
          </div>
          <span className="text-xs text-gray-500 block">Just now</span>
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-[#FFB700] focus:outline-none"
      />
      <button className="bg-[#FFB700] text-[#293146] p-2 rounded-md hover:bg-[#e6a600] transition-colors">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
        </svg>
      </button>
    </div>
  </div>
);

const AutomationFlow = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-[#293146]">Automation Flow</h3>
      <div className="bg-[#FFF3D1] text-[#293146] text-xs px-2 py-1 rounded-full font-medium">
        Active
      </div>
    </div>
    <div className="space-y-4">
      {[
        { step: "Job Scheduled", icon: "📅", status: "completed" },
        { step: "Send Confirmation", icon: "✉️", status: "completed" },
        { step: "Tech Dispatched", icon: "🚗", status: "in-progress" },
        { step: "On-Way Notification", icon: "📱", status: "pending" },
        { step: "Job Completion", icon: "✅", status: "pending" },
      ].map((item, idx) => (
        <div key={idx} className="flex items-center space-x-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
              item.status === "completed"
                ? "bg-[#FFF3D1] text-[#293146]"
                : item.status === "in-progress"
                ? "bg-primary text-[#293146]"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {item.icon}
          </div>
          <div className="flex-1">
            <p
              className={`text-sm font-medium ${
                item.status === "completed"
                  ? "text-[#293146]"
                  : item.status === "in-progress"
                  ? "text-[#293146]"
                  : "text-gray-500"
              }`}
            >
              {item.step}
            </p>
          </div>
          <div
            className={`w-3 h-3 rounded-full ${
              item.status === "completed"
                ? "bg-primary"
                : item.status === "in-progress"
                ? "bg-[#FFB700] animate-pulse"
                : "bg-gray-300"
            }`}
          ></div>
        </div>
      ))}
    </div>
  </div>
);

const PaymentTerminal = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-[#293146]">Payment</h3>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <span className="text-xs text-[#293146] font-medium">Secure</span>
      </div>
    </div>
    <div className="space-y-4">
      <div className="bg-[#FFF3D1] border border-primary/30 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#293146] font-medium">
            Service Total
          </span>
          <span className="text-lg font-bold text-[#293146]">$245.00</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-[#293146]">
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
          </svg>
          <span>Secure Payment</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <button className="bg-gray-100 text-[#293146] py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
          💳 Card
        </button>
        <button className="bg-gray-100 text-[#293146] py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
          📱 Tap
        </button>
        <button className="bg-gray-100 text-[#293146] py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
          💰 Cash
        </button>
      </div>
      <button className="w-full bg-primary text-[#293146] py-3 rounded-md font-bold hover:bg-[#e6a600] transition-all duration-200 shadow-md">
        Process Payment
      </button>
    </div>
  </div>
);

export default function KeyFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const mockupComponents = {
    booking: <BookingWidget />,
    scheduling: <SchedulingDashboard />,
    communication: <CommunicationPanel />,
    automation: <AutomationFlow />,
    payments: <PaymentTerminal />,
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-[#FFF3D1]/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white border border-primary rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
            <span className="text-primary text-sm font-semibold tracking-wide">
              KEY FEATURES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#293146] mb-6 leading-tight">
            Powerful Features That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#e6a600]">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Streamline your field service operations with our comprehensive
            suite of tools designed to
            <span className="font-semibold text-[#293146]">
              {" "}
              boost productivity
            </span>{" "}
            and
            <span className="font-semibold text-[#293146]">
              {" "}
              grow your business
            </span>
            .
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Features List */}
          <div
            className="space-y-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {features.map((feature, index) => {
              const isActive = index === activeFeature;
              const isPast = index < activeFeature;

              return (
                <div
                  key={feature.id}
                  className={`group cursor-pointer transition-all duration-500 ease-out ${
                    isActive ? "transform scale-105" : ""
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div
                    className={`p-5 rounded-2xl border-2 transition-all duration-500 ${
                      isActive
                        ? "bg-primary text-[#293146] border-transparent shadow-2xl shadow-primary/25"
                        : isPast
                        ? "bg-primary/5 border-primary/30 shadow-lg"
                        : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div
                        className={`p-3 rounded-xl transition-all duration-500 ${
                          isActive
                            ? "bg-[#293146]/20 text-[#293146]"
                            : isPast
                            ? "bg-primary/70 text-white"
                            : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                        }`}
                      >
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-bold mb-0.5 transition-colors duration-500 ${
                            isActive
                              ? "text-[#293146]"
                              : isPast
                              ? "text-black"
                              : "text-gray-800 group-hover:text-gray-900"
                          }`}
                        >
                          {feature.title}
                        </h3>

                        {/* Description - always visible now */}
                        <p
                          className={`text-xs leading-relaxed transition-colors duration-500 ${
                            isActive
                              ? "text-[#293146]/80"
                              : isPast
                              ? "text-[#293146]/70"
                              : "text-gray-600"
                          }`}
                        >
                          {feature.description}
                        </p>
                      </div>

                      {/* Active Indicator */}
                      {isActive && (
                        <div className="flex-shrink-0">
                          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>

                    {/* Progress Bar */}
                    {isActive && !isHovered && (
                      <div className="mt-4 h-1 bg-primary/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#293146] rounded-full transition-all duration-[4000ms] ease-linear"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive UI Mockup */}
          <div className="lg:sticky lg:top-8">
            <div className="relative">
              {/* Background Effects */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl blur-2xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl"></div>

              {/* Main Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary">
                      <div className="text-[#293146]">
                        {features[activeFeature].icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#293146]">
                        {features[activeFeature].title}
                      </h3>
                      <p className="text-sm text-gray-600">Interactive Demo</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-xs text-[#293146] font-medium">
                      Live
                    </span>
                  </div>
                </div>

                {/* Dynamic Content */}
                <div className="transition-all duration-700 ease-out">
                  {mockupComponents[features[activeFeature].id]}
                </div>

                {/* Feature Indicator Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeFeature
                          ? "bg-primary shadow-lg"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
