import React from "react";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Investors - Logical CRM | Investment Information & Company Performance",
  description: "Learn about some of the best VC's who believe in us and support our mission. Discover our growth story, financial performance, and investment opportunities.",
  keywords: "logical crm investors, investment opportunities, venture capital, company performance, financial results",
  openGraph: {
    title: "Investors - Logical CRM | Investment Information & Company Performance",
    description: "Learn about some of the best VC's who believe in us and support our mission. Discover our growth story, financial performance, and investment opportunities.",
    type: "website",
  },
};

const keyMetrics = [
  {
    metric: "Annual Recurring Revenue",
    value: "$50M+",
    growth: "+150% YoY",
    icon: "📈",
    description: "Strong revenue growth driven by customer acquisition and expansion"
  },
  {
    metric: "Customer Growth",
    value: "5,000+",
    growth: "+200% YoY",
    icon: "👥",
    description: "Rapid customer base expansion across multiple industries"
  },
  {
    metric: "Net Revenue Retention",
    value: "130%",
    growth: "+10% YoY",
    icon: "🔄",
    description: "Strong customer loyalty and expansion revenue"
  },
  {
    metric: "Gross Margin",
    value: "85%",
    growth: "+5% YoY",
    icon: "💰",
    description: "Healthy unit economics and operational efficiency"
  }
];

const investors = [
  {
    name: "Sequoia Capital",
    stage: "Series B Lead",
    investment: "$30M",
    year: "2023",
    logo: "/images/american-logo.svg",
    partner: "Sarah Chen",
    quote: "Logical CRM is revolutionizing how field service businesses operate with their innovative platform."
  },
  {
    name: "Andreessen Horowitz",
    stage: "Series A Lead",
    investment: "$15M",
    year: "2022",
    logo: "/images/JB-logo.svg",
    partner: "Mike Rodriguez",
    quote: "The field service management market is huge and Logical CRM is capturing it perfectly."
  },
  {
    name: "First Round Capital",
    stage: "Seed",
    investment: "$5M",
    year: "2021",
    logo: "/images/Trane-logo.svg",
    partner: "Jennifer Walsh",
    quote: "We're impressed by the team's deep understanding of the field service industry."
  },
  {
    name: "Y Combinator",
    stage: "Accelerator",
    investment: "$500K",
    year: "2020",
    logo: "/images/searchking-logo.svg",
    partner: "David Kim",
    quote: "Logical CRM showed exceptional growth and product-market fit during the program."
  }
];

const milestones = [
  {
    year: "2023",
    quarter: "Q4",
    title: "Series B Funding",
    amount: "$30M",
    description: "Raised Series B to accelerate international expansion and AI development",
    investors: ["Sequoia Capital", "Existing Investors"],
    valuation: "$500M"
  },
  {
    year: "2022",
    quarter: "Q3",
    title: "Series A Funding",
    amount: "$15M",
    description: "Series A funding to scale operations and expand product capabilities",
    investors: ["Andreessen Horowitz", "First Round"],
    valuation: "$150M"
  },
  {
    year: "2021",
    quarter: "Q2",
    title: "Seed Funding",
    amount: "$5M",
    description: "Seed round to build core platform and initial team",
    investors: ["First Round Capital", "Angel Investors"],
    valuation: "$25M"
  },
  {
    year: "2020",
    quarter: "Q1",
    title: "Y Combinator",
    amount: "$500K",
    description: "Accepted into Y Combinator accelerator program",
    investors: ["Y Combinator"],
    valuation: "$5M"
  }
];

const marketOpportunity = [
  {
    segment: "Total Addressable Market",
    value: "$45B",
    description: "Global field service management software market"
  },
  {
    segment: "Serviceable Addressable Market",
    value: "$15B",
    description: "SMB field service businesses in target markets"
  },
  {
    segment: "Current Market Share",
    value: "0.3%",
    description: "Significant room for growth and expansion"
  }
];

