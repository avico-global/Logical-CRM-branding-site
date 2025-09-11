import React from "react";

const footerLinks = [
  {
    heading: "Product",
    links: ["All Products"],
  },
  {
    heading: "Industries",
    links: [
      "HVAC",
      "Plumbing",
      "Electrician",
      "Garage Door",
      "Locksmith",
      "Junk Removal",
      "All Industries",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Blog",
      "Podcast",
      "Webinars",
      "Free Tools",
      "Help Center",
      "Reviews",
      "FAQ",
    ],
  },
  {
    heading: "Company",
    links: [
      "About Us",
      "Become a Partner",
      "Contact Us",
      "Investors",
      "Career",
    ],
    contact: {
      phone: "855-790-7363",
      address: ["9444 Balboa Ave", "San Diego, CA 92123"],
    },
  },
];

export default function FooterSection({ heading }) {
  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-900 via-gray-800 to-gray-950 text-white overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto my-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white/10 border border-[#FFB700] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
            <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
              Let's Talk
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200 leading-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {heading || "Grow faster with Logical CRM"}
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Schedule jobs, dispatch teams, send invoices, and get paid — all
            from one modern, easy‑to‑use platform.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 rounded-2xl font-bold text-gray-900 bg-[#FFB700]  hover:  transition-transform ">
              Start Free Trial
              <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
            <button className="px-8 py-4 rounded-2xl font-bold text-white border-2 border-white/30 hover:border-white/60 bg-white/5 backdrop-blur-sm transition-colors">
              Book a Demo
            </button>
          </div>

          {/* Benefits row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/70 text-sm">
            <div className="inline-flex items-center gap-2">
              <CheckIcon /> No credit card required
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckIcon /> 14‑day free trial
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckIcon /> Cancel anytime
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckIcon /> 24/7 support
            </div>
          </div>
        </div>
      </div>

      {/* Top border gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto border-t border-gray-700">
        {/* Main content */}
        <div className="px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand section */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center">
                <img
                  src="/new-crm.png"
                  alt="Logical CRM"
                  className="h-14 w-auto"
                />
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
                The field service CRM that helps teams schedule jobs, get paid
                faster, and grow revenue.
              </p>

              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold">Stay updated</h4>
                <div className="flex max-w-sm">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-l-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  <button className="bg-[#FFB700] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-r-xl transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Links grid */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerLinks.map((col, index) => (
                <div key={col.heading} className="space-y-4">
                  <h3 className="text-white font-bold text-lg">
                    {col.heading}
                  </h3>
                  <ul className="space-y-3">
                    {col.links.slice(0, 8).map((link) => {
                      // Map link names to actual routes
                      const getLinkHref = (linkName) => {
                        const linkMap = {
                          "All Products": "/products",
                          HVAC: "/industries/hvac",
                          Plumbing: "/industries/plumbing",
                          Electrician: "/industries/electricians",
                          "Garage Door": "/industries/garage-door-repair",
                          Locksmith: "/industries/locksmith",
                          "Junk Removal": "/industries/junk-removal",
                          "All Industries": "/industries",
                          Blog: "/blog",
                          Podcast: "/podcast",
                          Webinars: "/webinars",
                          "Free Tools": "/free-tools",
                          "Help Center": "/help-center",
                          Reviews: "/reviews",
                          FAQ: "/faqs",
                          "About Us": "/about-us",
                          "Become a Partner": "/become-partner",
                          "Contact Us": "/contact-us",
                          Investors: "/investors",
                          Career: "/career",
                        };
                        return linkMap[linkName] || "#";
                      };

                      return (
                        <li key={link}>
                          <a
                            href={getLinkHref(link)}
                            className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed"
                          >
                            {link}
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  {col.contact && (
                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <h4 className="text-white font-semibold text-sm">
                        Contact
                      </h4>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-blue-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.08 4.18 2 2 0 015 2h3a2 2 0 012 1.72 12.05 12.05 0 00.56 2.57 2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.12 6.12l1.27-1.27a2 2 0 012.11-.45 12.05 12.05 0 002.57.56A2 2 0 0122 16.92z" />
                          </svg>
                          <span>{col.contact.phone}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                          </svg>
                          <div>
                            <div>{col.contact.address[0]}</div>
                            <div>{col.contact.address[1]}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>© 2025 Logical CRM Inc.</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="text-emerald-300"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
