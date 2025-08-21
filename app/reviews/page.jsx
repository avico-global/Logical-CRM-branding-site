import React from "react";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Reviews - Logical CRM | Customer Reviews & Testimonials",
  description: "See why our customers trust us to grow their business every day. Read real reviews and testimonials from field service professionals using Logical CRM.",
  keywords: "logical crm reviews, customer testimonials, field service reviews, crm ratings, customer satisfaction",
  openGraph: {
    title: "Reviews - Logical CRM | Customer Reviews & Testimonials",
    description: "See why our customers trust us to grow their business every day. Read real reviews and testimonials from field service professionals using Logical CRM.",
    type: "website",
  },
};

const reviewPlatforms = [
  {
    name: "Capterra",
    rating: 4.8,
    reviews: 245,
    logo: "/images/captera.webp",
    color: "bg-orange-500"
  },
  {
    name: "Software Advice",
    rating: 4.9,
    reviews: 189,
    logo: "/images/badge-1.png",
    color: "bg-blue-500"
  },
  {
    name: "G2",
    rating: 4.7,
    reviews: 156,
    logo: "/images/badge-3.png",
    color: "bg-orange-600"
  },
  {
    name: "Trustpilot",
    rating: 4.8,
    reviews: 298,
    logo: "/images/badge-4.png",
    color: "bg-green-500"
  }
];

const featuredReviews = [
  {
    id: 1,
    rating: 5,
    title: "Game-changer for our HVAC business",
    review: "Logical CRM has completely transformed how we manage our field service operations. The scheduling features alone have saved us 10+ hours per week, and our customers love the real-time updates. The mobile app is intuitive and our technicians actually enjoy using it. ROI was evident within the first month.",
    author: "Brian Orchard",
    position: "Owner",
    company: "Everett Air Conditioning",
    industry: "HVAC",
    location: "Phoenix, AZ",
    image: "/images/jacob.webp",
    verified: true,
    helpful: 23,
    date: "2 weeks ago"
  },
  {
    id: 2,
    rating: 5,
    title: "Best investment we've made",
    review: "We tried 3 different CRM systems before finding Logical CRM. The difference is night and day. The customer communication features have dramatically improved our response times, and the invoicing system has cut our billing time in half. Customer support is outstanding - they actually understand our business.",
    author: "Jennifer Walsh",
    position: "Operations Director", 
    company: "Junk Doctors",
    industry: "Junk Removal",
    location: "Dallas, TX",
    image: "/images/jerry.webp",
    verified: true,
    helpful: 31,
    date: "1 month ago"
  },
  {
    id: 3,
    rating: 5,
    title: "Streamlined our entire workflow",
    review: "From estimate to invoice, everything flows seamlessly. The integration with QuickBooks saved us hours of double data entry. Our technicians love the mobile app - it's so much easier than our old paper-based system. We've seen a 40% improvement in our job completion rates.",
    author: "Robert Kim",
    position: "Owner",
    company: "Evergreen Plumbing",
    industry: "Plumbing",
    location: "Seattle, WA",
    image: "/images/person.webp",
    verified: true,
    helpful: 18,
    date: "3 weeks ago"
  },
  {
    id: 4,
    rating: 5,
    title: "Exactly what we needed",
    review: "We're a growing electrical contractor and needed something that could scale with us. Logical CRM fits perfectly. The dispatching features are incredibly powerful, and the reporting gives us insights we never had before. Setup was surprisingly easy and training was minimal.",
    author: "Mike Rodriguez",
    position: "General Manager",
    company: "PowerPro Electric",
    industry: "Electrical",
    location: "Miami, FL",
    image: "/images/mike.webp",
    verified: true,
    helpful: 26,
    date: "1 week ago"
  },
  {
    id: 5,
    rating: 4,
    title: "Great software, excellent support",
    review: "The software itself is very comprehensive and covers all our needs. What really sets Logical CRM apart is their customer support team. They're always available and actually know the field service industry. The training sessions were thorough and helped us get up to speed quickly.",
    author: "Lisa Thompson",
    position: "Office Manager",
    company: "CleanPro Services",
    industry: "Cleaning",
    location: "Denver, CO",
    image: "/images/person.webp",
    verified: true,
    helpful: 15,
    date: "2 months ago"
  },
  {
    id: 6,
    rating: 5,
    title: "Increased our revenue by 35%",
    review: "Within 6 months of implementing Logical CRM, we saw a 35% increase in revenue. The automated follow-ups help us capture more repeat business, and the scheduling optimization means we can fit in more jobs per day. The investment has paid for itself many times over.",
    author: "David Chen",
    position: "CEO",
    company: "Garage Door Experts",
    industry: "Garage Door",
    location: "Austin, TX",
    image: "/images/person.webp",
    verified: true,
    helpful: 42,
    date: "1 month ago"
  }
];

