import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const mobileDevelopment = getServiceBySlug('mobile-development');
export const metadata = buildServiceMetadata(mobileDevelopment);

export default function MobileDevelopmentPage() {
  return <PakistanServicePage service={mobileDevelopment} />;
}
