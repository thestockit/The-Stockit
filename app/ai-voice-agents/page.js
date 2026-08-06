import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/ServiceHero';
import TrustBar from '@/components/TrustBar';
import FoundersMessage from '@/components/FoundersMessage';
import ProblemSolution from '@/components/ProblemSolution';
import OurProcess from '@/components/OurProcess';
import FeaturesSection from '@/components/FeaturesSection';
import Tech from '@/components/Tech';
import LocalEdge from '@/components/LocalEdge';
import Projects from '@/components/Projects';
import ExploreMore from '@/components/ExploreMore';
import ServiceFaqs from '@/components/ServiceFaqs';
import CTABanner from '@/components/CTABanner';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'AI Voice Agents & Call Center Automation',
  description:
    'AI voice agents that answer every call in seconds, run natural conversations, automate call centers, and hand off to humans with full context.',
  keywords:
    'AI voice agent, call center automation, AI phone agent, IVR automation, conversational AI, AI customer service, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/ai-voice-agents',
  },
  openGraph: {
    title: 'AI Voice Agents & Call Center Automation | The Stockit',
    description:
      'Natural AI voice agents that answer in under three seconds, automate inbound and outbound calls, and hand off to humans with full context.',
    url: 'https://thestockit.com/ai-voice-agents',
  },
  twitter: {
    title: 'AI Voice Agents & Call Center Automation | The Stockit',
    description:
      'Natural AI voice agents that answer in under three seconds, automate inbound and outbound calls, and hand off to humans with full context.',
  },
};

const aiVoiceProblemSolution = {
  eyebrow: 'Why automate your phones',
  titleA: 'Every missed call is',
  titleB: 'a missed sale',
  problems: [
    'Missed calls during busy hours and after close',
    'Long hold times that make callers hang up',
    'Rigid IVR menus that frustrate instead of help',
    'Agents burned out repeating the same answers',
    'No call analytics, so you cannot improve the experience',
  ],
  solutions: [
    'AI answers in under three seconds, every time',
    'Natural conversations, not scripted robot menus',
    'Follows your scripts and business rules faithfully',
    'Automates repetitive calls so humans handle complex ones',
    'Call scoring, transcripts, and analytics on every call',
  ],
};

const aiVoiceSteps = [
  {
    icon: 'search',
    title: 'Map call flows',
    description:
      'We audit your incoming and outgoing calls, map the common paths, and define the exact outcomes each AI caller should handle.',
  },
  {
    icon: 'code',
    title: 'Build the voice agent',
    description:
      'A custom voice agent with your script, policies, and brand voice — capable of natural back-and-forth, not just menus.',
  },
  {
    icon: 'network',
    title: 'Connect your phone system',
    description:
      'Integration with your telephony and CRM so every call is logged, routed, and follow-up tasks are created automatically.',
  },
  {
    icon: 'flask',
    title: 'Test, launch & optimize',
    description:
      'We test across accents and scenarios, launch with monitoring, and tune based on call transcripts and scores.',
  },
];

const aiVoiceProcessData = {
  eyebrow: 'Our voice automation process',
  titleA: 'Answer more calls,',
  titleB: 'lose fewer sales',
  description:
    'A measured rollout that turns your phone lines into a 24/7 revenue channel with full quality control.',
};

const aiVoiceFaqItems = [
  {
    id: 1,
    question: 'How natural does the AI voice sound?',
    answer: 'Very. It uses conversational speech that handles interruptions, mid-sentence corrections, and different accents, and it can detect tone to escalate when a caller is frustrated.',
  },
  {
    id: 2,
    question: 'Which phone systems do you integrate with?',
    answer: 'Twilio, RingCentral, Aircall, Genesys, and most VoIP providers — plus CRMs like HubSpot and Salesforce, so call outcomes, notes, and follow-ups land in your existing tools.',
  },
  {
    id: 3,
    question: 'What call types can it handle?',
    answer: 'Appointment booking, support and FAQ, billing and payment, order tracking, outbound follow-ups, lead qualification, and more. We tailor the conversation to your business rules.',
  },
  {
    id: 4,
    question: 'How do you handle compliance?',
    answer: 'We build in call consent, recording disclosures, opt-out handling, and TCPA/GDPR-safe outbound flows so your calls stay compliant by default.',
  },
  {
    id: 5,
    question: 'Can it hand off to a human mid-call?',
    answer: 'Yes. The AI recognizes when a caller needs a person and transfers seamlessly — delivering the full context so your agent can pick up without asking the caller to repeat themselves.',
  },
];

const aiVoiceExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'A phone that answers on the first ring and resolves most issues on the spot is the fastest way to win customers — day or night.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const AiVoiceAgents = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="AI voice agents that answer"
        gradientText="every call"
        titleAfter="— like your best rep, but always on"
        mediaIcon="phone"
        videoSrc=""
        infoItems={[
          {
            icon: 'phone',
            lines: ['Inbound & outbound', 'calls automated'],
          },
          {
            icon: 'check',
            lines: ['Answers in under', '3 seconds'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={aiVoiceProblemSolution} />
      <OurProcess steps={aiVoiceSteps} data={aiVoiceProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={aiVoiceFaqItems}
        expertProfile={aiVoiceExpertProfile}
        sectionTitle="AI Voice Agents FAQ"
        sectionDescription="Common questions about voice quality, phone system integration, call types, compliance, and human handoff — answered by our team."
      />
      <CTABanner
        title="Ready to stop missing calls?"
        description="From a single AI receptionist to full call center automation, we can build a voice solution that answers instantly and books more business."
        ctaText="Talk to an AI expert"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default AiVoiceAgents;
