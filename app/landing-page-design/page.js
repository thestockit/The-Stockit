import PakistanServicePage from '@/components/PakistanServicePage';
import { getServiceBySlug } from '@/Data/PakistanServices';
import { buildServiceMetadata } from '@/Data/PakistanServices/_metadata';

const landingPageDesign = getServiceBySlug('landing-page-design');
export const metadata = buildServiceMetadata(landingPageDesign);

export default function LandingPageDesignPage() {
  return <PakistanServicePage service={landingPageDesign} />;
}
