import React from "react";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title:
    "Industries - Logical CRM | Field Service Management for Every Business",
  description:
    "Discover how Logical CRM transforms field service operations across HVAC, plumbing, electrical, and 20+ other industries. Start your free trial today.",
};

// Industry data with comprehensive details
const industries = [
  {
    id: "hvac",
    name: "HVAC",
    description: "Heating, ventilation, and air conditioning services",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    image: "/images/hvac1.webp",
    keyBenefits: [
      "Smart scheduling",
      "Temperature monitoring",
      "Seasonal planning",
      "Emergency dispatch",
    ],
    stats: { customers: "2,500+", efficiency: "+45%", revenue: "+30%" },
    colorScheme: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: "plumbing",
    name: "Plumbing",
    description: "Residential and commercial plumbing services",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 11H7l5-8 5 8h-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 21l5-8 5 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    image: "/images/plumbing-jobs.png",
    keyBenefits: [
      "Emergency response",
      "Parts tracking",
      "Water damage alerts",
      "Permit management",
    ],
    stats: { customers: "1,800+", efficiency: "+50%", revenue: "+35%" },
    colorScheme: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    id: "electrical",
    name: "Electrical",
    description: "Electrical installation, repair, and maintenance",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 2L3 14h7v8l10-12h-7z" fill="currentColor" />
      </svg>
    ),
    image: "/images/electric-field.webp",
    keyBenefits: [
      "Safety compliance",
      "Code tracking",
      "Inspection scheduling",
      "Material management",
    ],
    stats: { customers: "1,200+", efficiency: "+40%", revenue: "+28%" },
    colorScheme: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
  },
  {
    id: "garage-door",
    name: "Garage Door",
    description: "Garage door installation, repair, and maintenance",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="8"
          width="18"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    image: "/images/garage-door.jpg",
    keyBenefits: [
      "Spring replacement tracking",
      "Remote diagnostics",
      "Warranty management",
      "Opener programming",
    ],
    stats: { customers: "800+", efficiency: "+38%", revenue: "+25%" },
    colorScheme: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    id: "locksmith",
    name: "Locksmith",
    description: "Lock installation, repair, and security services",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="11"
          width="18"
          height="11"
          rx="2"
          ry="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
        <path
          d="M7 11V7a5 5 0 0 1 10 0v4"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    image: "/images/revolute.webp",
    keyBenefits: [
      "Emergency lockouts",
      "Key tracking",
      "Security assessments",
      "Access control",
    ],
    stats: { customers: "600+", efficiency: "+42%", revenue: "+32%" },
    colorScheme: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    id: "junk-removal",
    name: "Junk Removal",
    description: "Residential and commercial junk removal services",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 6h18l-2 13H5L3 6z" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    image: "/images/junk-doctors.jpg",
    keyBenefits: [
      "Volume estimation",
      "Disposal tracking",
      "Environmental compliance",
      "Truck optimization",
    ],
    stats: { customers: "900+", efficiency: "+48%", revenue: "+40%" },
    colorScheme: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    id: "landscaping",
    name: "Landscaping",
    description: "Landscape design, installation, and maintenance",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 12h20l-10-10z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    image: "/images/asset.webp",
    keyBenefits: [
      "Seasonal scheduling",
      "Weather tracking",
      "Plant care reminders",
      "Equipment management",
    ],
    stats: { customers: "1,100+", efficiency: "+35%", revenue: "+22%" },
    colorScheme: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    id: "roofing",
    name: "Roofing",
    description: "Roof installation, repair, and maintenance services",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 21h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 21V7l8-4v18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 21V11l-6-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    image: "/images/software1.webp",
    keyBenefits: [
      "Weather monitoring",
      "Material estimation",
      "Safety protocols",
      "Insurance claims",
    ],
    stats: { customers: "700+", efficiency: "+44%", revenue: "+38%" },
    colorScheme: "from-slate-500 to-gray-600",
    bgColor: "bg-slate-50",
    textColor: "text-slate-600",
  },
  {
    id: "cleaning",
    name: "Cleaning Services",
    description: "Residential and commercial cleaning services",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    image: "/images/clients-engaged.webp",
    keyBenefits: [
      "Recurring schedules",
      "Supply tracking",
      "Quality checklists",
      "Client preferences",
    ],
    stats: { customers: "1,400+", efficiency: "+52%", revenue: "+28%" },
    colorScheme: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    textColor: "text-teal-600",
  },
];

// Featured case studies
const caseStudies = [
  {
    company: "Everett Air Conditioning",
    industry: "HVAC",
    result: "60% revenue increase in 8 months",
    image: "/images/hvac1.webp",
    quote: "Logical CRM transformed our HVAC business completely.",
    name: "Brian Orchard",
    title: "Owner",
  },
  {
    company: "Junk Doctors",
    industry: "Junk Removal",
    result: "32% more jobs booked",
    image: "/images/junk-doctors.jpg",
    quote: "The automated follow-ups are game-changing.",
    name: "Jennifer Walsh",
    title: "Operations Director",
  },
  {
    company: "Evergreen Plumbing",
    industry: "Plumbing",
    result: "10x faster dispatching",
    image: "/images/plumbing-jobs.png",
    quote: "Dispatching is 10x faster and payments happen the same day.",
    name: "Robert Kim",
    title: "Owner",
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse" />
            <span className="text-blue-700 text-sm font-semibold tracking-wide">
              ALL INDUSTRIES
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-6 leading-tight">
            Field Service Management
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              For Every Industry
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Trusted by 5,000+ businesses across 20+ industries. Discover how
            Logical CRM transforms field service operations in your industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 font-bold rounded-2xl hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-lg">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for field service businesses across every
              industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries/${industry.id}`}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 no-underline"
              >
                {/* Industry Header */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 ${industry.bgColor} rounded-2xl flex items-center justify-center ${industry.textColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              More Industries We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover all the specialized field service industries we serve
            </p>
          </div>

          {/* Additional Services Grid */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {[
                "Air Duct Cleaning",
                "Alarm And Security",
                "Chimney Sweep",
                "Computer Repair",
                "Construction",
                "Handyman",
                "Window Cleaning",
                "Landscaping",
                "Lawn Care",
                "Maid & Cleaning",
                "Moving",
                "Pest Control",
                "Pool Services",
                "Snow Removal",
                "Property Maintenance",
                "Restoration",
                "Roofing",
                "Pressure Washing",
              ].map((service) => (
                <a
                  key={service}
                  href={`/industry/${service
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-center hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                    {service}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Success Stories Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses in your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-bold text-lg">{study.company}</div>
                    <div className="text-sm opacity-90">{study.industry}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Transform Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Field Service Business?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of field service businesses already growing with
            Logical CRM. Start your free trial today – no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-200">
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
                className="text-emerald-400"
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
                className="text-emerald-400"
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
                className="text-emerald-400"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Setup in minutes
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-emerald-400"
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
