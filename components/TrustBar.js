import { ShieldCheck, FileText, CalendarCheck, Headset } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: 'NDA friendly' },
  { icon: FileText, label: 'Fixed-price quotes' },
  { icon: CalendarCheck, label: 'Weekly updates' },
  { icon: Headset, label: 'Post-launch support' },
];

const TrustBar = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50/60 via-white to-purple-50/60">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
          Trusted by startups, agencies &amp; enterprises across the US, UK &amp; Europe
        </p>

        <ul className="mt-7 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {badges.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
            >
              <Icon className="h-4 w-4 text-blue-600" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
