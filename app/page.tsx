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
  <div className="font-sans items-center justify-center gap-4 sm:gap-8" style={{ minHeight: '100vh', minWidth: '100vw', height: '100vh', width: '100vw' }}>
  {selected === null && (
    <div className="flex flex-1 w-full items-center justify-center">
      <MenuBar selected={selected} setSelected={setSelected} />
    </div>
  )}
  <main className="flex flex-1 flex-col gap-6 sm:gap-8 items-center justify-center w-full h-full" style={{ height: '100vh', width: '100vw' }}>
  <div className="flex items-center justify-center relative w-full h-full min-h-[200px] sm:min-h-0 aspect-[16/9] max-h-[40vh] sm:max-h-[60vh] mx-auto">
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
            <div className="absolute inset-0 w-full h-full z-20 flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full">
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
  <footer className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center w-full px-2 text-sm sm:text-base mt-auto">

      </footer>
    </div>
  );
}