const reviewStats = [
  { metric: "Average Rating", value: "4.8/5", description: "Across all platforms" },
  { metric: "Customer Satisfaction", value: "96%", description: "Would recommend" },
  { metric: "Support Rating", value: "4.9/5", description: "Customer support" },
  { metric: "Implementation", value: "98%", description: "Success rate" }
];

const reviewCategories = [
  "All Reviews",
  "HVAC",
  "Plumbing", 
  "Electrical",
  "Junk Removal",
  "Cleaning",
  "Garage Door"
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50/30 to-orange-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-yellow-600 mr-2 animate-pulse" />
            <span className="text-yellow-700 text-sm font-semibold tracking-wide">
              CUSTOMER REVIEWS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-yellow-800 to-orange-800 mb-6 leading-tight">
            Trusted by Field Service
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              Professionals
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            See why our customers trust us to grow their business every day. Read real reviews and testimonials from field service professionals just like you.
          </p>

          {/* Overall Rating */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-6xl font-black text-yellow-600">4.8</div>
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-6 h-6 ${star <= 4.8 ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-gray-600">Based on 900+ reviews</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-2xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Read All Reviews
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
              Write a Review
            </button>
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured On</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {reviewPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-12 w-auto mx-auto mb-4"
                />
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-4 h-4 ${star <= platform.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-lg font-bold text-gray-900">{platform.rating}/5</div>
                <div className="text-sm text-gray-600">{platform.reviews} reviews</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Customer Satisfaction Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real numbers from real customers who trust Logical CRM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {reviewStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="text-4xl font-black text-yellow-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {reviewCategories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  index === 0
                    ? "bg-yellow-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-yellow-300 hover:text-yellow-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What Our Customers Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from field service professionals using Logical CRM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${star <= review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {review.verified && (
                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Verified
                    </span>
                  )}
                </div>

                {/* Review Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{review.title}</h3>

                {/* Review Content */}
                <p className="text-gray-600 mb-6 leading-relaxed">{review.review}</p>

                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.image}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{review.author}</div>
                    <div className="text-sm text-gray-600">{review.position}</div>
                    <div className="text-sm text-gray-600">{review.company}</div>
                  </div>
                </div>

                {/* Industry & Location */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="px-2 py-1 bg-gray-100 rounded-md">{review.industry}</span>
                  <span>{review.location}</span>
                </div>

                {/* Review Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{review.date}</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    <span>{review.helpful} helpful</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-yellow-300 hover:text-yellow-600 transition-all duration-200 shadow-lg">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Write Review CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you a Logical CRM customer? We'd love to hear about your experience and how we've helped your business grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-2xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Write a Review
            </button>
            <button className="px-8 py-4 bg-gray-100 text-gray-700 font-bold rounded-2xl hover:bg-gray-200 transition-all duration-200 shadow-lg">
              Submit Testimonial
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Join Thousands of Satisfied Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - see what the numbers say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Happy Customers" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Customer Support" },
              { number: "4.8/5", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-black text-yellow-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-900 via-orange-900 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Join Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Success Stories?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of field service professionals who trust Logical CRM to help them grow their business every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200">
              Schedule Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Expert support
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Join 5,000+ customers
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
