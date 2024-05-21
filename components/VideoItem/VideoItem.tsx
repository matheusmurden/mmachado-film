"use client"

import { useRef } from "react";
import Image from 'next/image';

import styles from './VideoItem.module.css';
import contentfulLoader from "@/utils/ContentfulImageLoader";

export interface VideoItemProps {
	priority?: boolean;
	thumbnailUrl: string;
	videoUrl: string;
	title: string;
	subtitle: string;
	className?: string;
}

export const VideoItem = ({ priority = false, thumbnailUrl, videoUrl, title, subtitle, className }: VideoItemProps) => {
	const ref = useRef<HTMLVideoElement>(null)
	return (
		<figure
			onMouseLeave={() => ref.current && ref.current.pause()}
			onMouseOver={() => ref.current && ref.current.play() }
			className={`${styles.figure} relative mb-20 md:mb-0 overflow-hidden h-full aspect-video rounded-lg hover:cursor-pointer shadow-lg hover:shadow-2xl transition ease-in-out border border-[0.5px] border-black w-full ${className}`}
			aria-describedby={`${title}-${subtitle}`}
		>
			<Image
				loader={(props) => contentfulLoader(props)}
				className={`${styles.thumbnail} absolute aspect-video top-0 left-0`}
				src={thumbnailUrl}
				quality={100}
				width={1280}
				height={640}
				alt={`"${title} ${subtitle}" video thumbnail.`}
				priority={priority}
			/>
			<video
				ref={ref}
				preload={priority ? 'auto' : 'metadata'}
				loop
				muted
				playsInline
				className="rounded-lg aspect-video w-full overflow-hidden object-cover"
			>
				<source src={videoUrl} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<figcaption
				className={`
					${styles.captionContainer}
					md:opacity-0
					md:absolute
					left-0
					top-0
					md:w-full
					md:h-full
					p-2
					md:p-4
					md:flex
					md:flex-col
					bg-gradient-to-t
					from-[#00000075]
					via-[#00000020]
					to-transparent
					justify-end
				`}
				id={`${title}-${subtitle}`}
				>
				<div className="overflow-hidden flex flex-row justify-start items-center">
					<span className={`${styles.caption} mt-[auto] text-xl text-white font-bold uppercase`}>{title}</span>
				</div>
				<div className="overflow-hidden flex flex-row justify-start items-center">
					<span className={`${styles.caption} ${styles.delay} text-lg text-white font-regular`}>{subtitle}</span>
				</div>
			</figcaption>
		</figure>
	);
};