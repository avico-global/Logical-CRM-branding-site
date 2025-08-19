"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Constants
const NAVIGATION_ITEMS = ["Pricing"];

const INDUSTRIES_DATA = [
  {
    id: "hvac",
    name: "HVAC",
    href: "/industries/hvac",
    description: "Heating & cooling solutions",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="#1e40af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5"
          stroke="#1e40af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12l10 5 10-5"
          stroke="#1e40af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    colorScheme: {
      bg: "bg-blue-100",
      hoverBg: "group-hover:bg-blue-200",
      textHover: "group-hover:text-blue-700",
    },
  },
  {
    id: "plumbing",
    name: "Plumbing",
    href: "/industries/plumbing",
    description: "Pipes, drains & water systems",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 11H7l5-8 5 8h-2"
          stroke="#16a34a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 21l5-8 5 8"
          stroke="#16a34a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    colorScheme: {
      bg: "bg-green-100",
      hoverBg: "group-hover:bg-green-200",
      textHover: "group-hover:text-green-700",
    },
  },
  {
    id: "electrician",
    name: "Electrician",
    href: "/industries/electricians",
    description: "Wiring & electrical services",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 2L3 14h7v8l10-12h-7z" fill="#eab308" />
      </svg>
    ),
    colorScheme: {
      bg: "bg-yellow-100",
      hoverBg: "group-hover:bg-yellow-200",
      textHover: "group-hover:text-yellow-700",
    },
  },
  {
    id: "garage-door",
    name: "Garage Door",
    href: "/industries/garage-door-repair",
    description: "Installation & repair services",
    icon: (
      <svg
        width="18"
        height="18"
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
          stroke="#7c3aed"
          strokeWidth="2"
        />
        <path
          d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
          stroke="#7c3aed"
          strokeWidth="2"
        />
      </svg>
    ),
    colorScheme: {
      bg: "bg-purple-100",
      hoverBg: "group-hover:bg-purple-200",
      textHover: "group-hover:text-purple-700",
    },
  },
  {
    id: "locksmith",
    name: "Locksmith",
    href: "/industries/locksmith",
    description: "Lock & security solutions",
    icon: (
      <svg
        width="18"
        height="18"
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
          stroke="#ea580c"
          strokeWidth="2"
        />
        <circle cx="12" cy="16" r="1" fill="#ea580c" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#ea580c" strokeWidth="2" />
      </svg>
    ),
    colorScheme: {
      bg: "bg-orange-100",
      hoverBg: "group-hover:bg-orange-200",
      textHover: "group-hover:text-orange-700",
    },
  },
  {
    id: "junk-removal",
    name: "Junk Removal",
    href: "/industries/junk-removal",
    description: "Cleanup & hauling services",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 6h18l-2 13H5L3 6z" stroke="#dc2626" strokeWidth="2" />
        <path
          d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
          stroke="#dc2626"
          strokeWidth="2"
        />
      </svg>
    ),
    colorScheme: {
      bg: "bg-red-100",
      hoverBg: "group-hover:bg-red-200",
      textHover: "group-hover:text-red-700",
    },
  },
];

