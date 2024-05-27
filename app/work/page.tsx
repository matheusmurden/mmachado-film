import { Grid, Header } from "@/components";

import { getWorkData } from '@/utils'
import uniq from "lodash/uniq";
import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata() {
  const data = await getWorkData();
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

export default async function Work() {
  const data = await getWorkData();
  const videos = (data.fields.videos as any[])?.map((item: any) => ({
    thumbnail: item.fields.thumbnail,
    video: {
      ...item.fields.mp4,
      aspectRatio: item.fields.aspectRatio
    },
    title: item.fields.brand,
    subtitle: item.fields.project,
    vimeo: item.fields.vimeo,
    category: item.fields.category
  }))

  const categories = uniq(videos.map((item) => item.category))

  return (
    <main className="xl:container p-6 pb-0 xl:px-4 xl:py-0 mx-auto">
      <Header variant="WORK">
        {categories.map((category) => (
          <Link className="leading-tight text-xl md:text-3xl lg:text-3xl mb-0 font-bold" href={`?category=${category.replaceAll(' ', '-')?.toLowerCase()}`} key={category}>{category}</Link>
        ))}
      </Header>
      <Suspense>
        <Grid variant="WORK" items={videos} />
      </Suspense>
    </main>
  );
}
