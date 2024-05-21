import { Grid, Header } from "@/components";

import { getVideos } from '@/utils'

export default async function Work() {
  const videos = await getVideos();
  const items = videos.map((item: any) => ({
    thumbnail: item.fields.thumbnail,
    videoUrl: item.fields.mp4.fields.file.url,
    title: item.fields.brand,
    subtitle: item.fields.project
  }))

  return (
    <main className="xl:container p-6 pb-0 xl:px-3 xl:py-0 mx-auto">
      <Header variant="WORK" />
      <Grid variant="WORK" items={items} />
    </main>
  );
}
