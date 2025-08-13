import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import ProductTour from "@/components/ProductTour";
import ChooseUs from "@/components/ChooseUs";
import Testimonials from "@/components/testimonials";
import Integrations from "@/components/Integrations";
import PricingSnapshot from "@/components/PricingSnapshot";
import SecurityStrip from "@/components/SecurityStrip";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Hero />
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
      <KeyFeatures />
      <ProductTour />
      {/* Killer Feature deep dive using ChooseUs block */}
      <ChooseUs />
      <Testimonials />
      {/* <Integrations /> */}
      {/* <SecurityStrip /> */}
      <PricingSnapshot />
      <FaqSection />
      <FinalCta />
      <FooterSection />
    </>
  );
}
