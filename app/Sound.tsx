import React from 'react';
import BackArrow from './BackArrow';

export default function Sound({ setSelected }: { setSelected?: (val: string | null) => void }) {
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
    <div className="w-full shadow-md max-w-2xl mx-auto px-2 sm:px-4 md:px-8 py-6 md:py-12 flex flex-col items-center">
      {setSelected && (
        <div className="w-full flex justify-end mb-4">
          <BackArrow onClick={() => setSelected(null)} />
        </div>
      )}
      <ul className="space-y-3 mt-4">
        {links.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline focus:underline text-black font-medium group focus:outline-none"
              aria-label={`Open ${item.label}`}
            >
              <span>{item.label}</span>
              <span className="ml-1 text-lg group-hover:translate-x-1 transition-transform">→ listen</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
