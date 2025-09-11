"use client";

import React, { useState } from "react";

const CRMDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: "fas fa-chart-pie" },
    { id: "jobs", name: "Jobs", icon: "fas fa-calendar-alt" },
    { id: "customers", name: "Customers", icon: "fas fa-users" },
    { id: "invoices", name: "Invoices", icon: "fas fa-file-invoice" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
      {/* Header */}
      <div className="bg-[#293146] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FFB700] rounded-lg flex items-center justify-center">
            <i className="fas fa-bolt text-white text-sm"></i>
          </div>
          <h3 className="font-semibold">Logical CRM</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-[#FFB700] rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">Live Demo</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium flex items-center gap-2 transition-colors ${
                activeTab === tab.id
                  ? "text-[#FFB700] border-b-2 border-[#FFB700] bg-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <i className={tab.icon}></i>
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 h-[500px] overflow-y-auto bg-gray-50">
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#293146] p-5 rounded-xl text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl font-bold">24</div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-calendar-check text-white"></i>
                  </div>
                </div>
                <div className="text-gray-200 text-sm">Jobs Today</div>
                <div className="text-xs text-gray-300 mt-1">
                  ↗ +12% from yesterday
                </div>
              </div>
              <div className="bg-[#293146] p-5 rounded-xl text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl font-bold">$12,450</div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-dollar-sign text-white"></i>
                  </div>
                </div>
                <div className="text-gray-200 text-sm">Revenue This Week</div>
                <div className="text-xs text-gray-300 mt-1">
                  ↗ +18% from last week
                </div>
              </div>
              <div className="bg-[#FFB700] p-5 rounded-xl text-[#293146] shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl font-bold">156</div>
                  <div className="w-10 h-10 bg-white/50 rounded-lg flex items-center justify-center">
                    <i className="fas fa-users text-[#293146]"></i>
                  </div>
                </div>
                <div className="text-[#293146] text-sm opacity-80">Active Customers</div>
                <div className="text-xs text-[#293146] opacity-70 mt-1">
                  ↗ +5 new this week
                </div>
              </div>
            </div>

            {/* Enhanced Activity Feed */}
            <div className="bg-white p-5 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-[#293146] flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FFB700] rounded-full animate-pulse"></div>
                  Live Activity Feed
                </h4>
                <button className="text-xs text-gray-500 hover:text-gray-700">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-[#FFB700]">
                  <div className="w-8 h-8 bg-[#FFB700] rounded-full flex items-center justify-center">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[#293146]">
                      Job #1234 completed
                    </div>
                    <div className="text-xs text-gray-600">
                      Smith Residence - Plumbing repair
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      2 minutes ago
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-[#FFB700]">
                  <div className="w-8 h-8 bg-[#293146] rounded-full flex items-center justify-center">
                    <i className="fas fa-user-plus text-white text-xs"></i>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[#293146]">
                      New customer added
                    </div>
                    <div className="text-xs text-gray-600">
                      ABC Company - Commercial account
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      5 minutes ago
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border-l-4 border-[#FFB700]">
                  <div className="w-8 h-8 bg-[#293146] rounded-full flex items-center justify-center">
                    <i className="fas fa-paper-plane text-white text-xs"></i>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[#293146]">
                      Invoice sent
                    </div>
                    <div className="text-xs text-gray-600">
                      Johnson Plumbing - $850.00
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      15 minutes ago
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
              <div>
                <h4 className="font-semibold text-gray-900">
                  Today's Schedule
                </h4>
                <p className="text-sm text-gray-600">
                  3 jobs scheduled, 1 in progress
                </p>
              </div>
              <button className="bg-[#FFB700] text-[#293146] px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow flex items-center gap-2">
                <i className="fas fa-plus"></i>
                New Job
              </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  id: "1234",
                  customer: "Smith Residence",
                  time: "9:00 AM",
                  status: "In Progress",
                  service: "Plumbing Repair",
                  priority: "High",
                },
                {
                  id: "1235",
                  customer: "ABC Company",
                  time: "11:30 AM",
                  status: "Scheduled",
                  service: "HVAC Maintenance",
                  priority: "Medium",
                },
                {
                  id: "1236",
                  customer: "Johnson Plumbing",
                  time: "2:00 PM",
                  status: "Scheduled",
                  service: "Installation",
                  priority: "Low",
                },
              ].map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#FFB700] hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="font-semibold text-gray-900">
                          #{job.id}
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            job.status === "In Progress"
                              ? "border border-[#FFB700] text-[#293146]"
                              : "bg-gray-100 text-[#293146]"
                          }`}
                        >
                          {job.status}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            job.priority === "High"
                              ? "bg-[#293146] text-white"
                              : job.priority === "Medium"
                              ? "border border-[#FFB700] text-[#293146]"
                              : "bg-gray-100 text-[#293146]"
                          }`}
                        >
                          {job.priority}
                        </span>
                      </div>
                      <div className="text-lg font-medium text-gray-900 mb-1">
                        {job.customer}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        {job.service}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <i className="fas fa-clock"></i>
                          {job.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <i className="fas fa-map-marker-alt"></i>
                          View Location
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                        <i className="fas fa-edit text-gray-600 text-xs"></i>
                      </button>
                      <button className="w-8 h-8 bg-[#FFB700] hover:bg-[#FFB700] rounded-lg flex items-center justify-center transition-colors">
                        <i className="fas fa-check text-[#293146] text-xs"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "customers" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
              <div>
                <h4 className="font-semibold text-gray-900">
                  Customer Management
                </h4>
                <p className="text-sm text-gray-600">156 total customers</p>
              </div>
              <button className="bg-[#FFB700] text-[#293146] px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow flex items-center gap-2">
                <i className="fas fa-user-plus"></i>
                Add Customer
              </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  name: "John Smith",
                  email: "john@email.com",
                  jobs: 3,
                  phone: "(555) 123-4567",
                  type: "Residential",
                  lastJob: "2 days ago",
                },
                {
                  name: "ABC Company",
                  email: "contact@abc.com",
                  jobs: 12,
                  phone: "(555) 987-6543",
                  type: "Commercial",
                  lastJob: "1 day ago",
                },
                {
                  name: "Johnson Plumbing",
                  email: "info@johnson.com",
                  jobs: 7,
                  phone: "(555) 456-7890",
                  type: "Commercial",
                  lastJob: "3 hours ago",
                },
              ].map((customer, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-[#FFB700] rounded-full flex items-center justify-center text-[#293146] font-bold">
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="font-semibold text-gray-900">
                            {customer.name}
                          </div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              customer.type === "Commercial"
                                ? "border border-[#FFB700] text-[#293146]"
                                : "bg-gray-100 text-[#293146]"
                            }`}
                          >
                            {customer.type}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          {customer.email}
                        </div>
                        <div className="text-sm text-gray-600">
                          {customer.phone}
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <i className="fas fa-briefcase"></i>
                            {customer.jobs} jobs
                          </div>
                          <div className="flex items-center gap-1">
                            <i className="fas fa-clock"></i>
                            Last job: {customer.lastJob}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                        <i className="fas fa-phone text-gray-600 text-xs"></i>
                      </button>
                      <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                        <i className="fas fa-envelope text-[#293146] text-xs"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "invoices" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
              <div>
                <h4 className="font-semibold text-gray-900">
                  Invoice Management
                </h4>
                <p className="text-sm text-gray-600">
                  $2,500 pending • $8,950 collected this month
                </p>
              </div>
              <button className="bg-[#FFB700] text-[#293146] px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow flex items-center gap-2">
                <i className="fas fa-file-invoice"></i>
                Create Invoice
              </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  id: "INV-001",
                  customer: "Smith Residence",
                  amount: "$450",
                  status: "Paid",
                  date: "Mar 15",
                  service: "Plumbing Repair",
                  dueDate: "Mar 30",
                },
                {
                  id: "INV-002",
                  customer: "ABC Company",
                  amount: "$1,200",
                  status: "Pending",
                  date: "Mar 18",
                  service: "HVAC Maintenance",
                  dueDate: "Apr 2",
                },
                {
                  id: "INV-003",
                  customer: "Johnson Plumbing",
                  amount: "$850",
                  status: "Sent",
                  date: "Mar 20",
                  service: "Installation",
                  dueDate: "Apr 5",
                },
              ].map((invoice) => (
                <div
                  key={invoice.id}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="font-semibold text-gray-900">
                          {invoice.id}
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            invoice.status === "Paid"
                              ? "border border-[#FFB700] text-[#293146]"
                              : "bg-gray-100 text-[#293146]"
                          }`}
                        >
                          {invoice.status}
                        </span>
                      </div>
                      <div className="text-lg font-medium text-gray-900 mb-1">
                        {invoice.customer}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        {invoice.service}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <i className="fas fa-calendar"></i>
                          Issued: {invoice.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <i className="fas fa-clock"></i>
                          Due: {invoice.dueDate}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        {invoice.amount}
                      </div>
                      <div className="flex gap-2">
                        <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                          <i className="fas fa-eye text-gray-600 text-xs"></i>
                        </button>
                        <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                          <i className="fas fa-paper-plane text-[#293146] text-xs"></i>
                        </button>
                        {invoice.status !== "Paid" && (
                          <button className="w-8 h-8 bg-[#FFB700] hover:bg-[#FFB700] rounded-lg flex items-center justify-center transition-colors">
                            <i className="fas fa-check text-[#293146] text-xs"></i>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ProductTour() {
  return (
    <section className="w-full overflow-hidden py-14 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
            <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
              PRODUCT TOUR
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#293146] text-center mb-4 leading-tight">
            See Logical CRM in action
          </h2>
          <p className="text-[#23282b] opacity-80 max-w-2xl mx-auto mt-3">
            Schedule jobs, dispatch teams, send invoices, and get paid — all
            from one modern, easy-to-use platform.
          </p>
        </div>

        {/* Interactive CRM Demo */}
        <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 shadow-md overflow-hidden">
          <div className="relative w-full h-[600px]">
            <CRMDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
