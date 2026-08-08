import pakistaniServicesData from '@/content/pakistani-services.json';

export const pakistanServices = pakistaniServicesData;

export const getServiceBySlug = (slug) =>
  pakistanServices.find((service) => service.slug === slug);
