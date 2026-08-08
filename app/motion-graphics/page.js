import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const motionGraphics = getServiceBySlug('motion-graphics');
export const metadata = buildServiceMetadata(motionGraphics);

export default function MotionGraphicsPage() {
  return <PakistanServicePage service={motionGraphics} />;
}
