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
  title: 'Omnichannel AI Agents',
  description:
    'AI agents that handle email, chat, social, and voice in one brain — trained on your knowledge base, in your brand voice, live 24/7.',
  keywords:
    'AI agents, omnichannel AI, customer support automation, AI chatbot, AI email automation, AI call center, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/ai-agents',
  },
  openGraph: {
    title: 'Omnichannel AI Agents | The Stockit',
    description:
      'Custom AI agents that handle email, chat, social, and voice — trained on your docs and policies, in your brand voice, available 24/7.',
    url: 'https://thestockit.com/ai-agents',
  },
  twitter: {
    title: 'Omnichannel AI Agents | The Stockit',
    description:
      'Custom AI agents that handle email, chat, social, and voice — trained on your docs and policies, in your brand voice, available 24/7.',
  },
};

const aiAgentsProblemSolution = {
  eyebrow: 'Why omnichannel matters',
  titleA: "Your customers don't care",
  titleB: 'about your internal silos',
  problems: [
    'Support scattered across email, chat, social, and phone',
    'Agents repeating context every time the channel changes',
    'Slow response times that lose deals and frustrate buyers',
    'Off-hours queries pile up with no one to answer them',
    'Inconsistent answers across every channel and agent',
  ],
  solutions: [
    'AI agents trained on your docs, history, and policies',
    'One shared memory that follows the customer across channels',
    'Instant, on-brand replies in seconds, not days',
    '24/7 coverage with instant handoff to humans when needed',
    'Consistent, compliant answers on every single channel',
  ],
};

const aiAgentsSteps = [
  {
    icon: 'search',
    title: 'Map journeys & channels',
    description:
      'We map every channel your customers use and define the intents, data, and policies each AI agent needs.',
  },
  {
    icon: 'code',
    title: 'Build your AI agents',
    description:
      'Custom AI agents trained on your knowledge base, tone, and workflows — not generic chatbots.',
  },
  {
    icon: 'network',
    title: 'Connect every channel',
    description:
      'We integrate agents into email, chat, social, WhatsApp, and your CRM so context never gets lost.',
  },
  {
    icon: 'flask',
    title: 'Test, launch & keep learning',
    description:
      'We run quality tests, launch with human oversight, and continuously improve from real conversations.',
  },
];

const aiAgentsProcessData = {
  eyebrow: 'How we build it',
  titleA: 'One brain,',
  titleB: 'every channel',
  description:
    'A structured rollout that turns your scattered channels into one seamless, always-on experience.',
};

const aiAgentsFaqItems = [
  {
    id: 1,
    question: 'What channels can your AI agents cover?',
    answer: 'Email, live chat, WhatsApp, social DMs, SMS, and voice, plus CRMs and ticketing tools like HubSpot, Salesforce, Zendesk, and Intercom. We connect whatever mix of channels your customers actually use.',
  },
  {
    id: 2,
    question: 'Will the agent sound like our brand?',
    answer: 'Yes. Each agent is trained on your tone, voice, and policies so replies read like they came from your team — including your product names, terminology, and personality.',
  },
  {
    id: 3,
    question: 'How is context handled across channels?',
    answer: 'Every agent shares one memory of the conversation. A customer can start on chat, continue over email, and finish on WhatsApp without ever repeating themselves or re-explaining the issue.',
  },
  {
    id: 4,
    question: 'What about handoff to a human?',
    answer: 'Agents detect frustration, complex issues, or explicit requests and hand off to a human with the full conversation summary, so your team picks up instantly instead of starting from scratch.',
  },
  {
    id: 5,
    question: 'How long does it take to deploy?',
    answer: 'Most single-channel agents go live in 2-3 weeks; a full omnichannel rollout typically takes 4-6 weeks including integration, training, and a period of human oversight.',
  },
];

const aiAgentsExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'The best AI agent is invisible — it just makes every conversation with your business feel fast, personal, and effortless.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const AiAgents = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Omnichannel AI agents that handle"
        gradientText="every channel"
        titleAfter="— 24/7, in your brand voice"
        mediaIcon="bot"
        videoSrc=""
        infoItems={[
          {
            icon: 'bot',
            lines: ['Email, chat, social', '& voice — one brain'],
          },
          {
            icon: 'check',
            lines: ['Handles 70%+ of', 'inbound queries'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={aiAgentsProblemSolution} />
      <OurProcess steps={aiAgentsSteps} data={aiAgentsProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={aiAgentsFaqItems}
        expertProfile={aiAgentsExpertProfile}
        sectionTitle="Omnichannel AI Agents FAQ"
        sectionDescription="Common questions about channels, brand voice, cross-channel context, human handoff, and deployment timelines — answered by our team."
      />
      <CTABanner
        title="Want AI that handles support around the clock?"
        description="From a single channel to a full omnichannel rollout, we can design, build, and launch AI agents that feel like your best team members."
        ctaText="Talk to an AI expert"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default AiAgents;
