import PakistanServicePage from '@/components/PakistanServicePage';
import { shopifyDevelopment } from '@/Data/PakistanServices/shopify-development';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(shopifyDevelopment);

export default function ShopifyDevelopmentPage() {
  return <PakistanServicePage service={shopifyDevelopment} />;
}
