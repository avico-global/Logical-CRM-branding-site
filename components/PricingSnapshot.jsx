"use client";

import React from "react";

export default function PricingSnapshot() {
  const [isAnnual, setIsAnnual] = React.useState(false);

  const tiers = [
    {
      name: "Starter",
      monthlyPrice: 29,
      desc: "For solo pros and new teams getting off spreadsheets",
      features: [
        "Scheduling & dispatch",
        "Estimates, invoices & payments",
        "Customer CRM & job history",
        "Mobile app (iOS & Android)",
        "Basic automations",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "bg-white",
    },
    {
      name: "Growth",
      monthlyPrice: 79,
      desc: "Best for growing teams that want automation & insights",
      features: [
        "Everything in Starter",
        "Advanced scheduling & routing",
        "Online booking & customer portal",
        "Pricebook & item catalog",
        "Inventory & purchase orders",
        "Texting & phone logs",
        "QuickBooks Online integration",
        "Reports & dashboards",
        "Priority support",
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "bg-gradient-to-br from-blue-50 to-indigo-50",
    },
    {
      name: "Pro",
      monthlyPrice: 149,
      desc: "For multi-team operations that need scale & control",
      features: [
        "Everything in Growth",
        "AI-powered scheduling & recommendations",
        "Custom roles & permissions",
        "Multi-location & franchise support",
        "Open API & webhooks",
        "Advanced integrations (Zapier, Slack, more)",
        "Custom workflows & approvals",
        "Dedicated success manager",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "bg-white",
    },
  ];

  // Calculate prices based on billing period
  const getPrice = (monthlyPrice) => {
    if (isAnnual) {
      const annualPrice = Math.round(monthlyPrice * 12 * 0.8); // 20% discount
      return {
        price: Math.round(annualPrice / 12),
        originalPrice: monthlyPrice,
        period: '/user/mo',
        billedAs: `Billed annually ($${annualPrice})`
      };
    }
    return {
      price: monthlyPrice,
      period: '/user/mo',
      billedAs: 'Billed monthly'
    };
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
        <div className="text-center mb-16">
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
                  ? 'text-white bg-blue-500 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 text-sm font-semibold rounded-xl transition-all ${
                isAnnual 
                  ? 'text-white bg-blue-500 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual{" "}
              <span className="text-green-600 text-xs font-bold ml-1">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative ${tier.color} rounded-3xl border ${
                tier.popular
                  ? "border-blue-200 shadow-xl scale-105"
                  : "border-gray-200 shadow-lg"
              } group hover:shadow-xl transition-all duration-300`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-3">
                    <div className="flex items-baseline justify-center gap-1">
                      {isAnnual && getPrice(tier.monthlyPrice).originalPrice && (
                        <span className="text-lg text-gray-400 line-through mr-2">
                          ${getPrice(tier.monthlyPrice).originalPrice}
                        </span>
                      )}
                      <span className="text-5xl font-black text-gray-900">
                        ${getPrice(tier.monthlyPrice).price}
                      </span>
                      <span className="text-gray-500 font-medium">
                        {getPrice(tier.monthlyPrice).period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {getPrice(tier.monthlyPrice).billedAs}
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{tier.desc}</p>
                </div>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-green-600"
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
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <button
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    tier.popular
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  } group-hover:scale-105 transform`}
                >
                  {tier.cta}
                </button>

                {/* Additional info */}
                <p className="text-center text-sm text-gray-500 mt-4">
                  14-day free trial • No setup fees • Cancel anytime
                </p>
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