// Reusable Components
const IndustryItem = ({ industry, onClick }) => {
  const { name, href, description, icon, colorScheme } = industry;
  const { bg, hoverBg, textHover } = colorScheme;

  return (
    <Link
      href={href}
      className="flex items-start gap-3 no-underline p-3 rounded-lg hover:bg-blue-50/80 transition-all duration-200 group"
      onClick={onClick}
    >
      <div
        className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center ${hoverBg} transition-colors flex-shrink-0`}
      >
        {icon}
      </div>
      <div>
        <div
          className={`font-semibold text-gray-900 ${textHover} transition-colors`}
        >
          {name}
        </div>
        <div className="text-xs text-gray-600 mt-1 leading-relaxed">
          {description}
        </div>
      </div>
    </Link>
  );
};

const AllIndustriesButton = ({ onClick }) => (
  <Link
    href="/industries"
    className="flex items-start gap-3 no-underline p-3 rounded-lg hover:bg-gray-100 transition-all duration-200 group border border-gray-200 hover:border-gray-300"
    onClick={onClick}
  >
    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors flex-shrink-0">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="3" stroke="#6b7280" strokeWidth="2" />
        <path d="M12 1v6m0 6v6" stroke="#6b7280" strokeWidth="2" />
        <path d="M21 12h-6m-6 0H3" stroke="#6b7280" strokeWidth="2" />
      </svg>
    </div>
    <div>
      <div className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
        All Industries
      </div>
      <div className="text-xs text-gray-600 mt-1 leading-relaxed">
        View complete industry list
      </div>
    </div>
  </Link>
);

// Products data and components (compact)
const PRODUCTS_DATA = [
  {
    id: "client-crm",
    name: "Client CRM",
    href: "/products?product=client-crm",
    icon: "fas fa-users",
    desc: "Contacts & history",
    colorScheme: {
      bg: "bg-blue-100",
      textColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-200",
      textHover: "group-hover:text-blue-700",
    },
  },
  {
    id: "scheduling",
    name: "Scheduling",
    href: "/products?product=scheduling",
    icon: "fas fa-calendar",
    desc: "Jobs & calendar",
    colorScheme: {
      bg: "bg-green-100",
      textColor: "text-green-600",
      hoverBg: "group-hover:bg-green-200",
      textHover: "group-hover:text-green-700",
    },
  },
  {
    id: "dispatching",
    name: "Dispatching",
    href: "/products?product=dispatching",
    icon: "fas fa-headset",
    desc: "Assign & route",
    colorScheme: {
      bg: "bg-purple-100",
      textColor: "text-purple-600",
      hoverBg: "group-hover:bg-purple-200",
      textHover: "group-hover:text-purple-700",
    },
  },
  {
    id: "invoicing",
    name: "Invoicing",
    href: "/products?product=invoicing",
    icon: "fas fa-file-invoice",
    desc: "Bills & payments",
    colorScheme: {
      bg: "bg-yellow-100",
      textColor: "text-yellow-600",
      hoverBg: "group-hover:bg-yellow-200",
      textHover: "group-hover:text-yellow-700",
    },
  },
  {
    id: "estimates-proposals",
    name: "Estimates",
    href: "/products?product=estimates-proposals",
    icon: "fas fa-clipboard",
    desc: "Quotes & proposals",
    colorScheme: {
      bg: "bg-orange-100",
      textColor: "text-orange-600",
      hoverBg: "group-hover:bg-orange-200",
      textHover: "group-hover:text-orange-700",
    },
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    href: "/products?product=mobile-app",
    icon: "fas fa-mobile-alt",
    desc: "Crew on-the-go",
    colorScheme: {
      bg: "bg-indigo-100",
      textColor: "text-indigo-600",
      hoverBg: "group-hover:bg-indigo-200",
      textHover: "group-hover:text-indigo-700",
    },
  },
];

const ProductItem = ({ item, onClick, isClient }) => {
  const { name, href, icon, desc, colorScheme } = item;
  const { bg, textColor, hoverBg, textHover } = colorScheme;

  return (
    <Link
      href={href}
      className="flex items-start gap-3 no-underline p-3 rounded-lg hover:bg-gray-50/80 transition-all duration-200 group"
      onClick={onClick}
    >
      <div
        className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center ${hoverBg} transition-colors flex-shrink-0`}
      >
        {isClient && <i className={`${icon} ${textColor} text-sm`}></i>}
      </div>
      <div>
        <div
          className={`font-semibold text-gray-900 ${textHover} transition-colors`}
        >
          {name}
        </div>
        <div className="text-xs text-gray-600 mt-1 leading-relaxed">{desc}</div>
      </div>
    </Link>
  );
};

