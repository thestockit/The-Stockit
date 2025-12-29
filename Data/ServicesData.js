// Data/ServicesData.js
const ServicesData = [
  {
    title: 'Design Services',
    subServices: [
      { name: 'UI/UX Design', path: '/services/design/ui-ux' },
      { name: 'Web Design', path: '/services/design/web' },
      { name: 'Mobile App Design', path: '/services/design/mobile' },
      { name: 'Landing Page Design', path: '/services/design/landing-page' },
      { name: 'Branding & Identity', path: '/services/design/branding' },
      { name: 'Graphic Design', path: '/services/design/graphic' }
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
    title: 'Development Services',
    subServices: [
      { name: 'Web Development', path: '/services/development/web' },
      { name: 'Software Development', path: '/services/development/software' },
      { name: 'CMS Development', path: '/services/development/cms' },
      { name: 'Shopify Development', path: '/services/development/shopify' },
      { name: 'Webflow Development', path: '/services/development/webflow' },
      { name: 'Mobile Development', path: '/services/development/mobile' }
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
];

export default ServicesData;