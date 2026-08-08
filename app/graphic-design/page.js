import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const graphicDesign = getServiceBySlug('graphic-design');
export const metadata = buildServiceMetadata(graphicDesign);

export default function GraphicDesignPage() {
  return <PakistanServicePage service={graphicDesign} />;
}
