import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const influencerMarketing = getServiceBySlug('influencer-marketing');
export const metadata = buildServiceMetadata(influencerMarketing);

export default function InfluencerMarketingPage() {
  return <PakistanServicePage service={influencerMarketing} />;
}
