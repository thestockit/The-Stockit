import { Banknote, CheckCircle2, Landmark, Languages, Smartphone, Wallet } from "lucide-react";

const paymentMethods = [
  {
    icon: Landmark,
    label: "Bank Transfer",
    note: "Direct PKR transfer",
  },
  {
    icon: Smartphone,
    label: "JazzCash",
    note: "Mobile wallet",
  },
  {
    icon: Wallet,
    label: "Easypaisa",
    note: "Mobile wallet",
  },
  {
    icon: Banknote,
    label: "Cash on Delivery",
    note: "On project milestones",
  },
];

const LocalPayments = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-indigo-50/60">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                Local payments
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Simple, local payments for Pakistani clients
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-gray-600">
                We accept Bank Transfer, JazzCash, Easypaisa, and Cash on Delivery
                for local clients — with a transparent 50% advance, 50% upon
                completion structure.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Banknote className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-bold text-emerald-900">
                    50% advance, 50% upon completion
                  </p>
                  <p className="text-xs text-emerald-700">
                    Pay in PKR — no dollar conversion, no international fees
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 border-t border-gray-200 bg-white/70 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {paymentMethods.map(({ icon: Icon, label, note }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3.5 shadow-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{label}</p>
                      <p className="text-xs text-gray-500">{note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 flex items-start gap-3 rounded-2xl border border-purple-200 bg-purple-50/70 px-5 py-4">
                <Languages className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" aria-hidden />
                <div>
                  <p className="text-sm font-bold text-purple-900">
                    We provide services in both Urdu and English
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-purple-700" dir="rtl">
                    ہم اردو اور انگریزی دونوں زبانوں میں خدمات فراہم کرتے ہیں
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalPayments;
