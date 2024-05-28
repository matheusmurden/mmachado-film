import { Filter, Grid, Header } from "@/components";

import { getWorkData } from '@/utils'
import uniq from "lodash/uniq";
import { Suspense } from "react";

export async function generateMetadata() {
  const data = await getWorkData();
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

export default async function Work() {
  const data = await getWorkData();
  const videos = data.fields.videos?.map((item) => ({
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
        <Suspense>
          <Filter categories={categories} />
        </Suspense>
      </Header>
      <Suspense>
        <Grid variant="WORK" items={videos} />
      </Suspense>
    </main>
  );
}
