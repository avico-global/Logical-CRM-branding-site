import React from "react";

const footerLinks = [
  {
    heading: "Product",
    links: [
      "Scheduling",
      "Invoicing",
      "Communication suite",
      "Online payment",
      "Inventory management",
      "Lead management",
      "Business reporting",
      "Route planning",
      "All Features",
    ],
  },
  {
    heading: "Industries",
    links: [
      "Air Duct Cleaning",
      "Alarm And Security",
      "Chimney Sweep",
      "Construction",
      "Handyman",
      "Landscaping",
      "Lawn Care",
      "Moving",
      "Towing",
      "Snow Removal",
      "Restoration",
      "Roofing",
      "All Industries",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Pricing",
      "Integrations",
      "Logical CRM comparison",
      "Support",
      "FAQ",
      "Free tools",
      "Terms and Conditions",
      "Accessibility policy",
      "Privacy Policy",
      "Trust Center",
      "All Resources",
    ],
  },
  {
    heading: "Company",
    links: [
      "About Us",
      "Become a Partner",
      "Franchises",
      "Investors",
      "In the press",
      "Careers",
    ],
    contact: {
      phone: "855-790-7363",
      address: ["9444 Balboa Ave", "San Diego, CA 92123"],
    },
  },
];

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-900 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Top border gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
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

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-sm font-medium">5,000+ teams</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-sm font-medium">99.9% uptime</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold">Stay updated</h4>
                <div className="flex max-w-sm">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-l-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-r-xl transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* App badges */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/appstore-badge.svg"
                  alt="App Store"
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
                <img
                  src="/images/playstore-badge.svg"
                  alt="Google Play"
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
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
                    {col.links.slice(0, 8).map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-300 hover:text-white transition-colors text-sm leading-relaxed"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>© 2025 Logical CRM Inc.</span>
              <span>All rights reserved</span>
            </div>

            <div className="flex items-center gap-1">
              {[
                {
                  name: "Facebook",
                  icon: "M17 2.5h-2.5A4.5 4.5 0 0 0 10 7v2H7v3h3v7h3v-7h2.5l.5-3H13V7a1.5 1.5 0 0 1 1.5-1.5H17V2.5Z",
                },
                { name: "Twitter", icon: "M7 7l10 10M7 17L17 7" },
                {
                  name: "LinkedIn",
                  icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
                },
                {
                  name: "Instagram",
                  icon: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 1.6c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.2-2.1.3-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.1.4-.2 1-.3 2.1 0 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.2 1.7.3 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.1 1 .2 2.1.3 1.2 0 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.2 2.1-.3.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.1-.4.2-1 .3-2.1 0-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.2-1.7-.3-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.1-1-.2-2.1-.3-1.2 0-1.6-.1-4.7-.1z M12 6.9a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm0 1.6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm6.8-2.3a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z",
                },
                {
                  name: "YouTube",
                  icon: "M23 6.5c-.3-1.2-1.2-2.1-2.4-2.4C18.4 3.6 12 3.6 12 3.6s-6.4 0-8.6.5C2.2 4.4 1.3 5.3 1 6.5 0.5 8.7 0.5 13 0.5 13s0 4.3.5 6.5c.3 1.2 1.2 2.1 2.4 2.4 2.2.5 8.6.5 8.6.5s6.4 0 8.6-.5c1.2-.3 2.1-1.2 2.4-2.4.5-2.2.5-6.5.5-6.5s0-4.3-.5-6.5zM10 16.5V9.5l5.5 3.5-5.5 3.5z",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={social.icon}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
