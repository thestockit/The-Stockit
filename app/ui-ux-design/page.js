import PakistanServicePage from '@/components/PakistanServicePage';
import { uiUxDesign } from '@/Data/PakistanServices/ui-ux-design';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(uiUxDesign);

export default function UiUxDesignPage() {
  return <PakistanServicePage service={uiUxDesign} />;
}
