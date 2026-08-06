import PakistanServicePage from '@/components/PakistanServicePage';
import { influencerMarketing } from '@/Data/PakistanServices/influencer-marketing';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(influencerMarketing);

export default function InfluencerMarketingPage() {
  return <PakistanServicePage service={influencerMarketing} />;
}
