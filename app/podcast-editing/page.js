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
  title: 'Podcast Editing',
  description:
    'Full podcast editing and mixing — clean audio, noise removal, chapters, show notes, and social clips. Audio and video, delivered in 24-48 hours.',
  keywords:
    'podcast editing services, podcast production, audio editing, podcast mixing, video podcast, show notes, podcast clips, The Stockit',
  alternates: {
    canonical: 'https://thestockit.com/podcast-editing',
  },
  openGraph: {
    title: 'Podcast Editing | The Stockit',
    description:
      'Studio-clean podcast editing — cuts, noise removal, mixing, chapters, show notes, and social clips for audio and video, in 24-48 hours.',
    url: 'https://thestockit.com/podcast-editing',
  },
  twitter: {
    title: 'Podcast Editing | The Stockit',
    description:
      'Studio-clean podcast editing — cuts, noise removal, mixing, chapters, show notes, and social clips for audio and video, in 24-48 hours.',
  },
};

const podcastEditingProblemSolution = {
  eyebrow: 'Why podcast editing matters',
  titleA: 'Great conversation,',
  titleB: 'amateur sound',
  problems: [
    'No time to edit hours of raw audio yourself',
    'Background noise, pauses, and stumbles left in',
    'Inconsistent audio quality across episodes',
    'Episodes missing chapters and show notes',
    'Release schedules slipping because editing takes forever',
  ],
  solutions: [
    'We handle the entire edit so you just record and publish',
    'Noise removal, ums, and dead air cleaned automatically',
    'Professional EQ and mixing for consistent studio sound',
    'Chapters, show notes, and titles included',
    '24-48 hour turnaround that keeps your schedule on track',
  ],
};

const podcastEditingSteps = [
  {
    icon: 'search',
    title: 'Review & brief',
    description:
      'You share the raw audio, and we confirm the format, length, and any special requests for the episode.',
  },
  {
    icon: 'flask',
    title: 'Clean & mix',
    description:
      'We remove noise, retakes, and dead air, then mix, EQ, and compress to a polished, consistent sound.',
  },
  {
    icon: 'pen',
    title: 'Chapters & show notes',
    description:
      'Timestamps, chapter markers, titles, and show notes that make every episode easier to consume.',
  },
  {
    icon: 'rocket',
    title: 'Deliver & clip',
    description:
      'Final audio and video delivered, plus short-form clips and captions for social promotion.',
  },
];

const podcastEditingProcessData = {
  eyebrow: 'Our podcast process',
  titleA: 'You record,',
  titleB: 'we do the rest',
  description:
    'A simple, fast workflow that turns raw recordings into professional episodes without you lifting a finger.',
};

const podcastEditingFaqItems = [
  {
    id: 1,
    question: 'What does the editing include?',
    answer: 'Cutting mistakes and dead air, noise removal, breath control, EQ, compression, volume leveling, fades, and a clean master — plus intro/outro handling if you have them.',
  },
  {
    id: 2,
    question: 'Do you edit video podcasts too?',
    answer: 'Yes. We edit the video version as well — multicam switching, captions, and social-ready exports alongside the audio master.',
  },
  {
    id: 3,
    question: 'How fast is the turnaround?',
    answer: 'Standard episodes are delivered in 24-48 hours. Rush options are available if you need same-day delivery for time-sensitive releases.',
  },
  {
    id: 4,
    question: 'Do you create clips for social media?',
    answer: 'Yes — we cut highlight clips with captions and dynamic frames, ready for YouTube Shorts, Reels, and TikTok to promote every episode.',
  },
  {
    id: 5,
    question: 'What formats do you deliver?',
    answer: 'High-quality MP3 or WAV audio, MP4 video for YouTube, captions, chapters, and show notes — matching the requirements of every platform you publish to.',
  },
];

const podcastEditingExpertProfile = {
  name: 'Luqman Pervez',
  title: 'CEO @ The Stockit',
  quote: 'Listeners judge a podcast in the first thirty seconds. Professional sound keeps them subscribed for the long haul.',
  avatarUrl: '/luqman.7594d0c02542d797b36e.webp',
  linkedinUrl: 'https://linkedin.com/in/luqmanpervez',
};

const PodcastEditing = () => {
  return (
    <>
      <Header />
      <ServiceHero
        titleBefore="Podcasts that sound"
        gradientText="studio-perfect"
        titleAfter="— edited, mixed, ready to publish"
        mediaIcon="mic"
        videoSrc=""
        infoItems={[
          {
            icon: 'mic',
            lines: ['Audio & video', 'podcast editing'],
          },
          {
            icon: 'check',
            lines: ['24-48 hour', 'turnaround'],
          },
        ]}
        ctaText="BOOK A CALL"
        trustLine="Trusted by global brands & SMBs in the US and Europe"
      />
      <TrustBar />
      <FoundersMessage />
      <ProblemSolution data={podcastEditingProblemSolution} />
      <OurProcess steps={podcastEditingSteps} data={podcastEditingProcessData} />
      <FeaturesSection />
      <Tech />
      <LocalEdge />
      <Projects />
      <ExploreMore />
      <ServiceFaqs
        faqItems={podcastEditingFaqItems}
        expertProfile={podcastEditingExpertProfile}
        sectionTitle="Podcast Editing FAQ"
        sectionDescription="Common questions about what editing includes, video podcasts, turnaround, social clips, and deliverables — answered by our team."
      />
      <CTABanner
        title="Ready to launch your podcast without the editing grind?"
        description="Send us your raw recordings and we will deliver polished, publish-ready episodes — with clips — every single week."
        ctaText="Start your podcast"
        ctaLink="/contact"
      />
      <CTA />
      <Footer />
    </>
  );
};

export default PodcastEditing;
