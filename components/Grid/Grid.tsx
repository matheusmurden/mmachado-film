import { VideoItem, VideoItemProps } from '@/components'

interface GridProps {
	variant?: 'HOME' | 'WORK';
	items: VideoItemProps[]
}

export const Grid = ({ variant = 'HOME', items }: GridProps) => {
	return (
		<div className={`h-full grid grid-flow-row-dense gap-3 mx-[auto] grid-cols-1 ${variant === 'HOME' ? 'md:grid-cols-2' : 'md:grid-cols-4'}`}>
			{items?.map((item, index) => (<VideoItem className={`${variant === 'HOME' && ((index + 1) % 3 === 1 || index === 0) ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'}`} key={`${item.title}-${index}`} priority={index < 5} thumbnail={item.thumbnail} title={item.title} subtitle={item.subtitle} videoUrl={item.videoUrl} />))}
		</div>
	);
};
