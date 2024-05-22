"use client"

import { useRef } from "react";
import Image from 'next/image';
import Link from "next/link"

import styles from './VideoItem.module.css';
import contentfulLoader from "@/utils/ContentfulImageLoader";

export interface VideoItemProps {
	priority?: boolean;
	variant?: 'HOME' | 'WORK';
	thumbnail: {
		fields: {
			file: {
				url: string,
				details: {
					size: number,
					image: {
						width: number,
						height: number
					}
				},
				fileName: string;
				contentType: string;
			}
		}
	};
	videoUrl: string;
	title: string;
	subtitle: string;
	className?: string;
	vimeo?: string;
}

export const VideoItem = ({ variant = 'HOME', priority = false, thumbnail, videoUrl, title, subtitle, className, vimeo }: VideoItemProps) => {
	const ref = useRef<HTMLVideoElement>(null)
	return (
		<Link
		className={`${styles.figure} ${variant === 'HOME' ? '' : styles.work} relative mt-4 md:mt-0 h-full rounded-lg hover:cursor-pointer shadow-lg hover:shadow-2xl transition ease-in-out w-full ${className}`}

		href={`?modal=true&vimeoUrl=${vimeo}`}>
			<figure
				onMouseLeave={() => ref.current && ref.current.pause()}
				onMouseOver={() => ref.current && ref.current.play() }
				aria-describedby={`${title}-${subtitle}`}
			>
				<Image
					loader={(props) => contentfulLoader(props)}
					className={`${styles.thumbnail} ${styles.videoOutline} absolute rounded-lg aspect-video top-0 left-0 object-cover`}
					src={thumbnail.fields.file.url}
					width={thumbnail.fields.file.details.image.width}
					height={thumbnail.fields.file.details.image.height}
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
						<span className={`${styles.caption} mt-[auto] text-xl ${variant === 'HOME' ? 'md:text-3xl' : 'md:text-lg'} text-white font-bold uppercase`}>{title}</span>
					</div>
					<div className="overflow-hidden flex flex-row justify-start items-center">
						<span className={`${styles.caption} ${styles.delay} text-lg ${variant === 'HOME' ? 'md:text-2xl text-zinc-400 lg:text-white' : 'md:text-base text-zinc-400'} font-regular uppercase`}>{subtitle}</span>
					</div>
				</figcaption>
			</figure>
		</Link>
	);
};