import React, { useEffect, useRef, useState } from "react";

interface MenuBarProps {
  selected: string | null;
  setSelected: (value: string | null) => void;
  setShowBioOverlay?: (show: boolean) => void;
}

const menuItems = [
  { label: 'Poetry', value: 'Poetry' },
  { label: 'Visual', value: 'Visual' },
  { label: 'Journalism', value: 'Journalism' },
  { label: 'Sound', value: 'Sound' },
  { label: 'Book Design', value: 'BookDesign' },
  { label: 'T. Person', value: null },
];

const MenuBar: React.FC<MenuBarProps> = ({ selected, setSelected, setShowBioOverlay }) => {
  const [rotation, setRotation] = useState(0);
  const [size, setSize] = useState(320); // fallback size
  const overlayRef = useRef<HTMLDivElement>(null);
  const [showPersonMenu, setShowPersonMenu] = useState(false);
  const personMenuRef = useRef<HTMLDivElement>(null);
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showPersonMenu) return;
    function handleClick(e: MouseEvent) {
      if (personMenuRef.current && !personMenuRef.current.contains(e.target as Node)) {
        setShowPersonMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showPersonMenu]);

  useEffect(() => {
    if (!showContact) return;
    function handleClick(e: MouseEvent) {
      if (contactRef.current && !contactRef.current.contains(e.target as Node)) {
        setShowContact(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showContact]);

  useEffect(() => {
    // Animate rotation
    const spinDuration = 64;
    let frame: number;
    let start: number | null = null;
    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      setRotation((elapsed / spinDuration) * 2 * Math.PI);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    function updateSize() {
      if (overlayRef.current) {
        setSize(Math.min(overlayRef.current.offsetWidth, overlayRef.current.offsetHeight));
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const radius = size * 0.4;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-30">
      <div
        ref={overlayRef}
        className="relative"
        style={{ width: size, height: size, transform: `rotate(${(rotation * 180) / Math.PI}deg)`, transition: 'transform 0.1s linear' }}
      >
        {menuItems.map((item, i, arr) => {
          const angle = (2 * Math.PI * i) / arr.length - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          if (item.label === 'T. Person') {
            return (
              <div
                key={item.label}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                ref={personMenuRef}
              >
                <button
                  className={`flex items-center gap-2 rounded px-2 py-1 pointer-events-auto text-xs sm:text-base md:text-lg${selected === item.value ? ' font-bold underline' : ''} cursor-pointer transition-transform duration-150 hover:scale-110`}
                  onClick={() => setShowPersonMenu((v) => !v)}
                  style={{ transform: `rotate(${-((rotation) * 180 / Math.PI)}deg)` }}
                  aria-haspopup="true"
                  aria-expanded={showPersonMenu}
                >
                  {item.label}
                </button>
                {showPersonMenu && (
                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-white border border-gray-200 rounded shadow-lg z-50 min-w-[120px] flex flex-col text-black text-sm" style={{ transform: `translate(-50%, 0)` }}>
                    <button
                      className="px-4 py-2 hover:bg-gray-100 text-left"
                      onClick={() => {
                        setShowPersonMenu(false);
                        setTimeout(() => setShowContact(true), 0);
                      }}
                    >
                      Contact
                    </button>
                    <button
                      className="px-4 py-2 hover:bg-gray-100 text-left"
                      onClick={() => {
                        setShowPersonMenu(false);
                        setTimeout(() => setShowBioOverlay && setShowBioOverlay(true), 0);
                      }}
                    >
                      Bio
                    </button>
                  </div>
                )}
                {showContact && (
                  <div ref={contactRef} className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-white border border-gray-200 rounded shadow-lg z-50 px-4 py-2 text-black text-sm min-w-[220px]" style={{ transform: `translate(-50%, 0)` }}>
                    <button
                      className="absolute top-2 right-2 text-gray-400 hover:text-black text-xl font-bold"
                      onClick={() => setShowContact(false)}
                      aria-label="Close contact"
                      style={{ lineHeight: 1 }}
                    >
                      ×
                    </button>
                    <div className="pr-6">tundraperson@gmail.com</div>
                    <div className="flex flex-col items-center mt-6">
                      <a href="https://instagram.com/_tperson_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-600 hover:text-pink-800">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="24" height="24" rx="6" fill="#000000"/>
                          <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM19 6.5C19.2761 6.5 19.5 6.72386 19.5 7C19.5 7.27614 19.2761 7.5 19 7.5C18.7239 7.5 18.5 7.27614 18.5 7C18.5 6.72386 18.7239 6.5 19 6.5Z" fill="#fff"/>
                          <circle cx="12" cy="12" r="3.2" stroke="#fff" strokeWidth="1.6"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          }
          return (
            <div
              key={item.label}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <button
                className={`flex items-center gap-2 rounded px-2 py-1 pointer-events-auto text-xs sm:text-base md:text-lg${selected === item.value ? ' font-bold underline' : ''} cursor-pointer transition-transform duration-150 hover:scale-200`}
                onClick={() => setSelected(item.value)}
                style={{ transform: `rotate(${-((rotation) * 180 / Math.PI)}deg)` }}
              >
                {item.label}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuBar;
