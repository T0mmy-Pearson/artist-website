"use client";

import Sun3D from "./Sun3D";
import Poetry from "./Poetry";
import Visual from "./Visual";
import Sound from "./Sound";
import Journalism from "./Journalism";
import BookDesign from "./BookDesign";
import React, { useState, useRef, useEffect } from "react";
import MenuBar from "./MenuBar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [showBioOverlay, setShowBioOverlay] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="font-sans items-center justify-center gap-4 sm:gap-8 min-h-screen w-full relative">
      {selected === null && (
        <MenuBar selected={selected} setSelected={setSelected} setShowBioOverlay={setShowBioOverlay} />
      )}
      <main className="flex flex-1 sm:gap-8 items-center w-full min-h-screen">
        <div className="flex items-center justify-center relative w-full min-h-[200px] sm:min-h-0 aspect-[16/9] max-h-[40vh] sm:max-h-[60vh] mx-auto">
          {/* Sun3D is always rendered, but animates position/scale based on selection */}
          <div
            className={`transition-all duration-700 ease-in-out flex items-center justify-center
              ${selected ? 'absolute opacity-60  z-10 pointer-events-none' : 'relative w-full h-full opacity-100 scale-100 z-20'}
            `}
            style={{ pointerEvents: selected ? 'none' : 'auto' }}
          >
            <Sun3D />
          </div>
          {/* Render selected component on top if any */}
          {selected && (
            <div className="absolute inset-0 w-full z-20">
              <div className="flex w-full">
                {(() => {
                  switch (selected) {
                    case "Poetry":
                      return <Poetry setSelected={setSelected} />;
                    case "Visual":
                      return <Visual setSelected={setSelected} />;
                    case "Journalism":
                      return <Journalism setSelected={setSelected} />;
                    case "Sound":
                      return <Sound setSelected={setSelected} />;
                    case "BookDesign":
                      return <BookDesign setSelected={setSelected} />;
                    default:
                      return null;
                  }
                })()}
              </div>
            </div>
          )}
        </div>
      </main>
      {showBioOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <div className="relative shadow-lg bg-white rounded-lg  max-w-lg w-full p-6 text-black text-sm sm:text-base whitespace-pre-line">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
              onClick={() => setShowBioOverlay(false)}
              aria-label="Close biography"
            >
              ×
            </button>
            {`T. Person is an interdisciplinary writer, artist and publisher.
They've produced film work, poems, essays, performances and music for various projects, including Embassy Gallery, Transmission Gallery and Hidden Door Festival. Their writing is published on numerous platforms: Gutter magazine, SPAM zine, Erotoplasty, Sand Journal and the 87 press. They founded —algia magazine and orangeapplepress, both micropresses for experimental writing; their EP 'The Sun / The Throat" was released by Sgarab Tapes, Cardiff, and are researching movement and sound for future performances at the critical junctures between privilege, ecology and mythmaking.`}
          </div>
        </div>
      )}
    </div>
  );
}
