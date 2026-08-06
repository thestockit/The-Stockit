import PakistanServicePage from '@/components/PakistanServicePage';
import { seoServices } from '@/Data/PakistanServices/seo-services';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(seoServices);

export default function SeoServicesPage() {
  return <PakistanServicePage service={seoServices} />;
}
