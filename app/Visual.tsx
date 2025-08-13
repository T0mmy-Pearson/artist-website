import React, { useEffect, useState } from 'react'

export default function Visual() {
  const images = [
    { src: "/imagees/Visual/CfW.jpg", tagline: "CfW – Collage for Work" },
    { src: "/imagees/Visual/tea2.JPG", tagline: "Tea 2 – Still Life" },
    { src: "/imagees/Visual/Straw.JPG", tagline: "Straw – Installation" },
    { src: "/imagees/Visual/Bullets.png", tagline: "Bullets – Digital Illustration" },
    { src: "/imagees/Visual/TeaPots.JPG", tagline: "Tea Pots – Found Objects" },
    { src: "/imagees/Visual/IMG_1858.jpg", tagline: "IMG_1858 – Field Study" },
    { src: "/imagees/Visual/Elastic Love.mp4", tagline: "Elastic Love – Experimental Dance Film" }
  ];
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-4xl mx-auto p-4">
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
              controls
              autoPlay
              className="w-full max-h-[70vh] rounded"
            />
            <div className="text-white mt-2 text-center">Elastic Love (Experimental Dance Film, 13mins)</div>
          </div>
        </div>
      )}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <img
          src={images[index].src}
          alt="Visual artwork"
          className="rounded shadow-lg max-h-[400px] object-contain transition-all duration-700"
          style={{ width: '100%', maxWidth: 400 }}
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded text-sm md:text-base transition-all duration-700 pointer-events-none whitespace-nowrap">
          {images[index].tagline}
        </div>
      </div>
      <ul className="w-full md:w-1/2 space-y-4 text-black">
        <li>“X”, a short film exhibited through Bold Mellom Collective at Rich Mix, Shoreditch, April 2024</li>
        <li>
          <button
            className="underline hover:text-blue-700 focus:outline-none"
            onClick={() => setShowModal(true)}
            aria-label="Play Elastic Love video"
            type="button"
          >
            Elastic Love
          </button>
          , Embassy Gallery, 2022; Transmission Gallery, 2023<br />Experimental Dance Film, 13mins [View on Request]
        </li>
        <li>"Double-Take", Glasgow School of Art<br />A collaborative exhibition of work produced between writers and designers, 2019</li>
      </ul>
    </div>
  );
}