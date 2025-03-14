"use client";
import { useState } from "react";

function InteractiveCard({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
     className={`w-full max-w-sm min-h-[200px] bg-white rounded-lg overflow-visible transition-all duration-300 ${
        isHovered ? "shadow-2xl bg-neutral-200" : "shadow-lg"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}

export default InteractiveCard;
