import React from "react";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Become a Partner - Logical CRM | Join Our Affiliate Program",
  description: "Do you have a field service network? Join our affiliate program and get paid. Earn commissions by referring field service businesses to Logical CRM.",
  keywords: "partner program, affiliate program, field service partners, reseller program, commission",
  openGraph: {
    title: "Become a Partner - Logical CRM | Join Our Affiliate Program",
    description: "Do you have a field service network? Join our affiliate program and get paid. Earn commissions by referring field service businesses to Logical CRM.",
    type: "website",
  },
};

const partnerTypes = [
  {
    icon: "🤝",
    title: "Referral Partners",
    description: "Earn commissions by referring field service businesses to Logical CRM",
    commission: "20%",
    requirements: [
      "No minimum requirements",
      "Easy referral tracking",
      "Monthly commission payouts",
      "Marketing materials provided"
    ],
    benefits: [
      "Recurring revenue share",
      "Dedicated partner support",
      "Co-marketing opportunities",
      "Early access to new features"
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    icon: "🏢",
    title: "Reseller Partners",
    description: "Sell Logical CRM as part of your service offerings to field service businesses",
    commission: "30%",
    requirements: [
      "Established business in field service",
      "Sales team or sales capability",
      "Minimum 5 referrals per quarter",
      "Complete partner training"
    ],
    benefits: [
      "Higher commission rates",
      "White-label options",
      "Dedicated account manager",
      "Custom pricing flexibility"
    ],
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600"
  },
  {
    icon: "🔧",
    title: "Technology Partners",
    description: "Integrate your software with Logical CRM to provide enhanced value",
    commission: "Revenue Share",
    requirements: [
      "Complementary software solution",
      "API integration capability",
      "Joint go-to-market strategy",
      "Technical documentation"
    ],
    benefits: [
      "Joint marketing initiatives",
      "Technical support",
      "Revenue sharing model",
      "Co-branded solutions"
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600"
  }
];

const partnerBenefits = [
  {
    icon: "💰",
    title: "Lucrative Commissions",
    description: "Earn up to 30% recurring commission on all referred customers for the lifetime of their subscription."
  },
  {
    icon: "📈",
    title: "Growing Market",
    description: "Field service management is a rapidly growing $5B+ market with increasing demand for digital solutions."
  },
  {
    icon: "🎯",
    title: "Easy to Sell",
    description: "Logical CRM sells itself with proven ROI, easy implementation, and outstanding customer satisfaction."
  },
  {
    icon: "🛡️",
    title: "Trusted Brand",
    description: "Partner with an industry leader trusted by 5,000+ field service businesses worldwide."
  },
  {
    icon: "📚",
    title: "Marketing Support",
    description: "Get access to marketing materials, case studies, and co-marketing opportunities."
  },
  {
    icon: "🎓",
    title: "Training & Certification",
    description: "Comprehensive training programs to help you become a Logical CRM expert and close more deals."
  }
];

const successStories = [
  {
    partnerName: "ServicePro Consulting",
    partnerType: "Reseller Partner",
    result: "$50K+ monthly recurring revenue",
    quote: "Partnering with Logical CRM has transformed our business. We've been able to offer our clients a complete solution.",
    image: "/images/electric-bussiness.webp",
    partnerSince: "2022"
  },
  {
    partnerName: "TechFlow Solutions",
    partnerType: "Technology Partner",
    result: "30% increase in customer retention",
    quote: "The integration with Logical CRM has made our software much more valuable to field service companies.",
    image: "/images/communications.webp",
    partnerSince: "2021"
  },
  {
    partnerName: "FieldForce Network",
    partnerType: "Referral Partner",
    result: "200+ successful referrals",
    quote: "The referral program is straightforward and the commissions are paid on time every month.",
    image: "/images/plumbing-bussiness.webp",
    partnerSince: "2020"
  }
];

const applicationSteps = [
  {
    step: "1",
    title: "Apply Online",
    description: "Fill out our partner application form with your business details and goals."
  },
  {
    step: "2",
    title: "Review & Approval",
    description: "Our partner team reviews your application and schedules a discovery call."
  },
  {
    step: "3",
    title: "Onboarding",
    description: "Complete partner training and get access to marketing materials and tools."
  },
  {
    step: "4",
    title: "Start Earning",
    description: "Begin referring customers and earning commissions from day one."
  }
];

export default function BecomePartnerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-purple-500/10 border border-purple-500/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-purple-600 mr-2 animate-pulse" />
                <span className="text-purple-700 text-sm font-semibold tracking-wide">
                  PARTNER PROGRAM
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-800 mb-6 leading-tight">
                Grow Your Business
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  With Logical CRM
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Do you have a field service network? Join our affiliate program and get paid. Earn recurring commissions by referring field service businesses to the industry's leading CRM platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Apply Now
                </button>
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-black text-purple-600">30%</div>
                  <div className="text-sm text-gray-600">Max Commission</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-indigo-600">500+</div>
                  <div className="text-sm text-gray-600">Active Partners</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-600">$2M+</div>
                  <div className="text-sm text-gray-600">Paid Out</div>
                </div>
              </div>
            </div>

            {/* Right Content - Benefits Preview */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Partner Benefits</h3>
                <div className="space-y-4">
                  {[
                    "Recurring commission up to 30%",
                    "Lifetime customer value sharing",
                    "Marketing materials provided",
                    "Dedicated partner support",
                    "Monthly commission payouts"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Choose Your Partnership Level
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different partnership options to match your business model and goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${type.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{type.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                      <div className={`text-sm font-semibold ${type.textColor}`}>
                        Up to {type.commission} Commission
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <div className="space-y-2">
                      {type.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                          <span className="text-sm text-gray-600">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${type.textColor.replace('text-', 'bg-')}`} />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${type.color} text-white font-semibold rounded-xl hover:opacity-90 transition-opacity`}>
                    Apply for {type.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Why Partner With Logical CRM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of successful partners who are building recurring revenue with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Partner Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our partner network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.partnerName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-bold text-lg">{story.partnerName}</div>
                    <div className="text-sm opacity-90">{story.partnerType}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-semibold rounded-full">
                      Since {story.partnerSince}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-3">
                    {story.result}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              How to Become a Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to join our partner program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-2xl font-black text-white mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Application
            </button>
          </div>
        </div>
      </section>

      {/* Partner Resources */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Partner Resources & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed as a Logical CRM partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📚",
                title: "Training Materials",
                description: "Comprehensive training videos, guides, and certification programs"
              },
              {
                icon: "🎨",
                title: "Marketing Assets",
                description: "Logos, brochures, case studies, and co-branded marketing materials"
              },
              {
                icon: "📊",
                title: "Sales Tools",
                description: "CRM access, lead tracking, commission dashboards, and reporting"
              },
              {
                icon: "🎧",
                title: "Dedicated Support",
                description: "Dedicated partner success manager and priority technical support"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Start
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Earning Commissions?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join our partner program today and start building recurring revenue by referring field service businesses to Logical CRM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Apply Now
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200">
              Download Partner Kit
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No upfront costs
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Recurring commissions
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Full marketing support
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Dedicated partner manager
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <FooterSection />
    </div>
  );
}
