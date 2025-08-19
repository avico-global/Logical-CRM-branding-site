// Product data for the products overview page

export const productsData = [
  {
    id: "client-crm",
    name: "Client CRM",
    description: "Comprehensive customer relationship management",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    image: "/images/client-crm.webp",
    keyBenefits: [
      "Customer history tracking",
      "Contact management",
      "Follow-up automation",
      "Lead scoring",
    ],
    stats: { customers: "3,000+", efficiency: "+50%", revenue: "+35%" },
    colorScheme: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    id: "scheduling",
    name: "Scheduling",
    description: "Smart job scheduling and calendar management",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    image: "/images/scheduling.png",
    keyBenefits: [
      "Drag & drop scheduling",
      "Auto-dispatching",
      "Route optimization",
      "Recurring appointments",
    ],
    stats: { customers: "4,500+", efficiency: "+60%", revenue: "+40%" },
    colorScheme: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    id: "dispatching",
    name: "Dispatching",
    description: "Real-time technician dispatch and tracking",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    image: "/images/communications.webp",
    keyBenefits: [
      "GPS tracking",
      "Instant notifications",
      "Smart routing",
      "Team coordination",
    ],
    stats: { customers: "2,800+", efficiency: "+45%", revenue: "+30%" },
    colorScheme: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    id: "invoicing",
    name: "Invoicing",
    description: "Professional invoicing and payment processing",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    image: "/images/money.png",
    keyBenefits: [
      "Digital invoicing",
      "Payment processing",
      "Recurring billing",
      "Financial reporting",
    ],
    stats: { customers: "3,200+", efficiency: "+55%", revenue: "+45%" },
    colorScheme: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
  },
  {
    id: "estimates-proposals",
    name: "Estimates & Proposals",
    description: "Professional estimates and sales proposals",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    image: "/images/illustration.webp",
    keyBenefits: [
      "Professional templates",
      "Digital signatures",
      "Photo integration",
      "Quick approval",
    ],
    stats: { customers: "2,600+", efficiency: "+40%", revenue: "+50%" },
    colorScheme: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    description: "Field crew mobile application",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    image: "/images/online.webp",
    keyBenefits: [
      "Offline capability",
      "Photo capture",
      "Digital forms",
      "Real-time sync",
    ],
    stats: { customers: "4,000+", efficiency: "+65%", revenue: "+35%" },
    colorScheme: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  },
  {
    id: "inventory",
    name: "Inventory Management",
    description: "Track parts, materials, and equipment",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    image: "/images/inventory.webp",
    keyBenefits: [
      "Stock tracking",
      "Auto-reorder alerts",
      "Cost management",
      "Vendor integration",
    ],
    stats: { customers: "2,400+", efficiency: "+35%", revenue: "+25%" },
    colorScheme: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    textColor: "text-teal-600",
  },
  {
    id: "reporting",
    name: "Business Reporting",
    description: "Analytics and business intelligence",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    image: "/images/client-plans.png",
    keyBenefits: [
      "Revenue analytics",
      "Performance metrics",
      "Custom dashboards",
      "Data insights",
    ],
    stats: { customers: "3,500+", efficiency: "+30%", revenue: "+20%" },
    colorScheme: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    textColor: "text-pink-600",
  },
];

// Featured case studies for products
export const productCaseStudies = [
  {
    company: "ProTech Services",
    product: "Scheduling",
    result: "70% faster job scheduling",
    image: "/images/scheduling.png",
    quote: "Logical CRM's scheduling system transformed our daily operations.",
    name: "Sarah Johnson",
    title: "Operations Manager",
  },
  {
    company: "Elite HVAC Solutions",
    product: "Mobile App",
    result: "85% of jobs completed on first visit",
    image: "/images/online.webp",
    quote: "The mobile app keeps our technicians productive in the field.",
    name: "Mike Rodriguez",
    title: "Field Manager",
  },
  {
    company: "Premier Plumbing Co",
    product: "Invoicing",
    result: "98% faster payment collection",
    image: "/images/money.png",
    quote: "Digital invoicing improved our cash flow dramatically.",
    name: "Jennifer Walsh",
    title: "Business Owner",
  },
];

export const productsMetadata = {
  title: "Products - Logical CRM | Complete Field Service Management Suite",
  description: "Discover all Logical CRM products: Scheduling, CRM, Mobile App, Invoicing, Estimates, and more. Complete field service management solution for growing businesses.",
  keywords: "field service software, CRM products, scheduling software, mobile app, invoicing, estimates, business management",
};

export default productsData;
