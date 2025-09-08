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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl mx-4 rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden md:h-[700px]">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center text-gray-500 hover:text-gray-700 transition"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative hidden md:block h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFB700]/20 via-white to-white" />
            <img
              src="/images/client-crm.webp"
              alt="Logical CRM"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 h-full w-full p-6 flex flex-col justify-end bg-gradient-to-t from-black/50 via-black/20 to-transparent">
              <div className="text-white">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider">
                    SECURE ACCESS
                  </span>
                </div>
                <h4 className="text-2xl font-extrabold leading-tight">
                  Run your business smarter
                </h4>
                <p className="text-white/80 text-sm mt-2">
                  Manage scheduling, jobs, invoices and payments in one place.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-7 md:px-10 md:py-10 h-full">
            <div className="inline-flex rounded-xl p-1 bg-gray-100 mb-6">
              <button
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                  mode === "login"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => onSwitchMode("login")}
              >
                Log in
              </button>
              <button
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
                  mode === "signup"
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => onSwitchMode("signup")}
              >
                Sign up
              </button>
            </div>

            <h3
              className="text-2xl font-black text-[#293146] mb-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              {mode === "login"
                ? "Enter your details to access your workspace."
                : "Sign up to start your free trial in minutes."}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
              className="space-y-4"
            >
              {mode === "signup" && (
                <div className="space-y-1">
                  <label className="text-sm text-gray-700">Full name</label>
                  <div className="relative">
                    <i className="fas fa-user text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>
              )}
              {mode !== "signup" && (
                <div className="hidden md:block" aria-hidden="true">
                  <div className="h-[64px]" />
                </div>
              )}
              <div className="space-y-1">
                <label className="text-sm text-gray-700">Email</label>
                <div className="relative">
                  <i className="fas fa-envelope text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm text-gray-700">Password</label>
                <div className="relative">
                  <i className="fas fa-lock text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFB700] focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              {mode === "login" && (
                <div className="flex items-center justify-between text-sm">
                  <label className="inline-flex items-center gap-2 text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[#FFB700] focus:ring-[#FFB700]"
                    />
                    Remember me
                  </label>
                  <button
                    type="button"
                    className="text-[#FFB700] font-semibold"
                  >
                    Forgot password?
                  </button>
                </div>
              )}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#FFB700] hover:bg-[#e6a600] text-gray-900 font-bold py-2.5 shadow-md hover:shadow-lg transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {mode === "login" ? "Log in" : "Create account"}
              </button>
            </form>

            <div className="mt-5">
              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-200 flex-1" />
                <span className="text-xs text-gray-400">or continue with</span>
                <div className="h-px bg-gray-200 flex-1" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <button className="h-10 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-800 transition">
                  <i className="fab fa-google"></i>
                </button>
                <button className="h-10 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-800 transition">
                  <i className="fab fa-apple"></i>
                </button>
                <button className="h-10 rounded-lg border border-gray-200 hover:border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-800 transition">
                  <i className="fab fa-microsoft"></i>
                </button>
              </div>
            </div>

            <div className="mt-5 text-sm text-center text-gray-600">
              {mode === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button
                    className="text-[#FFB700] font-semibold"
                    onClick={() => onSwitchMode("signup")}
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    className="text-[#FFB700] font-semibold"
                    onClick={() => onSwitchMode("login")}
                  >
                    Log in
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
