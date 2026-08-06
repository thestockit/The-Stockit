import PakistanServicePage from '@/components/PakistanServicePage';
import { softwareDevelopment } from '@/Data/PakistanServices/software-development';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(softwareDevelopment);

export default function SoftwareDevelopmentPage() {
  return <PakistanServicePage service={softwareDevelopment} />;
}
