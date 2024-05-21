import { Grid, Footer, Header } from "@/components";
import { getVideos } from "@/utils";

export default async function Home() {
  const videos = await getVideos();
  const items = videos.map((item: any) => ({
    thumbnail: item.fields.thumbnail,
    videoUrl: item.fields.mp4.fields.file.url,
    title: item.fields.brand,
    subtitle: item.fields.project
  }))
  return (
    <main className="min-h-screen xl:container p-6 pb-0 xl:p-0 mx-auto">
      <Header />
        <Grid variant="HOME" items={items} />
      <Footer />
    </main>
  );
}
