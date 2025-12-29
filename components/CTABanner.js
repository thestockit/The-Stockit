import Image from "next/image";
import Link from "next/link";

export default function GlassCTABanner({
  title = "Need a Custom Solution?",
  description = "Can't find what you're looking for? We create tailored solutions for unique business needs.",
  ctaText = "Request Custom Service",
  ctaLink = "/contact",
  logoSrc = "/favicon.ico",
}) {
  return (
    <div className="w-full px-10 py-8">
      <div
        className="
          max-w-6xl mx-auto
          rounded-2xl
          border border-indigo-100
          bg-gradient-to-r from-indigo-50 to-pink-50
          p-6
        "
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left content */}
          <div className="flex items-start gap-4">
            
            {/* Logo (kept as requested) */}
            <div className="w-12 h-12 rounded-full bg-white border border-indigo-100 flex items-center justify-center shrink-0">
              <Image
                src={logoSrc}
                alt="Logo"
                width={26}
                height={26}
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 max-w-xl">
                {description}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={ctaLink}
            className="
              px-6 py-3
              bg-gradient-to-r from-indigo-600 to-pink-600
              text-white
              rounded-lg
              font-semibold
              transition-all duration-300
              hover:shadow-lg
              hover:-translate-y-0.5
              whitespace-nowrap
            "
          >
            {ctaText}
          </Link>

        </div>
      </div>
    </div>
  );
}
