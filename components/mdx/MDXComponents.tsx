import type { DetailedHTMLProps, ReactNode, TableHTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { nodeToText, slugify } from '@/lib/slugify';

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

const headingId = (children: ReactNode) => slugify(nodeToText(children));

/* ------------------------------------------------------------------ */
/*  Typography                                                         */
/* ------------------------------------------------------------------ */

const H2 = ({ children }: { children?: ReactNode }) => (
  <h2
    id={headingId(children)}
    className="mb-4 mt-12 scroll-mt-28 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-[1.65rem]"
  >
    {children}
  </h2>
);

const H3 = ({ children }: { children?: ReactNode }) => (
  <h3
    id={headingId(children)}
    className="mb-3 mt-9 scroll-mt-28 text-xl font-bold tracking-tight text-gray-900"
  >
    {children}
  </h3>
);

const H4 = ({ children }: { children?: ReactNode }) => (
  <h4 id={headingId(children)} className="mb-2 mt-8 scroll-mt-28 text-lg font-bold text-gray-900">
    {children}
  </h4>
);

const P = ({ children }: { children?: ReactNode }) => (
  <p className="my-4 text-[15px] leading-[1.8] text-gray-600">{children}</p>
);

const A = ({ href, children }: { href?: string; children?: ReactNode }) => {
  if (!href) return <span className="font-semibold text-blue-600">{children}</span>;
  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link href={href} className="font-semibold text-blue-600 underline-offset-2 hover:underline">
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-blue-600 underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
};

const UL = ({ children }: { children?: ReactNode }) => (
  <ul className="my-4 list-disc space-y-2 pl-6 text-[15px] leading-relaxed text-gray-600 marker:text-blue-500">
    {children}
  </ul>
);

const OL = ({ children }: { children?: ReactNode }) => (
  <ol className="my-4 list-decimal space-y-2 pl-6 text-[15px] leading-relaxed text-gray-600 marker:font-semibold marker:text-blue-600">
    {children}
  </ol>
);

const LI = ({ children }: { children?: ReactNode }) => <li>{children}</li>;

const Strong = ({ children }: { children?: ReactNode }) => (
  <strong className="font-semibold text-gray-900">{children}</strong>
);

const Em = ({ children }: { children?: ReactNode }) => <em className="italic">{children}</em>;

const Blockquote = ({ children }: { children?: ReactNode }) => (
  <blockquote className="my-6 rounded-r-2xl border-l-4 border-indigo-200 bg-indigo-50/60 px-5 py-4 text-[15px] italic leading-relaxed text-gray-700">
    {children}
  </blockquote>
);

const HR = () => <hr className="my-10 border-gray-200" />;

const MDXImage = ({
  src,
  alt,
  width,
  height,
}: {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}) => {
  if (!src) return null;
  const isExternal = /^https?:\/\//.test(src);
  const numW = typeof width === 'number' ? width : parseInt(width || '', 10);
  const numH = typeof height === 'number' ? height : parseInt(height || '', 10);
  const ratio = numW && numH ? { aspectRatio: `${numW} / ${numH}` } : {};
  const style = { position: 'relative' as const, ...ratio };

  return (
    <figure className="my-8">
      <div
        className="aspect-video w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
        style={style}
      >
        {isExternal ? (
          // eslint-disable-next-line @next/next/no-img-element -- dynamic external image, no local optimization applies
          <img
            src={src}
            alt={alt || ''}
            loading="lazy"
            width={numW || 1200}
            height={numH || 675}
            className="h-full w-full object-contain"
          />
        ) : (
          <Image
            src={src}
            alt={alt || ''}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover"
          />
        )}
      </div>
      {alt && <figcaption className="mt-2 text-center text-xs text-gray-400">{alt}</figcaption>}
    </figure>
  );
};

const Table = ({
  children,
  ...rest
}: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) => (
  <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
    <table className="w-full min-w-[480px] border-collapse text-left text-sm" {...rest}>
      {children}
    </table>
  </div>
);

const TH = ({ children, scope }: { children?: ReactNode; scope?: string }) => (
  <th
    scope={scope || 'col'}
    className="border-b border-gray-200 bg-gray-50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500"
  >
    {children}
  </th>
);

const TD = ({ children }: { children?: ReactNode }) => (
  <td className="border-b border-gray-100 px-4 py-3 align-top text-[13.5px] leading-relaxed text-gray-600">
    {children}
  </td>
);

const TR = ({ children }: { children?: ReactNode }) => (
  <tr className="transition-colors hover:bg-gray-50/70">{children}</tr>
);

/* ------------------------------------------------------------------ */
/*  Rich custom components (pure RSC — no client JS)                   */
/* ------------------------------------------------------------------ */

export interface BarDatum {
  label: string;
  value: number;
}

export const BarChartSVG = ({ data, title }: { data: BarDatum[]; title: string }) => {
  const width = 640;
  const height = 280;
  const padLeft = 8;
  const padTop = 30;
  const padBottom = 42;
  const innerHeight = height - padTop - padBottom;
  const max = Math.max(...data.map((d) => d.value), 1);
  const n = data.length;
  const slot = (width - padLeft * 2) / n;
  const barWidth = Math.min(slot * 0.52, 56);

  return (
    <figure className="my-8">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={title}
        className="h-auto w-full"
      >
        <title>{title}</title>
        <desc>{`Bar chart: ${data.map((d) => `${d.label} ${d.value}`).join(', ')}`}</desc>
        {[0.25, 0.5, 0.75, 1].map((f) => {
          const y = padTop + innerHeight - innerHeight * f;
          return (
            <g key={f}>
              <line
                x1={padLeft}
                x2={width - padLeft}
                y1={y}
                y2={y}
                stroke="#eef0f4"
                strokeWidth="1"
              />
              <text
                x={width - padLeft - 2}
                y={y + 4}
                textAnchor="end"
                fontSize="11"
                fill="#9ca3af"
              >
                {Math.round(max * f)}
              </text>
            </g>
          );
        })}
        {data.map((d, i) => {
          const barHeight = (d.value / max) * innerHeight;
          const x = padLeft + slot * i + (slot - barWidth) / 2;
          const y = padTop + innerHeight - barHeight;
          return (
            <g key={`${d.label}-${i}`}>
              <rect x={x} y={y} width={barWidth} height={barHeight} rx="6" fill="#6366f1" />
              <text
                x={x + barWidth / 2}
                y={y - 8}
                textAnchor="middle"
                fontSize="12"
                fontWeight="700"
                fill="#312e81"
              >
                {d.value}
              </text>
              <text
                x={x + barWidth / 2}
                y={height - padBottom + 18}
                textAnchor="middle"
                fontSize="11.5"
                fontWeight="500"
                fill="#6b7280"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-1 text-center text-xs text-gray-400">{title}</figcaption>
    </figure>
  );
};

export interface ComparisonRow {
  [key: string]: string | number;
}

export const ComparisonTable = ({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: (string | number)[][];
  caption?: string;
}) => (
  <figure className="my-8">
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr>
            {headers.map((h) => (
              <TH key={h}>{h}</TH>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <TR key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={
                    j === 0
                      ? 'border-b border-gray-100 px-4 py-3 text-[13.5px] font-semibold text-gray-900'
                      : 'border-b border-gray-100 px-4 py-3 text-[13.5px] leading-relaxed text-gray-600'
                  }
                >
                  {cell}
                </td>
              ))}
            </TR>
          ))}
        </tbody>
      </table>
    </div>
    {caption && <figcaption className="mt-2 text-center text-xs text-gray-400">{caption}</figcaption>}
  </figure>
);

type CalloutType = 'info' | 'warning' | 'success';

const calloutConfig: Record<
  CalloutType,
  { wrapper: string; label: string; body: string; icon: ReactNode }
> = {
  info: {
    wrapper: 'border-blue-200 bg-blue-50/70',
    label: 'text-blue-700',
    body: 'text-blue-800',
    icon: <Info className="h-5 w-5 shrink-0" aria-hidden="true" />,
  },
  warning: {
    wrapper: 'border-amber-300 bg-amber-50/80',
    label: 'text-amber-800',
    body: 'text-amber-900',
    icon: <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />,
  },
  success: {
    wrapper: 'border-emerald-300 bg-emerald-50/80',
    label: 'text-emerald-800',
    body: 'text-emerald-900',
    icon: <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />,
  },
};

export const Callout = ({
  type = 'info',
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children?: ReactNode;
}) => {
  const c = calloutConfig[type];
  return (
    <aside
      role="note"
      aria-label={title || type}
      className={`my-8 rounded-2xl border-l-4 p-5 ${c.wrapper}`}
    >
      <div className={`flex items-center gap-2.5 text-sm font-bold ${c.label}`}>
        {c.icon}
        {title && <span>{title}</span>}
      </div>
      {children && (
        <div className={`mt-2 text-sm leading-relaxed ${c.body}`}>
          {children}
        </div>
      )}
    </aside>
  );
};

export const RatingStars = ({ value, max = 5 }: { value: number; max?: number }) => {
  const clamped = Math.max(0, Math.min(value, max));
  const percent = (clamped / max) * 100;
  const label = `${Number.isInteger(clamped) ? clamped : clamped.toFixed(1)} out of ${max} stars`;
  const stars = '★★★★★'.slice(0, max).padEnd(max, '★');
  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      className="relative inline-flex align-middle leading-none"
    >
      <span aria-hidden="true" className="tracking-tight text-gray-300">
        {stars}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden whitespace-nowrap tracking-tight text-amber-400"
        style={{ width: `${percent}%` }}
      >
        {stars}
      </span>
    </span>
  );
};

export const StatCard = ({
  title,
  value,
  trend,
}: {
  title: string;
  value: string;
  trend?: string;
}) => {
  const positive = typeof trend === 'string' && trend.startsWith('+');
  return (
    <div className="my-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 shadow-[0_8px_30px_-14px_rgba(79,70,229,0.25)]">
      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{title}</p>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900">{value}</p>
      {trend && (
        <p
          className={`mt-1.5 text-sm font-semibold ${positive ? 'text-emerald-600' : 'text-red-500'}`}
        >
          {trend}
        </p>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Component map                                                      */
/* ------------------------------------------------------------------ */

export const MDXComponents = {
  h1: H2,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H3,
  h6: H3,
  p: P,
  a: A,
  ul: UL,
  ol: OL,
  li: LI,
  strong: Strong,
  b: Strong,
  em: Em,
  i: Em,
  blockquote: Blockquote,
  hr: HR,
  img: MDXImage,
  table: Table,
  tr: TR,
  th: TH,
  td: TD,
  Callout,
  BarChartSVG,
  ComparisonTable,
  RatingStars,
  StatCard,
} as const;
