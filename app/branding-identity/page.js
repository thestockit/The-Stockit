import PakistanServicePage from '@/components/PakistanServicePage';
import { brandingIdentity } from '@/Data/PakistanServices/branding-identity';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(brandingIdentity);

export default function BrandingIdentityPage() {
  return <PakistanServicePage service={brandingIdentity} />;
}
