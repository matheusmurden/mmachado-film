"use client"

import { Footer, Grid } from "@/components";

export default function Work() {
  const items = [
    {
      thumbnailUrl: 'https://images.ctfassets.net/8vvcv6rpd5x0/4r0ZgrXa8jLOEVTQMmHsrj/34faa4b48ae4a7f75aec563cc1af15b2/Victoria_from_Photopea.jpg',
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
    <main className="xl:container p-6 xl:p-0 xl:pt-20 mx-auto">
      <Grid variant="WORK" items={items} />
    </main>
  );
}