const competitiveAdvantages = [
  {
    icon: "🎯",
    title: "Industry Focus",
    description: "Purpose-built for field service with deep industry expertise and specialized features."
  },
  {
    icon: "🚀",
    title: "Rapid Innovation",
    description: "Continuous product development with AI-powered features and mobile-first approach."
  },
  {
    icon: "💰",
    title: "Strong Unit Economics",
    description: "Healthy margins, low churn, and efficient customer acquisition cost structure."
  },
  {
    icon: "🌐",
    title: "Scalable Platform",
    description: "Cloud-native architecture built to scale globally with enterprise-grade security."
  },
  {
    icon: "🤝",
    title: "Customer Obsession",
    description: "Exceptional customer success leading to high Net Promoter Score and retention."
  },
  {
    icon: "📊",
    title: "Data Network Effects",
    description: "Rich data insights that improve platform value as customer base grows."
  }
];

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-orange-500/10 border border-orange-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-orange-600 mr-2 animate-pulse" />
            <span className="text-orange-700 text-sm font-semibold tracking-wide">
              INVESTOR RELATIONS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-orange-800 to-red-800 mb-6 leading-tight">
            Backed by the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Best in Tech
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Learn about some of the best VC's who believe in us and support our mission to transform the field service industry. Discover our growth story and investment opportunities.
          </p>

          {/* Key Stats */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-black text-orange-600">$50M+</div>
                <div className="text-gray-600">Total Funding Raised</div>
              </div>
              <div>
                <div className="text-3xl font-black text-red-600">$500M</div>
                <div className="text-gray-600">Current Valuation</div>
              </div>
              <div>
                <div className="text-3xl font-black text-pink-600">150%</div>
                <div className="text-gray-600">YoY Revenue Growth</div>
              </div>
              <div>
                <div className="text-3xl font-black text-purple-600">5,000+</div>
                <div className="text-gray-600">Active Customers</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-2xl hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Download Investor Deck
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
              Contact Investor Relations
            </button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Key Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong fundamentals driving sustainable growth and market leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{metric.icon}</div>
                <div className="text-3xl font-black text-orange-600 mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</div>
                <div className="text-green-600 font-semibold mb-3">{metric.growth}</div>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Market Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing a large and growing market with significant runway for expansion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketOpportunity.map((segment, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4">
                  {segment.value}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{segment.segment}</h3>
                <p className="text-gray-600">{segment.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Market Growth Drivers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Digital Transformation",
                  description: "Field service businesses adopting digital solutions to stay competitive"
                },
                {
                  title: "Labor Shortage",
                  description: "Need for efficiency tools to do more with fewer skilled technicians"
                },
                {
                  title: "Customer Expectations",
                  description: "Demand for real-time updates and professional service experiences"
                }
              ].map((driver, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-bold text-gray-900 mb-2">{driver.title}</h4>
                  <p className="text-gray-600 text-sm">{driver.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Our Investment Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proud to be backed by world-class investors who share our vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investors.map((investor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={investor.logo}
                      alt={investor.name}
                      className="h-12 w-auto"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{investor.name}</h3>
                      <div className="text-orange-600 font-semibold">{investor.stage}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-black text-orange-600">{investor.investment}</div>
                      <div className="text-gray-600 text-sm">Investment</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-gray-900">{investor.year}</div>
                      <div className="text-gray-600 text-sm">Year</div>
                    </div>
                  </div>

                  <blockquote className="text-gray-700 italic mb-4">
                    "{investor.quote}"
                  </blockquote>

                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">{investor.partner}</span>
                    <span className="text-gray-400"> • Partner</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Timeline */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Funding Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey from startup to market leader
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-lg font-black text-orange-600">{milestone.year}</div>
                        <div className="text-sm text-gray-500">{milestone.quarter}</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <div className="text-2xl font-black text-green-600 mb-3">{milestone.amount}</div>
                      <p className="text-gray-600 mb-4">{milestone.description}</p>
                      
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900 mb-1">Investors:</div>
                        <div className="text-gray-600">{milestone.investors.join(", ")}</div>
                      </div>
                      
                      {milestone.valuation && (
                        <div className="mt-3 text-sm">
                          <span className="font-semibold text-gray-900">Valuation: </span>
                          <span className="text-orange-600 font-bold">{milestone.valuation}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Competitive Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key differentiators that drive our market leadership and sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Financial Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong financial performance demonstrating scalable business model
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Revenue Growth</h3>
              <div className="space-y-4">
                {[
                  { year: "2023", revenue: "$50M", growth: "+150%" },
                  { year: "2022", revenue: "$20M", growth: "+180%" },
                  { year: "2021", revenue: "$7M", growth: "+220%" },
                  { year: "2020", revenue: "$2M", growth: "Base Year" }
                ].map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="font-semibold text-gray-900">{data.year}</div>
                    <div className="text-orange-600 font-bold">{data.revenue}</div>
                    <div className="text-green-600 text-sm">{data.growth}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Ratios</h3>
              <div className="space-y-4">
                {[
                  { metric: "Gross Margin", value: "85%", trend: "↑" },
                  { metric: "Net Revenue Retention", value: "130%", trend: "↑" },
                  { metric: "Customer Churn", value: "3%", trend: "↓" },
                  { metric: "CAC Payback", value: "8 months", trend: "↓" }
                ].map((ratio, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="font-semibold text-gray-900">{ratio.metric}</div>
                    <div className="text-orange-600 font-bold">{ratio.value}</div>
                    <div className={`text-lg ${ratio.trend === '↑' ? 'text-green-600' : 'text-red-600'}`}>{ratio.trend}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Interested in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Learning More?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're always open to discussions with strategic investors and partners who share our vision for transforming field service management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Download Investor Materials
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200">
              Contact IR Team
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              $50M+ ARR
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Market leader
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Strong unit economics
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              World-class investors
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
