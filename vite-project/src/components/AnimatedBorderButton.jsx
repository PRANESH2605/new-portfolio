import React from "react";
import { Download } from "lucide-react";

export default function AnimatedButton({ children, className = "", ...props }) {
  return (
    <button 
      className={`relative flex items-center gap-2 px-8 py-4
      text-foreground border border-border rounded-full
      overflow-hidden group transition-all duration-300 hover:text-primary ${className}`}
      {...props}
    >
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
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="60 140"
          className="animate-dash"
        />
      </svg>

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {children || (
          <>
            <Download size={18} />
            Download
          </>
        )}
      </span>
    </button>
  );
}