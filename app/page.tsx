import { Grid, Footer, Header } from "@/components";
import { getHomepageData } from "@/utils";
import { Suspense } from "react";

import LogoBig from '../public/LogoBig.png';
import Image from "next/image";

import styles from './page.module.css';

export async function generateMetadata() {
  const data = await getHomepageData();
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

export default async function Home() {
  const data = await getHomepageData();
  const videos = (data.fields.videos as any[] || [])?.map((item: any) => ({
    thumbnail: item.fields.thumbnail,
  video: {
    ...item.fields.mp4,
    aspectRatio: item.fields.aspectRatio
  },
    title: item.fields.brand,
    subtitle: item.fields.project,
    vimeo: item.fields.vimeo
  }))
  return (
    <main className="min-h-screen xl:container p-6 pb-0 xl:px-4 mx-auto">
      <Header>
        <Image src={LogoBig} alt="Maria Machado Film Editor" className={`${styles.logo} w-72 lg:w-96 touch-none select-none pointer-events-none`} />
      </Header>
      <Suspense>
        <Grid variant="HOME" items={videos} />
      </Suspense>
      <Footer />
    </main>
  );
}
