import PakistanServicePage from '@/components/PakistanServicePage';
import { landingPageDesign } from '@/Data/PakistanServices/landing-page-design';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

export const metadata = buildServiceMetadata(landingPageDesign);

export default function LandingPageDesignPage() {
  return <PakistanServicePage service={landingPageDesign} />;
}
