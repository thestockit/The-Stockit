// Data/ServicesData.js
const ServicesData = [
  {
    id: 'design',
    title: 'Design Services',
    subServices: [
      { name: 'UI/UX Design', href: '/ui-ux-design' },
      { name: 'Web Design', href: '/web-design' },
      { name: 'Mobile App Design', href: '/mobile-app-design' },
      { name: 'Landing Page Design', href: '/landing-page-design' },
      { name: 'Branding & Identity', href: '/branding-identity' },
      { name: 'Graphic Design', href: '/graphic-design' }
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-palette"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"></path>
        <circle cx="8.5" cy="10.5" r="1"></circle>
        <circle cx="12.5" cy="7.5" r="1"></circle>
        <circle cx="16.5" cy="10.5" r="1"></circle>
      </svg>
    ),
  },
  {
    id: 'development',
    title: 'Development Services',
    subServices: [
      { name: 'Web Development', href: '/web-development' },
      { name: 'Software Development', href: '/software-development' },
      { name: 'CMS Development', href: '/cms-development' },
      { name: 'Shopify Development', href: '/shopify-development' },
      { name: 'Webflow Development', href: '/webflow-development' },
      { name: 'Mobile Development', href: '/mobile-development' }
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-code"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <polyline points="7 8 3 12 7 16"></polyline>
        <polyline points="17 8 21 12 17 16"></polyline>
        <line x1="14" y1="4" x2="10" y2="20"></line>
      </svg>
    ),
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    subServices: [
      { name: 'SEO Services', href: '/seo-services' },
      { name: 'Social Media Marketing', href: '/social-media-marketing' },
      { name: 'Google Ads & PPC', href: '/google-ads-ppc' },
      { name: 'Email Marketing', href: '/email-marketing' },
      { name: 'Content Marketing', href: '/content-marketing' },
      { name: 'Influencer Marketing', href: '/influencer-marketing' }
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-trending-up"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <polyline points="3 17 9 11 13 15 21 7"></polyline>
        <polyline points="15 7 21 7 21 13"></polyline>
      </svg>
    ),
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    subServices: [
      { name: 'Omnichannel AI Agents', href: '/ai-agents' },
      { name: 'AI Voice Agents & Call Center', href: '/ai-voice-agents' },
      { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
      { name: 'Semantic Search & Recommendations', href: '/ai-recommendation-engines' },
      { name: 'Internal AI Assistants', href: '/ai-assistants' },
      { name: 'AI Document Processing', href: '/ai-document-processing' }
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-robot"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
        <path d="M10 16h4"></path>
        <circle cx="8.5" cy="11.5" r=".5" fill="currentColor"></circle>
        <circle cx="15.5" cy="11.5" r=".5" fill="currentColor"></circle>
        <path d="M12 3v3"></path>
      </svg>
    ),
  },
  {
    id: 'video-content',
    title: 'Video & Content Services',
    subServices: [
      { name: 'Video Editing', href: '/video-editing' },
      { name: 'Motion Graphics', href: '/motion-graphics' },
      { name: 'Content Creation', href: '/content-creation' },
      { name: 'Copywriting', href: '/copywriting' },
      { name: 'Brand Storytelling', href: '/brand-storytelling' },
      { name: 'Podcast Editing', href: '/podcast-editing' }
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-video"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894L15 14v-4z"></path>
        <rect x="3" y="6" width="12" height="12" rx="2"></rect>
      </svg>
    ),
  },
];

export default ServicesData;
