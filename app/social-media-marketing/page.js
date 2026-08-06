import PakistanServicePage from '@/components/PakistanServicePage';
import { socialMediaMarketing } from '@/Data/PakistanServices/social-media-marketing';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(socialMediaMarketing);

export default function SocialMediaMarketingPage() {
  return <PakistanServicePage service={socialMediaMarketing} />;
}
