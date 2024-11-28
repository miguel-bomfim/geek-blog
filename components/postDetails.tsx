"use client";

import { useRef, useEffect } from "react";

export default function PostDetails({ conteudo }: { conteudo: string }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      // Add custom styles or modifications to the content
      const images = contentRef.current.querySelectorAll("img");
      images.forEach((img) => {
        img.style.borderRadius = "0.375rem"; // rounded-md
        img.style.boxShadow =
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"; // shadow-md
        img.style.marginTop = "1rem";
        img.style.width = "100%";
      });

      const blockquote = contentRef.current.querySelectorAll("blockquote");
      blockquote.forEach((blckq) => {
        blckq.style.marginBottom = "1rem";
        blckq.style.color = "darkslateblue";
      });

      const headings =
        contentRef.current.querySelectorAll("h2, h3, h4, h5, h6");
      headings.forEach((heading) => {
        heading.classList.add("font-bold", "mt-6", "mb-2");
      });

      const paragraphs = contentRef.current.querySelectorAll("p");
      paragraphs.forEach((p) => {
        p.classList.add("mb-4", "leading-relaxed", "text-justify");
      });

      const links = contentRef.current.querySelectorAll("a");
      links.forEach((link) => {
        link.classList.add("text-blue-600", "hover:underline");
      });
    }
  }, [conteudo]);

  return (
    <div
      ref={contentRef}
      className="text-center px-6 pb-6"
      dangerouslySetInnerHTML={{ __html: conteudo }}
    />
  );
}
