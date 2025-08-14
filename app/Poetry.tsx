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
  <div className="flex pt-88 lg:pt-0 flex-col md:flex-row gap-6 md:gap-8 items-start w-full max-w-4xl mx-auto p-2 sm:p-4 text-black">
      {/* Carousel */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-col items-center ">
              <div className="w-full sm:pt-100 max-w-xs sm:max-w-sm md:max-w-xs flex items-center justify-center aspect-[3/4] bg-gray-100 rounded overflow-hidden mb-2 mx-auto mt-8 max-h-[60vh] sm:mt-0 sm:max-h-none">
                  <Image
                    src={poetryImages[current].src}
                    alt={poetryImages[current].alt}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full max-h-[50vh] sm:max-h-full"
                    style={{ aspectRatio: '3/4', maxWidth: '100%' }}
                  />
          </div>
          <span className="text-xs text-gray-700 text-center block mb-2 px-1 break-words">{poetryImages[current].alt}</span>
          <div className="flex justify-center gap-2 sm:gap-4 mt-2">
            <button onClick={prev} aria-label="Previous image" className="px-2 sm:px-3 py-1 rounded hover:bg-gray-300 transition text-lg">&#8592;</button>
            <button onClick={next} aria-label="Next image" className="px-2 sm:px-3 py-1 rounded hover:bg-gray-300 transition text-lg">&#8594;</button>
          </div>
        </div>
      </div>
      {/* Text Content */}
  <div className="flex-1 w-full md:w-1/2 mt-4 md:mt-0 px-1 sm:px-2">
        <h2 className="text-lg font-bold mb-2">Pamphlets</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Decalcomania, —algia press, 2021</li>
          <li>Cymbalism & Lemonade, SPAM Press, 2020</li><a href="https://www.spamzine.co.uk/post/spam-deep-cuts-2020">→ review</a>
        </ul>
        <h2 className="text-lg font-bold mb-2">Poems</h2>
        <ul className="space-y-1 list-disc list-inside">
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
  {setSelected && <BackArrow onClick={() => setSelected(null)} />}
    </div>
  );
}
