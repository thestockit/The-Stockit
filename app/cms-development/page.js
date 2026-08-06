import PakistanServicePage from '@/components/PakistanServicePage';
import { cmsDevelopment } from '@/Data/PakistanServices/cms-development';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(cmsDevelopment);

export default function CmsDevelopmentPage() {
  return <PakistanServicePage service={cmsDevelopment} />;
}
