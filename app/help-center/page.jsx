import React from "react";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Help Center - Logical CRM | 24/7 Knowledge Hub & Support",
  description:
    "Get your questions answered with our 24/7 knowledge hub. Comprehensive guides, tutorials, and documentation for Logical CRM field service management software.",
  keywords:
    "help center, knowledge base, support documentation, tutorials, field service help",
  openGraph: {
    title: "Help Center - Logical CRM | 24/7 Knowledge Hub & Support",
    description:
      "Get your questions answered with our 24/7 knowledge hub. Comprehensive guides, tutorials, and documentation for Logical CRM field service management software.",
    type: "website",
  },
};

const helpCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Everything you need to know to get up and running quickly",
    icon: "🚀",
    articles: 15,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    popular: true,
  },
  {
    id: "scheduling",
    title: "Scheduling & Dispatching",
    description: "Manage your team's schedules and optimize job assignments",
    icon: "📅",
    articles: 12,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    popular: true,
  },
  {
    id: "customer-management",
    title: "Customer Management",
    description: "Build and maintain strong customer relationships",
    icon: "👥",
    articles: 18,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    popular: true,
  },
  {
    id: "invoicing-payments",
    title: "Invoicing & Payments",
    description: "Streamline your billing and payment collection process",
    icon: "💰",
    articles: 10,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    popular: false,
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description: "Get the most out of our mobile application",
    icon: "📱",
    articles: 8,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    textColor: "text-pink-600",
    popular: true,
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connect Logical CRM with your favorite tools",
    icon: "🔗",
    articles: 14,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    popular: false,
  },
  {
    id: "reporting",
    title: "Reports & Analytics",
    description: "Understand your business performance with detailed insights",
    icon: "📊",
    articles: 9,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    textColor: "text-teal-600",
    popular: false,
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Solve common issues and technical problems",
    icon: "🔧",
    articles: 11,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    popular: false,
  },
];

const featuredArticles = [
  {
    id: 1,
    title: "Quick Start Guide: Setting Up Your Account",
    description:
      "Get your Logical CRM account set up and configured in just a few minutes with this step-by-step guide.",
    category: "Getting Started",
    readTime: "5 min read",
    views: "12.5K views",
    image: "/images/settings.png",
    popular: true,
  },
  {
    id: 2,
    title: "How to Create and Send Professional Estimates",
    description:
      "Learn how to create, customize, and send professional estimates that help you win more jobs.",
    category: "Estimates & Proposals",
    readTime: "8 min read",
    views: "8.9K views",
    image: "/images/pricebook.webp",
    popular: true,
  },
  {
    id: 3,
    title: "Optimizing Your Scheduling for Maximum Efficiency",
    description:
      "Best practices for scheduling that maximize your team's productivity and customer satisfaction.",
    category: "Scheduling",
    readTime: "10 min read",
    views: "6.7K views",
    image: "/images/scheduling.png",
    popular: true,
  },
  {
    id: 4,
    title: "Mobile App Complete User Guide",
    description:
      "Everything your technicians need to know about using the Logical CRM mobile app in the field.",
    category: "Mobile App",
    readTime: "12 min read",
    views: "5.2K views",
    image: "/images/workiz-pa.webp",
    popular: false,
  },
];

const quickLinks = [
  {
    title: "System Status",
    description: "Check current system status and uptime",
    icon: "🟢",
    href: "/status",
  },
  {
    title: "Feature Requests",
    description: "Submit ideas for new features",
    icon: "💡",
    href: "/feature-requests",
  },
  {
    title: "API Documentation",
    description: "Technical documentation for developers",
    icon: "⚡",
    href: "/api-docs",
  },
  {
    title: "Security Center",
    description: "Learn about our security practices",
    icon: "🔒",
    href: "/security",
  },
];

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-purple-600 mr-2 animate-pulse" />
            <span className="text-purple-700 text-sm font-semibold tracking-wide">
              24/7 KNOWLEDGE HUB
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-800 mb-6 leading-tight">
            Help Center &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Knowledge Base
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Get your questions answered with our comprehensive 24/7 knowledge
            hub. Find guides, tutorials, and documentation to help you succeed
            with Logical CRM.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, guides, tutorials..."
                className="w-full text-gray-700 px-6 py-4 pl-12 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg shadow-lg"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Browse All Articles
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group no-underline"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{link.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Browse Help Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the answers you need organized by topic and feature
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {helpCategories.map((category) => (
              <Link
                key={category.id}
                href={`/help-center/${category.id}`}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group no-underline"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 ${category.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  {category.popular && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                      Popular
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.articles} articles
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most popular and helpful articles from our knowledge base
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    {article.popular && (
                      <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.readTime}</span>
                    <span>{article.views}</span>
                  </div>

                  <div className="mt-4">
                    <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2">
                      Read Article
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to
              help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💬",
                title: "Live Chat",
                description: "Get instant help from our support team",
                features: [
                  "Instant responses",
                  "Screen sharing",
                  "File attachments",
                ],
                action: "Start Chat",
                available: "Available 24/7",
                color: "from-blue-600 to-cyan-600",
              },
              {
                icon: "📞",
                title: "Phone Support",
                description: "Speak with our technical experts",
                features: [
                  "Priority support",
                  "Technical guidance",
                  "Account review",
                ],
                action: "Call Support",
                available: "Mon-Fri 8AM-6PM EST",
                color: "from-green-600 to-emerald-600",
              },
              {
                icon: "🎓",
                title: "Training Sessions",
                description: "Personalized training for your team",
                features: [
                  "Custom training",
                  "Best practices",
                  "Implementation help",
                ],
                action: "Book Session",
                available: "Scheduled sessions",
                color: "from-purple-600 to-indigo-600",
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-6">{option.description}</p>

                <div className="space-y-2 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-purple-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="text-sm text-gray-500 mb-6">
                  {option.available}
                </div>
                <button
                  className={`w-full px-6 py-3 bg-gradient-to-r ${option.color} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}
                >
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Get
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Expert Help?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our support team and knowledge base are here to help you succeed
            with Logical CRM every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Support
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200">
              Browse Knowledge Base
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              24/7 availability
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Expert support team
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Comprehensive guides
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Video tutorials
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
