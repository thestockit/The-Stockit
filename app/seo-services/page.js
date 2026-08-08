import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const seoServices = getServiceBySlug('seo-services');
export const metadata = buildServiceMetadata(seoServices);

export default function SeoServicesPage() {
  return <PakistanServicePage service={seoServices} />;
}
