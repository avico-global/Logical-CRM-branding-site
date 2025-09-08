"use client";
import { useState } from "react";

const faqs = [
  {
    category: "General",
    question: "What is field service management software?",
    answer:
      "Field service management software helps businesses manage and optimize their field operations, including scheduling, dispatching, invoicing, and more.",
  },
  {
    category: "General",
    question: "What are the benefits of field service management software?",
    answer:
      "Benefits include improved efficiency, better customer service, real-time tracking, and streamlined communication between office and field teams.",
  },
  {
    category: "Pricing",
    question: "How much does field service management software cost?",
    answer:
      "Costs vary depending on features, number of users, and provider. Logical CRM offers transparent tiered pricing and annual discounts.",
  },
  {
    category: "Product",
    question:
      "What are the common features of field service management software?",
    answer:
      "Common features include job scheduling, dispatching, invoicing, GPS tracking, reporting, mobile access, and integrations.",
  },
  {
    category: "Buying",
    question:
      "Factors to consider when buying field service management software?",
    answer:
      "Consider ease of use, integration options, scalability, data security, support quality, and pricing when choosing a solution.",
  },
  {
    category: "Industries",
    question: "Who needs field service management software?",
    answer:
      "Any business with field operations—such as HVAC, plumbing, electrical, restoration, and maintenance companies—can benefit from FSM software.",
  },
  {
    category: "Integrations",
    question: "Does Logical CRM integrate with QuickBooks and other tools?",
    answer:
      "Yes. We integrate with QuickBooks Online, Zapier, Slack and more. Our open API enables custom workflows as you scale.",
  },
  {
    category: "Security",
    question: "How secure is my data?",
    answer:
      "We follow best practices including encryption in transit and at rest, role-based access controls, and regular backups.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const categories = [
    "All",
    ...Array.from(new Set(faqs.map((f) => f.category))),
  ];
  const filteredFaqs = faqs.filter(
    (f) =>
      (activeCategory === "All" || f.category === activeCategory) &&
      (f.question.toLowerCase().includes(query.toLowerCase()) ||
        f.answer.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Heading and Subtext */}
        <div className="pl-2 md:pl-4">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
            <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
              FAQ
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#293146] leading-tight mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Frequently asked questions
          </h2>
          <p
            className="text-[#23282b] text-lg opacity-80 max-w-md mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Can’t find what you’re looking for? Our team is happy to help.
          </p>
        </div>

        {/* Right: Accordion */}
        <div className="pr-0 md:pr-2">
          {/* Controls: search + categories */}
          <div className="flex flex-col gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions..."
                  className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 pr-10 text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFB700]   "
                />
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 20l-3-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="hidden sm:block text-sm text-gray-500 whitespace-nowrap">
                {filteredFaqs.length} results
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIdx(null);
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                    activeCategory === cat
                      ? "bg-white text-[#FFB700] border-[#FFB700]"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm divide-y divide-gray-200 overflow-hidden">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx}>
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    className={`w-full flex items-start justify-between gap-6 p-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                      isOpen ? "bg-blue-50/40" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <span
                      className="text-[#111] text-base md:text-lg font-semibold leading-snug"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {faq.question}
                    </span>
                    {/* Icon */}
                    <span className="mt-1 inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-700">
                      {isOpen ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 12h12"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 6v12M6 12h12"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-panel-${idx}`}
                      className="px-5 pb-5 text-[#23282b] text-base leading-relaxed"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
