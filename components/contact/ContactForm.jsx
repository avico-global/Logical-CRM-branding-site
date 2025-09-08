"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 800);
  };

  return (
    <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 shadow">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full name
            </label>
            <input
              type="text"
              required
              placeholder="Jane Doe"
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone (optional)
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              required
              placeholder="How can we help?"
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows={5}
            required
            placeholder="Share a few details so we can assist you quickly..."
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            We typically reply within 2 hours.
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 rounded-xl bg-[#FFB700] px-5 py-2.5 font-bold text-gray-900 shadow-md hover:bg-[#e6a600] transition-colors disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-gray-900 border-t-transparent" />
                Sending...
              </>
            ) : status === "success" ? (
              <>
                <i className="fas fa-check" />
                Sent
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane" />
                Send message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
