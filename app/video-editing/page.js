import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const videoEditing = getServiceBySlug('video-editing');
export const metadata = buildServiceMetadata(videoEditing);

export default function VideoEditingPage() {
  return <PakistanServicePage service={videoEditing} />;
}
