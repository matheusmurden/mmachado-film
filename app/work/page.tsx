import { Grid, Header } from "@/components";

import { getWorkData } from '@/utils'

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
  const videos = (data.fields.videos as any[] || [])?.map((item: any) => ({
    thumbnail: item.fields.thumbnail,
    videoUrl: item.fields.mp4.fields.file.url,
    title: item.fields.brand,
    subtitle: item.fields.project,
    vimeo: item.fields.vimeo
  }))

  return (
    <main className="xl:container p-6 pb-0 xl:px-4 xl:py-0 mx-auto">
      <Header variant="WORK">
        <h1 className="leading-tight text-[6rem] md:text-8xl lg:text-[10rem] mb-0 font-bold">{data.fields.heading as string}</h1>
      </Header>
      <Grid variant="WORK" items={videos} />
    </main>
  );
}
