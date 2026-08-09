import Link from "next/link";
import {
  Banknote,
  Binary,
  Braces,
  Dices,
  FileSearch,
  FileText,
  Fingerprint,
  Globe,
  Hash,
  Key,
  Link as LinkIcon,
  Network,
  Palette,
  QrCode,
  Search,
  Shuffle,
  Thermometer,
  Type,
} from "lucide-react";

const ICONS = {
  globe: Globe,
  search: Search,
  "file-search": FileSearch,
  network: Network,
  key: Key,
  type: Type,
  fingerprint: Fingerprint,
  braces: Braces,
  binary: Binary,
  link: LinkIcon,
  "file-text": FileText,
  "qr-code": QrCode,
  dices: Dices,
  palette: Palette,
  hash: Hash,
  banknote: Banknote,
  thermometer: Thermometer,
  shuffle: Shuffle,
};

const ToolsCard = ({ icon, title, description, url, badge }) => {
  const Icon = ICONS[icon] || Globe;
  return (
    <Link
      href={url}
      className="group relative flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_20px_40px_-24px_rgba(79,70,229,0.4)]"
    >
      {badge && (
        <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
          {badge}
        </span>
      )}
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md shadow-blue-600/30 transition group-hover:scale-110">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-lg font-bold leading-snug text-black transition group-hover:text-blue-700">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 transition group-hover:gap-2">
        Open tool
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
};

export default ToolsCard;
