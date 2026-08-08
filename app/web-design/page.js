import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const webDesign = getServiceBySlug('web-design');
export const metadata = buildServiceMetadata(webDesign);

export default function WebDesignPage() {
  return <PakistanServicePage service={webDesign} />;
}
