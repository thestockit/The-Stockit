import PakistanServicePage from '@/components/PakistanServicePage';
import { graphicDesign } from '@/Data/PakistanServices/graphic-design';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(graphicDesign);

export default function GraphicDesignPage() {
  return <PakistanServicePage service={graphicDesign} />;
}