const AllProductsButton = ({ onClick, isClient }) => (
  <Link
    href="/products"
    className="flex items-start gap-3 no-underline p-3 rounded-lg hover:bg-gray-100 transition-all duration-200 group border border-gray-200 hover:border-gray-300"
    onClick={onClick}
  >
    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors flex-shrink-0">
      {isClient && <i className="fas fa-th-large text-gray-600 text-sm"></i>}
    </div>
    <div>
      <div className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
        All Products
      </div>
      <div className="text-xs text-gray-600 mt-1 leading-relaxed">
        Browse the full suite
      </div>
    </div>
  </Link>
);

// Resources data and components (compact)
const RESOURCES_DATA = [
  {
    id: "blog",
    name: "Blog",
    href: "/blog",
    icon: "fas fa-newspaper",
    desc: "Get the inspiration and news for your success",
    colorScheme: {
      bg: "bg-blue-100",
      textColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-200",
      textHover: "group-hover:text-blue-700",
    },
  },
  {
    id: "webinars",
    name: "Webinars",
    href: "/webinars",
    icon: "fas fa-play-circle",
    desc: "Get advice directly from industry experts",
    colorScheme: {
      bg: "bg-red-100",
      textColor: "text-red-600",
      hoverBg: "group-hover:bg-red-200",
      textHover: "group-hover:text-red-700",
    },
  },
  {
    id: "free-tools",
    name: "Free tools",
    href: "/free-tools",
    icon: "fas fa-tools",
    desc: "Discover useful tools to make your business a success",
    badge: "New",
    colorScheme: {
      bg: "bg-green-100",
      textColor: "text-green-600",
      hoverBg: "group-hover:bg-green-200",
      textHover: "group-hover:text-green-700",
    },
  },
  {
    id: "faqs",
    name: "FAQ's",
    href: "/faqs",
    icon: "fas fa-question-circle",
    desc: "Get all the answers to your frequently asked questions",
    colorScheme: {
      bg: "bg-yellow-100",
      textColor: "text-yellow-600",
      hoverBg: "group-hover:bg-yellow-200",
      textHover: "group-hover:text-yellow-700",
    },
  },
  {
    id: "help-center",
    name: "Help center",
    href: "/help-center",
    icon: "fas fa-life-ring",
    desc: "Get your questions answered with our 24/7 knowledge hub",
    colorScheme: {
      bg: "bg-purple-100",
      textColor: "text-purple-600",
      hoverBg: "group-hover:bg-purple-200",
      textHover: "group-hover:text-purple-700",
    },
  },
  {
    id: "podcast",
    name: "Podcast",
    href: "/podcast",
    icon: "fas fa-podcast",
    desc: "Listen and learn with the Logical CRM Business podcast",
    badge: "New",
    colorScheme: {
      bg: "bg-indigo-100",
      textColor: "text-indigo-600",
      hoverBg: "group-hover:bg-indigo-200",
      textHover: "group-hover:text-indigo-700",
    },
  },
];

