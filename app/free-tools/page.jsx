import React from "react";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Free Tools - Logical CRM | Business Calculators & Resources",
  description: "Discover useful free tools to make your field service business a success. ROI calculators, cost estimators, and productivity tools designed for service professionals.",
  keywords: "free business tools, ROI calculator, cost estimator, field service tools, business calculators",
  openGraph: {
    title: "Free Tools - Logical CRM | Business Calculators & Resources",
    description: "Discover useful free tools to make your field service business a success. ROI calculators, cost estimators, and productivity tools designed for service professionals.",
    type: "website",
  },
};

const freeTools = [
  {
    id: 1,
    title: "ROI Calculator",
    description: "Calculate the return on investment for your field service software and automation tools.",
    icon: "💰",
    category: "Financial",
    difficulty: "Easy",
    estimatedTime: "5 minutes",
    features: [
      "Cost savings analysis",
      "Productivity improvements",
      "Revenue impact calculation",
      "Payback period estimation"
    ],
    benefits: [
      "Make informed investment decisions",
      "Justify software purchases",
      "Plan budget allocations",
      "Track actual vs. projected ROI"
    ],
    image: "/images/money.png",
    downloadUrl: "#",
    isNew: true
  },
  {
    id: 2,
    title: "Service Pricing Calculator",
    description: "Determine optimal pricing for your services based on costs, competition, and market factors.",
    icon: "🔧",
    category: "Pricing",
    difficulty: "Intermediate",
    estimatedTime: "10 minutes",
    features: [
      "Cost-plus pricing model",
      "Competitive analysis",
      "Profit margin optimization",
      "Market positioning"
    ],
    benefits: [
      "Maximize profitability",
      "Stay competitive",
      "Standardize pricing",
      "Reduce pricing errors"
    ],
    image: "/images/pricebook.webp",
    downloadUrl: "#",
    isNew: false
  },
  {
    id: 3,
    title: "Technician Productivity Tracker",
    description: "Monitor and analyze your team's productivity with customizable tracking metrics.",
    icon: "📊",
    category: "Operations",
    difficulty: "Easy",
    estimatedTime: "3 minutes",
    features: [
      "Job completion tracking",
      "Time efficiency analysis",
      "Performance benchmarking",
      "Productivity trends"
    ],
    benefits: [
      "Identify top performers",
      "Spot training opportunities",
      "Optimize schedules",
      "Improve team performance"
    ],
    image: "/images/scheduling.png",
    downloadUrl: "#",
    isNew: true
  },
  {
    id: 4,
    title: "Customer Satisfaction Survey Template",
    description: "Ready-to-use survey templates to measure and improve customer satisfaction.",
    icon: "😊",
    category: "Customer Service",
    difficulty: "Easy",
    estimatedTime: "2 minutes",
    features: [
      "Pre-built questions",
      "Rating scales",
      "Follow-up triggers",
      "Response analysis"
    ],
    benefits: [
      "Improve service quality",
      "Increase customer loyalty",
      "Identify service gaps",
      "Build testimonials"
    ],
    image: "/images/clients-engaged.webp",
    downloadUrl: "#",
    isNew: false
  },
  {
    id: 5,
    title: "Inventory Turnover Calculator",
    description: "Optimize your inventory management with turnover rate calculations and recommendations.",
    icon: "📦",
    category: "Inventory",
    difficulty: "Intermediate",
    estimatedTime: "8 minutes",
    features: [
      "Turnover rate calculation",
      "Carrying cost analysis",
      "Reorder point optimization",
      "Stock level recommendations"
    ],
    benefits: [
      "Reduce carrying costs",
      "Prevent stockouts",
      "Improve cash flow",
      "Optimize storage space"
    ],
    image: "/images/inventory.webp",
    downloadUrl: "#",
    isNew: false
  },
  {
    id: 6,
    title: "Marketing ROI Tracker",
    description: "Track and analyze the effectiveness of your marketing campaigns and lead generation efforts.",
    icon: "📈",
    category: "Marketing",
    difficulty: "Intermediate",
    estimatedTime: "12 minutes",
    features: [
      "Campaign performance tracking",
      "Lead quality analysis",
      "Cost per acquisition",
      "Conversion funnel metrics"
    ],
    benefits: [
      "Optimize marketing spend",
      "Improve lead quality",
      "Increase conversion rates",
      "Scale successful campaigns"
    ],
    image: "/images/asset.webp",
    downloadUrl: "#",
    isNew: true
  }
];

const toolCategories = [
  "All Categories",
  "Financial",
  "Pricing",
  "Operations",
  "Customer Service",
  "Inventory",
  "Marketing",
];

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-600 mr-2 animate-pulse" />
            <span className="text-green-700 text-sm font-semibold tracking-wide">
              FREE BUSINESS TOOLS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 mb-6 leading-tight">
            Free Tools for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Business Success
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover useful tools to make your field service business a success. ROI calculators, cost estimators, and productivity tools designed specifically for service professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore All Tools
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
              Download Favorites
            </button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {toolCategories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  index === 0
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-green-300 hover:text-green-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Business Tools & Calculators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade tools to help you analyze, optimize, and grow your field service business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                      {tool.category}
                    </span>
                    {tool.isNew && (
                      <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-4xl mb-2">{tool.icon}</div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>

                  {/* Tool Details */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{tool.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{tool.difficulty}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {tool.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                      {tool.features.length > 3 && (
                        <div className="text-sm text-green-600 font-medium mt-1">
                          +{tool.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200">
                      Use Tool
                    </button>
                    <button className="px-4 py-3 border border-gray-200 text-gray-600 rounded-xl hover:border-green-300 hover:text-green-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Use Our Free Tools?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by field service experts for field service professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Industry-Specific",
                description: "Designed specifically for field service businesses with relevant metrics and calculations",
              },
              {
                icon: "💡",
                title: "Expert-Developed",
                description: "Created by industry professionals with years of field service experience",
              },
              {
                icon: "📱",
                title: "Mobile-Friendly",
                description: "Use on any device - desktop, tablet, or mobile - wherever you need them",
              },
              {
                icon: "🔄",
                title: "Always Updated",
                description: "Regularly updated with new features and industry best practices",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Spotlight */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-sm font-semibold rounded-full mb-4">
                ✨ Featured Tool
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                ROI Calculator
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Make data-driven decisions about your field service investments with our comprehensive ROI calculator. Get insights into cost savings, productivity improvements, and revenue impact.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Calculate software investment returns",
                  "Analyze productivity improvements", 
                  "Estimate cost savings potential",
                  "Plan implementation timeline"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Try ROI Calculator
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <img
                  src="/images/money.png"
                  alt="ROI Calculator"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-2">250%</div>
                  <div className="text-gray-600">Average ROI in 12 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Optimize
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Your Business?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Start using our free tools today to make better business decisions and grow your field service company.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore All Tools
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200">
              Start Free Trial
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              100% Free to use
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No registration required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Mobile-friendly
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Expert-developed
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
