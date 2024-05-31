"use client"

import { HomePageData } from "@/utils";
import { useEffect, useRef } from "react";

export const AnimatedLogo = ({ data }: { data: HomePageData }) => {
	const ref = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.play();
		}
	}, [])
	return (
		<figure className="w-[150vw] lg:w-full">
          <video
			ref={ref}
            preload="auto"
            src={`https:${data.fields.videoLogo.fields.file.url}`}
            loop
            autoPlay
            muted
            playsInline
            className="aspect-video w-full overflow-hidden object-cover"
            aria-describedby="logoVideoLabel"
          >
            Your browser does not support the video tag.
          </video>
          <figcaption
            id="logoVideoLabel"
            className="invisible h-0 touch-none select-none pointer-events-none"
          >
            {data.fields.videoLogo.fields.description}
          </figcaption>
        </figure>
	);
}
