import React from "react";

const features = [
  {
    icon: "📱",
    title: "All-in-One Platform",
    description:
      "Manage scheduling, dispatching, invoicing, payments, and customer communications from a single, intuitive dashboard.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: "⚡",
    title: "Instant Efficiency Boost",
    description:
      "Automate repetitive tasks and streamline workflows. Most customers see 40% productivity gains within the first month.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: "🎯",
    title: "Smart Job Management",
    description:
      "AI-powered scheduling and routing optimization ensures your technicians take the most efficient routes and maximize daily jobs.",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: "💰",
    title: "Faster Payments",
    description:
      "Get paid instantly with integrated payment processing, digital invoicing, and automatic payment reminders.",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
];

export default function ChooseUs() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-700 text-sm font-semibold tracking-wide">
              WHY US
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 text-center mb-4 leading-tight">
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
                className="group flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                {/* Icon Container */}
                <div
                  className={`flex-shrink-0 w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-tight text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Professional Image */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl opacity-50 blur-2xl"></div>

            {/* Main image container */}
            <div className="relative bg-white rounded-3xl p-5 shadow-xl">
              <div className="h-[510px] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden">
                {/* CRM Dashboard/Software interface image */}
                <img
                  src="/images/client-crm.webp"
                  alt="Logical CRM dashboard interface showing scheduling and job management"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stats/badges - CRM specific */}
              <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-2 shadow-lg">
                <div className="text-sm font-semibold text-green-600">
                  📈 +40% Productivity
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

              {/* Additional CRM-specific badge */}
              <div className="absolute top-1/2 -right-4 bg-blue-500 text-white rounded-2xl px-4 py-3 shadow-lg transform -rotate-3">
                <div className="text-sm font-bold">⚡ 5-Min Setup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
