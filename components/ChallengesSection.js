"use client";

const challengesData = [
  {
    tag: "NO IN-HOUSE TEAM?",
    title: "No time to handle in-house design?",
    description: "Running short on capacity can delay your app's success. We provide dedicated experts — from research to delivery — with no overhead required.",
    percentage: "25%",
    statDescription: "LESS OVERHEAD WITH ON-DEMAND EXPERTS"
  },
  {
    tag: "NO CLEAR VISION?",
    title: "Have a great app idea but don't know where to start?",
    description: "Without a strong design strategy, apps feel generic. We take a research-driven approach to define your user needs and craft a clear, actionable roadmap.",
    percentage: "40%",
    statDescription: "FASTER LAUNCH WITH STRUCTURED WORKFLOWS"
  },
  {
    tag: "SLOW APP EXPERIENCE?",
    title: "Is your app not delivering the results you need?",
    description: "Poor performance and low user engagement can undermine your app's potential. We'll optimize the user experience to drive better retention.",
    percentage: "20%",
    statDescription: "HIGHER USER RETENTION WITH A MODERNIZED UX"
  }
];

const ChallengesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-indigo-600 to-pink-600"></div>
            <span className="text-sm font-medium uppercase tracking-wider text-indigo-600">
              Common Challenges
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-indigo-600 to-pink-600"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            ARE THESE CHALLENGES
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
              SLOWING YOU DOWN?
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Identify and overcome common hurdles with our expert solutions
          </p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {challengesData.map((card, index) => (
            <div 
              key={index} 
              className="relative flex flex-col p-6 md:p-8 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Tag */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-pink-100 text-indigo-600 text-xs font-semibold tracking-wider uppercase border border-indigo-200">
                  {card.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6 flex-grow">
                {card.description}
              </p>

              {/* Stats Section */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
                    {card.percentage}
                  </span>
                  <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide max-w-[160px]">
                    {card.statDescription}
                  </span>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-4 h-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-indigo-600/10 to-pink-600/10 transform rotate-45 -translate-y-4 translate-x-4"></div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom CTA Card --- */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 to-pink-600 p-1">
          <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="animate-pulse"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Starting from scratch or refreshing an existing mobile app?{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                    We can help.
                  </span>
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap">
              BOOK A CALL
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* --- Stats Section --- */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Challenges Solved", desc: "Success stories" },
              { value: "95%", label: "Success Rate", desc: "Client satisfaction" },
              { value: "40%", label: "Faster Resolution", desc: "Average improvement" },
              { value: "24/7", label: "Support", desc: "Dedicated assistance" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-indigo-600 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;