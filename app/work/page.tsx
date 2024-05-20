"use client"

import { Grid } from "@/components";

export default function Home() {
  const items = [
    {
      videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4',
      title: 'Video 1',
      subtitle: 'Subtitle goes here'
    },
    {
      videoUrl: 'https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_25fps.mp4',
      title: 'Video 2',
      subtitle: 'Subtitle goes here'
    },
    {
      videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4',
      title: 'Video 3',
      subtitle: 'Subtitle goes here'
    },
    {
      videoUrl: 'https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_25fps.mp4',
      title: 'Video 4',
      subtitle: 'Subtitle goes here'
    },
    {
      videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4',
      title: 'Video 5',
      subtitle: 'Subtitle goes here'
    },
    {
      videoUrl: 'https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_25fps.mp4',
      title: 'Video 6',
      subtitle: 'Subtitle goes here'
    }
  ];
  return (
    <main className="min-h-screen xl:container p-20 xl:p-0 mx-auto">
      <Grid variant="B" items={items} />
    </main>
  );
}
