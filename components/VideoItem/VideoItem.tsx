'use client'

import { useRef } from "react";
import styles from './VideoItem.module.css';

interface VideoItemProps {
	videoUrl: string,
	title: string,
	subtitle: string,
	onClick?: () => void,
	className?: string
}

export const VideoItem = ({ videoUrl, title, subtitle, onClick, className }: VideoItemProps) => {
	const ref = useRef<HTMLVideoElement>(null)
	return (
		<figure
			onClick={onClick}
			onMouseLeave={() => ref.current && ref.current.pause()}
			onMouseOver={() => ref.current && ref.current.play() }
			className={`${styles.figure} shadow-lg hover:shadow-2xl transition ease-in-out border border-[0.5px] border-black w-full ${className}`}
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
					${styles.caption}
					absolute
					left-0
					top-0
					w-full
					h-full
					p-4
					flex
					flex-col
					bg-gradient-to-t
					from-[#00000070]
					via-[#00000050]
					to-transparent
				`}>
				<h3 className="mt-[auto] text-2xl text-white font-bold">{title}</h3>
				<h4 className="text-xl text-white italic font-light">{subtitle}</h4>
			</figcaption>
		</figure>
	);
};