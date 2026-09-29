export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  bestFor: string;
  ctaText: string;
  ctaHref: string;
  features: string[];
}

export interface FeatureMatrixItem {
  name: string;
  category: string;
  starter: string | boolean;
  pro: string | boolean;
  business: string | boolean;
}

const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://equipment-rental-software.vercel.app";

export const siteConfig = {
  name: "Equipment Rental Software",
  shortName: "Equipment Rental Software",
  domain: rawBaseUrl.replace(/^https?:\/\//, ""),
  baseUrl: rawBaseUrl,
  slogan: "Rent Smarter. Manage Everything.",
  description:
    "All-in-one equipment rental software to track inventory, automate online bookings, dispatch fleets, and manage maintenance. Start your free trial today.",
  contact: {
    email: "hello@equipmentrentalsoftware.io",
    phone: "(708) 562-1403",
    street: "162 E North Ave",
    city: "Northlake",
    state: "Illinois",
    stateCode: "IL",
    zip: "60164",
    country: "United States",
    countryCode: "US",
    latitude: 41.907413,
    longitude: -87.8961,
    formattedAddress: "162 E North Ave, Northlake, IL 60164, United States",
  },
  social: {
    twitter: "https://twitter.com/equipmentrental",
    linkedin: "https://linkedin.com/company/equipmentrentalsoftware",
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ],
  legalLinks: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
  ],
};

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Ideal for small rental businesses getting started",
    monthlyPrice: 39,
    yearlyPrice: 31,
    bestFor: "Small rental businesses",
    ctaText: "Start Free Trial",
    ctaHref: "/signup?plan=starter",
    features: [
      "Equipment Inventory Tracking",
      "Real-Time Equipment Availability",
      "Rental Bookings Management",
      "Customer CRM Records",
      "Rental Order Workflows",
      "Basic Reporting & Analytics",
      "Up to 2 User Accounts",
      "1 Business Location Supported",
      "Standard Email Support",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Designed for growing rental companies seeking automation",
    monthlyPrice: 79,
    yearlyPrice: 63,
    popular: true,
    bestFor: "Growing rental companies",
    ctaText: "Start Free Trial",
    ctaHref: "/signup?plan=pro",
    features: [
      "All Starter Plan Capabilities",
      "Full Online Customer Booking Engine",
      "Integrated Payments & Invoicing",
      "Equipment Maintenance & Service Logs",
      "Advanced Business Reporting",
      "Up to 5 User Accounts",
      "1 Business Location Supported",
      "App & Accounting Integrations",
      "Priority Email + Live Chat Support",
    ],
  },
  {
    id: "business",
    name: "Business",
    tagline: "Comprehensive power for multi-location rental operations",
    monthlyPrice: 149,
    yearlyPrice: 119,
    bestFor: "Established rental operations",
    ctaText: "Start Free Trial",
    ctaHref: "/signup?plan=business",
    features: [
      "All Professional Plan Capabilities",
      "Multiple Depots & Fleet Locations",
      "Unlimited User Accounts & Roles",
      "Full Accounting & GPS Integrations",
      "Automated Inspection Checklist Workflows",
      "Advanced Utilization Analytics",
      "Dedicated Account Manager",
      "Custom Data Import & Setup",
      "24/7 Priority Emergency Support",
    ],
  },
];

export const pricingMatrix: FeatureMatrixItem[] = [
  {
    name: "Best For",
    category: "General",
    starter: "Small rental businesses",
    pro: "Growing rental companies",
    business: "Established rental operations",
  },
  {
    name: "Equipment Inventory",
    category: "Asset Management",
    starter: true,
    pro: true,
    business: true,
  },
  {
    name: "Equipment Availability",
    category: "Asset Management",
    starter: true,
    pro: true,
    business: true,
  },
  {
    name: "Rental Bookings",
    category: "Reservations",
    starter: true,
    pro: true,
    business: true,
  },
  {
    name: "Customer Management",
    category: "CRM & Customers",
    starter: true,
    pro: true,
    business: true,
  },
  {
    name: "Rental Orders",
    category: "Reservations",
    starter: true,
    pro: true,
    business: true,
  },
  {
    name: "Online Booking",
    category: "E-Commerce & Digital",
    starter: false,
    pro: true,
    business: true,
  },
  {
    name: "Payments & Invoicing",
    category: "Finance & Billing",
    starter: false,
    pro: true,
    business: true,
  },
  {
    name: "Equipment Maintenance",
    category: "Asset Management",
    starter: false,
    pro: true,
    business: true,
  },
  {
    name: "Reporting & Analytics",
    category: "Insights & Auditing",
    starter: "Basic",
    pro: "Advanced",
    business: "Advanced",
  },
  {
    name: "User Accounts",
    category: "Team & Security",
    starter: "2",
    pro: "5",
    business: "Unlimited",
  },
  {
    name: "Locations",
    category: "Fleet Operations",
    starter: "1",
    pro: "1",
    business: "Multiple",
  },
  {
    name: "Integrations",
    category: "Ecosystem",
    starter: false,
    pro: true,
    business: true,
  },
  {
    name: "Priority Support",
    category: "Service Level",
    starter: false,
    pro: true,
    business: true,
  },
  {
    name: "Support Channel",
    category: "Service Level",
    starter: "Email",
    pro: "Email + Chat",
    business: "Priority Support",
  },
  {
    name: "Call to Action",
    category: "General",
    starter: "Start Free Trial",
    pro: "Start Free Trial",
    business: "Book a Demo",
  },
];

export const faqs = [
  {
    question: "What types of equipment rental businesses can use this software?",
    answer:
      "EquipmentRentalSoftware.io is built specifically for heavy machinery, tool rentals, event staging, audio/visual gear, construction equipment, power tools, party rentals, and agricultural machinery. Any business renting physical inventory benefits from our automated tracking and reservations.",
  },
  {
    question: "How does real-time equipment availability prevent double bookings?",
    answer:
      "Every machine or asset unit has its own live schedule with configurable maintenance buffers and delivery turnaround windows. When a booking is confirmed online or at your depot counter, the item is instantly locked across all dispatch channels.",
  },
  {
    question: "Can customers book equipment directly through our website?",
    answer:
      "Yes. On our Professional and Business tiers, you receive an embeddable, mobile-responsive online booking widget and storefront. Customers can view available equipment, choose rental date ranges, upload driver licenses, sign digital rental agreements, and pay deposits upfront.",
  },
  {
    question: "How does the maintenance and inspection workflow operate?",
    answer:
      "The system logs engine operating hours, mileage, and rental cycles. You can trigger automated service reminders, log pre-rental safety inspections with digital checklists and photos, and temporarily take equipment offline for servicing without impacting other inventory.",
  },
  {
    question: "Can I manage multiple yard or warehouse locations?",
    answer:
      "Yes. The Business plan supports multi-depot operations, enabling inter-location equipment transfers, centralized customer billing, and location-filtered fleet availability reporting.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, both the Starter and Professional plans include a 14-day free trial with no long-term contract or setup fees required. You can test your full fleet workflow risk-free.",
  },
];
