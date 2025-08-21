import React, { useState } from 'react';
import Image from 'next/image';
import BackArrow from './BackArrow';

export default function BookDesign({ setSelected }: { setSelected?: (val: string | null) => void }) {
  // Mock images from available assets
  const gallery = [
    { src: '/imagees/Visual/CfW.jpg', alt: 'Book design sample 1' },
    { src: '/imagees/Visual/Closure.jpg', alt: 'Book design sample 2' },
    { src: '/imagees/Visual/Straw.JPG', alt: 'Book design sample 3' },
    { src: '/imagees/Poetry/5.jpg', alt: 'Book design sample 4' },
    { src: '/imagees/Poetry/Decalcomania.jpg', alt: 'Book design sample 5' },
    { src: '/imagees/bdog.png', alt: 'Book design sample 6' },
  ];
  const [current, setCurrent] = useState(0);
  const total = gallery.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4 md:px-8 py-6 md:py-12 flex flex-col items-center">
      {setSelected && (
        <div className="w-full flex justify-end mb-4">
          <BackArrow onClick={() => setSelected(null)} />
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Book Design List */}
        <ul className="space-y-2 break-words w-full md:w-1/2 order-1 md:order-none">
          <li>
            <a href="https://www.scotlandstreetpress.com/" className="text-blue-700 hover:underline hover:text-blue-900 focus:underline" target="_blank" rel="noopener noreferrer">
              Scotland Street Press
            </a>, Typesetter [8+ Titles 2022-Present]
          </li>
          <li>
            <a href="https://www.spamzine.co.uk/post/feature-on-the-first-five-years-of-dostoyevsky-wannabe" className="text-blue-700 hover:underline hover:text-blue-900 focus:underline" target="_blank" rel="noopener noreferrer">
              Dostoyevsky Wannabe
            </a>, Typesetter [10+ Titles, 2020-2022]
          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/61036065-glasgow" className="text-blue-700 hover:underline hover:text-blue-900 focus:underline" target="_blank" rel="noopener noreferrer">
              Glasgow Cities Anthology
            </a>, co-editor with Colin Herd + Ruthie Kennedy
          </li>
          <li>
            <a href="https://www.instagram.com/a.l.g.i.a/" className="text-blue-700 hover:underline hover:text-blue-900 focus:underline" target="_blank" rel="noopener noreferrer">
              algia journal and pamphlets
            </a>, founding editor+designer, 2020-22
          </li>
          <li>
            <a href="https://www.instagram.com/explore/search/keyword/?q=orangeapplepress" className="text-blue-700 hover:underline hover:text-blue-900 focus:underline" target="_blank" rel="noopener noreferrer">
              orangeapplepress pamphlets
            </a>, founding editor+creative director, 2020-23
          </li>
          <li>
            <a href="#" className="text-blue-700 hover:underline hover:text-blue-900 focus:underline" target="_blank" rel="noopener noreferrer">
              Cymbalism & Lemonade
            </a>, riso printed at Sundays, Glasgow, 2020
          </li>
        </ul>

        {/* Carousel Gallery */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 order-2 md:order-none">
          <div className="relative w-full max-w-xs sm:max-w-sm flex items-center justify-center aspect-[3/4] bg-gray-100 rounded overflow-hidden mb-2 mx-auto mt-4 max-h-[60vh]">
            <Image
              src={gallery[current].src}
              alt={gallery[current].alt}
              width={300}
              height={400}
              className="object-cover w-full h-full"
              style={{ aspectRatio: '3/4', maxWidth: '100%' }}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 300px"
              priority
            />
          </div>
          <span className="text-xs text-gray-700 text-center block mb-2 px-1 break-words max-w-full">{gallery[current].alt}</span>
          <div className="flex justify-center gap-2 sm:gap-4 mt-2 w-full">
            <button onClick={prev} aria-label="Previous image" className="px-3 py-2 rounded hover:bg-gray-300 transition text-lg w-1/2 sm:w-auto">&#8592;</button>
            <button onClick={next} aria-label="Next image" className="px-3 py-2 rounded hover:bg-gray-300 transition text-lg w-1/2 sm:w-auto">&#8594;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
