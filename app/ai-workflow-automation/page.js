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
  title: 'AI Workflow Automation & No-Code Pipelines',
  description:
    'No-code AI workflow automation that connects your tools, eliminates manual busywork, and lets your team focus on high-value work.',
  keywords:
    'AI workflow automation, no-code automation, business process automation, Zapier, Make, AI pipelines, workflow optimization, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/ai-workflow-automation',
  },
  openGraph: {
    title: 'AI Workflow Automation & No-Code Pipelines | The Stockit',
    description:
      'AI-powered, no-code automation that connects your tools and removes manual busywork — lead routing, approvals, reporting, and more.',
    url: 'https://thestockit.com/ai-workflow-automation',
  },
  twitter: {
    title: 'AI Workflow Automation & No-Code Pipelines | The Stockit',
    description:
      'AI-powered, no-code automation that connects your tools and removes manual busywork — lead routing, approvals, reporting, and more.',
  },
};

const aiWorkflowProblemSolution = {
  eyebrow: 'Why automate',
  titleA: 'Your team should not be',
  titleB: 'doing robot work',
  problems: [
    'Hours lost to copy-paste, data entry, and manual follow-ups',
    'Errors creeping in whenever humans re-type data',
    'Tools that do not talk to each other without manual glue',
    'Slow approvals and handoffs that stall every process',
    'Headcount growing to handle volume that should scale for free',
  ],
  solutions: [
    'AI workflows that run repetitive tasks end to end',
    'Validation and error-checking built into every step',
    'Your existing tools connected — no code required',
    'Approvals, routing, and notifications that move themselves',
    'Automation that scales with volume, not payroll',
  ],
};

const aiWorkflowSteps = [
  {
    icon: 'search',
    title: 'Audit your workflows',
    description:
      'We map the repetitive, time-consuming processes across your team and rank them by hours saved and business impact.',
  },
  {
    icon: 'code',
    title: 'Design the pipeline',
    description:
      'We design a no-code pipeline with AI decisioning where it matters — data entry, routing, drafting, and follow-ups.',
  },
  {
    icon: 'network',
    title: 'Connect your tools',
    description:
      'Integration with the platforms you already use — CRM, email, spreadsheets, forms, Slack, and 6,000+ others.',
  },
  {
    icon: 'flask',
    title: 'Monitor & optimize',
    description:
      'We track every run, catch failures early, and tune the workflows so they keep improving month after month.',
  },
];

const aiWorkflowProcessData = {
  eyebrow: 'Our automation process',
  titleA: 'Built for speed,',
  titleB: 'run by itself',
  description:
    'A hands-on audit, a fast build, and continuous tuning — automation delivered in days, not quarters.',
};

const aiWorkflowFaqItems = [
  {
    id: 1,
    question: 'Do we need engineers to run this?',
    answer: 'No. Everything we build is no-code, so your team can view, edit, and extend workflows in a visual editor without writing a single line of code.',
  },
  {
    id: 2,
    question: 'What kinds of processes can be automated?',
    answer: 'Lead capture and routing, data entry, email and follow-up sequences, document handling, approvals, inventory alerts, reporting, and customer onboarding — plus AI tasks like drafting replies and summarizing data.',
  },
  {
    id: 3,
    question: 'Which tools do you connect?',
    answer: 'Zapier, Make, and direct APIs give us 6,000+ integrations — CRMs like HubSpot and Salesforce, Gmail, Slack, Airtable, Google Sheets, Notion, Shopify, and accounting platforms.',
  },
  {
    id: 4,
    question: 'How long does a workflow take to build?',
    answer: 'Simple automations go live in a few days; complex multi-step pipelines typically take one to three weeks including testing.',
  },
  {
    id: 5,
    question: 'What happens when our processes change?',
    answer: 'Because the workflows are no-code and documented, they are easy to adjust. We also monitor runs and flag failures so nothing silently breaks.',
  },
];

const aiWorkflowExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Every hour your team spends re-typing the same data is an hour you paid them to do a computer\'s job. Automate it.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const AiWorkflowAutomation = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Automate the busywork with"
        gradientText="AI workflows"
        titleAfter="— no-code, end to end"
        mediaIcon="workflow"
        videoSrc=""
        infoItems={[
          {
            icon: 'workflow',
            lines: ['Manual tasks', 'automated'],
          },
          {
            icon: 'check',
            lines: ['No engineering', 'required'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={aiWorkflowProblemSolution} />
      <OurProcess steps={aiWorkflowSteps} data={aiWorkflowProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={aiWorkflowFaqItems}
        expertProfile={aiWorkflowExpertProfile}
        sectionTitle="AI Workflow Automation FAQ"
        sectionDescription="Common questions about no-code automation, what can be automated, tool integrations, build timelines, and maintenance — answered by our team."
      />
      <CTABanner
        title="Ready to get your hours back?"
        description="We can audit your workflows, find the biggest time sinks, and have your first AI automation running within days."
        ctaText="Request a workflow audit"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default AiWorkflowAutomation;
