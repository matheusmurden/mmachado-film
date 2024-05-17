"use client"

import { VideoItem, Grid } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto p-24">
      <Grid>
        <VideoItem className="col-span-2" videoUrl="https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4" title="Video 1" subtitle="Subtitle here" />
        <VideoItem videoUrl="https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_25fps.mp4" title="Video 2" subtitle="Subtitle here" />
        <VideoItem videoUrl="https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4" title="Video 3" subtitle="Subtitle here" />
        <VideoItem className="col-span-2" videoUrl="https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4" title="Video 1" subtitle="Subtitle here" />
        <VideoItem videoUrl="https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_25fps.mp4" title="Video 2" subtitle="Subtitle here" />
        <VideoItem videoUrl="https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4" title="Video 3" subtitle="Subtitle here" />
        <VideoItem className="col-span-2" videoUrl="https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4" title="Video 1" subtitle="Subtitle here" />
        <VideoItem videoUrl="https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_25fps.mp4" title="Video 2" subtitle="Subtitle here" />
        <VideoItem videoUrl="https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4" title="Video 3" subtitle="Subtitle here" />
      </Grid>
    </main>
  );
}
