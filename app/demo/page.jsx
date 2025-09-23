"use client";
import React from "react";
import Link from "next/link";

export default function DemoPage() {
  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-8 md:p-10">
          <div className="text-center">
            <h1
              className="text-3xl md:text-4xl font-black text-[#293146]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Experience the Demo
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Try out our features and see how it works for you.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-xl border border-gray-200 p-4 md:p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                <i className="fas fa-bolt text-[#293146]"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Fast Setup</div>
                <div className="text-sm text-gray-600">Get started in minutes with sample data.</div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 md:p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                <i className="fas fa-chart-line text-[#293146]"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Real Insights</div>
                <div className="text-sm text-gray-600">Explore dashboards and workflows.</div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 md:p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                <i className="fas fa-mobile-alt text-[#293146]"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Anywhere Access</div>
                <div className="text-sm text-gray-600">Use it on desktop and mobile.</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="mt-8 space-y-4"
          >
            <div className="space-y-1">
              <label className="text-sm text-gray-700">Select a Demo Environment</label>
              <div className="relative">
                <i className="fas fa-layer-group text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  className="w-full appearance-none rounded-lg border border-gray-300 pl-9 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent text-gray-800"
                  defaultValue="default"
                >
                  <option value="default" disabled>
                    Choose an environment
                  </option>
                  <option value="sales">Sales Team</option>
                  <option value="ops">Operations</option>
                  <option value="field">Field Crew</option>
                </select>
                <i className="fas fa-chevron-down text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-[#FFB700] hover:bg-[#e6a600] text-gray-900 font-bold py-2.5 shadow-md hover:shadow-lg transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Start Demo
              </button>
              <Link
                href="#schedule-demo"
                className="w-full rounded-xl border border-gray-300 text-center text-gray-800 font-semibold py-2.5 hover:bg-gray-50 transition"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Schedule a Live Demo
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}


