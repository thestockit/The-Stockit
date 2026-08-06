import PakistanServicePage from '@/components/PakistanServicePage';
import { aiAgents } from '@/Data/PakistanServices/ai-agents';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(aiAgents);

export default function AiAgentsPage() {
  return <PakistanServicePage service={aiAgents} />;
}
