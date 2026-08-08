import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const cmsDevelopment = getServiceBySlug('cms-development');
export const metadata = buildServiceMetadata(cmsDevelopment);

export default function CmsDevelopmentPage() {
  return <PakistanServicePage service={cmsDevelopment} />;
}
