import React from "react";
import Link from "next/link";

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
    id: "electricians",
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
    id: "garage-door-repair",
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

export default function IndustriesGrid() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white border border-[#FFB700] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FFB700] mr-2 animate-pulse" />
            <span className="text-[#FFB700] text-sm font-semibold tracking-wide">
              INDUSTRIES WE SERVE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#293146] mb-4">
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
              className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-[#FFB700]/10 hover:scale-[1.02] hover:border-[#FFB700]/30 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] block"
            >
              {/* Industry Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 ${industry.bgColor} rounded-2xl flex items-center justify-center ${industry.textColor} group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  {industry.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#293146] group-hover:text-[#FFB700] transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-[#293146] group-hover:text-[#FFB700] transition-colors duration-300">
                  Key Benefits:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {industry.keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB700] group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#FFB700]">
                    {industry.stats.customers}
                  </div>
                  <div className="text-xs text-gray-500">Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#FFB700]">
                    {industry.stats.efficiency}
                  </div>
                  <div className="text-xs text-gray-500">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#FFB700]">
                    {industry.stats.revenue}
                  </div>
                  <div className="text-xs text-gray-500">Revenue</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
