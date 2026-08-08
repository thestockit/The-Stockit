import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const brandStorytelling = getServiceBySlug('brand-storytelling');
export const metadata = buildServiceMetadata(brandStorytelling);

export default function BrandStorytellingPage() {
  return <PakistanServicePage service={brandStorytelling} />;
}
