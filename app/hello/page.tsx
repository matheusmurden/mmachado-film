"use client"

import sideTexture from '/public/sideTexture.jpg';
import Image from 'next/image';

export default function Hello() {
  return (
    <main className="min-h-screen xl:container p-6 pb-0 md:pl-0 md:pt-0 xl:p-0 mx-auto flex flex-row gap-8 items-center">
      <aside className='hidden md:block'>
        <Image
          src={sideTexture}
          width={238}
          height={719}
          alt="vertical image texture"
        />
      </aside>
      <h1 className="text-balance text-white text-3xl uppercase">Maria is a Brazilian based film editor, <br className="hidden md:block" />she works with commercials, films, <br className="hidden md:block"  />and music videos.</h1>
    </main>
  );
}
