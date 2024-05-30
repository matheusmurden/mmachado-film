import { Grid, Footer, Header } from "@/components";
import { getHomepageData } from "@/utils";
import { Suspense } from "react";

import Image from "next/image";

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
  }));

  return (
    <main className="min-h-screen xl:container p-6 pb-0 xl:px-4 mx-auto">
      <Header>
        <figure className="w-[150vw] lg:w-full">
          <video
            preload="auto"
            src={`https:${data.fields.videoLogo.fields.file.url}`}
            poster={`https:${data.fields.logo.fields.file.url}`}
            disablePictureInPicture
            disableRemotePlayback
            loop
            autoPlay
            muted
            playsInline
            className="aspect-video w-full overflow-hidden object-cover"
            aria-describedby="logoVideoLabel"
          >
            <Image src={`https:${data.fields.logo.fields.file.url}`} width={data.fields.logo.fields.file.details.image.width} height={data.fields.logo.fields.file.details.image.height} alt={data.fields.logo.fields.description} className="touch-none select-none pointer-events-none aspect-video w-full object-cover" />
            Your browser does not support the video tag.
          </video>
          <figcaption
            id="logoVideoLabel"
            className="invisible h-0 touch-none select-none pointer-events-none"
          >
            {data.fields.videoLogo.fields.description}
          </figcaption>
        </figure>
      </Header>
      <Suspense>
        <Grid variant="HOME" items={videos} />
      </Suspense>
      <Footer />
    </main>
  );
}
