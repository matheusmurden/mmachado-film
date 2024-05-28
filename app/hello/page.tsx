import sideTexture from '/public/sideTexture.jpg';
import profilePic from '/public/profilePic.jpg';
import Image from 'next/image';
import { getHelloData } from '@/utils';

export async function generateMetadata() {
  const data = await getHelloData();
  return {
    title: (data?.fields?.meta as { [key: string]: any })?.fields?.title as string,
    description: (data?.fields?.meta as { [key: string]: any })?.fields?.description as string,
    openGraph: {
      title: (data?.fields?.meta as { [key: string]: any })?.fields?.title as string,
      description: (data?.fields?.meta as { [key: string]: any })?.fields?.description as string,
      images: [
        {
          url: `https:${(data?.fields?.meta as { [key: string]: any })?.fields?.image.fields.file.url as string}`,
          width: (data?.fields?.meta as { [key: string]: any })?.fields?.image.fields.file.details.image.width as string,
          height: (data?.fields?.meta as { [key: string]: any })?.fields?.image.fields.file.details.image.height as string,
        }
      ],
    },
    twitter: {
      title: (data?.fields?.meta as { [key: string]: any })?.fields?.title as string,
      description: (data?.fields?.meta as { [key: string]: any })?.fields?.description as string,
      images: [`https:${(data?.fields?.meta as { [key: string]: any })?.fields?.image.fields.file.url as string}`,]
    },
  }
}

export default async function Hello() {
  const data = await getHelloData();

  const emailArr = (data.fields.email as string).split('@');

  return (
    <>
    <main className="min-h-[80vh] m-0 xl:w-screen xl:max-w-[100vw] p-6 pb-0 xl:pl-0 xl:pt-0 lg:pr-[15rem] mx-auto flex flex-col-reverse md:flex-row gap-8 xl:gap-16 items-center xl:items-end justify-center lg:justify-between">
      <aside className='hidden xl:block w-[20vw]'>
        <Image
          src={sideTexture}
          alt="vertical image texture"
          className='h-full touch-none select-none pointer-events-none'
        />
      </aside>
      <h1 className="w-full lg:w-[60vw] text-balance text-white text-xl md:text-2xl uppercase text-center md:text-left">Maria is a Brazilian based film editor. <br className="hidden lg:block" />She works with commercials, films, <br className="hidden lg:block"  />and music videos.</h1>
      <Image
        src={profilePic}
        alt="A picture of Maria Machado."
        className='h-full touch-none select-none pointer-events-none w-[60%] md:w-[75%] lg:w-[25vw] xl:place-self-center xl:mt-24'
      />
    </main>
    <div className='translate-y-[-2rem] lg:translate-y-[-5rem] ml-[auto] mr-24 px-10 lg:px-0 w-full lg:w-[20rem] text-white grid grid-rows-2 grid-cols-2 font-bold'>
      <a className='col-start-2 row-start-1 text-[#C772FF] text-xl hover:text-white uppercase text-right' href={data.fields.instagram as string} target='_blank' rel="noopener">instagram</a>
      <a className='col-start-1 row-start-2 text-[#FE4E02] text-xl hover:text-white uppercase' href={`mailto:${data.fields.email}`}>
      {emailArr?.[0]}
      <span className='font-sans'>@</span>
      {emailArr?.[1]}
      </a>
    </div>
    </>
  );
}
