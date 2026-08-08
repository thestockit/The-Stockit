export const SITE = {
  name: 'The Stockit',
  email: 'info@thestockit.com',
  phoneDisplay: '+92 324 5304585',
  phone: '+923245304585',
  whatsapp: '923245304585',
  whatsappDisplay: '+92 324 5304585',
  address: 'Asian Business Center, First Floor, Bahria Town Phase 7, Rawalpindi, Pakistan',
  officeAreas: 'Blue Area, Centaurus Mall, I-9 Markaz, Bahria Town Phase 7',
  cities: [
    'Islamabad',
    'Rawalpindi',
    'Lahore',
    'Karachi',
    'Faisalabad',
    'Sialkot',
    'Gujranwala',
    'Multan',
    'Peshawar',
  ],
  sinceYear: 2020,
  baseUrl: 'https://thestockit.com',
};

export const whatsappLink = (message) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const defaultWhatsAppMessage =
  'Assalam-o-Alaikum! I would like to discuss a project with The Stockit.';

export const whatsappBusinessApi = {
  enabled: false,
  apiVersion: 'v21.0',
  phoneNumberId: '',
  accessToken: '',
  webhookVerifyToken: '',
  defaultTemplate: 'project_inquiry',
};

export const languageToggle = {
  enabled: false,
  defaultLanguage: 'en',
  languages: ['en', 'ur'],
  futureUrduRoutes: '/ur',
};
