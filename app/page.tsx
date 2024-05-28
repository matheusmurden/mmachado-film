import { Grid, Footer, Header } from "@/components";
import { getHomepageData } from "@/utils";
import { Suspense } from "react";

import Image from "next/image";

import styles from './page.module.css';

export async function generateMetadata() {
  const data = await getHomepageData();
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

export default async function Home() {
  const data = await getHomepageData();
  const videos = data.fields.videos.map((item: any) => ({
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
        <Image src={`https:${data.fields.logo.fields.file.url}`} width={data.fields.logo.fields.file.details.image.width} height={data.fields.logo.fields.file.details.image.height} alt={data.fields.logo.fields.description} className={`${styles.logo} w-72 lg:w-96 touch-none select-none pointer-events-none`} />
      </Header>
      <Suspense>
        <Grid variant="HOME" items={videos} />
      </Suspense>
      <Footer />
    </main>
  );
}
