import PakistanServicePage from '@/components/PakistanServicePage';
import { motionGraphics } from '@/Data/PakistanServices/motion-graphics';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(motionGraphics);

export default function MotionGraphicsPage() {
  return <PakistanServicePage service={motionGraphics} />;
}
