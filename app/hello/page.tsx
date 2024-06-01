import sideTexture from '/public/sideTexture.jpg';
import profilePic from '/public/profilePic.jpg';
import Image from 'next/image';
import { getHelloData } from '@/utils';
import { ContactSection, Navbar } from '@/components';
import { Suspense } from 'react';

export async function generateMetadata() {
  const data = await getHelloData();
  return {
    title: data?.fields?.meta?.fields?.title,
    description: data?.fields?.meta?.fields?.description,
    openGraph: {
      type: 'website',
      siteName: 'Maria Machado | Film Editor',
      url: 'https://maria.film/hello',
      title: data?.fields?.meta?.fields?.title,
      description: data?.fields?.meta?.fields?.description,
      images: [
        {
          url: `https:${data?.fields?.meta?.fields?.image.fields.file.url}?fm=webp&q=80`,
          width: data?.fields?.meta?.fields?.image.fields.file.details.image.width,
          height: data?.fields?.meta?.fields?.image.fields.file.details.image.height,
        }
      ],
    },
    twitter: {
      title: data?.fields?.meta?.fields?.title,
      description: data?.fields?.meta?.fields?.description,
      images: [`https:${data?.fields?.meta?.fields?.image.fields.file.url}?fm=webp&q=80`,]
    },
  }
}

export default async function Hello() {
  const data = await getHelloData();

  return (
    <>
      <section className="xl:container px-6 pb-0 pt-24 md:pt-48 lg:pt-24 xl:px-4 mx-auto overflow-x-hidden relative">
        <Navbar />
      </section>
      <main className="h-auto lg:h-[75vh] xl:h-[85vh] m-0 xl:w-screen xl:max-w-[100vw] px-6 pb-0 mx-auto xl:pl-0 lg:pr-[10rem] flex flex-col-reverse md:flex-row gap-8 xl:gap-16 items-center justify-center lg:justify-between w-full overflow-hidden">
          <aside className='hidden xl:block w-[20vw]'>
            <Image
              src={sideTexture}
              alt="vertical image texture"
              className='w-full touch-none select-none pointer-events-none object-cover'
            />
          </aside>
          <div className='w-full h-full lg:w-[60vw] uppercase flex flex-col items-center justify-center md:items-start gap-12 grid-flow-row h-auto h-auto lg:h-[75vh] xl:h-[85vh]'>
            <h1 className="text-balance text-white text-lg md:text-2xl text-center md:text-left">Maria is a Brazilian based film editor. <br className="hidden lg:block" />She works with commercials, films, <br className="hidden lg:block"  />and music videos.</h1>
            <Suspense>
              <ContactSection data={data} />
            </Suspense>
          </div>
          <Image
            src={profilePic}
            alt="A picture of Maria Machado."
            className='h-auto touch-none select-none pointer-events-none w-[50%] md:w-[75%] lg:w-[25vw] xl:place-self-center'
          />
      </main>
    </>
  );
}
