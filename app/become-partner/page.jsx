import React from "react";
import FooterSection from "@/components/FooterSection";
import PartnerHero from "@/components/partner/PartnerHero";
import PartnerContent from "@/components/partner/PartnerContent";

export const metadata = {
  title: "Become a Partner - Logical CRM | Join Our Affiliate Program",
  description:
    "Do you have a field service network? Join our affiliate program and get paid. Earn commissions by referring field service businesses to Logical CRM.",
  keywords:
    "partner program, affiliate program, field service partners, reseller program, commission",
  openGraph: {
    title: "Become a Partner - Logical CRM | Join Our Affiliate Program",
    description:
      "Do you have a field service network? Join our affiliate program and get paid. Earn commissions by referring field service businesses to Logical CRM.",
    type: "website",
  },
};

export default function BecomePartnerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/20">
      <PartnerHero />
      <PartnerContent />
      <FooterSection />
    </div>
  );
}
