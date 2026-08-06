import PakistanServicePage from '@/components/PakistanServicePage';
import { aiAssistants } from '@/Data/PakistanServices/ai-assistants';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(aiAssistants);

export default function AiAssistantsPage() {
  return <PakistanServicePage service={aiAssistants} />;
}
