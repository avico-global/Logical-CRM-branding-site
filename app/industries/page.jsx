import React from "react";
import FooterSection from "@/components/FooterSection";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustriesGrid from "@/components/industry/IndustriesGrid";

export const metadata = {
  title:
    "Industries - Logical CRM | Field Service Management for Every Business",
  description:
    "Discover how Logical CRM transforms field service operations across HVAC, plumbing, electrical, and 20+ other industries. Start your free trial today.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50/50 to-white">
      <IndustryHero />
      <IndustriesGrid />
      <FooterSection />
    </div>
  );
}
