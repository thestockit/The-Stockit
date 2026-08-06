import {
  Wallet,
  MessageCircle,
  Globe,
  FileCheck,
  Languages,
  MonitorSmartphone,
  ShoppingBag,
  Zap,
  ShieldCheck,
  Rocket,
  Search,
  Gauge,
  BadgeCheck,
  TrendingUp,
  Users,
  PenTool,
  Code2,
  BarChart3,
  Lock,
  Palette,
  Layout,
  LifeBuoy,
  Smartphone,
  Truck,
  Handshake,
  CalendarClock,
} from 'lucide-react';

const ICONS = {
  wallet: Wallet,
  whatsapp: MessageCircle,
  globe: Globe,
  invoice: FileCheck,
  urdu: Languages,
  responsive: MonitorSmartphone,
  'shopping-bag': ShoppingBag,
  zap: Zap,
  shield: ShieldCheck,
  rocket: Rocket,
  seo: Search,
  speed: Gauge,
  badge: BadgeCheck,
  'trending-up': TrendingUp,
  users: Users,
  pen: PenTool,
  code: Code2,
  analytics: BarChart3,
  lock: Lock,
  palette: Palette,
  layout: Layout,
  support: LifeBuoy,
  smartphone: Smartphone,
  delivery: Truck,
  handshake: Handshake,
  timeline: CalendarClock,
};

const defaultItems = [
  {
    icon: 'whatsapp',
    title: 'WhatsApp Business integration',
    description:
      'Connect WhatsApp to your website and order flow so customers can chat and buy the way Pakistanis actually prefer.',
  },
  {
    icon: 'wallet',
    title: 'JazzCash & Easypaisa payments',
    description:
      'Accept mobile wallet payments at checkout — the default payment method for millions of Pakistani shoppers.',
  },
  {
    icon: 'urdu',
    title: 'Urdu + English support',
    description:
      'Bilingual content and interfaces so your brand speaks to customers in both languages from day one.',
  },
  {
    icon: 'invoice',
    title: 'FBR-compliant invoicing',
    description:
      'Proper tax invoices and records generated automatically, so your business stays audit-ready.',
  },
  {
    icon: 'globe',
    title: 'Local hosting options',
    description:
      'Fast, reliable hosting with Transworld, PTCL Cloud, or leading providers — picked for speed in Pakistan.',
  },
  {
    icon: 'analytics',
    title: 'Growth analytics & reports',
    description:
      'Clear dashboards that show leads, orders, and revenue so you always know what is working.',
  },
];

const FeaturesSection = ({
  eyebrow = 'What you get',
  titleA = 'Everything a Pakistani',
  titleB = 'business needs',
  description = 'Every engagement is built around how business actually works in Pakistan — from payments to WhatsApp to Urdu support.',
  items = defaultItems,
}) => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {titleA}{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {titleB}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = ICONS[item.icon] || BadgeCheck;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-14px_rgba(79,70,229,0.32)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-green-600/25 mb-5">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
