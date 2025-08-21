import React from "react";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Resources - Logical CRM | Field Service Business Resources & Learning",
  description: "Discover comprehensive resources for your field service business success. Access our blog, webinars, free tools, help center, and expert-led content to grow your business.",
  keywords: "field service resources, business resources, CRM resources, learning center, business tools",
  openGraph: {
    title: "Resources - Logical CRM | Field Service Business Resources & Learning",
    description: "Discover comprehensive resources for your field service business success. Access our blog, webinars, free tools, help center, and expert-led content to grow your business.",
    type: "website",
  },
};

const resourceCategories = [
  {
    id: "blog",
    title: "Blog",
    description: "Get the inspiration and news for your success",
    longDescription: "Expert insights, industry trends, and practical tips to help you grow your field service business. Updated regularly with fresh content from industry professionals.",
    icon: "📝",
    href: "/blog",
    badge: "Updated Daily",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    stats: {
      articles: "150+",
      readers: "25K+",
      frequency: "Daily updates"
    },
    featured: [
      "10 Ways to Boost Your Field Service Revenue",
      "The Complete Guide to Field Service Automation",
      "Customer Communication Best Practices"
    ]
  },
  {
    id: "webinars",
    title: "Webinars", 
    description: "Get advice directly from industry experts",
    longDescription: "Join our live expert sessions and access our library of recorded webinars covering everything from business strategy to technical implementation.",
    icon: "🎥",
    href: "/webinars",
    badge: "Live Sessions",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    stats: {
      sessions: "50+",
      attendees: "12K+",
      frequency: "Weekly"
    },
    featured: [
      "Maximizing ROI with Field Service Automation",
      "Customer Communication Mastery for HVAC",
      "The Future of Mobile Field Service Apps"
    ]
  },
  {
    id: "free-tools",
    title: "Free Tools",
    description: "Discover useful tools to make your business a success",
    longDescription: "Professional-grade calculators, templates, and business tools designed specifically for field service professionals. All completely free to use.",
    icon: "🛠️",
    href: "/free-tools",
    badge: "New",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    stats: {
      tools: "15+",
      downloads: "8K+",
      frequency: "Monthly additions"
    },
    featured: [
      "ROI Calculator",
      "Service Pricing Calculator",
      "Technician Productivity Tracker"
    ]
  },
  {
    id: "faqs",
    title: "FAQ's",
    description: "Get all the answers to your frequently asked questions",
    longDescription: "Comprehensive answers to the most common questions about Logical CRM, implementation, features, and best practices.",
    icon: "❓",
    href: "/faqs",
    badge: null,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    stats: {
      questions: "100+",
      categories: "8",
      frequency: "Updated weekly"
    },
    featured: [
      "How quickly can I get started?",
      "What does Logical CRM cost?",
      "Is there a mobile app for technicians?"
    ]
  },
  {
    id: "help-center",
    title: "Help Center",
    description: "Get your questions answered with our 24/7 knowledge hub",
    longDescription: "Comprehensive documentation, step-by-step guides, and tutorials to help you get the most out of Logical CRM.",
    icon: "📚",
    href: "/help-center",
    badge: "24/7 Available",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    stats: {
      articles: "200+",
      categories: "12",
      frequency: "Always available"
    },
    featured: [
      "Quick Start Guide: Setting Up Your Account",
      "How to Create Professional Estimates",
      "Mobile App Complete User Guide"
    ]
  },
  {
    id: "podcast",
    title: "Podcast",
    description: "Listen and learn with the Logical CRM Business podcast",
    longDescription: "Expert interviews, success stories, and practical advice from successful field service business owners and industry experts.",
    icon: "🎙️",
    href: "/podcast",
    badge: "New",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    stats: {
      episodes: "58+",
      listeners: "25K+",
      frequency: "Weekly episodes"
    },
    featured: [
      "From Startup to $10M: A Field Service Success Story",
      "The Future of Field Service Technology",
      "Building Customer Loyalty in Competitive Markets"
    ]
  }
];

const featuredContent = [
  {
    type: "Blog Post",
    title: "10 Ways to Boost Your Field Service Revenue in 2024",
    description: "Discover proven strategies to increase your revenue and improve customer satisfaction this year.",
    image: "/images/asset.webp",
    readTime: "8 min read",
    category: "blog"
  },
  {
    type: "Webinar",
    title: "Maximizing ROI with Field Service Automation",
    description: "Learn how to implement automation strategies that deliver measurable returns.",
    image: "/images/automations-illustration.webp",
    duration: "60 minutes",
    category: "webinars"
  },
  {
    type: "Free Tool",
    title: "ROI Calculator",
    description: "Calculate the return on investment for your field service software and automation tools.",
    image: "/images/money.png",
    usage: "5 minutes",
    category: "free-tools"
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-700 text-sm font-semibold tracking-wide">
              LEARNING CENTER
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-6 leading-tight">
            Resources for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Business Success
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover comprehensive resources to help you grow your field service business. From expert insights to practical tools, everything you need for success in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore All Resources
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hand-picked resources to help you get started and grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-semibold rounded-full">
                      {content.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{content.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {content.readTime || content.duration || content.usage}
                    </span>
                    <Link
                      href={`/${content.category}`}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Explore All Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive collection of resources designed specifically for field service professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((resource) => (
              <Link
                key={resource.id}
                href={resource.href}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group no-underline"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 ${resource.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{resource.icon}</span>
                    </div>
                    {resource.badge && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {resource.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {resource.longDescription}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    {Object.entries(resource.stats).slice(0, 2).map(([key, value], index) => (
                      <div key={index}>
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                    <div>
                      <div className="text-lg font-bold text-purple-600">⭐</div>
                      <div className="text-xs text-gray-500">Popular</div>
                    </div>
                  </div>

                  {/* Featured Items */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Featured:</h4>
                    <div className="space-y-2">
                      {resource.featured.slice(0, 2).map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                      {resource.featured.length > 2 && (
                        <div className="text-sm text-blue-600 font-medium">
                          +{resource.featured.length - 2} more
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.stats.frequency}</span>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      <span>Explore</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the growing community of field service professionals who rely on our resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Articles & Guides", value: "350+", icon: "📚" },
              { label: "Monthly Readers", value: "50K+", icon: "👥" },
              { label: "Free Tools", value: "15+", icon: "🛠️" },
              { label: "Video Hours", value: "100+", icon: "🎥" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-black text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Stay Updated with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Latest Resources
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss new articles, tools, webinars, and insights that can help grow your field service business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Subscribe
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Weekly digest
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No spam
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Unsubscribe anytime
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Expert insights
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
