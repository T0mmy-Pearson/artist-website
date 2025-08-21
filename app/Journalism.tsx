import React, { useState } from 'react';
import BackArrow from './BackArrow';
import Image from 'next/image';

export default function Journalism({ setSelected }: { setSelected?: (val: string | null) => void }) {

  const [modalImg, setModalImg] = useState<string | null>(null);
  type JournalismLink = {
    label: string;
    url: string;
    imgSrc?: string;
    imgAlt?: string;
  };
  const links: JournalismLink[] = [
    {
      label: 'I want and I want and I Want @ Finger Food',
      url: 'https://www.fingerfoodmag.com/product-page/finger-food-2-new-look-same-great-taste',
      imgSrc: '/imagees/Journalism/ffwant.jpg',
      imgAlt: 'I want and I want and I Want @ Finger Food',
    },
    {
      label: 'Food writing @ Substack',
      url: 'https://tpers0n.substack.com/',
      imgSrc: '/imagees/Journalism/eating.jpg',
      imgAlt: 'Food writing @ Substack',
    },
    {
      label: 'Lasagne by Wayne Holloway-Smith @ SPAM',
      url: 'https://www.spamzine.co.uk/post/spam-cuts-lasagne-by-wayne-holloway-smith',
    },
    {
      label: 'Suburban Finesse by Ashwani Sharma, Azad Ashim Sharma and Kashif Sharma-Patel @ SPAM',
      url: 'https://www.spamzine.co.uk/post/review-suburban-finesse-by-ashwani-sharma-azad-ashim-sharma-and-kashif-sharma-patel',
    },
    {
      label: 'Music Writing @ The Skinny',
      url: 'https://muckrack.com/tommy-pearson-2/articles',
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4 md:px-8 py-6 md:py-12 flex flex-col items-center">
      {setSelected && (
        <div className="w-full flex justify-end mb-4">
          <BackArrow onClick={() => setSelected(null)} />
        </div>
      )}
      <ul className="space-y-3 mt-4">
        {links.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <br />
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline focus:underline text-black font-medium group focus:outline-none"
              aria-label={`Open ${item.label}`}
            >
              <span>{item.label}</span>
              <span className="ml-1 text-lg group-hover:translate-x-1 transition-transform">→ read</span>
            </a>
            {item.imgSrc && (
              <button
                className="ml-2 focus:outline-none"
                onClick={e => {
                  e.preventDefault();
                  setModalImg(item.imgSrc!);
                }}
                aria-label="Enlarge image"
                type="button"
              >
                <Image
                  src={item.imgSrc}
                  alt={item.imgAlt || item.label}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-cover rounded shadow border border-gray-200 hover:scale-105 transition-transform"
                />
              </button>
            )}
          </li>
        ))}
      </ul>
      {/* Modal for enlarged image */}
      {modalImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent" onClick={() => setModalImg(null)}>
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-lg w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-gray-500 focus:outline-none"
              onClick={() => setModalImg(null)}
              aria-label="Close image"
            >
              &times;
            </button>
            <Image src={modalImg} alt="Enlarged journalism" className="w-full max-w-xs max-h-[70vh] rounded" width={500} height={500} />
          </div>
        </div>
      )}
    </div>
  );
}
