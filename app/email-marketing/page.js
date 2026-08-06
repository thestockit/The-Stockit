import PakistanServicePage from '@/components/PakistanServicePage';
import { emailMarketing } from '@/Data/PakistanServices/email-marketing';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(emailMarketing);

export default function EmailMarketingPage() {
  return <PakistanServicePage service={emailMarketing} />;
}
