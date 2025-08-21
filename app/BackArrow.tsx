import React from 'react'

export default function BackArrow({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="z-30 bg-white/80 rounded-full p-2 shadow hover:bg-gray-200 transition"
      aria-label="Back"
    >
      X
    </button>
  );
}