const ResourceItem = ({ item, onClick, isClient }) => {
  const { name, href, icon, desc, badge, colorScheme } = item;
  const { bg, textColor, hoverBg, textHover } = colorScheme;

  return (
    <Link
      href={href}
      className="flex items-start gap-3 no-underline p-3 rounded-lg hover:bg-gray-50/80 transition-all duration-200 group relative"
      onClick={onClick}
    >
      <div
        className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center ${hoverBg} transition-colors flex-shrink-0`}
      >
        {isClient && <i className={`${icon} ${textColor} text-sm`}></i>}
      </div>
      <div className="flex-1">
        <div
          className={`font-semibold text-gray-900 ${textHover} transition-colors flex items-center gap-2`}
        >
          {name}
          {badge && (
            <span className="px-2 py-1 text-xs font-bold text-white bg-green-500 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <div className="text-xs text-gray-600 mt-1 leading-relaxed">{desc}</div>
      </div>
    </Link>
  );
};

const AllResourcesButton = ({ onClick, isClient }) => (
  <Link
    href="/resources"
    className="flex items-start gap-3 no-underline p-3 rounded-lg hover:bg-gray-100 transition-all duration-200 group border border-gray-200 hover:border-gray-300 relative"
    onClick={onClick}
  >
    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors flex-shrink-0">
      {isClient && <i className="fas fa-archive text-gray-600 text-sm"></i>}
    </div>
    <div className="flex-1">
      <div className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors flex items-center gap-2">
        All Resources
        <span className="px-2 py-1 text-xs font-bold text-white bg-yellow-500 rounded-full">
          New
        </span>
      </div>
      <div className="text-xs text-gray-600 mt-1 leading-relaxed">
        Discover more resources for your field service business
      </div>
    </div>
  </Link>
);

// Company data and components (compact)
const COMPANY_DATA = [
  {
    id: "about-us",
    name: "About us",
    href: "/about-us",
    icon: "fas fa-building",
    desc: "Find out all about what we do and why we love the field service industry",
    colorScheme: {
      bg: "bg-blue-100",
      textColor: "text-blue-600",
      hoverBg: "group-hover:bg-blue-200",
      textHover: "group-hover:text-blue-700",
    },
  },
  {
    id: "contact-us",
    name: "Contact us",
    href: "/contact-us",
    icon: "fas fa-comments",
    desc: "Talk to us! We are real people who would love to help in any way we can",
    colorScheme: {
      bg: "bg-green-100",
      textColor: "text-green-600",
      hoverBg: "group-hover:bg-green-200",
      textHover: "group-hover:text-green-700",
    },
  },
  {
    id: "become-partner",
    name: "Become a partner",
    href: "/become-partner",
    icon: "fas fa-handshake",
    desc: "Do you have a field service network? Join our affiliate program and get paid",
    colorScheme: {
      bg: "bg-purple-100",
      textColor: "text-purple-600",
      hoverBg: "group-hover:bg-purple-200",
      textHover: "group-hover:text-purple-700",
    },
  },
  {
    id: "reviews",
    name: "Reviews",
    href: "/reviews",
    icon: "fas fa-star",
    desc: "See why our customers trust us to grow their business every day",
    colorScheme: {
      bg: "bg-yellow-100",
      textColor: "text-yellow-600",
      hoverBg: "group-hover:bg-yellow-200",
      textHover: "group-hover:text-yellow-700",
    },
  },
  {
    id: "career",
    name: "Career",
    href: "/career",
    icon: "fas fa-globe",
    desc: "Looking for your next challenge? Come join our talented, smart, and fun team!",
    colorScheme: {
      bg: "bg-indigo-100",
      textColor: "text-indigo-600",
      hoverBg: "group-hover:bg-indigo-200",
      textHover: "group-hover:text-indigo-700",
    },
  },
  {
    id: "investors",
    name: "Investors",
    href: "/investors",
    icon: "fas fa-chart-line",
    desc: "Learn about some of the best VC's who believe in us and support our mission",
    colorScheme: {
      bg: "bg-orange-100",
      textColor: "text-orange-600",
      hoverBg: "group-hover:bg-orange-200",
      textHover: "group-hover:text-orange-700",
    },
  },
];

const CompanyItem = ({ item, onClick, isClient }) => {
  const { name, href, icon, desc, colorScheme } = item;
  const { bg, textColor, hoverBg, textHover } = colorScheme;

  return (
    <Link
      href={href}
      className="flex items-start gap-3 no-underline p-3 rounded-lg hover:bg-gray-50/80 transition-all duration-200 group"
      onClick={onClick}
    >
      <div
        className={`w-8 h-8 ${bg} rounded-lg flex items-center justify-center ${hoverBg} transition-colors flex-shrink-0`}
      >
        {isClient && <i className={`${icon} ${textColor} text-sm`}></i>}
      </div>
      <div className="flex-1">
        <div
          className={`font-semibold text-gray-900 ${textHover} transition-colors`}
        >
          {name}
        </div>
        <div className="text-xs text-gray-600 mt-1 leading-relaxed">{desc}</div>
      </div>
    </Link>
  );
};

// Custom Hooks
const useClickOutside = (refs, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );
      if (isOutside) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, callback]);
};

const useScrollBehavior = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroWithCardsHeight = window.innerHeight * 1.8;

      setIsOverHero(currentScrollY < heroWithCardsHeight - 80);

      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { isVisible, isOverHero };
};

const Navbar = () => {
  // Hydration guard
  const [isClient, setIsClient] = useState(false);

  // State
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effect to set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Refs
  const dropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);
  const companyDropdownRef = useRef(null);

  // Custom hooks
  const { isVisible, isOverHero } = useScrollBehavior();

  useClickOutside(
    [
      dropdownRef,
      productsDropdownRef,
      resourcesDropdownRef,
      companyDropdownRef,
    ],
    () => {
      setIndustriesOpen(false);
      setProductsOpen(false);
      setResourcesOpen(false);
      setCompanyOpen(false);
    }
  );

  // Event handlers
  const handleDropdownLinkClick = () => {
    setIndustriesOpen(false);
    setProductsOpen(false);
    setResourcesOpen(false);
    setCompanyOpen(false);
  };

  const toggleIndustries = () => {
    setIndustriesOpen(!industriesOpen);
    setProductsOpen(false);
    setResourcesOpen(false);
    setCompanyOpen(false);
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
    setIndustriesOpen(false);
    setResourcesOpen(false);
    setCompanyOpen(false);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
    setIndustriesOpen(false);
    setProductsOpen(false);
    setCompanyOpen(false);
  };

  const toggleCompany = () => {
    setCompanyOpen(!companyOpen);
    setIndustriesOpen(false);
    setProductsOpen(false);
    setResourcesOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Styles
  const navbarStyles = {
    background: isOverHero
      ? "rgba(15, 23, 42, 0.85)"
      : "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    borderBottom: isOverHero
      ? "1px solid rgba(148, 163, 184, 0.2)"
      : "1px solid rgba(30, 41, 59, 0.8)",
    boxShadow: isOverHero
      ? "0 4px 24px rgba(0, 0, 0, 0.1)"
      : "0 8px 32px rgba(0, 0, 0, 0.3)",
  };

  const navItemClasses =
    "flex items-center gap-2 cursor-pointer transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/10 group";
  const fontStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 500,
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full px-6 py-3 flex items-center justify-between z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={navbarStyles}
    >
      {/* Logo and Navigation Links */}
      <div className="flex items-center">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center justify-center cursor-pointer group"
          style={{ height: "45px", width: "180px" }}
        >
          <img
            src="/new-crm.png"
            alt="Logical CRM"
            className="h-full w-auto object-contain transition-all duration-200 group-hover:scale-105"
            style={{ maxHeight: "50px", maxWidth: "180px" }}
            onError={(e) => {
              console.log("Logo failed to load:", e.target.src);
            }}
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8 ml-8">
          <div
            className="flex items-center gap-2 text-white text-[16px] font-medium tracking-wide"
            style={fontStyle}
          >
            {/* Industries Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className={navItemClasses} onClick={toggleIndustries}>
                <span className="group-hover:text-cyan-300 transition-colors">
                  Industries
                </span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className={`transition-all duration-200 group-hover:text-cyan-300 ${
                    industriesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {industriesOpen && (
                <div className="fixed left-1/2 -translate-x-1/2 top-20 w-[800px] bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 pt-6 pb-4 px-6 z-[9999] animate-fadeIn">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/90 rounded-xl" />
                  <div className="relative z-10">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                      {INDUSTRIES_DATA.map((industry) => (
                        <IndustryItem
                          key={industry.id}
                          industry={industry}
                          onClick={handleDropdownLinkClick}
                        />
                      ))}
                      <AllIndustriesButton onClick={handleDropdownLinkClick} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative" ref={productsDropdownRef}>
              <div className={navItemClasses} onClick={toggleProducts}>
                <span className="group-hover:text-cyan-300 transition-colors">
                  Products
                </span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className={`transition-all duration-200 group-hover:text-cyan-300 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {productsOpen && (
                <div className="fixed left-1/2 -translate-x-1/2 top-20 w-[800px] bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 pt-6 pb-4 px-6 z-[9999] animate-fadeIn">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/90 rounded-xl" />
                  <div className="relative z-10">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                      {PRODUCTS_DATA.map((product) => (
                        <ProductItem
                          key={product.id}
                          item={product}
                          onClick={handleDropdownLinkClick}
                          isClient={isClient}
                        />
                      ))}
                      <AllProductsButton
                        onClick={handleDropdownLinkClick}
                        isClient={isClient}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesDropdownRef}>
              <div className={navItemClasses} onClick={toggleResources}>
                <span className="group-hover:text-cyan-300 transition-colors">
                  Resources
                </span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className={`transition-all duration-200 group-hover:text-cyan-300 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {resourcesOpen && (
                <div className="fixed left-1/2 -translate-x-1/2 top-20 w-[800px] bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 pt-6 pb-4 px-6 z-[9999] animate-fadeIn">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/90 rounded-xl" />
                  <div className="relative z-10">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                      {RESOURCES_DATA.map((resource) => (
                        <ResourceItem
                          key={resource.id}
                          item={resource}
                          onClick={handleDropdownLinkClick}
                          isClient={isClient}
                        />
                      ))}
                      <AllResourcesButton
                        onClick={handleDropdownLinkClick}
                        isClient={isClient}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative" ref={companyDropdownRef}>
              <div className={navItemClasses} onClick={toggleCompany}>
                <span className="group-hover:text-cyan-300 transition-colors">
                  Company
                </span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className={`transition-all duration-200 group-hover:text-cyan-300 ${
                    companyOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {companyOpen && (
                <div className="fixed left-1/2 -translate-x-1/2 top-20 w-[800px] bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 pt-6 pb-4 px-6 z-[9999] animate-fadeIn">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/90 rounded-xl" />
                  <div className="relative z-10">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                      {COMPANY_DATA.map((company) => (
                        <CompanyItem
                          key={company.id}
                          item={company}
                          onClick={handleDropdownLinkClick}
                          isClient={isClient}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {NAVIGATION_ITEMS.map((item, index) => (
              <div key={index} className={navItemClasses}>
                <span className="group-hover:text-cyan-300 transition-colors">
                  {item}
                </span>
                {item !== "Pricing" && (
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="transition-all duration-200 group-hover:text-cyan-300"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white/90 hover:text-white p-2.5 rounded-lg hover:bg-white/10 transition-all duration-200 group"
        onClick={toggleMobileMenu}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="group-hover:scale-110 transition-transform duration-200"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d={
              mobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M3 12h18M3 6h18M3 18h18"
            }
          />
        </svg>
      </button>

      {/* Buttons - Desktop */}
      <div className="hidden lg:flex items-center gap-3">
        <button
          className="relative px-6 py-2.5 text-[15px] font-semibold text-white/90 hover:text-white transition-all duration-200 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/10 group overflow-hidden"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <span className="relative z-10">Log in</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </button>
        <button
          className="relative px-6 py-2.5 text-[15px] font-bold text-gray-900 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 transition-all duration-200 rounded-xl shadow-lg hover:shadow-xl group overflow-hidden"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          <span className="relative z-10">Start Free Trial</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl border-t border-white/10 p-6 z-40 mobile-menu shadow-2xl">
          <div className="flex flex-col gap-2">
            {[
              "Industries",
              "Products",
              "Resources",
              "Company",
              ...NAVIGATION_ITEMS,
            ].map((item, index) => (
              <div
                key={index}
                className="text-white/90 hover:text-white font-medium text-[16px] p-3 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {item}
              </div>
            ))}
            <div className="border-t border-white/20 pt-6 mt-4 flex flex-col gap-3">
              <button
                className="rounded-xl font-semibold transition-all duration-200 border border-white/20 hover:border-white/40 w-full py-3 text-white/90 hover:text-white hover:bg-white/10"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Log in
              </button>
              <button
                className="rounded-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 transition-all duration-200 w-full py-3 text-gray-900 shadow-lg hover:shadow-xl"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
