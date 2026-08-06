import PakistanServicePage from '@/components/PakistanServicePage';
import { brandStorytelling } from '@/Data/PakistanServices/brand-storytelling';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(brandStorytelling);

export default function BrandStorytellingPage() {
  return <PakistanServicePage service={brandStorytelling} />;
}
