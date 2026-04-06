import React from "react";
import { Download } from "lucide-react";

export default function AnimatedButton() {
  return (
    <button className="relative flex items-center gap-2 px-8 py-4
    text-white border border-gray-600 rounded-full
    overflow-hidden group">

      {/* SVG Border (hidden initially) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-0
        group-hover:opacity-100 transition-opacity duration-300"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <rect
          x="1"
          y="1"
          width="98"
          height="38"
          rx="20"
          ry="20"
          fill="none"
          stroke="cyan"
          strokeWidth="2"
          strokeDasharray="60 140"
          className="animate-[dash_2s_linear_infinite]"
        />
      </svg>

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        <Download size={18} />
        Download
      </span>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -200;
          }
        }
      `}</style>
    </button>
  );
}