import React from "react";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Podcast - Logical CRM | Field Service Business Podcast",
  description: "Listen and learn with the Logical CRM Business podcast. Expert insights, success stories, and practical advice for growing your field service business.",
  keywords: "field service podcast, business podcast, industry insights, success stories, CRM podcast",
  openGraph: {
    title: "Podcast - Logical CRM | Field Service Business Podcast",
    description: "Listen and learn with the Logical CRM Business podcast. Expert insights, success stories, and practical advice for growing your field service business.",
    type: "website",
  },
};

const recentEpisodes = [
  {
    id: 1,
    title: "From Startup to $10M: A Field Service Success Story",
    description: "Join us as we interview Jake Morrison, founder of Elite HVAC Services, who grew from a one-man operation to a $10M business in just 5 years.",
    guest: "Jake Morrison",
    guestTitle: "Founder, Elite HVAC Services",
    duration: "45:32",
    publishDate: "March 20, 2024",
    episode: 58,
    category: "Success Stories",
    listens: "12.5K",
    featured: true,
    image: "/images/jacob.webp",
    topics: [
      "Scaling operations",
      "Team building",
      "Customer retention",
      "Technology adoption"
    ]
  },
  {
    id: 2,
    title: "The Future of Field Service: Technology Trends for 2024",
    description: "Industry expert Sarah Chen discusses emerging technologies that are reshaping the field service landscape and what it means for your business.",
    guest: "Sarah Chen",
    guestTitle: "Field Service Technology Analyst",
    duration: "38:45",
    publishDate: "March 15, 2024",
    episode: 57,
    category: "Technology",
    listens: "9.8K",
    featured: false,
    image: "/images/person.webp",
    topics: [
      "AI and automation",
      "IoT integration",
      "Predictive maintenance",
      "Mobile technology"
    ]
  },
  {
    id: 3,
    title: "Building Customer Loyalty in Competitive Markets",
    description: "Learn proven strategies for creating lasting customer relationships and building a loyal customer base that drives referrals and repeat business.",
    guest: "Mike Rodriguez",
    guestTitle: "Customer Success Director, Logical CRM",
    duration: "42:18",
    publishDate: "March 10, 2024",
    episode: 56,
    category: "Customer Success",
    listens: "8.2K",
    featured: false,
    image: "/images/mike.webp",
    topics: [
      "Customer experience",
      "Loyalty programs",
      "Feedback systems",
      "Relationship building"
    ]
  },
  {
    id: 4,
    title: "Pricing Strategies That Actually Work",
    description: "Discover how to price your services competitively while maintaining healthy profit margins. Real examples from successful field service businesses.",
    guest: "Jennifer Walsh",
    guestTitle: "Business Consultant",
    duration: "35:27",
    publishDate: "March 5, 2024",
    episode: 55,
    category: "Business Strategy",
    listens: "11.3K",
    featured: false,
    image: "/images/jerry.webp",
    topics: [
      "Value-based pricing",
      "Competitive analysis",
      "Profit optimization",
      "Market positioning"
    ]
  },
  {
    id: 5,
    title: "Managing a Remote Field Service Team",
    description: "Best practices for leading and managing technicians who work remotely in the field, including communication, accountability, and performance tracking.",
    guest: "Robert Kim",
    guestTitle: "Operations Manager, ProPlumb Solutions",
    duration: "41:55",
    publishDate: "February 28, 2024",
    episode: 54,
    category: "Team Management",
    listens: "7.9K",
    featured: false,
    image: "/images/person.webp",
    topics: [
      "Remote leadership",
      "Communication tools",
      "Performance metrics",
      "Team culture"
    ]
  },
  {
    id: 6,
    title: "The Complete Guide to Field Service Marketing",
    description: "Marketing expert Lisa Thompson shares actionable strategies for generating leads, building brand awareness, and growing your field service business.",
    guest: "Lisa Thompson",
    guestTitle: "Marketing Director, ServiceGrow",
    duration: "47:12",
    publishDate: "February 23, 2024",
    episode: 53,
    category: "Marketing",
    listens: "13.7K",
    featured: false,
    image: "/images/person.webp",
    topics: [
      "Digital marketing",
      "Local SEO",
      "Social media",
      "Lead generation"
    ]
  }
];

