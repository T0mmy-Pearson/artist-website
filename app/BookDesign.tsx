import React from 'react'

export default function BookDesign() {
  return (
    <div className="max-w-2xl w-full mx-auto p-4 sm:p-6 md:p-8 text-base sm:text-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Book Design</h2>
      <ul className="space-y-2">
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
            —algia journal and pamphlets
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
          </a>, riso printed at Sunday's, Glasgow, 2020
        </li>
      </ul>
    </div>
  );
}
