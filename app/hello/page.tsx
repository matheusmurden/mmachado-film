import sideTexture from '/public/sideTexture.jpg';
import profilePic from '/public/profilePic.jpg';
import Image from 'next/image';
import { getHelloData } from '@/utils';

export async function generateMetadata() {
  const data = await getHelloData();
  return {
    title: data?.fields?.meta?.fields?.title,
    description: data?.fields?.meta?.fields?.description,
    openGraph: {
      title: data?.fields?.meta?.fields?.title,
      description: data?.fields?.meta?.fields?.description,
      images: [
        {
          url: `https:${data?.fields?.meta?.fields?.image.fields.file.url}`,
          width: data?.fields?.meta?.fields?.image.fields.file.details.image.width,
          height: data?.fields?.meta?.fields?.image.fields.file.details.image.height,
        }
      ],
    },
    twitter: {
      title: data?.fields?.meta?.fields?.title,
      description: data?.fields?.meta?.fields?.description,
      images: [`https:${data?.fields?.meta?.fields?.image.fields.file.url}`,]
    },
  }
}

export default async function Hello() {
  const data = await getHelloData();

  const emailArr = (data.fields.email).split('@');

  return (
    <main className="h-[80vh] m-0 xl:w-screen xl:max-w-[100vw] p-10 px-6 pb-0 xl:pl-0 xl:pt-0 lg:pr-[10rem] mx-auto flex flex-col-reverse md:flex-row gap-8 xl:gap-16 items-center justify-center lg:justify-between">
      <aside className='hidden xl:block w-[20vw] h-full'>
        <Image
          src={sideTexture}
          alt="vertical image texture"
          className='h-full w-full touch-none select-none pointer-events-none'
        />
      </aside>
      <div className='w-full h-full lg:w-[60vw] uppercase grid grid-cols-1 grid-rows-2 grid-flow-row h-auto xl:h-[80vh]'>
        <h1 className="text-balance text-white text-xl md:text-2xl text-center md:text-left mt-auto">Maria is a Brazilian based film editor. <br className="hidden lg:block" />She works with commercials, films, <br className="hidden lg:block"  />and music videos.</h1>
        <div className='w-full flex flex-row gap-8 font-bold mt-auto justify-center md:justify-start'>
          <a className='text-[#FE4E02] text-lg md:text-xl hover:text-white uppercase' href={`mailto:${data.fields.email}`}>
            {data.fields.email}
          </a>
          <a className='text-[#C772FF] text-lg md:text-xl hover:text-white uppercase' href={data.fields.instagram} target='_blank' rel="noopener">instagram</a>
        </div>
      </div>
      <Image
        src={profilePic}
        alt="A picture of Maria Machado."
        className='h-auto touch-none select-none pointer-events-none w-[60%] md:w-[75%] lg:w-[25vw] xl:place-self-center xl:mt-24'
      />
    </main>
  );
}
