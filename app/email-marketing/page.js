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
  title: 'Email Marketing Services',
  description:
    'Email marketing agency. Segmented campaigns, automated flows, and deliverability-focused setups that turn subscribers into loyal customers.',
  keywords:
    'email marketing services, email marketing agency, email automation, email flows, newsletters, email deliverability, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/email-marketing',
  },
  openGraph: {
    title: 'Email Marketing Services | The Stockit',
    description:
      'Email marketing that converts: segmented campaigns, automated flows, and deliverability-focused setups that turn subscribers into customers.',
    url: 'https://thestockit.com/email-marketing',
  },
  twitter: {
    title: 'Email Marketing Services | The Stockit',
    description:
      'Email marketing that converts: segmented campaigns, automated flows, and deliverability-focused setups that turn subscribers into customers.',
  },
};

const emailProblemSolution = {
  eyebrow: 'Why email matters',
  titleA: 'Your list is',
  titleB: 'the asset you own',
  problems: [
    'Emails that land in spam and never get opened',
    'Blasting the same message to everyone on your list',
    'No welcome flows, so new subscribers go cold',
    'Designs that break on mobile and kill clicks',
    'No testing, so subject lines and offers stay guesses',
  ],
  solutions: [
    'Deliverability-tuned setups that reach the inbox',
    'Segmented campaigns that speak to each audience',
    'Automated flows — welcome, cart, winback, and more',
    'Mobile-first, on-brand email design',
    'A/B testing and analytics that drive improvement',
  ],
};

const emailSteps = [
  {
    icon: 'search',
    title: 'Strategy & segmentation',
    description:
      'We map your list, audience segments, and goals into a campaign calendar and a flow strategy.',
  },
  {
    icon: 'pen',
    title: 'Campaign copy & design',
    description:
      'Compelling subject lines and mobile-first, on-brand emails designed for clicks and conversions.',
  },
  {
    icon: 'network',
    title: 'Automation & flows',
    description:
      'Welcome, abandoned cart, post-purchase, and winback flows built to nurture on autopilot.',
  },
  {
    icon: 'rocket',
    title: 'Test & optimize',
    description:
      'A/B testing subject lines and offers, plus deliverability and engagement reporting every month.',
  },
];

const emailProcessData = {
  eyebrow: 'Our email marketing process',
  titleA: 'Emails that',
  titleB: 'get opened',
  description:
    'A systematic email process that builds trust, drives repeat purchases, and grows your revenue.',
};

const emailFaqItems = [
  {
    id: 1,
    question: 'Which email platform do you work with?',
    answer: 'We build on the platform that fits your business — commonly Klaviyo for e-commerce, Mailchimp, HubSpot, or ActiveCampaign for broader marketing. We set up the account, design templates, and configure everything for you.',
  },
  {
    id: 2,
    question: 'What are automated email flows?',
    answer: 'Automated flows are emails triggered by customer behavior — like welcome sequences for new subscribers, abandoned cart reminders, post-purchase follow-ups, and winback emails for inactive customers. They generate revenue around the clock without manual work.',
  },
  {
    id: 3,
    question: 'How do you improve email deliverability?',
    answer: 'We configure proper authentication (SPF, DKIM, DMARC), manage list hygiene, avoid spam triggers, and monitor engagement metrics. Our goal is a healthy sender reputation so your emails actually reach the inbox.',
  },
  {
    id: 4,
    question: 'Do you write the email copy?',
    answer: 'Yes. We write persuasive, on-brand copy and design the visuals — from single campaigns to full newsletters. We also A/B test subject lines and offers to improve open rates and clicks.',
  },
  {
    id: 5,
    question: 'How do you measure email success?',
    answer: 'We track open rate, click rate, unsubscribe rate, and — most importantly — revenue per email and per flow. You get monthly reports that show exactly what each campaign and automation earned.',
  },
];

const emailExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Email is the only channel you fully own. Done right, it is the highest-returning marketing investment most businesses make.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const EmailMarketing = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Email marketing that turns subscribers into"
        gradientText="loyal customers"
        titleAfter="— with automation on autopilot"
        mediaIcon="mail"
        infoItems={[
          {
            icon: 'mail',
            lines: ['Campaigns, flows &', 'newsletters'],
          },
          {
            icon: 'check',
            lines: ['Deliverability', '& segmentation'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={emailProblemSolution} />
      <OurProcess steps={emailSteps} data={emailProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={emailFaqItems}
        expertProfile={emailExpertProfile}
        sectionTitle="Email Marketing FAQ"
        sectionDescription="Common questions about email platforms, automated flows, deliverability, copywriting, and email measurement — answered by our team."
      />
      <CTABanner
        title="Want to turn your email list into revenue?"
        description="From one-time campaigns to full automation setups, we can build an email channel your business can count on."
        ctaText="Request email quote"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default EmailMarketing;
