import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const aiAgents = getServiceBySlug('ai-agents');
export const metadata = buildServiceMetadata(aiAgents);

export default function AiAgentsPage() {
  return <PakistanServicePage service={aiAgents} />;
}
