"use client"

import { Grid, Footer, Header } from "@/components";

export default function Home() {
  const items = [
    {
      thumbnailUrl: 'https://images.ctfassets.net/8vvcv6rpd5x0/4r0ZgrXa8jLOEVTQMmHsrj/f93677f8a0e13df71d48998b5a41631a/thumbnail_nostrasManos.jpg',
      videoUrl: 'https://videos.ctfassets.net/8vvcv6rpd5x0/1ny9NBuY67BvyR9LsmTxdS/2e5fa9f63f0cb49c0fcae29d28e22a50/Video_3195394_640x360_25fps.mp4',
      title: 'Video 1',
      subtitle: 'Subtitle goes here'
    },
    {
      thumbnailUrl: 'https://images.ctfassets.net/8vvcv6rpd5x0/4r0ZgrXa8jLOEVTQMmHsrj/f93677f8a0e13df71d48998b5a41631a/thumbnail_nostrasManos.jpg',
      videoUrl: 'https://videos.ctfassets.net/8vvcv6rpd5x0/1ny9NBuY67BvyR9LsmTxdS/2e5fa9f63f0cb49c0fcae29d28e22a50/Video_3195394_640x360_25fps.mp4',
      title: 'Video 1',
      subtitle: 'Subtitle goes here'
    },
    {
      thumbnailUrl: 'https://images.ctfassets.net/8vvcv6rpd5x0/4r0ZgrXa8jLOEVTQMmHsrj/f93677f8a0e13df71d48998b5a41631a/thumbnail_nostrasManos.jpg',
      videoUrl: 'https://videos.ctfassets.net/8vvcv6rpd5x0/1ny9NBuY67BvyR9LsmTxdS/2e5fa9f63f0cb49c0fcae29d28e22a50/Video_3195394_640x360_25fps.mp4',
      title: 'Video 1',
      subtitle: 'Subtitle goes here'
    },
    {
      thumbnailUrl: 'https://images.ctfassets.net/8vvcv6rpd5x0/4r0ZgrXa8jLOEVTQMmHsrj/f93677f8a0e13df71d48998b5a41631a/thumbnail_nostrasManos.jpg',
      videoUrl: 'https://videos.ctfassets.net/8vvcv6rpd5x0/1ny9NBuY67BvyR9LsmTxdS/2e5fa9f63f0cb49c0fcae29d28e22a50/Video_3195394_640x360_25fps.mp4',
      title: 'Video 1',
      subtitle: 'Subtitle goes here'
    }
  ];
  return (
    <main className="min-h-screen xl:container p-6 pb-0 xl:p-0 mx-auto">
      <Header />
        <Grid variant="HOME" items={items} />
      <Footer />
    </main>
  );
}
