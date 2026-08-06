import PakistanServicePage from '@/components/PakistanServicePage';
import { webflowDevelopment } from '@/Data/PakistanServices/webflow-development';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(webflowDevelopment);

export default function WebflowDevelopmentPage() {
  return <PakistanServicePage service={webflowDevelopment} />;
}
