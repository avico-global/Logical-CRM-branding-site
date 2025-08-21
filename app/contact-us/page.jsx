import React from "react";
import FooterSection from "@/components/FooterSection";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - Logical CRM | Get in Touch with Our Team",
  description: "Talk to us! We are real people who would love to help in any way we can. Get in touch with our expert team for support, sales, or partnerships.",
  keywords: "contact logical crm, customer support, sales team, get help, field service support",
  openGraph: {
    title: "Contact Us - Logical CRM | Get in Touch with Our Team",
    description: "Talk to us! We are real people who would love to help in any way we can. Get in touch with our expert team for support, sales, or partnerships.",
    type: "website",
  },
};

const contactMethods = [
  {
    icon: "💬",
    title: "Live Chat",
    description: "Get instant help from our support team",
    action: "Start Chat",
    available: "24/7 Available",
    color: "from-blue-600 to-cyan-600",
    details: "Average response time: 30 seconds"
  },
  {
    icon: "📞",
    title: "Phone Support",
    description: "Speak directly with our experts",
    action: "Call Now: 1-800-LOGICAL",
    available: "Mon-Fri 8AM-6PM EST",
    color: "from-green-600 to-emerald-600",
    details: "For urgent technical issues"
  },
  {
    icon: "📧",
    title: "Email Support",
    description: "Send us your questions anytime",
    action: "support@logicalcrm.com",
    available: "Response within 2 hours",
    color: "from-purple-600 to-pink-600",
    details: "For detailed technical questions"
  },
  {
    icon: "🎥",
    title: "Schedule a Demo",
    description: "See Logical CRM in action",
    action: "Book Demo",
    available: "Available all week",
    color: "from-orange-600 to-red-600",
    details: "15-30 minute personalized demo"
  }
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Market Street, Suite 456",
    zipcode: "San Francisco, CA 94105",
    phone: "+1 (415) 555-0123",
    email: "sf@logicalcrm.com",
    hours: "Mon-Fri 9AM-6PM PST",
    image: "/images/electric-field.webp"
  },
  {
    city: "Austin",
    address: "789 Congress Avenue, Floor 12",
    zipcode: "Austin, TX 78701",
    phone: "+1 (512) 555-0456",
    email: "austin@logicalcrm.com",
    hours: "Mon-Fri 9AM-6PM CST",
    image: "/images/plumbing-bussiness.webp"
  },
  {
    city: "Remote Support",
    address: "Available worldwide",
    zipcode: "Global coverage",
    phone: "+1 (800) 555-HELP",
    email: "support@logicalcrm.com",
    hours: "24/7 Support",
    image: "/images/communications.webp"
  }
];

export default function ContactUsPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-600 mr-2 animate-pulse" />
            <span className="text-green-700 text-sm font-semibold tracking-wide">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 mb-6 leading-tight">
            Talk to Real People
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Who Want to Help
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            We are real people who would love to help in any way we can. Whether you need support, want to see a demo, or have questions about our services, we're here for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Live Chat
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Choose How You'd Like to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to get the help you need, when you need it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="text-sm text-green-600 font-semibold mb-2">{method.available}</div>
                <div className="text-xs text-gray-500 mb-6">{method.details}</div>
                <button className={`w-full px-6 py-3 bg-gradient-to-r ${method.color} text-white font-semibold rounded-xl hover:opacity-90 group-hover:scale-105 transition-all duration-200`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 2 hours
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find us around the world or connect with our remote support team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{office.city}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-green-600">📍</span>
                      <div>
                        <div className="font-semibold text-gray-900">{office.address}</div>
                        <div className="text-gray-600">{office.zipcode}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-green-600">📞</span>
                      <a href={`tel:${office.phone}`} className="text-gray-900 hover:text-green-600 transition-colors">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-green-600">📧</span>
                      <a href={`mailto:${office.email}`} className="text-gray-900 hover:text-green-600 transition-colors">
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-green-600">🕒</span>
                      <span className="text-gray-600">{office.hours}</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 px-6 py-3 bg-green-100 text-green-700 font-semibold rounded-xl hover:bg-green-200 transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about contacting us
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's the best way to get immediate help?",
                answer: "For immediate assistance, use our live chat feature available 24/7. Our support team typically responds within 30 seconds."
              },
              {
                question: "How quickly do you respond to emails?",
                answer: "We respond to all emails within 2 hours during business hours (Mon-Fri 8AM-6PM EST) and within 4 hours on weekends."
              },
              {
                question: "Can I schedule a call with your team?",
                answer: "Absolutely! You can schedule a call through our calendar booking system or request a callback through live chat or email."
              },
              {
                question: "Do you offer phone support?",
                answer: "Yes, we offer phone support during business hours (Mon-Fri 8AM-6PM EST) at 1-800-LOGICAL. For urgent technical issues, we also have an emergency line."
              },
              {
                question: "Is there a cost for support?",
                answer: "All support is included with your subscription at no additional cost. We believe in helping our customers succeed without hidden fees."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Get
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Started Today?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Don't wait! Our team is standing by to help you transform your field service business. Get in touch now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200">
              Talk to Sales
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Real people, real help
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No sales pressure
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Expert guidance
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              24/7 availability
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
