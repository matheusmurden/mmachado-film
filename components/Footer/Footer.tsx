import footerTextureImage from '/public/footerTexture.jpg'
import Image from 'next/image';

interface FooterProps {
	className?: string;
}

export const Footer = ({ className }: FooterProps) => {
	return (
		<footer className={`mt-12 md:mt-48 ml-[-10%] md:ml-[auto] w-[120%] md:w-[100%] xl:w-[80%] mx-[auto] ${className}`}>
			<Image
				src={footerTextureImage}
				alt="horizontal image texture"
				className='touch-none select-none pointer-events-none'
				loading='lazy'
			/>
		</footer>
	);
};
