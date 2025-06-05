import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

const page = async ({ params }) => {
  const filepath = `content/${params.slug}.md`;
  if (!fs.existsSync(filepath)) {
    notFound();
  }
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-lg mb-2 border-l-4 border-gray-500 pl-4 italic">
        &quot; {data.description} &quot;
      </p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
        <p className="text-sm text-gray-500 mb-4">{data.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose prose-lg max-w-full mx-auto dark:prose-invert prose-pre:bg-gray-900 prose-pre:text-white prose-pre:overflow-auto prose-code:text-white prose-code:bg-gray-900 break-words"
      ></div>
    </div>
  );
};

export default page;
