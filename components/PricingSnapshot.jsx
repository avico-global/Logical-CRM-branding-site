"use client";

import React from "react";

export default function PricingSnapshot() {
  const [isAnnual, setIsAnnual] = React.useState(false);

  const tiers = [
    {
      name: "Lite",
      monthlyPrice: 0,
      annualPrice: 0,
      desc: "The lite kit.",
      subtitle: "Up to 2 members",
      annualSubtitle: "Up to 2 members",
      features: [
        "Scheduling",
        "20 Invoices, jobs & estimates",
        "Mobile app",
        "Reserve with Google",
      ],
      cta: "Free forever",
      popular: false,
      color: "bg-white",
      badge: null,
    },
    {
      name: "Kickstart",
      monthlyPrice: 225,
      annualPrice: 187,
      desc: "The perfect starter kit",
      subtitle: "Monthly billing, incl. first 3 users.",
      annualSubtitle: "Annual billing, incl. first 3 users.",
      features: [
        "Scheduling",
        "2 Automations",
        "Invoices, jobs & estimates",
        "Online payments",
        "Online booking with checkout",
        "Built-in reports",
        "Local number",
        "Client management",
      ],
      cta: "Start for free",
      popular: false,
      color: "bg-white",
      badge: null,
    },
    {
      name: "Standard",
      monthlyPrice: 275,
      annualPrice: 229,
      desc: "The essential tools to grow and boost efficiency.",
      subtitle: "Monthly billing, incl. first 5 users.",
      annualSubtitle: "Annual billing, incl. first 5 users.",
      features: [
        "Everything in Kickstart, plus:",
        "Quickbooks Online",
        "Total of 5 Automations",
        "Custom fields",
        "Location tracking",
        "Service areas",
        "Subcontractors management",
        "Leads tracking",
      ],
      cta: "Start for free",
      popular: false,
      color: "bg-white",
      badge: null,
    },
    {
      name: "Pro",
      monthlyPrice: 325,
      annualPrice: 270,
      desc: "The perfect plan with AI tools and enhanced automations.",
      subtitle: "Monthly billing, incl. first 5 users.",
      annualSubtitle: "Annual billing, incl. first 5 users.",
      features: [
        "Everything in Standard, plus:",
        "Performance pay",
        "A total of 10 Automations",
        "Genius leads",
        "Genius scheduling New",
        "Custom reports",
      ],
      cta: "Start for free",
      popular: true,
      color: "bg-gradient-to-br from-yellow-50 to-orange-50",
      badge: "BEST VALUE",
    },
    {
      name: "Ultimate",
      monthlyPrice: null,
      annualPrice: null,
      desc: "Tailored for big companies and growing teams.",
      subtitle: "The complete plan",
      annualSubtitle: "The complete plan",
      features: [
        "Everything in Pro, plus:",
        "Service plans",
        "A total of 30 Automations",
        "Sales proposals",
        "Inventory management",
        "Flat rate New",
        "Multi-day jobs",
        "Equipment tracking",
        "Purchase orders New",
        "Zapier integration",
      ],
      cta: "Contact us",
      popular: false,
      color: "bg-white",
      badge: null,
    },
  ];

  // Calculate prices based on billing period
  const getPrice = (tier) => {
    if (tier.monthlyPrice === null) {
      return {
        price: "Let's talk",
        originalPrice: null,
        period: "",
        billedAs: isAnnual ? tier.annualSubtitle : tier.subtitle,
      };
    }

    if (tier.monthlyPrice === 0) {
      return {
        price: "Free",
        originalPrice: null,
        period: "",
        billedAs: isAnnual ? tier.annualSubtitle : tier.subtitle,
      };
    }

    // For paid plans, show monthly or annual pricing
    if (isAnnual) {
      return {
        price: tier.annualPrice,
        originalPrice: tier.monthlyPrice,
        period: "/month",
        billedAs: tier.annualSubtitle,
      };
    } else {
      return {
        price: tier.monthlyPrice,
        originalPrice: null,
        period: "/month",
        billedAs: tier.subtitle,
      };
    }
  };

  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-700 text-sm font-semibold tracking-wide">
              PRICING
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 text-center mb-4 leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business. All plans include a 14-day
            free trial with no credit card required.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-1 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 text-sm font-semibold rounded-xl transition-all ${
                !isAnnual
                  ? "text-white bg-blue-500 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Pay monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 text-sm font-semibold rounded-xl transition-all ${
                isAnnual
                  ? "text-white bg-blue-500 shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Pay annually{" "}
              <span className="text-white bg-blue-600 text-xs font-bold ml-1 px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl w-full">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative ${tier.color} rounded-3xl border ${
                tier.popular
                  ? "border-blue-200 shadow-xl scale-105"
                  : "border-gray-200 shadow-lg"
              } group hover:shadow-xl transition-all duration-300`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    {tier.badge}
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Plan header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-3">
                    <div className="flex items-baseline justify-center gap-1">
                      {getPrice(tier).originalPrice && (
                        <span className="text-lg text-gray-400 line-through mr-2">
                          ${getPrice(tier).originalPrice}
                        </span>
                      )}
                      <span className="text-4xl font-black text-gray-900">
                        {typeof getPrice(tier).price === "number"
                          ? `$${getPrice(tier).price}`
                          : getPrice(tier).price}
                      </span>
                      <span className="text-gray-500 font-medium">
                        {getPrice(tier).period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {getPrice(tier).billedAs}
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{tier.desc}</p>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => {
                    const isNewFeature = feature.includes(" New");
                    const featureText = feature.replace(" New", "");

                    return (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mt-1">
                          <svg
                            className="w-2.5 h-2.5 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 flex-1">
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {featureText}
                          </span>
                          {isNewFeature && (
                            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA button */}
                <button
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    tier.popular
                      ? "bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg hover:shadow-xl"
                      : tier.name === "Lite"
                      ? "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  } group-hover:scale-105 transform`}
                >
                  {tier.cta}
                </button>

                {/* Additional info */}
                {tier.name !== "Lite" && tier.name !== "Ultimate" && (
                  <p className="text-center text-sm text-gray-500 mt-4">
                    14-day free trial • No setup fees • Cancel anytime
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We'd love to help you find the perfect plan.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-2xl font-semibold text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  );
}
