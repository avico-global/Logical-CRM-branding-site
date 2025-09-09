import React from "react";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";
import {
  productsData,
  productCaseStudies,
  productsMetadata,
} from "@/data/productsData";

export const metadata = {
  title: productsMetadata.title,
  description: productsMetadata.description,
  keywords: productsMetadata.keywords,
  openGraph: {
    title: productsMetadata.title,
    description: productsMetadata.description,
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50/50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#FFB700]/20 to-orange-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#FFB700]/15 to-yellow-200/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#FFB700]/10 to-amber-200/10 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
            <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
              ALL PRODUCTS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#293146] mb-6 leading-tight">
            Complete Field Service
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB700] to-orange-500">
              Management Suite
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Everything your field service business needs in one powerful
            platform. From scheduling to payments, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#FFB700] hover:bg-[#e6a600] text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-[#FFB700]/30 hover:text-[#FFB700] transition-all duration-300 shadow-lg">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
              <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
                PRODUCT SUITE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#293146] mb-4">
              Our Product Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools designed to streamline every aspect of your field
              service business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-[#FFB700]/10 hover:scale-[1.02] hover:border-[#FFB700]/30 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] block"
              >
                {/* Product Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 ${product.bgColor} rounded-2xl flex items-center justify-center ${product.textColor} group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#293146] group-hover:text-[#FFB700] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Product Image */}
                <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Key Benefits */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-[#293146] group-hover:text-[#FFB700] transition-colors duration-300">
                    Key Benefits:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.keyBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFB700] group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
              <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
                SUCCESS STORIES
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#293146] mb-4">
              Success Stories by Product
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses using our products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCaseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-[#FFB700]/10 hover:scale-[1.02] hover:border-[#FFB700]/30 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                <div className="relative h-48 mb-6 rounded-2xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-bold text-lg">{study.company}</div>
                    <div className="text-sm opacity-90">{study.product}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FFB700] to-orange-500 mb-2">
                    {study.result}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{study.quote}"</p>
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold">{study.name}</div>
                    <div>{study.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
              <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
                WHY CHOOSE US
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#293146] mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for field service businesses with features that
              matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Built for speed and efficiency",
              },
              {
                icon: "🔒",
                title: "Secure & Reliable",
                description: "Bank-level security and 99.9% uptime",
              },
              {
                icon: "📱",
                title: "Mobile First",
                description: "Works perfectly on any device",
              },
              {
                icon: "🤝",
                title: "24/7 Support",
                description: "Expert help whenever you need it",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FFB700] to-orange-500 rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#293146] mb-2 group-hover:text-[#FFB700] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
        {/* Background Elements */}

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Transform Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB700] to-orange-400">
              Field Service Business?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get access to all our products with a single subscription. Start
            your free trial today – no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-[#FFB700] hover:bg-[#e6a600] text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-[#FFB700]/40 hover:text-[#FFB700] transition-all duration-300">
              Schedule Demo
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-[#FFB700]"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-[#FFB700]"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-[#FFB700]"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              All products included
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-[#FFB700]"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              24/7 support
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
