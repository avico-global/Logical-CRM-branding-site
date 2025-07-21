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
      "Workiz comparison",
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
    <>
      <footer className="w-full bg-[#23282b] text-white pt-12 pb-6 px-4 text-base">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerLinks.map((col, idx) => (
            <div key={col.heading} className="flex flex-col">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{col.heading}</h3>
              <ul className="space-y-2 mb-6">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-base text-[#e5e7eb] hover:underline" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{link}</a>
                  </li>
                ))}
              </ul>
              {col.contact && (
                <>
                  <hr className="border-[#3a3f43] my-3" />
                  <div className="text-[#e5e7eb] text-sm mb-2">Contact us</div>
                  <div className="flex items-center gap-2 text-[#b0b7bc] text-sm mb-1">
                    {/* Phone icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#b0b7bc" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .56 2.57 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.12 6.12l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.57.56A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>{col.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#b0b7bc] text-sm mt-2">
                    {/* Location icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#b0b7bc" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                    </svg>
                    <span>{col.contact.address[0]}<br />{col.contact.address[1]}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </footer>
      <div className="w-full flex flex-col bg-[#23282b]">
        {/* Top row: App badges and social icons */}
        <div className="flex flex-row items-center justify-between max-w-7xl mx-auto w-full px-4 pt-4">
          <div className="flex gap-4">
            <img src="/images/appstore-badge.svg" alt="App Store" className="h-12 w-auto" />
            <img src="/images/playstore-badge.svg" alt="Google Play" className="h-12 w-auto" />
          </div>
          <div className="flex gap-6 text-[#b0b7bc] text-2xl">
            {/* Facebook */}
            <a href="#" aria-label="Facebook"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M17 2.5h-2.5A4.5 4.5 0 0 0 10 7v2H7v3h3v7h3v-7h2.5l.5-3H13V7a1.5 1.5 0 0 1 1.5-1.5H17V2.5Z" stroke="#b0b7bc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            {/* X (Twitter) */}
            <a href="#" aria-label="X"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M7 7l10 10M7 17L17 7" stroke="#b0b7bc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#b0b7bc" strokeWidth="1.5"/><path d="M7 10v4M7 7v.01M12 14v-2a2 2 0 1 1 4 0v2" stroke="#b0b7bc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#b0b7bc" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="#b0b7bc" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="#b0b7bc"/></svg></a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#b0b7bc" strokeWidth="1.5"/><path d="M10 9.5v5l4-2.5-4-2.5Z" fill="#b0b7bc"/></svg></a>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-[#3a3f43] my-4 w-full" />
        {/* Bottom row: Copyright and Workiz logo */}
        <div className="flex flex-row items-center justify-between max-w-7xl mx-auto w-full px-4 pb-4">
          <div className="text-[#b0b7bc] text-lg">©2025 Workiz Inc.</div>
          <img src="/new-crm.png" alt="Workiz Logo" className="h-12 w-auto" />
        </div>
      </div>
    </>
  );
} 