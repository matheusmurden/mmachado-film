import { Grid, Footer, Header, Navbar } from "@/components";
import { getHomepageData } from "@/utils";
import { Suspense } from "react";

import { AnimatedLogo } from "@/components";

export async function generateMetadata() {
  const data = await getHomepageData();
  return {
    title: data?.fields?.meta?.fields?.title,
    description: data?.fields?.meta?.fields?.description,
    openGraph: {
      type: 'website',
      siteName: 'Maria Machado | Film Editor',
      url: 'https://maria.film',
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
  }));

  return (
    <main className="min-h-screen xl:container px-6 py-0 pt-24 xl:px-4 mx-auto overflow-x-hidden relative">
      <Navbar className="animate" />
      <Header>
        <Suspense>
          <AnimatedLogo data={data} />
        </Suspense>
      </Header>
      <Suspense>
        <Grid variant="HOME" items={videos} />
      </Suspense>
      <Footer />
    </main>
  );
}
