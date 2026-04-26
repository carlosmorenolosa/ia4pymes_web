import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IA4PYMES - AI Automation for SMEs in Spain",
  description:
    "Automate your SME with custom Artificial Intelligence. Chatbots, sales agents and process optimization. Save time and costs today.",
  keywords: [
    "SME automation",
    "artificial intelligence for business",
    "custom chatbots",
    "process automation",
    "AI for small businesses",
    "custom AI tools",
    "AI consulting",
    "digital transformation SME",
    "custom AI software",
    "repetitive task automation",
    "Spain AI agency",
  ],
  authors: [{ name: "IA4PYMES" }],
  creator: "IA4PYMES",
  publisher: "IA4PYMES",
  metadataBase: new URL("https://ia4pymes.tech"),
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      "es-ES": "/",
      "x-default": "/",
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
