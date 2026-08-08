import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const webDevelopment = getServiceBySlug('web-development');
export const metadata = buildServiceMetadata(webDevelopment);

export default function WebDevelopmentPage() {
  return <PakistanServicePage service={webDevelopment} />;
}
