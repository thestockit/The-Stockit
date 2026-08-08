import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const copywriting = getServiceBySlug('copywriting');
export const metadata = buildServiceMetadata(copywriting);

export default function CopywritingPage() {
  return <PakistanServicePage service={copywriting} />;
}
