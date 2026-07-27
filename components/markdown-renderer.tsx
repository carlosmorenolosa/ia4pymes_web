"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeSanitize from "rehype-sanitize"

interface MarkdownRendererProps {
  content: string
  minimal?: boolean
  isUser?: boolean
}

export default function MarkdownRenderer({ content, minimal = false, isUser = false }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSanitize]}
      components={{
        p: ({ children }) => (
          <p className={`mb-1 last:mb-0 ${minimal ? "text-xs leading-relaxed" : "text-xs sm:text-sm mb-2"}`}>
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className={`list-disc list-inside space-y-0.5 ${minimal ? "text-xs" : "text-xs sm:text-sm"}`}>
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className={`list-decimal list-inside space-y-0.5 ${minimal ? "text-xs" : "text-xs sm:text-sm"}`}>
            {children}
          </ol>
        ),
        strong: ({ children }) => (
          <strong className={isUser ? "text-slate-700 font-bold" : "text-blue-600 font-bold"}>
            {children}
          </strong>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
