"use client"

import {useSearchParams, useRouter} from "next/navigation";

import styles from './Lightbox.module.css';

export const Lightbox = () => {
	const searchParams = useSearchParams()!;
    const modal = searchParams.get("modal");
	const vimeoId = searchParams.get("vimeoUrl")?.replace('https://vimeo.com/', '');
	const aspectRatio = searchParams.get("aspectRatio");

	const aspectClass = aspectRatio === '4/3' ? "aspect-[4/3] max-w-[900px] mx-auto" : aspectRatio === '800/557' ? 'aspect-[800/557] max-w-[900px] mx-auto' : 'aspect-video'

	const router = useRouter();
	
	return modal && vimeoId ? 
		<dialog onClick={() => router.back()} className="fixed z-[999] min-h-screen top-0 left-0 bg-[#00000095] flex flex-row items-center p-0 md:px-10 md:py-0 w-full">
			<div onClick={() => router.back()} className={`${aspectClass} ${styles.lightbox} border-none relative max-h-screen h-full overflow-hidden w-full`}>
				<iframe className={styles.iframe} src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&byline=0&portrait=0?transparent=1`} style={{position:"absolute", border: 'none', top:0, left:0, width:'100%', height:'100%' }} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
			</div>
		</dialog> : null;
};
