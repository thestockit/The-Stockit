import PakistanServicePage from '@/components/PakistanServicePage';
import { aiWorkflowAutomation } from '@/Data/PakistanServices/ai-workflow-automation';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(aiWorkflowAutomation);

export default function AiWorkflowAutomationPage() {
  return <PakistanServicePage service={aiWorkflowAutomation} />;
}
