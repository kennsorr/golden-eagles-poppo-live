import React from "react";

type MarkdownRendererProps = {
  content: string;
};

function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /(\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[2] && match[3]) {
      nodes.push(
        <a
          key={match.index}
          href={match[3]}
          className="font-medium text-amber-200 underline decoration-amber-200/40 underline-offset-4 transition hover:text-amber-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[2]}
        </a>,
      );
    } else if (match[4]) {
      nodes.push(
        <strong key={match.index} className="font-semibold text-white">
          {match[4]}
        </strong>,
      );
    } else if (match[5]) {
      nodes.push(
        <em key={match.index} className="italic text-white/80">
          {match[5]}
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

function isTableSeparator(line: string): boolean {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function parseTableRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
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

    if (
      line.trim().startsWith("|") &&
      i + 1 < lines.length &&
      isTableSeparator(lines[i + 1])
    ) {
      const headers = parseTableRow(line);
      const rows: string[][] = [];
      i += 2;

      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(parseTableRow(lines[i]));
        i++;
      }

      elements.push(
        <div key={`table-${i}`} className="my-6 overflow-x-auto">
          <table className="w-full min-w-[640px] overflow-hidden rounded-2xl border border-white/10 text-left text-sm text-white/75">
            <thead className="bg-white/5 text-xs uppercase tracking-widest text-amber-200/70">
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={`${header}-${index}`}
                    scope="col"
                    className="border-b border-white/10 px-4 py-3 font-semibold"
                  >
                    {parseInline(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b border-white/10 last:border-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 align-top">
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (line.trim().startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }

      elements.push(
        <ul
          key={`ul-${i}`}
          className="mb-6 list-disc space-y-2 pl-6 leading-relaxed text-white/75 marker:text-amber-200/80"
        >
          {items.map((item, index) => (
            <li key={index}>{parseInline(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      lines[i].trim() !== "---" &&
      !lines[i].trim().startsWith("|") &&
      !lines[i].trim().startsWith("- ")
    ) {
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
