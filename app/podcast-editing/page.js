import PakistanServicePage from '@/components/PakistanServicePage';
import { podcastEditing } from '@/Data/PakistanServices/podcast-editing';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(podcastEditing);

export default function PodcastEditingPage() {
  return <PakistanServicePage service={podcastEditing} />;
}
