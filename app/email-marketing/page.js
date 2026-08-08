import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const emailMarketing = getServiceBySlug('email-marketing');
export const metadata = buildServiceMetadata(emailMarketing);

export default function EmailMarketingPage() {
  return <PakistanServicePage service={emailMarketing} />;
}
