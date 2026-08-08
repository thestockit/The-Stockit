import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const contentCreation = getServiceBySlug('content-creation');
export const metadata = buildServiceMetadata(contentCreation);

export default function ContentCreationPage() {
  return <PakistanServicePage service={contentCreation} />;
}
