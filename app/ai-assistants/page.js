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
  title: 'Internal Corporate AI Assistants',
  description:
    'Private, secure AI assistants for your company — trained on your internal knowledge, embedded in Slack and Teams, with answers your team can trust.',
  keywords:
    'internal AI assistant, corporate AI, enterprise AI, Slack AI, Teams AI, knowledge base AI, RAG, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/ai-assistants',
  },
  openGraph: {
    title: 'Internal Corporate AI Assistants | The Stockit',
    description:
      'Secure, private AI assistants embedded in Slack, Teams, and your intranet — answering from your own knowledge with citations.',
    url: 'https://thestockit.com/ai-assistants',
  },
  twitter: {
    title: 'Internal Corporate AI Assistants | The Stockit',
    description:
      'Secure, private AI assistants embedded in Slack, Teams, and your intranet — answering from your own knowledge with citations.',
  },
};

const aiAssistantsProblemSolution = {
  eyebrow: 'Why internal AI',
  titleA: 'Your company runs on',
  titleB: 'institutional knowledge',
  problems: [
    'Answers scattered across docs, chats, and people\'s heads',
    'New hires spending months before they are productive',
    'The same internal questions answered over and over',
    'Tribal knowledge that leaves when people leave',
    'Fear that AI will leak private company data',
  ],
  solutions: [
    'One assistant trained on your documents and policies',
    'Instant answers with citations to the source document',
    'Embedded where your team already works — Slack, Teams, intranet',
    'Knowledge captured and made useful before it walks out the door',
    'Private, permission-aware deployment with no training on your data',
  ],
};

const aiAssistantsSteps = [
  {
    icon: 'search',
    title: 'Inventory your knowledge',
    description:
      'We map your knowledge sources — docs, wikis, SOPs, tickets — and define what the assistant should be able to answer.',
  },
  {
    icon: 'code',
    title: 'Build the assistant',
    description:
      'A secure assistant grounded in your own data, with citations, permission controls, and your company\'s tone.',
  },
  {
    icon: 'network',
    title: 'Deploy to your tools',
    description:
      'We embed it in Slack, Microsoft Teams, your intranet, or a web portal so your team adopts it without changing habits.',
  },
  {
    icon: 'flask',
    title: 'Govern & improve',
    description:
      'Usage analytics, feedback loops, and regular knowledge refreshes keep answers accurate and useful over time.',
  },
];

const aiAssistantsProcessData = {
  eyebrow: 'Our internal AI process',
  titleA: 'Your knowledge,',
  titleB: 'finally useful',
  description:
    'A secure build that turns scattered internal knowledge into an assistant your whole team trusts.',
};

const aiAssistantsFaqItems = [
  {
    id: 1,
    question: 'How is our data kept secure?',
    answer: 'Your documents are used only to answer your team — never to train public models. We support private cloud or on-premise hosting, SSO, and role-based permissions so the assistant sees only what a user is allowed to see.',
  },
  {
    id: 2,
    question: 'Which platforms does it live in?',
    answer: 'Slack, Microsoft Teams, SharePoint, Confluence, Google Workspace, your intranet, or a custom web portal. We put the assistant where your team already works.',
  },
  {
    id: 3,
    question: 'Can it show where answers come from?',
    answer: 'Yes. Every answer is grounded in your documents and includes citations, so employees can open the source and verify rather than taking a guess on faith.',
  },
  {
    id: 4,
    question: 'How does it help with onboarding?',
    answer: 'New hires get instant, accurate answers about policies, tools, and processes — which cuts ramp-up time dramatically and reduces dependency on whoever is around to ask.',
  },
  {
    id: 5,
    question: 'How long does it take to set up?',
    answer: 'A working assistant over your core knowledge base typically ships in 2-4 weeks, with rollout to more sources over time.',
  },
];

const aiAssistantsExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'An internal AI assistant is like hiring your most knowledgeable employee — and cloning them for everyone, on day one.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const AiAssistants = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Your team, amplified by"
        gradientText="internal AI assistants"
        titleAfter="— secure, private, on your data"
        mediaIcon="briefcase"
        videoSrc=""
        infoItems={[
          {
            icon: 'briefcase',
            lines: ['Answers from your own', 'knowledge, securely'],
          },
          {
            icon: 'check',
            lines: ['Lives in Slack, Teams', '& your intranet'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={aiAssistantsProblemSolution} />
      <OurProcess steps={aiAssistantsSteps} data={aiAssistantsProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={aiAssistantsFaqItems}
        expertProfile={aiAssistantsExpertProfile}
        sectionTitle="Internal AI Assistants FAQ"
        sectionDescription="Common questions about security, supported platforms, citations, onboarding, and setup timelines — answered by our team."
      />
      <CTABanner
        title="Unlock the knowledge in your company?"
        description="We can turn your docs, wikis, and SOPs into a secure AI assistant your whole team relies on every day."
        ctaText="Talk to an AI expert"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default AiAssistants;
