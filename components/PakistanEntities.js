import { Award, BadgeCheck, FileCheck, Scale, ShoppingBag, Smartphone, Wallet } from "lucide-react";

const entities = [
  {
    icon: Award,
    name: "PSEB",
    note: "Pakistan Software Export Board",
  },
  {
    icon: Scale,
    name: "SECP",
    note: "Incorporated company",
  },
  {
    icon: FileCheck,
    name: "FBR",
    note: "Compliant PKR invoicing",
  },
  {
    icon: ShoppingBag,
    name: "Daraz",
    note: "Store integrations",
  },
  {
    icon: Smartphone,
    name: "JazzCash",
    note: "Payment-ready builds",
  },
  {
    icon: Wallet,
    name: "Easypaisa",
    note: "Payment-ready builds",
  },
];

const PakistanEntities = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-600">
            <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
            Built for the Pakistani market
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Registered, regulated & integrated with Pakistan&apos;s digital ecosystem
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {entities.map(({ icon: Icon, name, note }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md"
            >
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="text-sm font-extrabold tracking-tight text-gray-900">{name}</p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PakistanEntities;
