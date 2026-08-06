import PakistanServicePage from '@/components/PakistanServicePage';
import { contentCreation } from '@/Data/PakistanServices/content-creation';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(contentCreation);

export default function ContentCreationPage() {
  return <PakistanServicePage service={contentCreation} />;
}
