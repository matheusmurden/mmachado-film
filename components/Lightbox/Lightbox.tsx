"use client"

import {useSearchParams, useRouter} from "next/navigation";

import styles from './Lightbox.module.css';

export const Lightbox = () => {
	const searchParams = useSearchParams()!;
    const modal = searchParams.get("modal");
	const vimeoId = searchParams.get("vimeoUrl")?.replace('https://vimeo.com/', '');

	const router = useRouter();
	
	return modal && vimeoId ? 
		<dialog onClick={() => router.back()} className={`${styles.lightbox} fixed z-[999] min-h-screen top-0 left-0 bg-[#00000095] flex items-center justify-center p-0 md:p-10`}>
			<div onClick={() => router.back()}  className="relative aspect-video w-full h-full">
				<iframe onClick={(event) => event.stopPropagation()} src={`https://player.vimeo.com/video/${vimeoId}?h=c8d9fc8805&autoplay=1&byline=0&portrait=0`} style={{position:"absolute", top:0, left:0, width:'100%', height:'100%' }} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
			</div>
		</dialog> : null;
};
