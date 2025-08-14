'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import Image from 'next/image'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert prose-pink max-w-none
      prose-headings:text-white 
      prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-8
      prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-6 prose-h2:text-pink-300 prose-h2:border-b prose-h2:border-pink-500/30 prose-h2:pb-2
      prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-5 prose-h3:text-pink-400
      prose-p:text-white/90 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base
      prose-strong:text-pink-300 prose-strong:font-semibold
      prose-ul:text-white/90 prose-ul:mb-4 prose-ul:list-disc prose-ul:ml-6
      prose-ol:text-white/90 prose-ol:mb-4 prose-ol:list-decimal prose-ol:ml-6
      prose-li:mb-2 prose-li:leading-relaxed prose-li:text-white/90
      prose-a:text-pink-400 prose-a:no-underline hover:prose-a:text-pink-300 prose-a:font-medium
      prose-blockquote:border-l-4 prose-blockquote:border-pink-500 prose-blockquote:bg-white/5 prose-blockquote:rounded-r-lg prose-blockquote:p-4 prose-blockquote:my-6
      prose-code:text-pink-300 prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
      prose-pre:bg-gray-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto
      prose-table:border-collapse prose-table:border prose-table:border-white/20 prose-table:rounded-lg prose-table:overflow-hidden
      prose-th:bg-white/10 prose-th:text-pink-300 prose-th:font-semibold prose-th:p-3 prose-th:border-b prose-th:border-white/20
      prose-td:border-b prose-td:border-white/10 prose-td:p-3 prose-td:text-white/90
      prose-hr:border-white/20 prose-hr:my-8
      prose-img:rounded-lg prose-img:border prose-img:border-white/10
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children, ...props }) => (
            <h1 className="text-3xl font-bold mb-6 mt-8 text-white border-b border-pink-500/30 pb-4" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="text-2xl font-bold mb-4 mt-8 text-pink-300 flex items-center gap-2" {...props}>
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="text-xl font-semibold mb-3 mt-6 text-pink-400" {...props}>
              {children}
            </h3>
          ),
          p: ({ children, ...props }) => (
            <p className="text-white/90 leading-relaxed mb-4 text-base" {...props}>
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul className="list-disc list-inside space-y-2 mb-6 text-white/90" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="list-decimal list-inside space-y-2 mb-6 text-white/90" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="text-white/90 leading-relaxed" {...props}>
              {children}
            </li>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote className="border-l-4 border-pink-500 bg-pink-500/5 rounded-r-lg p-4 my-6 italic" {...props}>
              {children}
            </blockquote>
          ),
          code: ({ children, className, ...props }) => {
            const isInlineCode = !className
            if (isInlineCode) {
              return (
                <code className="text-pink-300 bg-white/10 px-2 py-1 rounded text-sm font-mono" {...props}>
                  {children}
                </code>
              )
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          pre: ({ children, ...props }) => (
            <pre className="bg-gray-900 border border-white/10 rounded-lg p-4 overflow-x-auto my-6" {...props}>
              {children}
            </pre>
          ),
          strong: ({ children, ...props }) => (
            <strong className="text-pink-300 font-semibold" {...props}>
              {children}
            </strong>
          ),
          em: ({ children, ...props }) => (
            <em className="text-pink-200 italic" {...props}>
              {children}
            </em>
          ),
          a: ({ children, href, ...props }) => (
            <a 
              href={href} 
              className="text-pink-400 hover:text-pink-300 transition-colors font-medium underline decoration-pink-400/30 hover:decoration-pink-300/50" 
              target={href?.startsWith('http') ? '_blank' : '_self'}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              {...props}
            >
              {children}
            </a>
          ),
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-white/20 rounded-lg overflow-hidden" {...props}>
                {children}
              </table>
            </div>
          ),
          th: ({ children, ...props }) => (
            <th className="bg-white/10 text-pink-300 font-semibold p-3 border-b border-white/20 text-left" {...props}>
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td className="border-b border-white/10 p-3 text-white/90" {...props}>
              {children}
            </td>
          ),
          hr: ({ ...props }) => (
            <hr className="border-white/20 my-8" {...props} />
          ),
          img: ({ src, alt }) => {
            if (!src) return null
            return (
              <div className="my-6">
                <Image
                  src={src}
                  alt={alt || ''}
                  width={800}
                  height={400}
                  className="rounded-lg border border-white/10 w-full h-auto"
                  unoptimized={false}
                />
              </div>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}