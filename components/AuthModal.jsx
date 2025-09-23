"use client";
import React from "react";

export default function AuthModal({ isOpen, mode, onClose, onSwitchMode }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-white"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg mx-4 rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center text-gray-500 hover:text-gray-700 transition"
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="px-6 py-10 md:px-10 md:py-12">
          <div className="flex flex-col items-center text-center">
            <h3
              className="text-2xl md:text-3xl font-black text-[#293146]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Secure Access to Your App
            </h3>
            <p className="mt-2 text-sm text-gray-500 max-w-md">
              Welcome back! Go to your app to manage your business.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
              className="w-full max-w-md mt-6 space-y-4 text-left"
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

            <div className="w-full max-w-md mt-6">
              <div className="h-px bg-gray-200" />
            </div>
            <p className="mt-4 text-sm text-gray-600">Don't have an account yet?</p>
            <button
              type="button"
              className="mt-3 w-full max-w-md rounded-xl border border-gray-300 text-gray-800 font-semibold py-2.5 hover:bg-gray-50 transition"
              onClick={onClose}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
