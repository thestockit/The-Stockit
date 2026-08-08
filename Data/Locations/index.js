import pakistaniCities from '@/content/pakistani-cities.json';
import { buildCityMeta } from './_shared';

export const locations = pakistaniCities.map((city) => ({
  ...city,
  meta: buildCityMeta(city),
}));

export const locationSlugs = locations.map((city) => city.slug);

export const getCityBySlug = (slug) =>
  locations.find((city) => city.slug === slug);

export const getCitiesExcept = (slug) =>
  locations.filter((city) => city.slug !== slug);
