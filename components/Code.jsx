"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ code }) => {
  return (
    <div className="w-full h-full border shadow-xl border-[#3b3b3b] rounded-xl overflow-hidden bg-[#1e1e1e] pt-7 relative">
        <div className="absolute top-0 left-0 p-2">Code:</div>
      <div className="code overflow-y-auto overflow-x-hidden w-full h-full">
        <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true} language="javascript" style={vscDarkPlus}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;