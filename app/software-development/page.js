import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const softwareDevelopment = getServiceBySlug('software-development');
export const metadata = buildServiceMetadata(softwareDevelopment);

export default function SoftwareDevelopmentPage() {
  return <PakistanServicePage service={softwareDevelopment} />;
}
