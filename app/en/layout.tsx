import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IA4PYMES | AI Automation for SMEs in Spain · +360% ROI Guaranteed",
  description:
    "We cut operational costs for SMEs with custom AI. +360% average ROI, +1,000h saved per month, 100% success rate. Free diagnosis, no commitment. Start today.",
  keywords: [
    // Direct commercial intent
    "AI automation for SMEs Spain",
    "AI agency for small businesses",
    "custom AI consulting Spain",
    "custom chatbot for business",
    "automate business processes with AI",
    // Long-tail by use case
    "automate customer service with AI",
    "AI chatbot for e-commerce",
    "AI sales agent for SME",
    "reduce operational costs with AI",
    "AI tools for small business Spain",
    // High-conversion informational
    "how much does AI implementation cost for a business",
    "ROI artificial intelligence small business",
    "digital transformation SME artificial intelligence",
    "repetitive task automation small company",
    "AI consulting Spain affordable",
  ],
  authors: [{ name: "IA4PYMES" }],
  creator: "IA4PYMES",
  publisher: "IA4PYMES",
  metadataBase: new URL("https://ia4pymes.tech"),
  alternates: {
    canonical: "https://ia4pymes.tech/en",
    languages: {
      "es": "https://ia4pymes.tech",
      "es-ES": "https://ia4pymes.tech",
      "en": "https://ia4pymes.tech/en",
      "x-default": "https://ia4pymes.tech",
    },
  },
  openGraph: {
    title: "IA4PYMES - AI Automation for SMEs",
    description:
      "Automate your SME with custom Artificial Intelligence. Chatbots, sales agents and process optimization. Save time and costs today.",
    url: "https://ia4pymes.tech/en",
    siteName: "IA4PYMES",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IA4PYMES - AI Automation for SMEs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA4PYMES - AI Automation for SMEs",
    description:
      "Automate your SME with custom Artificial Intelligence. Chatbots, sales agents and process optimization.",
    images: ["/og-image.png"],
    creator: "@ia4pymes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