const podcastCategories = [
  "All Episodes",
  "Success Stories",
  "Technology",
  "Business Strategy",
  "Customer Success",
  "Team Management",
  "Marketing",
];

const podcastStats = [
  { label: "Total Episodes", value: "58" },
  { label: "Monthly Listeners", value: "25K+" },
  { label: "Average Rating", value: "4.9" },
  { label: "Countries", value: "40+" }
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2 animate-pulse" />
            <span className="text-indigo-700 text-sm font-semibold tracking-wide">
              PODCAST SERIES
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 mb-6 leading-tight">
            The Logical CRM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Business Podcast
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Listen and learn with industry experts, successful business owners, and field service professionals. Get practical advice, success stories, and insights to grow your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Listen to Latest Episode
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
              Subscribe Now
            </button>
          </div>

          {/* Podcast Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {podcastStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-indigo-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listen On Platforms */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Listen On Your Favorite Platform</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { name: "Apple Podcasts", icon: "🎧", color: "bg-gray-900" },
              { name: "Spotify", icon: "🎵", color: "bg-green-500" },
              { name: "Google Podcasts", icon: "📻", color: "bg-blue-500" },
              { name: "Amazon Music", icon: "🎼", color: "bg-orange-500" },
              { name: "YouTube", icon: "📺", color: "bg-red-500" },
              { name: "RSS Feed", icon: "📡", color: "bg-purple-500" },
            ].map((platform, index) => (
              <button
                key={index}
                className={`${platform.color} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2`}
              >
                <span>{platform.icon}</span>
                {platform.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-12 text-white">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  🎙️ Featured Episode #{recentEpisodes[0].episode}
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  {recentEpisodes[0].title}
                </h2>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  {recentEpisodes[0].description}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={recentEpisodes[0].image}
                    alt={recentEpisodes[0].guest}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <div className="font-semibold">{recentEpisodes[0].guest}</div>
                    <div className="text-white/80 text-sm">{recentEpisodes[0].guestTitle}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-6 text-white/80">
                  <span>⏱️ {recentEpisodes[0].duration}</span>
                  <span>📅 {recentEpisodes[0].publishDate}</span>
                  <span>👂 {recentEpisodes[0].listens} listens</span>
                </div>

                <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-200 shadow-lg flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Listen Now
                </button>
              </div>
              <div className="relative h-96 lg:h-full">
                <img
                  src="/images/Genius-Anwering.webp"
                  alt="Podcast Studio"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {podcastCategories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  index === 0
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Episodes */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Recent Episodes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Catch up on our latest conversations with industry experts and successful business owners
            </p>
          </div>

          <div className="space-y-6">
            {recentEpisodes.slice(1).map((episode) => (
              <div
                key={episode.id}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  {/* Episode Info */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">
                        Episode #{episode.episode}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                        {episode.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {episode.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {episode.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={episode.image}
                        alt={episode.guest}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{episode.guest}</div>
                        <div className="text-sm text-gray-600">{episode.guestTitle}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {episode.topics.slice(0, 3).map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                        >
                          {topic}
                        </span>
                      ))}
                      {episode.topics.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          +{episode.topics.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <span>⏱️ {episode.duration}</span>
                      <span>📅 {episode.publishDate}</span>
                      <span>👂 {episode.listens} listens</span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-end">
                    <button className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:scale-110">
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 shadow-lg">
              Load More Episodes
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Never Miss an Episode
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Subscribe to get notified when new episodes are available and join our community of field service professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔔",
                title: "Email Notifications",
                description: "Get notified via email when new episodes are released",
                action: "Subscribe to Newsletter"
              },
              {
                icon: "📱",
                title: "Push Notifications",
                description: "Receive push notifications on your mobile device",
                action: "Enable Notifications"
              },
              {
                icon: "📡",
                title: "RSS Feed",
                description: "Add our RSS feed to your favorite podcast app",
                action: "Copy RSS Feed"
              },
            ].map((option, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Want to Be a
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Podcast Guest?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Share your field service success story and inspire other business owners. We're always looking for inspiring entrepreneurs to feature on our show.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Apply to Be a Guest
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200">
              Suggest a Topic
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Weekly episodes
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Expert insights
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Success stories
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Actionable advice
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
