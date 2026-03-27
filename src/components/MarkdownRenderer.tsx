import React from "react";

type MarkdownRendererProps = {
  content: string;
};

function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      nodes.push(
        <strong key={match.index} className="font-semibold text-white">
          {match[2]}
        </strong>,
      );
    } else if (match[3]) {
      nodes.push(
        <em key={match.index} className="italic text-white/80">
          {match[3]}
        </em>,
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="mt-10 mb-4 text-2xl font-semibold text-white"
        >
          {line.slice(3)}
        </h2>,
      );
      i++;
      continue;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={i}
          className="mt-10 mb-4 text-3xl font-semibold text-white"
        >
          {line.slice(2)}
        </h1>,
      );
      i++;
      continue;
    }

    if (line.trim() === "---") {
      elements.push(
        <hr
          key={i}
          className="my-8 border-t border-white/10"
        />,
      );
      i++;
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    const paragraphLines: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#") && lines[i].trim() !== "---") {
      paragraphLines.push(lines[i]);
      i++;
    }

    elements.push(
      <p key={`p-${i}`} className="mb-4 leading-relaxed text-white/75">
        {parseInline(paragraphLines.join("\n"))}
      </p>,
    );
  }

  return <div className="space-y-0">{elements}</div>;
}
