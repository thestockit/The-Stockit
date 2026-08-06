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
  title: 'Video Editing',
  description:
    'Professional video editing for ads, reels, YouTube, and product videos — story-first edits, motion graphics, captions, and platform-native delivery.',
  keywords:
    'video editing services, video editor, social media video editing, YouTube editing, ad editing, color grading, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/video-editing',
  },
  openGraph: {
    title: 'Video Editing | The Stockit',
    description:
      'Story-first video editing for ads, reels, YouTube, and product videos — polished, on-brand, and delivered fast.',
    url: 'https://thestockit.com/video-editing',
  },
  twitter: {
    title: 'Video Editing | The Stockit',
    description:
      'Story-first video editing for ads, reels, YouTube, and product videos — polished, on-brand, and delivered fast.',
  },
};

const videoEditingProblemSolution = {
  eyebrow: 'Why editing matters',
  titleA: 'Great footage without a great edit is',
  titleB: 'just raw material',
  problems: [
    'Hours of raw footage sitting unused on a hard drive',
    'Edits that drag and lose viewers in the first seconds',
    'Inconsistent cuts, pacing, and style between videos',
    'Slow turnaround that misses your campaign dates',
    'One video awkwardly reused across every platform',
  ],
  solutions: [
    'We turn raw footage into stories that hold attention',
    'Hook-first pacing proven for short and long formats',
    'Consistent style, titles, and on-brand motion graphics',
    'Fast turnaround that hits your launch dates',
    'Platform-native versions for every channel you use',
  ],
};

const videoEditingSteps = [
  {
    icon: 'search',
    title: 'Review footage & goals',
    description:
      'We watch everything, identify the strongest moments, and plan an edit around the platform and the goal.',
  },
  {
    icon: 'pen',
    title: 'Cut the story',
    description:
      'We build the edit — hook, pacing, and flow — and refine it with your feedback until it lands.',
  },
  {
    icon: 'code',
    title: 'Finish & color',
    description:
      'Color grading, sound mixing, motion graphics, captions, and music that match your brand.',
  },
  {
    icon: 'rocket',
    title: 'Deliver everywhere',
    description:
      'Master files plus crops and captions for YouTube, Instagram, TikTok, LinkedIn, and more.',
  },
];

const videoEditingProcessData = {
  eyebrow: 'Our editing process',
  titleA: 'Footage in,',
  titleB: 'watchable out',
  description:
    'A collaborative, fast workflow built around story, brand consistency, and your deadlines.',
};

const videoEditingFaqItems = [
  {
    id: 1,
    question: 'What kinds of video do you edit?',
    answer: 'Ads, social reels and shorts, YouTube videos, product demos, event coverage, corporate videos, and podcast video — basically any footage that deserves a professional edit.',
  },
  {
    id: 2,
    question: 'What is the typical turnaround time?',
    answer: 'Most edits are delivered in 24-72 hours, with same-day options for urgent campaigns. Longer-form projects are scheduled around your deadline.',
  },
  {
    id: 3,
    question: 'Do you handle music, captions, and color grading?',
    answer: 'Yes — licensed music, burned-in and SRT captions, color grading, sound mixing, and simple motion graphics are all part of the service.',
  },
  {
    id: 4,
    question: 'What formats do you deliver?',
    answer: 'Vertical 9:16, square 1:1, and landscape 16:9 versions, plus subtitled and caption-safe exports — tailored to each platform you publish on.',
  },
  {
    id: 5,
    question: 'Do you edit long-form podcasts?',
    answer: 'Yes. We edit both the audio and video versions of podcasts, including chapters, show notes, and social clips. See our podcast editing service for details.',
  },
];

const videoEditingExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'The first five seconds decide everything. A great edit makes people stay — and remember your brand.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const VideoEditing = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Edits that keep viewers"
        gradientText="hooked"
        titleAfter="— polished, on-brand, delivered fast"
        mediaIcon="clapperboard"
        videoSrc=""
        infoItems={[
          {
            icon: 'clapperboard',
            lines: ['Ads, reels, YouTube', '& product videos'],
          },
          {
            icon: 'check',
            lines: ['24-72 hour', 'turnaround'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={videoEditingProblemSolution} />
      <OurProcess steps={videoEditingSteps} data={videoEditingProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={videoEditingFaqItems}
        expertProfile={videoEditingExpertProfile}
        sectionTitle="Video Editing FAQ"
        sectionDescription="Common questions about video types, turnaround times, music and captions, formats, and podcast editing — answered by our team."
      />
      <CTABanner
        title="Got footage sitting unused?"
        description="Send us your raw files and we will cut them into videos that stop the scroll and grow your brand."
        ctaText="Start your edit"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default VideoEditing;
