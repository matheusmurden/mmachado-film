import { VideoItem, VideoItemProps } from '@/components/VideoItem'

interface GridProps {
	variant?: 'A' | 'B';
	items: VideoItemProps[]
}

export const Grid = ({ variant = 'A', items }: GridProps) => {
	return (
		<div className={`grid grid-flow-row gap-3 mx-[auto] ${variant === 'A' ? 'grid-cols-2' : 'grid-cols-4'}`}>
			{items?.map((item, index) => (<VideoItem className={`${variant === 'A' && ((index + 1) % 3 === 1 || index === 0) ? 'col-span-2' : ''}`} key={`${item.title}-${index}`} title={item.title} subtitle={item.subtitle} videoUrl={item.videoUrl} />))}
		</div>
	);
};
