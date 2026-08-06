import PakistanServicePage from '@/components/PakistanServicePage';
import { mobileAppDesign } from '@/Data/PakistanServices/mobile-app-design';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(mobileAppDesign);

export default function MobileAppDesignPage() {
  return <PakistanServicePage service={mobileAppDesign} />;
}
