import PakistanServicePage from '@/components/PakistanServicePage';
import { aiDocumentProcessing } from '@/Data/PakistanServices/ai-document-processing';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(aiDocumentProcessing);

export default function AiDocumentProcessingPage() {
  return <PakistanServicePage service={aiDocumentProcessing} />;
}
