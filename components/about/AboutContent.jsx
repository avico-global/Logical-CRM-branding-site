import React from "react";

export default function AboutContent() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2" />
          <span className="text-[#FFB700] text-xs font-semibold tracking-wide">
            OUR MISSION
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          Software that gets out of your way
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          We build simple, powerful tools so field service teams can focus on
          customers—not software.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: "fas fa-bolt",
              title: "Fast",
              desc: "Speedy onboarding and clear workflows.",
            },
            {
              icon: "fas fa-shield-alt",
              title: "Trusted",
              desc: "Secure by design and reliable.",
            },
            {
              icon: "fas fa-thumbs-up",
              title: "Simple",
              desc: "Clean UI, no clutter, fewer clicks.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl p-6 border border-gray-100 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFB700]/10 text-[#FFB700] flex items-center justify-center mb-4 group-hover:bg-[#FFB700] group-hover:text-gray-900 transition-colors">
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
