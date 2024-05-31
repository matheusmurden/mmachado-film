"use client"

import { useRef } from "react";
import Image from 'next/image';
import Link from "next/link"

import styles from './VideoItem.module.css';
import { Image as ImageType, Video as VideoType } from "@/utils";

export interface VideoItemProps {
	priority?: boolean;
	variant?: 'HOME' | 'WORK';
	thumbnail: ImageType;
	video: VideoType & {
		aspectRatio?: string
	};
	title: string;
	subtitle: string;
	className?: string;
	vimeo?: string;
	category?: string;
}

export const VideoItem = ({ variant = 'HOME', priority = false, thumbnail, video, title, subtitle, className, vimeo }: VideoItemProps) => {
	const ref = useRef<HTMLVideoElement>(null)
	const vimeoId = vimeo?.replace('https://vimeo.com/', '');
	const linkTo = video.aspectRatio ? `?modal=true&vimeoId=${vimeoId}&aspectRatio=${video.aspectRatio}` : `?modal=true&vimeoId=${vimeoId}`
	const thumbnailUrl = `https:${thumbnail.fields.file.url}?fm=webp&q=75`

	return (
		<Link
		scroll={false}
		className={`${styles.figure} ${variant === 'HOME' ? '' : styles.work} relative mt-4 md:mt-0 h-full rounded-lg hover:cursor-pointer shadow-lg hover:shadow-2xl transition ease-in-out w-full ${className}`}
		href={linkTo}>
			<figure
				onMouseLeave={() => ref.current && ref.current.pause()}
				onMouseOver={() => ref.current && ref.current.play() }
				aria-describedby={`${title}-${subtitle}`}
			>
				<Image
					className={`${styles.thumbnail} ${styles.videoOutline} absolute rounded-lg aspect-video top-0 left-0 object-cover`}
					src={thumbnailUrl}
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
					className={`rounded-lg aspect-video w-full overflow-hidden object-cover ${styles.videoOutline}`}
					poster={thumbnailUrl}
					src={`https:${video.fields.file.url}`}
					disablePictureInPicture
					disableRemotePlayback
				>
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
						<span className={`${styles.caption} mt-[auto] text-xl ${variant === 'HOME' ? 'md:text-3xl' : 'md:text-lg'} text-white font-semibold uppercase`}>{title}</span>
					</div>
					<div className="overflow-hidden flex flex-row justify-start items-center">
						<span className={`${styles.caption} ${styles.delay} text-lg ${variant === 'HOME' ? 'md:text-2xl text-zinc-400 lg:text-white' : 'md:text-base text-zinc-400'} font-regular uppercase`}>{subtitle}</span>
					</div>
				</figcaption>
			</figure>
		</Link>
	);
};