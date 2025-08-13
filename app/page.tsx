"use client";
import Image from "next/image";
import Sun3D from "./Sun3D";
import Poetry from "./Poetry";
import Visual from "./Visual";
import Sound from "./Sound";
import Journalism from "./Journalism";
import BookDesign from "./BookDesign";
import Title from "./title";
import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
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
  <div className="font-sans grid grid-rows-[20px_auto_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-4 sm:gap-8">
      <div className="row-start-1 flex justify-start items-start w-full ml-100">
        <Title onClick={() => setSelected(null)} />
      </div>
      {/* Menu bar */}
      {menuOpen && (
        <div className="row-start-2 w-full flex justify-center items-center min-h-[40px]" ref={menuRef}>
          <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 bg-white rounded px-2 sm:px-4 py-2 z-50 transition-all duration-300 ease-out opacity-0 translate-y-4 animate-[fadeInMenu_0.3s_ease-out_forwards]">
            <button onClick={() => { setSelected("Poetry"); setMenuOpen(false); }} className="px-3 py-1 hover:bg-gray-100 rounded">Poetry</button>
            <button onClick={() => { setSelected("Visual"); setMenuOpen(false); }} className="px-3 py-1 hover:bg-gray-100 rounded">Visual</button>
            <button onClick={() => { setSelected("Journalism"); setMenuOpen(false); }} className="px-3 py-1 hover:bg-gray-100 rounded">Journalism</button>
            <button onClick={() => { setSelected("Sound"); setMenuOpen(false); }} className="px-3 py-1 hover:bg-gray-100 rounded">Sound</button>
            <button onClick={() => { setSelected("BookDesign"); setMenuOpen(false); }} className="px-3 py-1 hover:bg-gray-100 rounded">BookDesign</button>
          </nav>

        </div>
      )}
      <main className="flex flex-col gap-6 sm:gap-8 row-start-3 items-center sm:items-start w-full h-full">
        <div className="w-full aspect-[16/9] max-h-[40vh] sm:max-h-[60vh] relative overflow-x-auto">
          {/* Sun3D is always rendered, but animates position/scale based on selection */}
          <div
            className={`absolute transition-all duration-700 ease-in-out 
              ${selected ? 'top-4 right-4 w-32 h-32 opacity-60 scale-75 z-10 pointer-events-none' : 'inset-0 w-full h-full opacity-100 scale-100 z-20'}
            `}
            style={{ pointerEvents: selected ? 'none' : 'auto' }}
          >
            <Sun3D />
          </div>
          {/* Render selected component on top if any */}
          {selected && (
            <div className="absolute inset-0 w-full h-full z-20">
              {(() => {
                switch (selected) {
                  case "Poetry":
                    return <Poetry />;
                  case "Visual":
                    return <Visual />;
                  case "Journalism":
                    return <Journalism />;
                  case "Sound":
                    return <Sound />;
                  case "BookDesign":
                    return <BookDesign />;
                  default:
                    return null;
                }
              })()}
            </div>
          )}
        </div>
      </main>
  <footer className="row-start-4 flex flex-wrap gap-4 sm:gap-6 items-center justify-center w-full px-2 text-sm sm:text-base">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 z-10"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          z-index="10"
          color="white"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={32}
            height={32}
          />
          T. Person
        </a>
        <div className="relative">
          <button
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 size-32 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={menuOpen}
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={32}
              height={32}
            />
            Examples
          </button>
        </div>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://bdsmovement.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={32}
            height={32}
          />
          Leave →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://instagram.com/_tperson_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-block" aria-hidden>
            <svg role="img" viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808 2.256 6.088 2.243 6.497 2.243 12c0 5.503.013 5.912.072 7.192.059 1.276.353 2.449 1.32 3.416.967.967 2.14 1.261 3.416 1.32 1.28.059 1.689.072 7.192.072s5.912-.013 7.192-.072c1.276-.059 2.449-.353 3.416-1.32.967-.967 1.261-2.14 1.32-3.416.059-1.28.072-1.689.072-7.192s-.013-5.912-.072-7.192c-.059-1.276-.353-2.449-1.32-3.416C21.449.425 20.276.131 19 .072 17.72.013 17.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </span>
        </a>
      </footer>
    </div>
  );
}
