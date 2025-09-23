"use client";
import React from "react";

export default function GetStartedPage() {
  return (
    <main className="min-h-screen w-full bg-white pt-28 md:pt-32 px-4 flex items-start justify-center pb-16">
      <div className="w-full max-w-lg">
        <div className="relative w-full rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden p-8 md:p-10">
          <div className="text-center">
            <h1
              className="text-2xl md:text-3xl font-black text-[#293146]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Secure Access to Your App
            </h1>
            <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
              Welcome back! Go to your app to manage your business.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-full mt-6 space-y-4 text-left"
          >
            <div className="space-y-1">
              <label className="text-sm text-gray-700">Workspace</label>
              <div className="relative">
                <i className="fas fa-briefcase text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
                  placeholder="Enter your workspace name"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-[#FFB700] hover:bg-[#e6a600] text-gray-900 font-bold py-2.5 shadow-md hover:shadow-lg transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Go To App
            </button>
          </form>

          <div className="w-full mt-6">
            <div className="h-px bg-gray-200" />
          </div>
          <p className="mt-4 text-sm text-center text-gray-600">Don't have an account yet?</p>
          <button
            type="button"
            className="mt-3 w-full rounded-xl border border-gray-300 text-gray-800 font-semibold py-2.5 hover:bg-gray-50 transition"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </main>
  );
}


