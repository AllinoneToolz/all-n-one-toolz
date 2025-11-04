// scripts/create-all-tools.js
import fs from "fs";
import path from "path";

const categories = {
  calculators: [
    "bmi-calculator",
    "age-calculator",
    "love-calculator",
    "percentage-calculator",
    "discount-calculator",
    "simple-interest-calculator",
    "compound-interest-calculator",
    "loan-emi-calculator",
    "tax-calculator",
    "time-zone-converter",
    "date-difference-calculator",
    "pregnancy-due-date-calculator",
    "tip-calculator",
    "calories-burned-calculator",
    "body-fat-calculator",
    "height-converter",
    "gpa-calculator",
  ],

  converters: [
    "image-converter",
    "video-converter",
    "audio-converter",
    "pdf-to-word",
    "word-to-pdf",
    "excel-to-csv",
    "text-to-pdf",
    "html-to-pdf",
    "zip-creator",
    "currency-converter",
    "length-converter",
    "weight-converter",
    "temperature-converter",
    "speed-converter",
    "pressure-converter",
  ],

  imageTools: [
    "image-resizer",
    "image-compressor",
    "image-cropper",
    "background-remover",
    "image-to-text",
    "image-color-picker",
    "meme-generator",
    "thumbnail-downloader",
    "watermark-remover",
    "qr-code-generator",
    "barcode-generator",
  ],

  textTools: [
    "word-counter",
    "character-counter",
    "case-converter",
    "text-reverser",
    "text-to-speech",
    "speech-to-text",
    "grammar-checker",
    "plagiarism-checker",
    "lorem-ipsum-generator",
    "hashtag-generator",
    "keyword-density-checker",
    "sentence-rewriter",
  ],

  developerTools: [
    "json-formatter",
    "xml-formatter",
    "html-minifier",
    "css-minifier",
    "javascript-formatter",
    "base64-encoder",
    "url-encoder",
    "hash-generator",
    "uuid-generator",
    "regex-tester",
    "color-picker",
    "html-previewer",
    "fake-data-generator",
  ],

  seoTools: [
    "meta-tag-generator",
    "robots-txt-generator",
    "sitemap-generator",
    "keyword-suggestion-tool",
    "backlink-checker",
    "domain-age-checker",
    "website-speed-checker",
    "website-screenshot-tool",
    "broken-link-checker",
    "utm-builder",
    "serp-preview-tool",
  ],

  socialMediaTools: [
    "instagram-dp-viewer",
    "youtube-thumbnail-downloader",
    "twitter-dp-viewer",
    "facebook-thumbnail-viewer",
    "social-media-downloader",
    "bio-generator",
    "caption-generator",
    "emoji-translator",
    "social-post-scheduler",
  ],

  designTools: [
    "logo-maker",
    "font-preview-tool",
    "favicon-generator",
    "color-palette-extractor",
    "pattern-generator",
    "mockup-generator",
    "svg-to-png",
  ],

  privacyTools: [
    "password-generator",
    "password-strength-checker",
    "text-encryptor",
    "file-encryptor",
    "ip-finder",
    "user-agent-parser",
    "dns-lookup",
    "whois-lookup",
  ],

  aiTools: [
    "ai-text-summarizer",
    "ai-paraphraser",
    "ai-blog-generator",
    "ai-caption-generator",
    "ai-image-upscaler",
    "ai-code-explainer",
    "ai-resume-builder",
    "ai-email-writer",
    "ai-chatbot",
  ],

  funTools: [
    "truth-or-dare-generator",
    "random-number-picker",
    "spin-wheel-generator",
    "birthday-countdown",
    "username-generator",
    "lucky-draw-generator",
    "fake-chat-generator",
    "emoji-combiner",
    "horoscope-viewer",
  ],
};

const basePath = path.join(process.cwd(), "src", "app", "tools");
const homePath = path.join(process.cwd(), "src", "app", "page.js");

function toTitle(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

let allTools = [];

for (const [category, tools] of Object.entries(categories)) {
  const categoryPath = path.join(basePath, category);
  if (!fs.existsSync(categoryPath)) fs.mkdirSync(categoryPath, { recursive: true });

  for (const slug of tools) {
    const toolTitle = toTitle(slug);
    const filePath = path.join(categoryPath, slug, "page.js");
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const content = `import ToolPageTemplate from "@/components/ToolPageTemplate";

export default function Page() {
  return (
    <ToolPageTemplate title="${toolTitle}" description="Use the ${toolTitle}.">
      <div className="text-gray-300 text-center mt-8">
        🚧 Coming soon: <strong>${toolTitle}</strong>
      </div>
    </ToolPageTemplate>
  );
}`;
    fs.writeFileSync(filePath, content, "utf8");
    allTools.push({ name: toolTitle, link: `/tools/${category}/${slug}` });
  }
}

// --- Update Homepage ---
const homeContent = `\
"use client";
import Link from "next/link";

export default function Home() {
  const tools = ${JSON.stringify(allTools, null, 2)};

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white px-6 py-16">
      <section className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-400 drop-shadow-md">
          All-in-One Toolz
        </h1>
        <p className="text-gray-300 mb-12 text-lg">
          Smart, fast and secure online tools — all in one place.
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.link}
              className="bg-gray-800/40 border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all p-6 rounded-2xl shadow-md text-left group"
            >
              <h2 className="text-xl font-semibold group-hover:text-blue-400 mb-2">
                {tool.name}
              </h2>
              <p className="text-gray-400 text-sm">
                Click to use the {tool.name}.
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}`;

fs.writeFileSync(homePath, homeContent, "utf8");

console.log("✅ All tool pages created and homepage updated automatically!");
