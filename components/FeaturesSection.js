// app/components/FeaturesSection.jsx
export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Agile and fast delivery",
      description:
        "Our agile process speeds up production while staying flexible to change – helping you launch quickly without sacrificing quality.",
      icon: "🚀",
    },
    {
      id: 2,
      title: "Award-winning, tech-savvy team",
      description:
        "You'll work with senior designers and developers who've earned global recognition for solving complex challenges across industries.",
      icon: "🏆",
    },
    {
      id: 3,
      title: "Secure, risk-free development",
      description:
        "We follow secure coding practices, run ongoing QA, and keep documentation crystal clear, so your project stays safe and predictable.",
      icon: "🔒",
    },
    {
      id: 4,
      title: "Business-driven collaboration",
      description:
        "We think beyond code. Our team aligns with your business goals, offering proactive insights and strategic feedback at every stage.",
      icon: "🤝",
    },
    {
      id: 5,
      title: "Scalable, future-proof technology",
      description:
        "From architecture to stack choice, we plan for what's next – building clean, extensible platforms that can grow with your business.",
      icon: "📈",
    },
    {
      id: 6,
      title: "End-to-end project support",
      description:
        "We stay involved past launch, offering clear communication, reliable delivery, and hands-on support at every stage of the journey.",
      icon: "🔄",
    },
  ];

  return (
    <div className="bg-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Development Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with strategic thinking to deliver
            exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={feature.id} className="relative">
              {/* Feature Card */}
              <div className="bg-white">
                {/* Icon/Number */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-100 to-pink-100 flex items-center justify-center mr-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>

                {/* Horizontal Line --- */}
                <div className="mb-6">
                  <hr className="border-t border-gray-300" />
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Divider between cards (only for first two rows) */}
              {index < 4 && (
                <div className="absolute -bottom-6 left-0 right-0 md:hidden">
                  <hr className="border-t border-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Divider (for desktop) */}
        <div className="mt-12">
          <hr className="border-t border-gray-200" />
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
            <div className="text-left sm:text-center mb-4 sm:mb-0 sm:mr-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Start Your Project?
              </h4>
              <p className="text-gray-600">
                Let's discuss how we can bring your vision to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
              </a>
              <a
                href="/portfolio"
                className="px-8 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
