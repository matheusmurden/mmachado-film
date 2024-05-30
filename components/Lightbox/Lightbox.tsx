"use client"

import {useSearchParams, useRouter} from "next/navigation";

import styles from './Lightbox.module.css';
import { useEffect, useRef } from "react";

import Player from '@vimeo/player';

export const Lightbox = () => {
	const searchParams = useSearchParams()!;
    const modal = searchParams.get("modal");
	const vimeoId = searchParams.get("vimeoId")
	const aspectRatio = searchParams.get("aspectRatio");

	const aspectClass = aspectRatio === '4/3' ? "aspect-[4/3] max-w-[900px] mx-auto" : aspectRatio === '800/557' ? 'aspect-[800/557] max-w-[900px] mx-auto' : 'aspect-video'

	const router = useRouter();

	useEffect(() => {
		if (modal) {
			const iframe = document.querySelector('iframe')!;
			const iframePlayer = new Player(iframe);

			iframePlayer.on('loaded', () => {
				iframeRef.current!.style.background='black'
				iframeRef.current!.style.visibility='visible'
			})

			iframePlayer.on('play', () => {
				setTimeout(() => {
					loadingRef.current!.style.visibility='hidden'
				}, 150)
			})
		}
	}, [modal])

	const iframeRef = useRef<HTMLIFrameElement>(null)
	const loadingRef = useRef<HTMLDivElement>(null)
	
	return modal && (
		<dialog onClick={() => router.back()} className="animate-fade-in-up fixed z-[999] min-h-screen top-0 left-0 bg-[#00000095] flex flex-row items-center p-0 md:px-10 md:py-0 w-full">
			<div onClick={() => router.back()} className={`${aspectClass} ${styles.lightbox} shadow-2xl rounded overflow-hidden border-none relative max-h-screen h-full overflow-hidden w-full`}>
				<div ref={loadingRef} className="bg-black absolute top-0 left-0 w-full h-full z-[9999] flex items-center justify-center">
				<div
					className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
					role="status">
					<span
						className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
						>Loading...
					</span>
					</div>
				</div>
				
				<iframe ref={iframeRef} className={styles.iframe} src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&byline=0&portrait=0&playsinline=1`} style={{position:"absolute", border: 'none', top:0, left:0, width:'100%', height:'100%', visibility: 'hidden', backgroundColor: 'black' }} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
			</div>
		</dialog>);
};
