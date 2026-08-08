import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const aiWorkflowAutomation = getServiceBySlug('ai-workflow-automation');
export const metadata = buildServiceMetadata(aiWorkflowAutomation);

export default function AiWorkflowAutomationPage() {
  return <PakistanServicePage service={aiWorkflowAutomation} />;
}
