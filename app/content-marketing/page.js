import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const contentMarketing = getServiceBySlug('content-marketing');
export const metadata = buildServiceMetadata(contentMarketing);

export default function ContentMarketingPage() {
  return <PakistanServicePage service={contentMarketing} />;
}
