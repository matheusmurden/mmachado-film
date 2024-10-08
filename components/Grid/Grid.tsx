"use client"

import { VideoItem, VideoItemProps } from '@/components'
import { useSearchParams } from 'next/navigation';

interface GridProps {
	variant?: 'HOME' | 'WORK';
	items: VideoItemProps[]
}

export const Grid = ({ variant = 'HOME', items }: GridProps) => {
	const searchParams = useSearchParams()!;
	const categorySearchParam = searchParams.get("category");
	const formatCategory = (value?: string) => value?.replaceAll(' ', '-')?.toLowerCase()

	const videos = categorySearchParam ? items.filter((item) => item.categories.flatMap(itemCategory => formatCategory(itemCategory.fields.title)).includes(categorySearchParam)) : items
	return (
		<div className={`h-full grid grid-flow-row-dense gap-3 md:gap-5 mx-[auto] grid-cols-1 ${variant === 'HOME' ? 'md:grid-cols-2' : 'md:grid-cols-4 md:gap-y-2'}`}>
			{videos?.map((item, index) => (<VideoItem categories={item.categories} className={`${variant === 'HOME' && ((index + 1) % 3 === 1 || index === 0) ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'}`} key={`${item.title}-${index}`} variant={variant} priority={(index + 1) % 3 === 1 || index === 0} vimeo={item.vimeo} thumbnail={item.thumbnail} title={item.title} subtitle={item.subtitle} video={item.video} />))}
		</div>
	);
};
