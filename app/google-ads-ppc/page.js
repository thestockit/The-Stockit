import PakistanServicePage from '@/components/PakistanServicePage';
import { googleAdsPpc } from '@/Data/PakistanServices/google-ads-ppc';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(googleAdsPpc);

export default function GoogleAdsPpcPage() {
  return <PakistanServicePage service={googleAdsPpc} />;
}
