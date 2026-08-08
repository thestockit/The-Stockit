import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const mobileAppDesign = getServiceBySlug('mobile-app-design');
export const metadata = buildServiceMetadata(mobileAppDesign);

export default function MobileAppDesignPage() {
  return <PakistanServicePage service={mobileAppDesign} />;
}
