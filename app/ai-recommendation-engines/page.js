import PakistanServicePage from '@/components/PakistanServicePage';
import { aiRecommendationEngines } from '@/Data/PakistanServices/ai-recommendation-engines';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(aiRecommendationEngines);

export default function AiRecommendationEnginesPage() {
  return <PakistanServicePage service={aiRecommendationEngines} />;
}
