import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const shopifyDevelopment = getServiceBySlug('shopify-development');
export const metadata = buildServiceMetadata(shopifyDevelopment);

export default function ShopifyDevelopmentPage() {
  return <PakistanServicePage service={shopifyDevelopment} />;
}
