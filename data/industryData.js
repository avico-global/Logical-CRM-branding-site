import { hvacData } from "./hvacData.js";
import { plumbingData } from "./plumbingData.js";
import { electriciansData } from "./electriciansData.js";
import { garageDoorData } from "./garageDoorData.js";
import { junkRemovalData } from "./junkRemovalData.js";
import { locksmithData } from "./locksmithData.js";
import { landscapingData } from "./landscapingData.js";
import { roofingData } from "./roofingData.js";
import { cleaningData } from "./cleaningData.js";

export const industryDataMap = {
  hvac: hvacData,
  plumbing: plumbingData,
  electrical: electriciansData,
  electricians: electriciansData, // Alternative route
  "garage-door": garageDoorData,
  "garage-door-repair": garageDoorData, // Alternative route
  "junk-removal": junkRemovalData,
  locksmith: locksmithData,
  landscaping: landscapingData,
  roofing: roofingData,
  cleaning: cleaningData,
  "cleaning-services": cleaningData, // Alternative route
};

// Industry metadata for SEO and navigation
export const industryMetadata = {
  hvac: {
    title: "HVAC Software | Field Service Management for HVAC Companies",
    description:
      "Streamline your HVAC business with Logical CRM. Schedule jobs, dispatch teams, manage inventory, and get paid faster. Start your free trial today.",
    keywords:
      "HVAC software, heating cooling software, HVAC CRM, field service management",
    breadcrumb: "HVAC",
  },
  plumbing: {
    title: "Plumbing Software | CRM for Plumbing Companies",
    description:
      "Grow your plumbing business with Logical CRM. Emergency dispatch, scheduling, invoicing, and more. Trusted by plumbing professionals nationwide.",
    keywords:
      "plumbing software, plumber CRM, plumbing business management, field service",
    breadcrumb: "Plumbing",
  },
  electrical: {
    title: "Electrical Contractor Software | CRM for Electricians",
    description:
      "Power up your electrical business with Logical CRM. Manage projects, track permits, schedule jobs, and grow your electrical contracting business.",
    keywords:
      "electrical software, electrician CRM, electrical contractor management",
    breadcrumb: "Electrical",
  },
  electricians: {
    title: "Electrical Contractor Software | CRM for Electricians",
    description:
      "Power up your electrical business with Logical CRM. Manage projects, track permits, schedule jobs, and grow your electrical contracting business.",
    keywords:
      "electrical software, electrician CRM, electrical contractor management",
    breadcrumb: "Electricians",
  },
  "garage-door": {
    title: "Garage Door Software | CRM for Garage Door Companies",
    description:
      "Streamline your garage door business with Logical CRM. Schedule installations, track repairs, manage inventory, and grow your business.",
    keywords:
      "garage door software, garage door CRM, garage door business management",
    breadcrumb: "Garage Door",
  },
  "garage-door-repair": {
    title: "Garage Door Repair Software | CRM for Garage Door Services",
    description:
      "Manage your garage door repair business with Logical CRM. Emergency calls, scheduled maintenance, and installation management in one platform.",
    keywords: "garage door repair software, garage door service CRM",
    breadcrumb: "Garage Door Repair",
  },
  "junk-removal": {
    title: "Junk Removal Software | CRM for Junk Removal Companies",
    description:
      "Optimize your junk removal business with Logical CRM. Route optimization, volume pricing, disposal tracking, and crew management tools.",
    keywords:
      "junk removal software, junk hauling CRM, waste removal management",
    breadcrumb: "Junk Removal",
  },
  locksmith: {
    title: "Locksmith Software | CRM for Locksmith Businesses",
    description:
      "Secure your locksmith business growth with Logical CRM. Emergency dispatch, key tracking, security assessments, and mobile payments.",
    keywords: "locksmith software, locksmith CRM, security service management",
    breadcrumb: "Locksmith",
  },
  landscaping: {
    title: "Landscaping Software | CRM for Landscaping Companies",
    description:
      "Grow your landscaping business with Logical CRM. Seasonal scheduling, crew management, weather integration, and maintenance contracts.",
    keywords:
      "landscaping software, lawn care CRM, landscape business management",
    breadcrumb: "Landscaping",
  },
  roofing: {
    title: "Roofing Software | CRM for Roofing Contractors",
    description:
      "Elevate your roofing business with Logical CRM. Insurance claims, material estimation, project tracking, and safety management tools.",
    keywords: "roofing software, roofing CRM, roofing contractor management",
    breadcrumb: "Roofing",
  },
  cleaning: {
    title: "Cleaning Software | CRM for Cleaning Services",
    description:
      "Streamline your cleaning business with Logical CRM. Recurring schedules, team coordination, supply tracking, and quality control tools.",
    keywords: "cleaning software, cleaning service CRM, janitorial management",
    breadcrumb: "Cleaning Services",
  },
  "cleaning-services": {
    title: "Cleaning Services Software | CRM for Professional Cleaners",
    description:
      "Manage your cleaning services with Logical CRM. Commercial contracts, residential schedules, quality checklists, and team management.",
    keywords: "cleaning services software, professional cleaning CRM",
    breadcrumb: "Cleaning Services",
  },
};

export function getIndustryData(industrySlug) {
  return industryDataMap[industrySlug] || null;
}

export function getIndustryMetadata(industrySlug) {
  return industryMetadata[industrySlug] || null;
}

export function getAllIndustryIds() {
  return Object.keys(industryDataMap);
}
