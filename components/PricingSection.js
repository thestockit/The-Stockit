import Link from 'next/link';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

const defaultPricing = {
  starter: {
    name: 'Starter',
    price: 'Rs. 50,000',
    tagline: 'Perfect for getting started',
    features: [
      'Core scope delivered in 2-3 weeks',
      'WhatsApp Business setup',
      'Urdu + English basics',
      'Standard delivery & support',
    ],
  },
  business: {
    name: 'Business',
    price: 'Rs. 150,000',
    tagline: 'For growing Pakistani businesses',
    features: [
      'Full scope in 4-6 weeks',
      'JazzCash & Easypaisa integration',
      'FBR-compliant invoicing',
      'Priority support & revisions',
    ],
    highlight: true,
  },
  enterprise: {
    name: 'Enterprise',
    price: 'Custom Quote',
    tagline: 'For large teams & complex builds',
    features: [
      'Tailored architecture & SLA',
      'Dedicated project manager',
      'Advanced integrations & hosting',
      'Ongoing maintenance retainer',
    ],
  },
};

const PricingSection = ({
  eyebrow = 'Pakistani pricing',
  titleA = 'Transparent pricing',
  titleB = 'in PKR',
  description = 'No hidden costs, no dollars-to-rupees confusion. Every package is priced for the Pakistani market.',
  pricing = defaultPricing,
  note = 'Flexible payment plans available for Pakistani SMEs — pay in instalments with JazzCash, Easypaisa, or bank transfer.',
}) => {
  const tiers = [
    { ...pricing.starter, highlight: false },
    { ...pricing.business, highlight: true },
    { ...pricing.enterprise, highlight: false },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            {eyebrow}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {titleA}{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {titleB}
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                tier.highlight
                  ? 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl shadow-blue-600/25 lg:-translate-y-3'
                  : 'border border-gray-100 bg-white text-gray-900 shadow-[0_4px_20px_-10px_rgba(79,70,229,0.18)]'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-md">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-bold tracking-tight">{tier.name} Package</h3>
              <p className={`mt-1 text-sm ${tier.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                {tier.tagline}
              </p>

              <p className="mt-6 text-4xl font-extrabold tracking-tight">{tier.price}</p>
              <p className={`mt-1 text-xs font-medium uppercase tracking-wider ${tier.highlight ? 'text-blue-100/80' : 'text-gray-400'}`}>
                One-time, fixed price
              </p>

              <ul className="mt-8 space-y-3.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`mt-0.5 h-5 w-5 shrink-0 ${tier.highlight ? 'text-white' : 'text-green-600'}`}
                      aria-hidden
                    />
                    <span className={`text-sm leading-relaxed ${tier.highlight ? 'text-blue-50' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`group mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-white text-blue-700 hover:bg-blue-50'
                    : 'border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                {tier.name === 'Enterprise' ? 'Request Custom Quote' : 'Get Started'}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-medium text-gray-600">
          {note}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
