
import React, { useState } from 'react';
import BackArrow from './BackArrow';

export default function Sound({ setSelected }: { setSelected?: (val: string | null) => void }) {

  const [popupUrl, setPopupUrl] = useState<string | null>(null);
  const links = [
    {
      label: 'The Sun/The Throat, EP, Sgarab Tapes, 2024',
      url: 'https://sgarabtapes.bandcamp.com/album/the-sun-the-throat',
    },
    {
      label: 'Erotomania I, Radiophrenia Festival, 2020',
      url: 'https://soundcloud.com/user-212901004',
    },
    {
      label: 'algiaxradiobuenavida radio show for poetry and sound, 2020-2021',
      url: 'https://soundcloud.com/radiobuenavida/algia-radio-buena-vida-300621',
    },
  ];

  return (
    <div>
      {setSelected && <BackArrow onClick={() => setSelected(null)} />}
      <ul className="space-y-3 mt-4">
        {links.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPopupUrl(item.url)}
              className="inline-flex items-center gap-1 hover:underline focus:underline text-black font-medium group focus:outline-none"
              aria-label={`Open ${item.label}`}
            >
              <span>{item.label}</span>
              <span className="ml-1 text-lg group-hover:translate-x-1 transition-transform">→ listen</span>
            </button>
          </li>
        ))}
      </ul>
      {/* Popup modal for sound link */}
      {popupUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent" onClick={() => setPopupUrl(null)}>
          <div className="relative bg-white rounded-lg shadow-lg p-2 md:p-4 w-full max-w-3xl h-[80vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-gray-500 focus:outline-none"
              onClick={() => setPopupUrl(null)}
              aria-label="Close popup"
            >
              &times;
            </button>
            <div className="w-full h-full overflow-auto flex items-center justify-center">
              <div style={{ width: '160%', height: '160%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <iframe
                  src={popupUrl}
                  title="Sound Link"
                  className="rounded border"
                  style={{ width: '100%', height: '100%', transform: 'scale(0.65)', transformOrigin: 'top center', border: 'none' }}
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
