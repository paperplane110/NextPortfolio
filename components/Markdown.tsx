import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import cpp from "react-syntax-highlighter/dist/cjs/languages/prism/cpp";
import java from "react-syntax-highlighter/dist/cjs/languages/prism/java";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "../styles/Blog.module.css";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);

type blogMarkdownProps = {
  markdown: string;
};

export default function BlogMarkdown({ markdown }: blogMarkdownProps) {
  const syntaxTheme = coy;

  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              //@ts-ignore
              style={syntaxTheme}
              language={match[1]}
              PreTag="div"
              className={styles.mdCodeStyle}
              showLineNumbers={true}
              useInlineStyles={true}
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        p: ({ children, node, ...props }) => {
          // const {node} = paragraph
          //@ts-ignore
          if (node.children[0].tagName === "img") {
            const image = node.children[0];
            //@ts-ignore
            const metaString = image.properties.alt;
            const alt = metaString?.replace(/ *\{[^)]*\} */g, "");
            const metaWidth = metaString.match(/{([^}]+)x/);
            const metaHeight = metaString.match(/x([^}]+)}/);
            const width = metaWidth ? metaWidth[1] : "768";
            const height = metaHeight ? metaHeight[1] : "432";
            const isPriority: boolean = metaString
              ?.toLowerCase()
              .match("{priority}");
            const hasCaption = metaString?.toLowerCase().includes("{caption:");
            const caption = metaString?.match(/{caption: (.*?)}/)?.pop();

            return (
              <div className={styles.postImgWrapper}>
                <Image
                  //@ts-ignore
                  src={image.properties.src}
                  width={width}
                  height={height}
                  className={styles.postImg}
                  alt={alt}
                  priority={isPriority}
                />
                {hasCaption ? (
                  <div className={styles.mdCaption} aria-label={caption}>
                    {caption}
                  </div>
                ) : null}
              </div>
            );
          }
          return <p>{children}</p>;
        },

        li: ({ children, ordered, ...props }) => {
          if (ordered) return <li>{children}</li>;
          return <li>• {children}</li>;
        },

        a: ({ node, children, ...props }) => {
          //@ts-ignore
          const href: string = node.properties["href"];
          if (href.startsWith("http"))
            return (
              <a
                className={styles.mdLink}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {children}🔗
              </a>
            );
          return (
            <a className={styles.mdLink} href={href}>
              {children}↩️
            </a>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
