import { BadgeCheck, FileCheck, Users, Headset, ShieldCheck, CalendarCheck } from 'lucide-react';

const defaultBadges = [
  { icon: BadgeCheck, label: 'PSEB Registered' },
  { icon: FileCheck, label: 'SECP Incorporated' },
  { icon: Users, label: '100+ Pakistani Clients' },
  { icon: Headset, label: 'Urdu & English Support' },
  { icon: ShieldCheck, label: 'NDA Friendly' },
  { icon: CalendarCheck, label: 'Weekly PKR Invoices' },
];

const TrustBar = ({
  headline = 'Trusted by 100+ Pakistani startups, agencies & e-commerce brands',
  counter = 'Serving Businesses in Islamabad, Rawalpindi & Lahore Since 2020',
  badges = defaultBadges,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50/60 via-white to-purple-50/60">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
          {headline}
        </p>

        <ul className="mt-7 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {badges.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
            >
              <Icon className="h-4 w-4 text-green-600" aria-hidden />
              {label}
            </li>
          ))}
        </ul>

        <p className="mt-7 text-center text-sm font-bold text-gray-800">
          {counter}
        </p>
      </div>
    </section>
  );
};

export default TrustBar;
