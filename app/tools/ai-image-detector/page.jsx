import Link from "next/link";
import ToolPageLayout from "@/components/ToolPageLayout";
import AiImageDetector from "@/components/AiImageDetector";
import { SITE } from "@/constant/site";
import { createMetadata } from "@/Data/Seo/seo-utils";
import { aiImageDetectorFaqs } from "@/Data/Tools/faqs";
import { relatedFor } from "@/Data/Tools/tools";

export const metadata = createMetadata({
  title: "AI Image Detector — Check if Image is AI Generated | The Stockit",
  description:
    "Upload any image to detect if it was created by AI — ChatGPT, Midjourney, Stable Diffusion, Gemini, Firefly and more. Free, private, runs in your browser.",
  keywords:
    "AI image detector, AI generated image check, detect AI art, is this image AI, ChatGPT image detector, Midjourney detector, Stable Diffusion detector, AI photo checker",
  url: `${SITE.baseUrl}/tools/ai-image-detector`,
  image: "/og/og-tools-ai-image-detector.jpg",
  type: "website",
});

const articles = [
  {
    id: "how-detection-works",
    title: "How AI image detection works",
    body: (
      <>
        <p>
          AI-generated images carry statistical fingerprints that differ from
          photographs taken by real cameras. Our detector combines{" "}
          <strong>six independent analysis methods</strong> — each targeting a
          different class of artefact — to produce a single AI-probability score.
        </p>
        <p>
          The analysis runs entirely in your browser using the{" "}
          <strong>Canvas API</strong> and JavaScript. Your image is never uploaded
          to a server, which means the process is both fast and completely private.
        </p>
      </>
    ),
  },
  {
    id: "what-we-check",
    title: "What our analysis checks for",
    body: (
      <>
        <ul>
          <li>
            <strong>Metadata scan</strong> — reads EXIF and XMP data for known AI
            generator signatures such as Stable Diffusion parameters, Midjourney
            tokens or C2PA provenance markers.
          </li>
          <li>
            <strong>Frequency-domain (FFT) analysis</strong> — transforms image
            blocks into the frequency domain and looks for unnatural spectral roll-off,
            repeated frequency patterns, and VAE-related artefacts that diffusion
            models leave behind.
          </li>
          <li>
            <strong>Colour distribution</strong> — analyses per-channel histograms
            for over-smoothed gradients, unusual saturation peaks and high
            inter-channel correlation typical of AI synthesis.
          </li>
          <li>
            <strong>Noise patterns</strong> — real camera photos contain sensor
            noise with a characteristic gradient across the frame. AI images are
            either unnaturally clean or carry uniform, patternless noise.
          </li>
          <li>
            <strong>Edge coherence</strong> — examines edge transitions using
            Sobel operators. AI images often show overly uniform edge sharpness,
            missing sub-pixel detail and unnaturally clean boundaries.
          </li>
          <li>
            <strong>Texture complexity</strong> — uses Local Binary Patterns to
            measure micro-texture diversity. Diffusion models frequently produce
            reduced texture complexity and tile-like repeating patterns.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "limitations",
    title: "Limitations and accuracy",
    body: (
      <>
        <p>
          No detection method is 100% accurate. The tool works best on large,
          high-quality images from major generators. Results may be less reliable
          on:
        </p>
        <ul>
          <li>
            Low-resolution or heavily compressed images — compression artefacts
            can mask the signatures the tool looks for.
          </li>
          <li>
            Heavily edited images — extensive Photoshop work, filters or style
            transfers can alter or destroy AI fingerprints.
          </li>
          <li>
            Images from smaller or newer generators — the tool is trained on
            patterns from major platforms and may not recognise every AI model.
          </li>
        </ul>
        <p>
          Always treat the result as one signal alongside your own judgement. If
          the score is in the 40–60% range, the image is genuinely ambiguous and
          other context should be considered.
        </p>
      </>
    ),
  },
  {
    id: "why-detect",
    title: "Why detecting AI images matters",
    body: (
      <>
        <p>
          As AI-generated imagery becomes indistinguishable from photography, the
          ability to verify image authenticity is critical for journalists,
          researchers, educators, businesses and consumers. AI images are
          increasingly used in misinformation campaigns, fake product listings,
          fraudulent portfolios and social-engineering attacks.
        </p>
        <p>
          A reliable detector helps you make informed decisions about the visual
          content you encounter — whether you are evaluating a job candidate's
          portfolio, checking a news photograph, or verifying a product image
          before purchase.
        </p>
      </>
    ),
  },
];

const AiImageDetectorPage = () => (
  <ToolPageLayout
    kicker="Free Tool · No Sign-Up · No Tracking"
    title="AI Image Detector — Check if Image is AI Generated"
    breadcrumbName="AI Image Detector"
    intro="Upload any image to detect if it was created by AI — ChatGPT, Midjourney, Stable Diffusion, Gemini, Firefly and more. Free, private, runs entirely in your browser."
    schema={{
      tool: "tools/ai-image-detector",
      name: "AI Image Detector — Check if Image is AI Generated",
      path: "/tools/ai-image-detector",
      description:
        "Free AI image detector that analyses uploads for ChatGPT, Midjourney, Stable Diffusion, Gemini and Firefly signatures using six independent detection methods — entirely in your browser.",
      keywords:
        "AI image detector, detect AI art, ChatGPT image detector, Midjourney detector, Stable Diffusion detector, AI photo checker",
    }}
    articles={articles}
    faqs={aiImageDetectorFaqs}
    faqTitle="AI Image Detector FAQ"
    faqDescription="Common questions about AI image detection, answered by our experts."
    related={relatedFor("ai-image-detector")}
  >
    <AiImageDetector />
  </ToolPageLayout>
);

export default AiImageDetectorPage;
