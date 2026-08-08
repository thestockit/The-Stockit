import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const aiAssistants = getServiceBySlug('ai-assistants');
export const metadata = buildServiceMetadata(aiAssistants);

export default function AiAssistantsPage() {
  return <PakistanServicePage service={aiAssistants} />;
}
