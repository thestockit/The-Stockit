import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const brandingIdentity = getServiceBySlug('branding-identity');
export const metadata = buildServiceMetadata(brandingIdentity);

export default function BrandingIdentityPage() {
  return <PakistanServicePage service={brandingIdentity} />;
}
