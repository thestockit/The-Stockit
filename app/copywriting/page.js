import PakistanServicePage from '@/components/PakistanServicePage';
import { copywriting } from '@/Data/PakistanServices/copywriting';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(copywriting);

export default function CopywritingPage() {
  return <PakistanServicePage service={copywriting} />;
}
