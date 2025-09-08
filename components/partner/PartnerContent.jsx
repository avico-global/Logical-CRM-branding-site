import React from "react";

export default function PartnerContent() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          Simple partner program
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Earn recurring revenue referring businesses to Logical CRM. Quick
          onboarding, clear terms, and full support.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: "fas fa-percent",
              title: "Recurring commissions",
              desc: "Get paid monthly on active customers.",
            },
            {
              icon: "fas fa-headset",
              title: "Dedicated support",
              desc: "Access to partner success resources.",
            },
            {
              icon: "fas fa-briefcase",
              title: "Ready-to-use assets",
              desc: "Marketing and sales kits included.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border border-gray-100 bg-gradient-to-br from-gray-50 to-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFB700]/10 text-[#FFB700] flex items-center justify-center mb-4">
                <i className={f.icon} />
              </div>
              <div className="font-bold text-gray-900 mb-1">{f.title}</div>
              <div className="text-gray-600 text-sm leading-relaxed">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
