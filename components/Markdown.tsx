import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
import {Image} from "@nextui-org/react"
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter"

import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python'
import cpp from 'react-syntax-highlighter/dist/cjs/languages/prism/cpp'

import rangeParser from 'parse-numeric-range'
import {materialLight} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from '../styles/Blog.module.css'

SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('markdown', markdown)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('cpp', cpp)

type blogMarkdownProps = {
  markdown: string
}

export default function BlogMarkdown({markdown}: blogMarkdownProps) {

  const syntaxTheme = materialLight

  // const MarkdownComponents: object = {
  //   code({ node, inline, className, ...props }) {
  //
  //   }
  // }

  return (
    <ReactMarkdown
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={syntaxTheme}
              language={match[1]}
              PreTag="div"
              className="codeStyle"
              showLineNumbers={true}
              useInlineStyles={true}
              {...props}
            />
          ) : (
            <code className={className} {...props}>{children}</code>
          )
        },
        p: (paragraph: { children?: boolean; node?: any }) => {
          const {node} = paragraph

          if (node.children[0].tagName === "img") {
            const image = node.children[0]
            const metaString = image.properties.alt
            const alt = metaString?.replace(/ *\{[^)]*\} */g, "")
            const metaWidth = metaString.match(/{([^}]+)x/)
            const metaHeight = metaString.match(/x([^}]+)}/)
            const width = metaWidth ? metaWidth[1] : "768"
            const height = metaHeight ? metaHeight[1] : "432"
            const isPriority = metaString?.toLowerCase().match('{priority}')
            const hasCaption = metaString?.toLowerCase().includes('{caption:')
            const caption = metaString?.match(/{caption: (.*?)}/)?.pop()

            return (
              <div className="postImgWrapper">
                <Image
                  src={image.properties.src}
                  width={width}
                  height={height}
                  className="postImg"
                  alt={alt}
                  priority={isPriority}
                />
                {hasCaption ? <div className={styles.mdCaption} aria-label={caption}>{caption}</div> : null}
              </div>
            )
          }
          return <p>{paragraph.children}</p>
        },
      }}
      children={markdown}
    />
  );
}
