import PakistanServicePage from '@/components/PakistanServicePage';
import { aiVoiceAgents } from '@/Data/PakistanServices/ai-voice-agents';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(aiVoiceAgents);

export default function AiVoiceAgentsPage() {
  return <PakistanServicePage service={aiVoiceAgents} />;
}
