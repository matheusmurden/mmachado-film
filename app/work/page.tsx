import { Grid } from "@/components";

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
    <main className="xl:container p-6 xl:p-0 xl:pt-20 mx-auto">
      <Grid variant="WORK" items={items} />
    </main>
  );
}
