import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const socialMediaMarketing = getServiceBySlug('social-media-marketing');
export const metadata = buildServiceMetadata(socialMediaMarketing);

export default function SocialMediaMarketingPage() {
  return <PakistanServicePage service={socialMediaMarketing} />;
}
