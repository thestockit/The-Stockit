import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const webflowDevelopment = getServiceBySlug('webflow-development');
export const metadata = buildServiceMetadata(webflowDevelopment);

export default function WebflowDevelopmentPage() {
  return <PakistanServicePage service={webflowDevelopment} />;
}
