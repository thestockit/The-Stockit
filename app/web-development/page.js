import PakistanServicePage from '@/components/PakistanServicePage';
import { webDevelopment } from '@/Data/PakistanServices/web-development';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(webDevelopment);

export default function WebDevelopmentPage() {
  return <PakistanServicePage service={webDevelopment} />;
}
