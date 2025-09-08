import Hero from "@/components/Hero";
import KeyFeatures from "@/components/KeyFeatures";
import ProductTour from "@/components/ProductTour";
import ChooseUs from "@/components/ChooseUs";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <ProductTour />
      <ChooseUs />
      <FaqSection />
      <FinalCta />
      <FooterSection />
    </>
  );
}
