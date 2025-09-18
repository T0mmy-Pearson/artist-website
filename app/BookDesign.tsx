import React, { useState } from 'react';
import Image from 'next/image';
import BackArrow from './BackArrow';

export default function BookDesign({ setSelected }: { setSelected?: (val: string | null) => void }) {
  // Mock images from available assets
  const gallery = [
    { src: '/imagees/Design/Caves-Cover.jpg', alt: 'Caves Cover' },
    { src: '/imagees/Design/IMG_20210224_113159.jpg', alt: 'Cover of —algia #4' },
    { src: '/imagees/Design/IMG_20210321_140024.jpg', alt: 'Imperative Utopia Cover' },
    { src: '/imagees/Design/IMG_20210713_114729.jpg', alt: 'Minimalist Sweetheart and Imperative Utopia covers' },
    { src: '/imagees/Design/JG.png', alt: 'Sekxphrastiks by Jane Goldman' },
    { src: '/imagees/Design/algia3cover.jpg', alt: 'algia #4 cover' },
      { src: '/imagees/Design/praxis.png', alt: 'Praxis Anthology edited by Andrew Hodgson' },
    ];
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [gallery.length]);
  const [current, setCurrent] = useState(0);
  const total = gallery.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
  <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-16 pt-2 md:pt-4 pb-4 md:pb-8">
  <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-6 tracking-tight text-gray-900">Book Design</h1>
      {setSelected && (
        <div className="w-full flex justify-end mb-8">
          <BackArrow onClick={() => setSelected(null)} />
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start md:items-center mt-0 md:mt-[-120px]">
        {/* Carousel Gallery */}
  <div className="w-full md:w-2/3 flex flex-col items-center justify-center mb-4 md:mb-0">
          <div className="flex items-center justify-center w-full" style={{ minHeight: 400 }}>
            <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center" style={{ width: 320, height: 420 }}>
              <Image
                src={gallery[current].src}
                alt={gallery[current].alt}
                width={300}
                height={400}
                className="object-cover mx-auto my-auto w-full h-full"
                style={{ aspectRatio: '3/4', maxWidth: 300, maxHeight: 400 }}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 300px"
                priority
              />
            </div>
          </div>
          <span className="text-xs text-gray-700 text-center block mb-2 px-1 break-words max-w-full">{gallery[current].alt}</span>
          <div className="flex justify-center gap-2 sm:gap-4 mt-2 w-full">
            <button onClick={prev} aria-label="Previous image" className="px-3 py-2 rounded hover:bg-gray-300 transition text-lg w-1/2 sm:w-auto">&#8592;</button>
            <button onClick={next} aria-label="Next image" className="px-3 py-2 rounded hover:bg-gray-300 transition text-lg w-1/2 sm:w-auto">&#8594;</button>
          </div>
        </div>
        {/* Book Design List */}
  <ul className="space-y-4 break-words w-full md:w-1/3 order-1 md:order-none bg-white/80 rounded-lg p-6 md:p-8">
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
      </div>
    </div>
  );
}
