import React from "react";
import FooterSection from "@/components/FooterSection";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us - Logical CRM | Get in Touch with Our Team",
  description:
    "Talk to us! We are real people who would love to help in any way we can. Get in touch with our expert team for support, sales, or partnerships.",
  keywords:
    "contact logical crm, customer support, sales team, get help, field service support",
  openGraph: {
    title: "Contact Us - Logical CRM | Get in Touch with Our Team",
    description:
      "Talk to us! We are real people who would love to help in any way we can. Get in touch with our expert team for support, sales, or partnerships.",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-yellow-50/20">
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-yellow-200/20 to-amber-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
            <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
              CONTACT US
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#293146] leading-tight ">
            We’d love to hear from you
          </h1>
          <p className="text-lg text-gray-600">
            Send us a message and our team will get back to you shortly.
          </p>
        </div>
      </section>
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
