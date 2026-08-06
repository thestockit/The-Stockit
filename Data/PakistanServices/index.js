import { aiAgents } from './ai-agents';
import { aiAssistants } from './ai-assistants';
import { aiDocumentProcessing } from './ai-document-processing';
import { aiRecommendationEngines } from './ai-recommendation-engines';
import { aiVoiceAgents } from './ai-voice-agents';
import { aiWorkflowAutomation } from './ai-workflow-automation';
import { brandingIdentity } from './branding-identity';
import { brandStorytelling } from './brand-storytelling';
import { cmsDevelopment } from './cms-development';
import { contentCreation } from './content-creation';
import { contentMarketing } from './content-marketing';
import { copywriting } from './copywriting';
import { emailMarketing } from './email-marketing';
import { googleAdsPpc } from './google-ads-ppc';
import { graphicDesign } from './graphic-design';
import { influencerMarketing } from './influencer-marketing';
import { landingPageDesign } from './landing-page-design';
import { mobileAppDesign } from './mobile-app-design';
import { mobileDevelopment } from './mobile-development';
import { motionGraphics } from './motion-graphics';
import { podcastEditing } from './podcast-editing';
import { seoServices } from './seo-services';
import { shopifyDevelopment } from './shopify-development';
import { socialMediaMarketing } from './social-media-marketing';
import { softwareDevelopment } from './software-development';
import { uiUxDesign } from './ui-ux-design';
import { videoEditing } from './video-editing';
import { webDesign } from './web-design';
import { webDevelopment } from './web-development';
import { webflowDevelopment } from './webflow-development';

export const pakistanServices = [
  uiUxDesign,
  webDesign,
  mobileAppDesign,
  landingPageDesign,
  brandingIdentity,
  graphicDesign,
  webDevelopment,
  softwareDevelopment,
  cmsDevelopment,
  shopifyDevelopment,
  webflowDevelopment,
  mobileDevelopment,
  seoServices,
  socialMediaMarketing,
  googleAdsPpc,
  emailMarketing,
  contentMarketing,
  influencerMarketing,
  aiAgents,
  aiVoiceAgents,
  aiWorkflowAutomation,
  aiRecommendationEngines,
  aiAssistants,
  aiDocumentProcessing,
  videoEditing,
  motionGraphics,
  contentCreation,
  copywriting,
  brandStorytelling,
  podcastEditing,
];

export const getServiceBySlug = (slug) =>
  pakistanServices.find((service) => service.slug === slug);
