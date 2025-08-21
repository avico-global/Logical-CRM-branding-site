import React from "react";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Webinars - Logical CRM | Expert Field Service Training & Education",
  description: "Get advice directly from industry experts through our comprehensive webinar series. Learn best practices, strategies, and tools to grow your field service business.",
  keywords: "field service webinars, training, expert advice, business education, CRM training",
  openGraph: {
    title: "Webinars - Logical CRM | Expert Field Service Training & Education",
    description: "Get advice directly from industry experts through our comprehensive webinar series. Learn best practices, strategies, and tools to grow your field service business.",
    type: "website",
  },
};

const upcomingWebinars = [
  {
    id: 1,
    title: "Maximizing ROI with Field Service Automation",
    description: "Learn how to implement automation strategies that deliver measurable returns for your field service business.",
    date: "April 15, 2024",
    time: "2:00 PM EST",
    duration: "60 minutes",
    presenter: "Sarah Johnson",
    presenterTitle: "VP of Operations, Logical CRM",
    presenterImage: "/images/person.webp",
    attendees: "450+ registered",
    level: "Intermediate",
    topics: [
      "Workflow automation strategies",
      "ROI measurement techniques",
      "Implementation best practices",
      "Common pitfalls to avoid"
    ],
    image: "/images/automations-illustration.webp",
    isLive: false
  },
  {
    id: 2,
    title: "Customer Communication Mastery for HVAC Professionals",
    description: "Master the art of customer communication to build trust, increase satisfaction, and boost repeat business.",
    date: "April 22, 2024",
    time: "1:00 PM EST",
    duration: "45 minutes",
    presenter: "Mike Chen",
    presenterTitle: "Customer Success Director",
    presenterImage: "/images/mike.webp",
    attendees: "320+ registered",
    level: "Beginner",
    topics: [
      "Communication best practices",
      "Handling difficult conversations",
      "Follow-up strategies",
      "Building long-term relationships"
    ],
    image: "/images/communications.webp",
    isLive: false
  }
];

const pastWebinars = [
  {
    id: 3,
    title: "The Future of Mobile Field Service Apps",
    description: "Explore the latest trends and technologies shaping the future of mobile field service management.",
    date: "March 18, 2024",
    duration: "55 minutes",
    presenter: "Jennifer Walsh",
    presenterTitle: "Product Manager",
    views: "1,250 views",
    rating: 4.8,
    topics: [
      "Mobile technology trends",
      "App development best practices",
      "User experience optimization",
      "Integration strategies"
    ],
    image: "/images/workiz-pa.webp",
    recordingUrl: "#"
  },
  {
    id: 4,
    title: "Inventory Management for Plumbing Professionals",
    description: "Optimize your inventory management to reduce costs and ensure you always have the right parts.",
    date: "March 11, 2024",
    duration: "50 minutes",
    presenter: "David Rodriguez",
    presenterTitle: "Industry Expert",
    views: "890 views",
    rating: 4.9,
    topics: [
      "Inventory optimization",
      "Cost reduction strategies",
      "Parts forecasting",
      "Supplier management"
    ],
    image: "/images/inventory.webp",
    recordingUrl: "#"
  },
  {
    id: 5,
    title: "Building Customer Loyalty in Service Industries",
    description: "Strategies to turn one-time customers into loyal advocates for your field service business.",
    date: "March 4, 2024",
    duration: "48 minutes",
    presenter: "Lisa Thompson",
    presenterTitle: "Customer Relations Expert",
    views: "1,540 views",
    rating: 4.7,
    topics: [
      "Loyalty program design",
      "Customer retention strategies",
      "Feedback collection",
      "Relationship building"
    ],
    image: "/images/clients-engaged.webp",
    recordingUrl: "#"
  },
  {
    id: 6,
    title: "Pricing Strategies for Field Service Success",
    description: "Learn how to price your services competitively while maintaining healthy profit margins.",
    date: "February 26, 2024",
    duration: "52 minutes",
    presenter: "Robert Kim",
    presenterTitle: "Business Strategist",
    views: "2,100 views",
    rating: 4.9,
    topics: [
      "Competitive pricing analysis",
      "Value-based pricing",
      "Profit margin optimization",
      "Market positioning"
    ],
    image: "/images/pricebook.webp",
    recordingUrl: "#"
  }
];

const webinarCategories = [
  "All Categories",
  "Business Growth",
  "Technology",
  "Customer Service",
  "Operations",
  "Marketing",
];

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-200/20 to-pink-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-red-500/10 border border-red-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-600 mr-2 animate-pulse" />
            <span className="text-red-700 text-sm font-semibold tracking-wide">
              EXPERT TRAINING
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-red-800 to-purple-800 mb-6 leading-tight">
            Field Service
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
              Webinar Series
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Get advice directly from industry experts. Join our comprehensive webinar series to learn best practices, strategies, and tools to grow your field service business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-2xl hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Upcoming Webinars
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
              Browse Past Recordings
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss these upcoming expert sessions designed to help you grow your field service business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                      UPCOMING
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-semibold rounded-full">
                      {webinar.level}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{webinar.description}</p>

                  {/* Webinar Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{webinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                      <span className="text-gray-700">{webinar.attendees}</span>
                    </div>
                  </div>

                  {/* Presenter */}
                  <div className="flex items-center gap-3 mb-6 p-3 bg-gray-50 rounded-xl">
                    <img
                      src={webinar.presenterImage}
                      alt={webinar.presenter}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{webinar.presenter}</div>
                      <div className="text-sm text-gray-600">{webinar.presenterTitle}</div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What you'll learn:</h4>
                    <div className="space-y-2">
                      {webinar.topics.map((topic, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <span className="text-sm text-gray-600">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-2xl hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Register Now - Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Past Webinar Recordings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Access our library of expert-led sessions available on-demand
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {webinarCategories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  index === 0
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Past Webinars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {pastWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                      RECORDED
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 bg-black/60 text-white text-xs font-semibold rounded-full">
                      {webinar.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{webinar.presenter}</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{webinar.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {webinar.topics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span className="text-sm text-gray-600">{topic}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <div>{webinar.date}</div>
                      <div>{webinar.views}</div>
                    </div>
                    <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-900 via-pink-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Learn from
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Industry Experts?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of field service professionals who are growing their businesses with expert insights and proven strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Register for Next Webinar
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200">
              Browse All Recordings
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free to attend
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Expert presenters
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Recordings available
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Interactive Q&A
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
