"use client"

import sideTexture from '/public/sideTexture.jpg';
import Image from 'next/image';

export default function Hello() {
  return (
    <main className="min-h-screen m-0 xl:w-screen xl:max-w-[100vw] p-6 pb-0 md:pl-0 md:pt-0 xl:p-0 mx-auto flex flex-row gap-16 items-center">
      <aside className='hidden md:block max-w-[180px]'>
        <Image
          src={sideTexture}
          width={238}
          height={719}
          alt="vertical image texture"
          className='h-full touch-none select-none pointer-events-none'
        />
      </aside>
      <h1 className="text-balance text-white text-3xl uppercase">Maria is a Brazilian based film editor, <br className="hidden md:block" />she works with commercials, films, <br className="hidden md:block"  />and music videos.</h1>
    </main>
  );
}
