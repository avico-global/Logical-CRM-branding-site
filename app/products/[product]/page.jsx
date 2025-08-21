import React from "react";
import { notFound } from "next/navigation";
import {
  getProductData,
  getProductMetadata,
  getAllProductIds,
} from "@/data/productDetailsData";
import ProductHero from "@/components/product/ProductHero";
import KeyFeatures from "@/components/KeyFeatures";
import ProductTour from "@/components/ProductTour";
import ChooseUs from "@/components/ChooseUs";
import Testimonials from "@/components/testimonials";
import PricingSnapshot from "@/components/PricingSnapshot";
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

      {/* Trust Indicators */}
      <div className="max-w-7xl w-full mx-auto mt-20 pb-20">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg font-semibold tracking-wider">
            TRUSTED BY 5,000+ ORGANIZATIONS
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

      {/* Product Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Key Features of {metadata.breadcrumb}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful capabilities designed to streamline your workflow and
              boost productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Feature Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
                  {feature.icon}
                </div>

                {/* Feature Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Benefits:</h4>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
            {metadata.breadcrumb} by the Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
              <div className="text-4xl font-black text-blue-600 mb-2">
                {productData.stats.customers}
              </div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
              <div className="text-4xl font-black text-green-600 mb-2">
                {productData.stats.efficiency}
              </div>
              <div className="text-gray-600 font-medium">
                Efficiency Increase
              </div>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
              <div className="text-4xl font-black text-purple-600 mb-2">
                {productData.stats.revenue}
              </div>
              <div className="text-gray-600 font-medium">Revenue Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Same as home page */}
      <div className="max-w-7xl w-full mx-auto mt-20 pb-20">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg font-semibold tracking-wider">
            TRUSTED BY 5,000+ FIELD SERVICE PROFESSIONALS
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
