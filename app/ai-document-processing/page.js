import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const aiDocumentProcessing = getServiceBySlug('ai-document-processing');
export const metadata = buildServiceMetadata(aiDocumentProcessing);

export default function AiDocumentProcessingPage() {
  return <PakistanServicePage service={aiDocumentProcessing} />;
}
