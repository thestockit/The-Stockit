import PakistanServicePage from '@/components/PakistanServicePage';
import { contentMarketing } from '@/Data/PakistanServices/content-marketing';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(contentMarketing);

export default function ContentMarketingPage() {
  return <PakistanServicePage service={contentMarketing} />;
}
