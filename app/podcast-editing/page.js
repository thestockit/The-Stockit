import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const podcastEditing = getServiceBySlug('podcast-editing');
export const metadata = buildServiceMetadata(podcastEditing);

export default function PodcastEditingPage() {
  return <PakistanServicePage service={podcastEditing} />;
}
