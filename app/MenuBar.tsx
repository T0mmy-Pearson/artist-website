import React, { useEffect, useRef, useState } from "react";

interface MenuBarProps {
  selected: string | null;
  setSelected: (value: string | null) => void;
}

const menuItems = [
  { label: 'Poetry', value: 'Poetry' },
  { label: 'Visual', value: 'Visual' },
  { label: 'Journalism', value: 'Journalism' },
  { label: 'Sound', value: 'Sound' },
  { label: 'Book Design', value: 'BookDesign' },
  { label: 'T. Person', value: null },
];

const MenuBar: React.FC<MenuBarProps> = ({ selected, setSelected }) => {
  const [rotation, setRotation] = useState(0);
  const [size, setSize] = useState(320); // fallback size
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate rotation
    const spinDuration = 32;
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
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-30">
      <div
        ref={overlayRef}
        className="relative"
        style={{ width: size, height: size, transform: `rotate(${(rotation * 180) / Math.PI}deg)`, transition: 'transform 0.1s linear' }}
      >
        {menuItems.map((item, i, arr) => {
          const angle = (2 * Math.PI * i) / arr.length - Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
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
                className={`flex items-center gap-2 rounded px-2 py-1 pointer-events-auto text-xs sm:text-base md:text-lg${selected === item.value ? ' font-bold underline' : ''}`}
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
