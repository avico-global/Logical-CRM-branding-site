import React from "react";
import { notFound } from "next/navigation";
import {
  getProductData,
  getProductMetadata,
  getAllProductIds,
} from "@/data/productDetailsData";
import ProductHero from "@/components/product/ProductHero";
import KeyFeatures from "@/components/KeyFeatures";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductTour from "@/components/ProductTour";
import ChooseUs from "@/components/ChooseUs";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import FooterSection from "@/components/FooterSection";

// Generate static params for all product pages
export async function generateStaticParams() {
  const productIds = getAllProductIds();

  return productIds.map((product) => ({
    product: product,
  }));
}

export async function generateMetadata({ params }) {
  const { product } = params;
  const metadata = getProductMetadata(product);

  if (!metadata) {
    return {
      title: "Product Not Found",
      description: "The requested product page could not be found.",
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

export default function ProductPage({ params }) {
  const { product } = params;
  const productData = getProductData(product);
  const metadata = getProductMetadata(product);

  // If product data doesn't exist, show 404
  if (!productData || !metadata) {
    notFound();
  }

  return (
    <>
      {/* Product-specific Hero */}
      <ProductHero data={productData} />

      <ProductFeatures
        title={`Key Features of ${metadata.breadcrumb}`}
        features={productData.features}
      />

      {/* Rest of sections - Same as home page */}
      <KeyFeatures />
      <ProductTour />
      <ChooseUs />
      <FaqSection />
      <FinalCta />
      <FooterSection />
    </>
  );
}
