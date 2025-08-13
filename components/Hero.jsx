"use client";
import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20 animate-pulse"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Enhanced grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-8 py-20 pt-36">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 animate-fadeInUp">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 font-bold">
                Powered by Logical CRM
              </p>
              {/* Enhanced Main Heading */}
              <div className="space-y-3">
                <div className="relative">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-200">
                      Transform Your
                    </span>
                    <br />
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400">
                      Field Service
                      {/* Curvy SVG Underline */}
                      <svg
                        className="absolute -bottom-2 left-0 w-full h-6 overflow-visible"
                        viewBox="0 0 100 12"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id="curveGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="50%" stopColor="#f97316" />
                            <stop offset="100%" stopColor="#eab308" />
                          </linearGradient>
                          <filter id="glow">
                            <feGaussianBlur
                              stdDeviation="2"
                              result="coloredBlur"
                            />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        {/* Main curvy line */}
                        <path
                          d="M2,8 Q25,2 50,6 T98,4"
                          stroke="url(#curveGradient)"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          filter="url(#glow)"
                          className="animate-pulse"
                        />
                        {/* Secondary accent curve */}
                        <path
                          d="M5,9 Q30,4 55,7 T95,5"
                          stroke="#fbbf24"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          opacity="0.6"
                        />
                      </svg>
                      {/* Glow effect */}
                      <div className="absolute -bottom-3 left-0 w-full h-4 bg-gradient-to-r from-yellow-400/20 via-orange-400/30 to-yellow-500/20 rounded-full blur-lg"></div>
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300">
                      Operations
                    </span>
                  </h1>
                </div>
              </div>

              {/* Enhanced Description */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
                Streamline your field operations with
                <span className="text-cyan-300 font-medium">
                  {" "}
                  intelligent scheduling
                </span>
                ,
                <span className="text-blue-300 font-medium">
                  {" "}
                  real-time tracking
                </span>
                , and
                <span className="text-purple-300 font-medium">
                  {" "}
                  comprehensive insights
                </span>
                .
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="group relative px-8 py-3 cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/30 overflow-hidden">
                  <span className="relative z-10">Start Free Trial</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                <button className="group relative px-8 py-3 cursor-pointer bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/20 backdrop-blur-sm overflow-hidden">
                  <span className="relative z-10 group-hover:text-cyan-300 transition-colors duration-300">
                    Watch Demo
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-10 pt-12 w-fit">
                <div className="group cursor-pointer">
                  <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-110 transition-transform duration-300">
                    120K+
                  </div>
                  <div className="text-gray-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                    Active Users
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                    99.9%
                  </div>
                  <div className="text-gray-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                    Uptime
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-gray-400 text-sm font-medium group-hover:text-emerald-300 transition-colors duration-300">
                    Support
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Dashboard Preview */}
            <div className="relative animate-fadeInRight">
              {/* Floating backdrop elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
                {/* Enhanced Browser Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center gap-3 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm hover:bg-red-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm hover:bg-green-400 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-600 ml-4 shadow-inner border border-gray-200">
                    🔒 logicalcrm.com/dashboard
                  </div>
                  <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-gray-400 rounded-sm"></div>
                  </div>
                </div>

                {/* Enhanced Dashboard Content */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white">
                  {/* Compact Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-black text-sm">L</span>
                      </div>
                      <div>
                        <span className="text-gray-900 font-black text-lg">
                          Logical CRM
                        </span>
                        <div className="text-gray-500 text-xs">
                          Field Service Dashboard
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500 font-medium">
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Compact Stats Cards */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                      <div className="text-gray-600 text-xs font-medium mb-1">
                        Today's Jobs
                      </div>
                      <div className="text-xl font-black text-gray-900 mb-1">
                        24
                      </div>
                      <div className="text-emerald-600 text-xs font-semibold flex items-center gap-1">
                        <span>↗</span> +12%
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-0.5 mt-2">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-0.5 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                      <div className="text-gray-600 text-xs font-medium mb-1">
                        Revenue
                      </div>
                      <div className="text-xl font-black text-gray-900 mb-1">
                        $12.5K
                      </div>
                      <div className="text-emerald-600 text-xs font-semibold flex items-center gap-1">
                        <span>↗</span> +8%
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-0.5 mt-2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-0.5 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                      <div className="text-gray-600 text-xs font-medium mb-1">
                        Completed
                      </div>
                      <div className="text-xl font-black text-gray-900 mb-1">
                        18
                      </div>
                      <div className="text-emerald-600 text-xs font-semibold flex items-center gap-1">
                        <span>↗</span> +15%
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-0.5 mt-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-0.5 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>

                  {/* Compact Chart */}
                  <div className="bg-white rounded-xl p-4 shadow-lg mb-3 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-gray-900 font-bold text-sm">
                        Performance Overview
                      </div>
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        Last 7 days
                      </div>
                    </div>
                    <div className="flex items-end gap-1 h-16">
                      {[60, 80, 65, 90, 75, 95, 85, 70, 88, 92].map(
                        (height, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t flex-1 transition-all duration-300 hover:from-blue-500 hover:to-cyan-400 cursor-pointer"
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Compact Job List */}
                  <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-gray-900 font-bold text-sm">
                        Recent Jobs
                      </div>
                      <div className="text-xs text-blue-600 font-semibold cursor-pointer hover:text-blue-700">
                        View All
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        {
                          name: "HVAC Repair",
                          status: "In Progress",
                          color: "blue",
                          time: "2h ago",
                        },
                        {
                          name: "Plumbing Install",
                          status: "Completed",
                          color: "green",
                          time: "4h ago",
                        },
                      ].map((job, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-2 h-2 bg-${job.color}-500 rounded-full shadow-sm`}
                            ></div>
                            <div>
                              <span className="text-gray-900 font-semibold text-xs">
                                {job.name}
                              </span>
                              <div className="text-gray-500 text-xs">
                                {job.time}
                              </div>
                            </div>
                          </div>
                          <span
                            className={`text-${job.color}-600 text-xs font-semibold bg-${job.color}-50 px-2 py-1 rounded-full`}
                          >
                            {job.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
