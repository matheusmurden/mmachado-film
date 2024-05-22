"use client"

import {useSearchParams, useRouter} from "next/navigation";

import { createPortal } from "react-dom";

export const Lightbox = () => {
	const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
	const vimeoId = searchParams.get("vimeoUrl")?.replace('https://vimeo.com/', '');

	const router = useRouter();
	
	return modal && vimeoId ? createPortal(
		<dialog onClick={() => router.back()} className="fixed z-[999] w-full min-h-screen top-0 left-0 bg-[#00000095] flex items-center justify-center p-10">
			<div onClick={(event) => event.stopPropagation()} className="relative aspect-video w-full h-full">
				<iframe src={`https://player.vimeo.com/video/${vimeoId}?h=c8d9fc8805&autoplay=1&byline=0&portrait=0`} style={{position:"absolute", top:0, left:0, width:'100%', height:'100%' }} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
			</div>
		</dialog>,
		document.body
	) : null;
};