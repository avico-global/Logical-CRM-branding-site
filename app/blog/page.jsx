import React from "react";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Blog - Logical CRM | Field Service Industry Insights & Tips",
  description: "Get the inspiration and news for your field service business success. Expert insights, industry trends, and practical tips to grow your business.",
  keywords: "field service blog, business tips, industry insights, CRM tips, service management",
  openGraph: {
    title: "Blog - Logical CRM | Field Service Industry Insights & Tips",
    description: "Get the inspiration and news for your field service business success. Expert insights, industry trends, and practical tips to grow your business.",
    type: "website",
  },
};

const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Boost Your Field Service Revenue in 2024",
    excerpt: "Discover proven strategies to increase your field service business revenue and improve customer satisfaction.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Business Growth",
    image: "/images/asset.webp",
    tags: ["Revenue", "Growth", "Strategy"],
  },
  {
    id: 2,
    title: "The Complete Guide to Field Service Automation",
    excerpt: "Learn how automation can streamline your operations, reduce costs, and improve service delivery.",
    author: "Mike Chen",
    date: "March 12, 2024",
    readTime: "12 min read",
    category: "Technology",
    image: "/images/automations-illustration.webp",
    tags: ["Automation", "Technology", "Efficiency"],
  },
  {
    id: 3,
    title: "Customer Communication Best Practices for HVAC Companies",
    excerpt: "Master the art of customer communication to build trust and increase repeat business in the HVAC industry.",
    author: "Jennifer Walsh",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Customer Service",
    image: "/images/communications.webp",
    tags: ["HVAC", "Communication", "Customer Service"],
  },
  {
    id: 4,
    title: "Mobile Apps: The Future of Field Service Management",
    excerpt: "Why mobile-first approach is crucial for modern field service businesses and how to implement it.",
    author: "David Rodriguez",
    date: "March 8, 2024",
    readTime: "10 min read",
    category: "Mobile Technology",
    image: "/images/workiz-pa.webp",
    tags: ["Mobile", "Apps", "Future"],
  },
  {
    id: 5,
    title: "Inventory Management Tips for Plumbing Professionals",
    excerpt: "Optimize your inventory management to reduce costs and ensure you always have the right parts on hand.",
    author: "Lisa Thompson",
    date: "March 5, 2024",
    readTime: "7 min read",
    category: "Operations",
    image: "/images/inventory.webp",
    tags: ["Plumbing", "Inventory", "Management"],
  },
  {
    id: 6,
    title: "Building Customer Loyalty in the Service Industry",
    excerpt: "Strategies to turn one-time customers into loyal advocates for your field service business.",
    author: "Robert Kim",
    date: "March 3, 2024",
    readTime: "9 min read",
    category: "Customer Relations",
    image: "/images/clients-engaged.webp",
    tags: ["Loyalty", "Customers", "Retention"],
  },
];

const categories = [
  "All Posts",
  "Business Growth",
  "Technology",
  "Customer Service",
  "Operations",
  "Industry Trends",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-700 text-sm font-semibold tracking-wide">
              LATEST INSIGHTS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-6 leading-tight">
            Field Service
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Industry Blog
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Get the inspiration and news for your field service business success. Expert insights, industry trends, and practical tips to grow your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Subscribe to Newsletter
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
              Browse Categories
            </button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  index === 0
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-12 text-white">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  ⭐ Featured Post
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-white/80">{blogPosts[0].author}</span>
                  <span className="text-white/60">•</span>
                  <span className="text-white/80">{blogPosts[0].date}</span>
                  <span className="text-white/60">•</span>
                  <span className="text-white/80">{blogPosts[0].readTime}</span>
                </div>
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-200 shadow-lg">
                  Read Full Article
                </button>
              </div>
              <div className="relative h-96 lg:h-full">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from the field service industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-blue-300 hover:text-blue-600 transition-all duration-200 shadow-lg">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Stay Updated with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Industry Insights
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest field service tips, trends, and strategies delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-white/60 mt-4">
            No spam, unsubscribe at any time. Read our{" "}
            <a href="/privacy" className="text-yellow-400 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
