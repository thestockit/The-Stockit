import HubPage from '@/components/HubPage';
import { hubs } from '@/Data/Hubs/hubs';
import { buildHubMetadata } from '@/Data/Hubs/_metadata';

const hub = hubs.find((item) => item.slug === 'e-commerce');

export const metadata = buildHubMetadata(hub);

export default function EcommerceHubPage() {
  return <HubPage hub={hub} />;
}
