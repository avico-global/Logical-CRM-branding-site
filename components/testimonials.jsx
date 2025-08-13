"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    youtubeId: "P7y6LRaOVPM",
    quote:
      "Since switching to Logical CRM, we've increased efficiency by 40% and our customers love the real-time updates.",
    name: "Sarah Mitchell",
    title: "Operations Manager",
    company: "COIT Cleaning & Restoration",
    logo: "/images/logo-pro1.webp",
    rating: 5,
  },
  {
    id: 2,
    youtubeId: "KF0qXjedWo0",
    quote:
      "The expense tracking tools gave us complete financial control. We save 15 hours per week on admin work.",
    name: "Mike Rodriguez",
    title: "Owner",
    company: "Appliances USA Pro",
    logo: "/images/logo-pro2.webp",
    rating: 5,
  },
  {
    id: 3,
    youtubeId: "QPJI2R7rozQ",
    quote:
      "Logical CRM transformed our HVAC business completely. Revenue is up 60% in just 8 months.",
    name: "Brian Orchard",
    title: "Owner",
    company: "Everett Air Conditioning",
    logo: "/images/logo-pro3.webp",
    rating: 5,
  },
  {
    id: 4,
    youtubeId: "_VApip3S7Fg",
    quote:
      "The all-in-one solution we needed. Scheduling, invoicing, payments - everything works seamlessly.",
    name: "David Chen",
    title: "Founder",
    company: "Metro HVAC Solutions",
    logo: "/images/logo-pro4.webp",
    rating: 5,
  },
  {
    id: 5,
    youtubeId: "OUoUvVLSjXo",
    quote:
      "We booked 32% more jobs after switching to Logical CRM. The automated follow-ups are game-changing.",
    name: "Jennifer Walsh",
    title: "Operations Director",
    company: "Junk Doctors",
    logo: "/images/logo-pro5.webp",
    rating: 5,
  },
  {
    id: 6,
    youtubeId: "PPQ5lmZ-gkg",
    quote:
      "Dispatching is 10x faster and payments happen the same day. Our cash flow has never been better.",
    name: "Robert Kim",
    title: "Owner",
    company: "Evergreen Plumbing",
    logo: "/images/logo-pro6.webp",
    rating: 5,
  },
  {
    id: 7,
    youtubeId: "03wUKqcuUDE",
    quote:
      "Logical CRM paid for itself in the first month. The mobile app keeps our techs connected and productive.",
    name: "Lisa Thompson",
    title: "Founder",
    company: "Apex Electrical Services",
    logo: "/images/logo-pro7.webp",
    rating: 5,
  },
  {
    id: 8,
    youtubeId: "bC4ayKxfCQA",
    quote:
      "Our techs love the mobile app — zero learning curve. Customer satisfaction scores increased by 25%.",
    name: "Mark Johnson",
    title: "Field Manager",
    company: "Blue Sky HVAC",
    logo: "/images/logo-pro8.webp",
    rating: 5,
  },
];

function getYoutubeThumbnail(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export default function Testimonials() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
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
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-4">
            Loved by 5,000+ businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from field service teams who transformed their
            operations with Logical CRM
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
                <button
                  onClick={() => setOpenId(testimonial.id)}
                  className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors group-hover:scale-110 transform duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <polygon points="5,3 19,12 5,21" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="text-3xl font-black text-blue-600 mb-2">5,000+</div>
            <div className="text-gray-600 font-medium">Happy Customers</div>
          </div>
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="text-3xl font-black text-purple-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="text-3xl font-black text-green-600 mb-2">40%</div>
            <div className="text-gray-600 font-medium">
              Avg. Efficiency Gain
            </div>
          </div>
          <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="text-3xl font-black text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {openId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setOpenId(null)}
        >
          <div
            className="bg-black rounded-xl overflow-hidden shadow-lg relative"
            style={{ width: "90vw", maxWidth: 640 }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${
                testimonials.find((t) => t.id === openId)?.youtubeId
              }?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-2 right-2 bg-white/80 rounded-full p-2 hover:bg-white transition"
              onClick={() => setOpenId(null)}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
