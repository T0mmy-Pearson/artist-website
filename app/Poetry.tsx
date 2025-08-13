import React from 'react'

export default function Poetry() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start w-full max-w-4xl mx-auto p-4 text-black">
      <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
        <img
          src="/imagees/5.jpg"
          alt="Cover of pamphlet Cymbalism and Lemonade"
          className="rounded shadow max-w-xs w-full h-auto object-cover"
        />
      </div>
      <div className="flex-1 w-full">
        <h2 className="text-lg font-bold mb-2">Pamphlets</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Decalcomania, —algia press, 2021</li>
          <li>Cymbalism & Lemonade, SPAM Press, 2020</li>
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
    </div>
  );
}
