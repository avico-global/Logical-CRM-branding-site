import React from "react";
import FooterSection from "@/components/FooterSection";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";

export const metadata = {
  title: "About Us - Logical CRM | Field Service Management Company",
  description:
    "Find out all about what we do and why we love the field service industry. Learn about our mission, team, and commitment to helping field service businesses succeed.",
  keywords:
    "about logical crm, field service company, crm company, about us, field service management",
  openGraph: {
    title: "About Us - Logical CRM | Field Service Management Company",
    description:
      "Find out all about what we do and why we love the field service industry. Learn about our mission, team, and commitment to helping field service businesses succeed.",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <AboutHero />
      <AboutContent />
      <FooterSection />
    </div>
  );
}
