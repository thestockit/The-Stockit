import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const aiVoiceAgents = getServiceBySlug('ai-voice-agents');
export const metadata = buildServiceMetadata(aiVoiceAgents);

export default function AiVoiceAgentsPage() {
  return <PakistanServicePage service={aiVoiceAgents} />;
}
