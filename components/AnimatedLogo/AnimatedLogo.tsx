import { HomePageData } from "@/utils";

export const AnimatedLogo = ({ data }: { data: HomePageData }) => {
	return (
		<figure className="w-full">
          <video
            preload="auto"
            loop
            autoPlay
            muted
            playsInline
            className="aspect-video scale-[2] lg:scale-100 w-full h-full object-cover"
            aria-describedby="logoVideoLabel"
          >
            <source src="/AnimatedLogo_x265.mp4" type='video/mp4; codecs="hvc1"' />
            <source src="/AnimatedLogo.webm" type="video/webm" />
            <source src="/AnimatedLogo.mp4" type='video/mp4; codecs="avc1"' />
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
