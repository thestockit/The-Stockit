import PakistanServicePage from '@/components/PakistanServicePage';
import { videoEditing } from '@/Data/PakistanServices/video-editing';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(videoEditing);

export default function VideoEditingPage() {
  return <PakistanServicePage service={videoEditing} />;
}
