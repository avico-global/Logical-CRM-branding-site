import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ChooseUs from "@/components/ChooseUs";
import Service from "@/components/Service";
import Business from "@/components/Business";
import TestimonialVideos from "@/components/TestimonialVideos";
import Integrations from "@/components/Integrations";
import WhatsNew from "@/components/WhatsNew";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ChooseUs />
      <Service />
      <Business />
      <TestimonialVideos />
      <Integrations />
      <WhatsNew />
      <FaqSection />
      <FooterSection />
    </>
  );
}
