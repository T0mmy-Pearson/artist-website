

import React, { useState } from 'react';
import BackArrow from './BackArrow';

export default function Journalism({ setSelected }: { setSelected?: (val: string | null) => void }) {

  const [modalImg, setModalImg] = useState<string | null>(null);
  const [popupUrl, setPopupUrl] = useState<string | null>(null);
  const links = [
    {
      label: 'I want and I want and I Want @ Finger Food',
      url: 'https://www.fingerfoodmag.com/product-page/finger-food-2-new-look-same-great-taste',
      img: <img src="/imagees/Journalism/ffwant.jpg" alt="I want and I want and I Want @ Finger Food" />
    },
    {
      label: 'Food writing @ Substack',
      url: 'https://tpers0n.substack.com/',
      img: <img src="/imagees/Journalism/eating.jpg" alt="Food writing @ Substack" />
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
    <div>
      {setSelected && <BackArrow onClick={() => setSelected(null)} />}
      <ul className="space-y-3 mt-4">
        {links.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <br />
            <button
              type="button"
              onClick={() => setPopupUrl(item.url)}
              className="inline-flex items-center gap-1 hover:underline focus:underline text-black font-medium group focus:outline-none"
              aria-label={`Open ${item.label}`}
            >
              <span>{item.label}</span>
              <span className="ml-1 text-lg group-hover:translate-x-1 transition-transform">→ read</span>
            </button>
            {item.img && (
              <button
                className="ml-2 focus:outline-none"
                onClick={e => {
                  e.preventDefault();
                  setModalImg((item.img as any).props.src);
                }}
                aria-label="Enlarge image"
                type="button"
              >
                {React.cloneElement(item.img, {
                  className: "w-14 h-14 object-cover rounded shadow border border-gray-200 hover:scale-105 transition-transform",
                })}
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
            <img src={modalImg} alt="Enlarged journalism" className="w-full max-w-xs max-h-[70vh] rounded" />
          </div>
        </div>
      )}
      {/* Popup modal for journalism link */}
      {popupUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent" onClick={() => setPopupUrl(null)}>
          <div className="relative bg-white rounded-lg shadow-lg p-2 md:p-4 w-full max-w-3xl h-[80vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold hover:text-gray-500 focus:outline-none"
              onClick={() => setPopupUrl(null)}
              aria-label="Close popup"
            >
              &times;
            </button>
            <iframe
              src={popupUrl}
              title="Journalism Link"
              className="w-full h-full rounded border"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        </div>
      )}
    </div>
  );
}
