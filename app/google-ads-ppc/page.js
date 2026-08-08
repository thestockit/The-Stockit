import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const googleAdsPpc = getServiceBySlug('google-ads-ppc');
export const metadata = buildServiceMetadata(googleAdsPpc);

export default function GoogleAdsPpcPage() {
  return <PakistanServicePage service={googleAdsPpc} />;
}
