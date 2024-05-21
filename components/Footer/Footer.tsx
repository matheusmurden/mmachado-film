import footerTextureImage from '/public/footerTexture.jpg'
import Image from 'next/image';

interface FooterProps {
	className?: string;
}

export const Footer = ({ className }: FooterProps) => {
	return (
		<footer className={`mt-48 w-[90%] mx-[auto] ${className}`}>
			<Image
				src={footerTextureImage}
				alt="horizontal image texture"
				className='touch-none select-none pointer-events-none'
			/>
		</footer>
	);
};
