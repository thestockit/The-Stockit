import CopyButton from "./CopyButton";

const SpecList = ({ rows = [], emptyMessage = "No results yet." }) => {
  if (rows.length === 0) {
    return (
      <p className="rounded-2xl border border-gray-200 bg-white px-6 py-10 text-center text-sm font-medium text-gray-400">
        {emptyMessage}
      </p>
    );
  }

  return (
    <dl className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {rows.map((row, index) => (
        <div
          key={`${row.label}-${index}`}
          className={`group flex items-center gap-4 px-4 py-3 transition-colors hover:bg-gray-50/70 sm:px-5 ${
            index > 0 ? "border-t border-gray-100" : ""
          }`}
        >
          <dt className="w-32 shrink-0 text-xs font-semibold uppercase tracking-wide text-gray-400 sm:w-40">
            {row.label}
          </dt>
          <dd className="min-w-0 flex-1 break-words text-sm font-medium text-gray-800">
            {String(row.value)}
          </dd>
          {row.copyable && <CopyButton value={row.value} label={row.label} />}
        </div>
      ))}
    </dl>
  );
};

export default SpecList;
