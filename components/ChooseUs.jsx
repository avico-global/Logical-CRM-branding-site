"use client";

import React from "react";

const features = [
  {
    icon: "fas fa-layer-group",
    title: "All-in-One Platform",
    description:
      "Manage scheduling, dispatching, invoicing, payments, and customer communications from a single, intuitive dashboard.",
  },
  {
    icon: "fas fa-bolt",
    title: "Instant Efficiency Boost",
    description:
      "Automate repetitive tasks and streamline workflows. Most customers see 40% productivity gains within the first month.",
  },
  {
    icon: "fas fa-crosshairs",
    title: "Smart Job Management",
    description:
      "AI-powered scheduling and routing optimization ensures your technicians take the most efficient routes and maximize daily jobs.",
  },
  {
    icon: "fas fa-credit-card",
    title: "Faster Payments",
    description:
      "Get paid instantly with integrated payment processing, digital invoicing, and automatic payment reminders.",
  },
];

export default function ChooseUs() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2" />
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
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#FFB700] flex items-center justify-center text-white">
                  <i className={`${feature.icon} text-lg`}></i>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Stats & Benefits */}
          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  What You Get
                </h3>
                <p className="text-gray-600">
                  Everything you need to grow your business
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Easy Setup</div>
                    <div className="text-sm text-gray-600">Get started quickly with our intuitive interface</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-shield-alt text-white"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Secure & Reliable</div>
                    <div className="text-sm text-gray-600">Your data is protected and always available</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-mobile-alt text-white"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Mobile Ready</div>
                    <div className="text-sm text-gray-600">Access your CRM from anywhere</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-headset text-white"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Support Available</div>
                    <div className="text-sm text-gray-600">Get help when you need it</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <i className="fas fa-handshake text-white"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Flexible Plans</div>
                    <div className="text-sm text-gray-600">Choose what works best for your business</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
