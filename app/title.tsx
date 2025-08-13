import React from 'react';

type TitleProps = {
  onClick?: () => void;
};

export default function Title({ onClick }: TitleProps) {
  return (
    <h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full max-w-full break-words cursor-pointer hover:underline"
      onClick={onClick}
      tabIndex={0}
      role="link"
      aria-label="Home"
    >
      T. Person
    </h1>
  );
}
