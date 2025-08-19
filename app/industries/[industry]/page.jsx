import React from "react";
import { notFound } from "next/navigation";
import {
  getIndustryData,
  getIndustryMetadata,
  getAllIndustryIds,
} from "@/data/industryData";
import IndustryHero from "@/components/industry/IndustryHero";
import KeyFeatures from "@/components/KeyFeatures";
import ProductTour from "@/components/ProductTour";
import ChooseUs from "@/components/ChooseUs";
import Testimonials from "@/components/testimonials";
import PricingSnapshot from "@/components/PricingSnapshot";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import FooterSection from "@/components/FooterSection";

// Generate static params for all industry pages
export async function generateStaticParams() {
  const industryIds = getAllIndustryIds();

  return industryIds.map((industry) => ({
    industry: industry,
  }));
}

export async function generateMetadata({ params }) {
  const { industry } = params;
  const metadata = getIndustryMetadata(industry);

  if (!metadata) {
    return {
      title: "Industry Not Found",
      description: "The requested industry page could not be found.",
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "website",
    },
  };
}

export default function IndustryPage({ params }) {
  const { industry } = params;
  const industryData = getIndustryData(industry);
  const metadata = getIndustryMetadata(industry);

  // If industry data doesn't exist, show 404
  if (!industryData || !metadata) {
    notFound();
  }

  return (
    <>
      {/* Industry-specific Hero */}
      <IndustryHero data={industryData} />

      {/* Trust Indicators - Same as home page */}
      <div className="max-w-7xl w-full mx-auto mt-20 pb-20">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg font-semibold tracking-wider">
            TRUSTED BY 5,000+ {metadata.breadcrumb.toUpperCase()} PROFESSIONALS
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].slice(0, 8).map((num) => (
            <img
              key={num}
              src={`/images/logo-${num}.svg`}
              alt={`Company ${num}`}
              className="h-8 w-auto invert hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* Rest of sections - Same as home page */}
      <KeyFeatures />
      <ProductTour />
      <ChooseUs />
      <Testimonials />
      <PricingSnapshot />
      <FaqSection />
      <FinalCta />
      <FooterSection />
    </>
  );
}
