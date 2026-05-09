"use client"

import dynamic from "next/dynamic"

const BlogChatWidget = dynamic(
  () => import("@/components/blog-chat-widget").then((mod) => mod.BlogChatWidget),
  { ssr: false }
)

export function BlogChatWidgetLoader({ lang = "es" }: { lang?: "es" | "en" }) {
  return <BlogChatWidget lang={lang} />
}
