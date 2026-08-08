"use client";

import { usePathname } from "next/navigation";
import { whatsappLink } from "@/constant/site";

const SERVICE_NAMES = {
  "ai-agents": "AI Chatbots & Agents",
  "ai-assistants": "AI Assistants",
  "ai-document-processing": "AI Document Processing",
  "ai-recommendation-engines": "AI Recommendation Engines",
  "ai-voice-agents": "AI Voice Agents",
  "ai-workflow-automation": "AI Workflow Automation",
  "brand-storytelling": "Brand Storytelling",
  "branding-identity": "Branding & Identity",
  "cms-development": "CMS Development",
  "content-creation": "Content Creation",
  "content-marketing": "Content Marketing",
  copywriting: "Copywriting",
  "email-marketing": "Email Marketing",
  "google-ads-ppc": "Google Ads (PPC)",
  "graphic-design": "Graphic Design",
  "influencer-marketing": "Influencer Marketing",
  "landing-page-design": "Landing Page Design",
  "mobile-app-design": "Mobile App Design",
  "mobile-development": "Mobile App Development",
  "motion-graphics": "Motion Graphics",
  "podcast-editing": "Podcast Editing",
  "seo-services": "SEO Services",
  "shopify-development": "Shopify Development",
  "social-media-marketing": "Social Media Marketing",
  "software-development": "Software Development",
  "ui-ux-design": "UI/UX Design",
  "video-editing": "Video Editing",
  "web-design": "Web Design",
  "web-development": "Web Development",
  "webflow-development": "Webflow Development",
};

const HUB_NAMES = {
  "web-development": "Web Development",
  "app-development": "App Development",
  "ai-services": "AI Services",
  "e-commerce": "E-commerce",
  "digital-marketing": "Digital Marketing",
};

const CITY_NAMES = {
  islamabad: "Islamabad",
  rawalpindi: "Rawalpindi",
  lahore: "Lahore",
  karachi: "Karachi",
  faisalabad: "Faisalabad",
  sialkot: "Sialkot",
  gujranwala: "Gujranwala",
  multan: "Multan",
  peshawar: "Peshawar",
  hyderabad: "Hyderabad",
  "bahria-town": "Bahria Town",
  "dha-lahore": "DHA Lahore",
  "dha-karachi": "DHA Karachi",
  "gulberg-lahore": "Gulberg Lahore",
  "clifton-karachi": "Clifton Karachi",
};

const buildMessage = (pathname) => {
  const segments = (pathname || "/").split("/").filter(Boolean);
  const [first, second] = segments;

  let serviceName = null;
  let hubName = null;
  let cityName = null;

  if (first === "services" && second && HUB_NAMES[second]) {
    hubName = HUB_NAMES[second];
  } else if (first === "locations" && second && CITY_NAMES[second]) {
    cityName = CITY_NAMES[second];
  } else if (first && SERVICE_NAMES[first]) {
    serviceName = SERVICE_NAMES[first];
  }

  if (serviceName && cityName) {
    return `Hi TheStockit! I'm interested in ${serviceName} for my business in ${cityName}.`;
  }
  if (serviceName) {
    return `Hi TheStockit! I'm interested in ${serviceName} for my business in Pakistan.`;
  }
  if (hubName && cityName) {
    return `Hi TheStockit! I'm interested in ${hubName} services for my business in ${cityName}.`;
  }
  if (hubName) {
    return `Hi TheStockit! I'm interested in ${hubName} services for my business in Pakistan.`;
  }
  if (cityName) {
    return `Hi TheStockit! I'm interested in your services for my business in ${cityName}.`;
  }
  return "Hi TheStockit! I'm interested in your services for my business in Pakistan.";
};

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FloatingWhatsApp = () => {
  const pathname = usePathname();
  const message = buildMessage(pathname);
  const href = whatsappLink(message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with The Stockit on WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/30 transition-transform hover:scale-110 motion-reduce:transform-none sm:bottom-6 sm:right-6"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40 motion-reduce:animate-none" />
      <span className="relative flex h-full w-full items-center justify-center">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
