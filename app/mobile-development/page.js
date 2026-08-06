import PakistanServicePage from '@/components/PakistanServicePage';
import { mobileDevelopment } from '@/Data/PakistanServices/mobile-development';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(mobileDevelopment);

export default function MobileDevelopmentPage() {
  return <PakistanServicePage service={mobileDevelopment} />;
}
