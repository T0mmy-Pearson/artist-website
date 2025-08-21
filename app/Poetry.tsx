import React, { useState } from 'react';
import Image from 'next/image';
import "./globals.css";
import BackArrow from './BackArrow';

export default function Poetry({ setSelected }: { setSelected?: (val: string | null) => void }) {

  const poetryImages = [
    {
      src: "/imagees/Poetry/5.jpg",
      alt: "Cover of pamphlet Cymbalism and Lemonade"
    },
    {
      src: "/imagees/Poetry/Decalcomania.jpg",
      alt: "Cover of pamphlet Decalcomania"
    }
  ];
 
  const [current, setCurrent] = useState(0);
  const total = poetryImages.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4 md:px-8 py-6 md:py-12 flex flex-col items-center">
      {setSelected && (
        <div className="w-full flex justify-end mb-4">
          <BackArrow onClick={() => setSelected(null)} />
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto px-2 sm:px-4 text-black">
        {/* Text Content */}
        <div className="flex-1 w-full md:w-1/2 md:mt-0  flex flex-col order-1 md:order-none">
          <h2 className="text-xl font-bold mb-3">Pamphlets</h2>
          <ul className="mb-4 list-disc list-inside text-base">
            <li>Decalcomania, —algia press, 2021</li>
            <li>Cymbalism & Lemonade, SPAM Press, 2020 <a href="https://www.spamzine.co.uk/post/spam-deep-cuts-2020" className="inline-flex items-center gap-1 hover:underline focus:underline text-black ml-2" target="_blank" rel="noopener noreferrer">→ review</a></li>
          </ul>
          <h2 className="text-xl font-bold mb-3">Poems</h2>
          <ul className="space-y-2 list-disc list-inside text-base">
            <li>Everscapes @ The Hythe, from The 87 Press <a href="https://www.the87press.co.uk/thehythe-open/digital-poetics-321-everscapes-by-t-person" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
            <li>Portraits @ Virtual Oasis, from Trickhouse Press <a href="https://www.trickhousepress.com/product/virtual-oasis-/5" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
            <li>The New Positivity @ Gutter 23 <a href="https://www.guttermag.co.uk/getgutter/p/gutter-23" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
            <li>imagos @ Wet Grain <a href="https://wetgrainpoetry.co.uk/about.html" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
            <li>Colours for Wallpaper @ Erotoplasty 7 pt.1 <a href="https://erotoplasty.tumblr.com/post/629508493150388224/erotoplasty-7-pt-1" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
            <li>Memory, Sycamore @ Bluehouse Journal 2 <a href="https://www.bluehousejournal.com/issue-2#memory-sycamore" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
            <li>Moray @ Bluehouse Journal 1 <a href="https://bluehousejournal.com/issue-1" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
            <li>Beginning of a New Poem @ Sand Journal #20 <a href="https://sandjournal.com/product/issue-20/" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
            <li>Dictation Poems @ Ulmer Textshop Experiments <a href="http://textshopexperiments.org/textshop06/dictation-poems" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
            <li>Mapping @ Southside Stories <a href="https://sghet.com/product/stories-from-the-southside/" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
            <li>Dislocation @ Lune Journal 02 <a href="https://lunejournal.org/" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
            <li>Rough @ 0fZ00s 7 <a href="https://www.ofzoos.com/7.1=tperson.html" className="inline-flex items-center gap-1 hover:underline focus:underline text-black" target="_blank" rel="noopener noreferrer">→ read</a></li>
          </ul>
        </div>

        {/* Carousel */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center order-2 md:order-none">
          <div className="relative w-full flex flex-col items-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-xs flex items-center justify-center aspect-[3/4] bg-gray-100 rounded overflow-hidden mb-4 mx-auto mt-4 md:mt-8 max-h-[60vh] sm:max-h-none">
              <Image
                src={poetryImages[current].src}
                alt={poetryImages[current].alt}
                width={300}
                height={400}
                className="object-cover w-full h-full"
                style={{ aspectRatio: '3/4', maxWidth: '100%' }}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 300px"
                priority
              />
            </div>
            <span className="text-xs text-gray-700 text-center block mb-2 px-1 break-words max-w-full">{poetryImages[current].alt}</span>
            <div className="flex justify-center gap-2 sm:gap-4 mt-2 w-full">
              <button onClick={prev} aria-label="Previous image" className="px-3 py-2 rounded hover:bg-gray-300 transition text-lg w-1/2 sm:w-auto">&#8592;</button>
              <button onClick={next} aria-label="Next image" className="px-3 py-2 rounded hover:bg-gray-300 transition text-lg w-1/2 sm:w-auto">&#8594;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
