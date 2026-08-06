import PakistanServicePage from '@/components/PakistanServicePage';
import { webDesign } from '@/Data/PakistanServices/web-design';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(webDesign);

export default function WebDesignPage() {
  return <PakistanServicePage service={webDesign} />;
}
