import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BackArrow from './BackArrow';

export default function Visual({ setSelected }: { setSelected?: (val: string | null) => void }) {
  const images = [
    { src: "/imagees/Visual/CfW.jpg", tagline: "Colours for Wallpaper" },
    { src: "/imagees/Visual/tea2.JPG", tagline: "Teabag affirmations - DoubleTake" },
    { src: "/imagees/Visual/Straw.JPG", tagline: "Excess Funeral - DoubleTake" },
    { src: "/imagees/Visual/Bullets.png", tagline: "Gummy Bullets - DoubleTake" },
    { src: "/imagees/Visual/IMG_1858.jpg", tagline: "IMG_1858 - Field Study" },
    { src: "/imagees/Visual/Closure.jpg", tagline: "Elastic Love - Short Film" }
  ];
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Slower: 5 seconds per image
    return () => clearInterval(interval);
  }, [images.length]);

  return (
  <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-8 pt-2 md:pt-4 pb-6 md:pb-12 flex flex-col md:flex-row gap-12 items-start">
      {/* Modal for video */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative bg-black rounded-lg shadow-lg p-4 max-w-2xl w-full flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-300 focus:outline-none"
              onClick={() => setShowModal(false)}
              aria-label="Close video"
            >
              &times;
            </button>
            <video
              src="/imagees/Visual/Elastic Love.mp4"
              autoPlay
              controls
              className="w-full max-h-[70vh] rounded"
            />
            <div className="text-white mt-2 text-center">Elastic Love (Experimental Dance Film, 13mins)</div>
          </div>
        </div>
      )}
  <div className="w-full md:w-2/3 flex justify-center items-center relative">
        <Image
          src={images[index].src}
          alt="Visual artwork"
          width={600}
          height={600}
          className="rounded shadow-lg max-h-[600px] object-contain transition-all duration-700"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>
  <ul className="w-full md:w-1/3 space-y-6 text-black text-lg">
        <li>“X”, a short film exhibited through Bold Mellon Collective at Rich Mix, Shoreditch, April 2024</li>
        <li>
            Elastic Love
          , Embassy Gallery, 2022; Transmission Gallery, 2023<br />Experimental Dance Film, 13mins <br /> 
          <button
            className="underline hover:text-blue-700 focus:outline-none"
            onClick={() => setShowModal(true)}
            aria-label="Play Elastic Love video"
            type="button"
          >  Watch Trailer</button>
        </li>
  <li>&quot;Double-Take&quot;, Glasgow School of Art<br />A collaborative exhibition of work produced between writers and designers, 2019</li>
      </ul>
      {setSelected && (
        <div className="flex justify-end mb-4">
          <BackArrow onClick={() => setSelected(null)} />
        </div>
      )}
    </div>
  );
}