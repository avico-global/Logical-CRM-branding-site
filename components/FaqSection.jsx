"use client"    
import { useState } from "react";

const faqs = [
  {
    question: "What is field service management software?",
    answer:
      "Field service management software helps businesses manage and optimize their field operations, including scheduling, dispatching, invoicing, and more.",
  },
  {
    question: "What are the benefits of field service management software?",
    answer:
      "Benefits include improved efficiency, better customer service, real-time tracking, and streamlined communication between office and field teams.",
  },
  {
    question: "How much does field service management software cost?",
    answer:
      "Costs vary depending on features, number of users, and provider. Many offer tiered pricing or custom quotes.",
  },
  {
    question: "What are the common features of field service management software?",
    answer:
      "Common features include job scheduling, dispatching, invoicing, GPS tracking, reporting, and mobile access.",
  },
  {
    question: "Factors to consider when buying field service management software?",
    answer:
      "Consider ease of use, integration options, scalability, customer support, and pricing when choosing a solution.",
  },
  {
    question: "Who needs field service management software?",
    answer:
      "Any business with field operations—such as HVAC, plumbing, electrical, and maintenance companies—can benefit from FSM software.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="w-full bg-[#f7f9fa] py-6 px-0">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Heading and Subtext */}
        <div className="flex flex-col justify-center self-start pl-12">
          <h2 className="text-[#23282b] font-bold text-3xl mb-4 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Frequently asked<br />questions
          </h2>
          <p className="text-[#23282b] text-lg max-w-md" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Let us know if you have any other questions, <br />our team is always happy to help!
          </p>
        </div>
        {/* Right: Accordion */}
        <div className="flex flex-col gap-1 pr-12">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#e5e7eb]">
              <button
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="text-[#23282b] text-lg font-semibold truncate whitespace-nowrap overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{faq.question}</span>
                <svg
                  className={`ml-4 transition-transform duration-200 ${openIdx === idx ? 'rotate-180' : ''}`}
                  width="24" height="24" viewBox="0 0 24 24" fill="none"
                >
                  <path d="M6 9l6 6 6-6" stroke="#23282b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openIdx === idx && (
                <div className="pb-4 pr-4 text-[#23282b] text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 