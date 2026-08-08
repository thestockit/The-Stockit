import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const uiUxDesign = getServiceBySlug('ui-ux-design');
export const metadata = buildServiceMetadata(uiUxDesign);

export default function UiUxDesignPage() {
  return <PakistanServicePage service={uiUxDesign} />;
}
