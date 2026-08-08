import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const aiRecommendationEngines = getServiceBySlug('ai-recommendation-engines');
export const metadata = buildServiceMetadata(aiRecommendationEngines);

export default function AiRecommendationEnginesPage() {
  return <PakistanServicePage service={aiRecommendationEngines} />;
}
