import React from "react";

export function FadeInPanel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        animation: "fadeInPanel 0.7s cubic-bezier(0.4,0,0.2,1)",
        opacity: 1,
      }}
      className="fade-in-panel"
    >
      {children}
    </div>
  );
}
