import { notFound } from 'next/navigation';
import LocationPage from '@/components/LocationPage';
import {
  locations,
  getCityBySlug,
} from '@/Data/Locations';

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((city) => ({ city: city.slug }));
}

export function generateMetadata({ params }) {
  const city = getCityBySlug(params.city);

  if (!city) {
    return {};
  }

  return city.meta;
}

const CityPage = ({ params }) => {
  const city = getCityBySlug(params.city);

  if (!city) {
    notFound();
  }

  return <LocationPage city={city} />;
};

export default CityPage;
