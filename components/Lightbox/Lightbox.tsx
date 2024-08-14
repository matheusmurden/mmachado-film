"use client"

import {useSearchParams, useRouter} from "next/navigation";

import styles from './Lightbox.module.css';
import { CSSProperties, useCallback, useEffect, useRef } from "react";

import Player from '@vimeo/player';
import { track } from '@vercel/analytics';

export const Lightbox = () => {
	const searchParams = useSearchParams()!;
    const modal = searchParams.get("modal");
	const vimeoId = searchParams.get("vimeoId")
	const aspectRatio = searchParams.get("aspectRatio");

	const aspectClass = aspectRatio !== '16/9' ? "max-w-[80vw] mx-auto" : ''

	const router = useRouter();

	useEffect(() => {
		if (modal) {
			const iframe = document.querySelector('iframe')!;
			const iframePlayer = new Player(iframe);

			if (iframeRef.current) {
				iframeRef.current!.style.background='black'
				
				iframePlayer.ready().then(() => {
					iframePlayer.play();
					iframeRef.current!.style.visibility='visible'
					setTimeout(() => {
						if (loadingRef.current) {
							loadingRef.current!.style.visibility='hidden'
						}
					}, 1500)
				})

				iframePlayer.on('progress', () => {
					if (loadingRef.current) {
						loadingRef.current!.style.visibility='hidden'
					}
				});
			}
			iframePlayer.getVideoTitle().then((title) => {
				track('Watched Video', { video: title, url: `https://vimeo.com/${vimeoId}`});
			})
			
		}
	}, [modal, vimeoId])

	const iframeRef = useRef<HTMLIFrameElement>(null)
	const loadingRef = useRef<HTMLDivElement>(null)


	const navigateBack = useCallback(() => {
		if (window.history?.length && window.history.length > 1) {
			router.back();
		 } else {
			router.replace(window.location.pathname);
		 }
	}, [router])
	
	return modal && (
		<dialog onClick={() => navigateBack()} className="animate-fade-in-up fixed z-[991] min-h-screen top-0 left-0 bg-[#00000095] flex flex-row items-center p-0 md:px-10 md:py-0 w-full">
			<div onClick={() => navigateBack()} style={{ aspectRatio: aspectRatio } as CSSProperties} className={`${aspectClass} ${styles.lightbox} shadow-2xl rounded overflow-hidden border-none relative max-h-screen h-full overflow-hidden w-full`}>
				<div ref={loadingRef} className="bg-black absolute top-0 left-0 w-full h-full z-[999] flex items-center justify-center">
				<div
					className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
					role="status">
					<span
						className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
						>Loading...
					</span>
					</div>
				</div>
				
				<iframe ref={iframeRef} className={`${styles.iframe} z-[991]`} src={`https://player.vimeo.com/video/${vimeoId}?byline=0&portrait=0&playsinline=0&loop=1`} style={{position:"absolute", border: 'none', top:0, left:0, width:'100%', height:'100%', visibility: 'hidden', backgroundColor: 'black' }} frameBorder="0" allowFullScreen allow="autoplay; fullscreen; picture-in-picture"></iframe>
			</div>
		</dialog>);
};
