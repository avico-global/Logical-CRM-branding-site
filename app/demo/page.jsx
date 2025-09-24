"use client";
import React from "react";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export default function DemoPage() {
  return (
    <main className="min-h-screen w-full bg-white pt-28 md:pt-32 flex flex-col">
      <div className="flex-1 px-4">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto text-center mt-6 md:mt-8">
        <h1
          className="text-4xl md:text-5xl font-black text-[#293146]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          See how it works
        </h1>
        <p className="mt-3 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Share your process—we'll show you how Logical CRM can save time from day one.
        </p>
        
      </section>
      
        {/* How Our Demo Works Section (moved below hero) */}
        <section className="mt-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 py-12">
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center mb-3">
                  <i className="fas fa-phone text-[#293146]"></i>
                </div>
                <div className="font-semibold text-gray-900">Schedule a call</div>
                <div className="text-sm text-gray-600">Pick a time that works for you</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center mb-3">
                  <i className="fas fa-comments text-[#293146]"></i>
                </div>
                <div className="font-semibold text-gray-900">Share your needs</div>
                <div className="text-sm text-gray-600">Tell us about your current process</div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center mb-3">
                  <i className="fas fa-desktop text-[#293146]"></i>
                </div>
                <div className="font-semibold text-gray-900">See it in action</div>
                <div className="text-sm text-gray-600">Live walkthrough tailored to you</div>
              </div>
            </div>
          </div>
        </section>


        {/* Form Section */}
        <section id="book-demo" className="max-w-5xl mx-auto mt-12">
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-8 md:p-10">
          <div className="text-center">
            <h2
              className="text-2xl md:text-3xl font-black text-[#293146]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Book Your Demo
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll schedule a personalized demonstration.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="space-y-1">
              <label className="text-sm text-gray-700">Name</label>
              <div className="relative">
                <i className="fas fa-user text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-700">Work Email</label>
              <div className="relative">
                <i className="fas fa-envelope text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="your.email@company.com"
                  className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-700">Company</label>
              <div className="relative">
                <i className="fas fa-building text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm text-gray-700">Team Size</label>
              <div className="relative">
                <i className="fas fa-users text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="How many people are on your team?"
                  className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-1">
              <label className="text-sm text-gray-700">Use Case</label>
              <textarea
                placeholder="Describe your current support process, challenges, and what you hope to achieve..."
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
              />
            </div>
            <div className="md:col-span-1 space-y-1">
              <label className="text-sm text-gray-700">Preferred Time</label>
              <div className="relative">
                <i className="fas fa-calendar text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="datetime-local"
                  className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
                />
              </div>
            </div>
            <div className="md:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full rounded-xl bg-[#FFB700] hover:bg-[#e6a600] text-gray-900 font-bold py-2.5 shadow-md hover:shadow-lg transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Book Demo
              </button>
            </div>
          </form>
        </div>
        </section>

        {/* Feature Highlights (subtle section) */}
        <section className="max-w-5xl mx-auto mt-4 md:mt-6 mb-20 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-xl border border-gray-200 p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                <i className="fas fa-bolt text-[#293146]"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Fast Setup</div>
                <div className="text-sm text-gray-600">Get started in minutes with sample data.</div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                <i className="fas fa-chart-line text-[#293146]"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Real Insights</div>
                <div className="text-sm text-gray-600">Explore dashboards and workflows.</div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                <i className="fas fa-mobile-alt text-[#293146]"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Anywhere Access</div>
                <div className="text-sm text-gray-600">Use it on desktop and mobile.</div>
              </div>
            </div>
          </div>
        </section>

        

       
      </div>
      

      <FooterSection hideHero={true} />
    </main>
  );
}


