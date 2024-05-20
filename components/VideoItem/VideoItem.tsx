import { useRef } from "react";
import styles from './VideoItem.module.css';

export interface VideoItemProps {
	videoUrl: string;
	title: string;
	subtitle: string;
	className?: string;
}

export const VideoItem = ({ videoUrl, title, subtitle, className }: VideoItemProps) => {
	const ref = useRef<HTMLVideoElement>(null)
	return (
		<figure
			onMouseLeave={() => ref.current && ref.current.pause()}
			onMouseOver={() => ref.current && ref.current.play() }
			className={`${styles.figure} relative overflow-hidden min-h-[100px] aspect-video rounded-lg hover:cursor-pointer shadow-lg hover:shadow-2xl transition ease-in-out border border-[0.5px] border-black w-full ${className}`}
			>
			<video
				ref={ref}
				preload="auto"
				loop
				muted
				playsInline
				className="w-full h-full object-cover"
			>
				<source src={videoUrl} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<figcaption className={`
					${styles.captionContainer}
					opacity-0
					absolute
					left-0
					top-0
					w-full
					h-full
					p-4
					flex
					flex-col
					bg-gradient-to-t
					from-[#00000075]
					via-[#00000020]
					to-transparent
					justify-end
				`}>
				<div className="overflow-hidden flex flex-row justify-start items-center">
					<h3 className={`${styles.caption} mt-[auto] text-xl text-white font-bold`}>{title}</h3>
				</div>
				<div className="overflow-hidden flex flex-row justify-start items-center">
					<h4 className={`${styles.caption} ${styles.delay} text-lg text-white italic font-light`}>{subtitle}</h4>
				</div>
			</figcaption>
		</figure>
	);
};