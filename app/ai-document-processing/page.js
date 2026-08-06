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
  title: 'AI Data Extraction & Document Processing',
  description:
    'AI document processing that reads invoices, contracts, and forms in seconds — turning piles of documents into structured, auditable data.',
  keywords:
    'AI data extraction, document processing, OCR, invoice processing, intelligent document processing, IDP, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/ai-document-processing',
  },
  openGraph: {
    title: 'AI Data Extraction & Document Processing | The Stockit',
    description:
      'AI reads invoices, contracts, and forms in seconds and turns them into structured data — with human-verified accuracy and full audit trails.',
    url: 'https://thestockit.com/ai-document-processing',
  },
  twitter: {
    title: 'AI Data Extraction & Document Processing | The Stockit',
    description:
      'AI reads invoices, contracts, and forms in seconds and turns them into structured data — with human-verified accuracy and full audit trails.',
  },
};

const aiDocsProblemSolution = {
  eyebrow: 'Why process documents with AI',
  titleA: 'Data entry is',
  titleB: 'a tax on your team',
  problems: [
    'Hours lost manually typing data from documents',
    'Typing errors that ripple into billing and compliance',
    'Slow processing that delays invoices, contracts, and onboarding',
    'Information trapped in PDFs and scans that nobody can search',
    'No audit trail when something goes wrong',
  ],
  solutions: [
    'AI extracts data from any document in seconds',
    'Field-level validation against your own business rules',
    'Structured output pushed straight into your systems',
    'Every document becomes searchable and usable',
    'Full audit trail with confidence scores and human review',
  ],
};

const aiDocsSteps = [
  {
    icon: 'search',
    title: 'Map your documents & fields',
    description:
      'We catalog the document types you handle and define the exact fields, formats, and rules each one needs.',
  },
  {
    icon: 'code',
    title: 'Train the extraction',
    description:
      'We build and tune AI extraction models for your documents — including layouts, tables, and handwriting.',
  },
  {
    icon: 'network',
    title: 'Connect to your systems',
    description:
      'Extracted data flows into your ERP, accounting, CRM, or database with validation at every field.',
  },
  {
    icon: 'flask',
    title: 'Monitor accuracy',
    description:
      'We track extraction confidence, flag low-confidence items for review, and keep accuracy improving.',
  },
];

const aiDocsProcessData = {
  eyebrow: 'Our document AI process',
  titleA: 'From paper pile',
  titleB: 'to clean data',
  description:
    'A pragmatic rollout that starts with your highest-volume documents and scales across your business.',
};

const aiDocsFaqItems = [
  {
    id: 1,
    question: 'What types of documents can you process?',
    answer: 'Invoices, purchase orders, contracts, bank statements, tax forms, IDs, medical records, shipping documents, and almost any structured or semi-structured document — including scanned images and tables.',
  },
  {
    id: 2,
    question: 'How accurate is the extraction?',
    answer: 'With field-level validation and human-in-the-loop review, accuracy typically reaches around 99%. Low-confidence fields are routed to a review queue instead of being silently trusted.',
  },
  {
    id: 3,
    question: 'Which formats are supported?',
    answer: 'PDFs, scanned images, photos taken on a phone, tables, and even handwriting. We handle whatever format your documents arrive in.',
  },
  {
    id: 4,
    question: 'What systems does the extracted data feed into?',
    answer: 'Accounting and ERP platforms, CRMs, databases, and internal tools. We set up the pipeline so data lands where your team already works — with no re-typing.',
  },
  {
    id: 5,
    question: 'How is accuracy validated and audited?',
    answer: 'Every extraction gets a confidence score. Rules validate values against your data, and everything is logged with an audit trail showing what was extracted, reviewed, and changed — and by whom.',
  },
];

const aiDocsExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Your documents already contain the answers — AI just reads them a thousand times faster than a human can type them.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const AiDocumentProcessing = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Turn piles of documents into"
        gradientText="structured data"
        titleAfter="— with AI extraction"
        mediaIcon="file-search"
        videoSrc=""
        infoItems={[
          {
            icon: 'file-search',
            lines: ['Invoices, contracts, forms', 'read in seconds'],
          },
          {
            icon: 'check',
            lines: ['Human-verified', 'accuracy'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={aiDocsProblemSolution} />
      <OurProcess steps={aiDocsSteps} data={aiDocsProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={aiDocsFaqItems}
        expertProfile={aiDocsExpertProfile}
        sectionTitle="AI Document Processing FAQ"
        sectionDescription="Common questions about document types, accuracy, formats, system integrations, and audit trails — answered by our team."
      />
      <CTABanner
        title="Done with manual data entry?"
        description="We can automate your document processing — from invoices and contracts to onboarding forms — in a matter of weeks."
        ctaText="Request a document AI demo"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default AiDocumentProcessing;
