import { ReactNode } from "react";

interface HeaderProps {
	variant?: 'HOME' | 'WORK';
	children?: ReactNode | ReactNode[]
}

export const Header = ({ variant = 'HOME', children }: HeaderProps) => {
	return variant === 'HOME' ? (
		<header className="h-[40vh] xl:h-[60vh] mb-12 text-white uppercase text-center flex flex-col items-center justify-center">
			{children}
		</header>
	) : (
		<header className="h-[5vh] md:h-[15vh] xl:h-[40vh] mb-0 pb-0 md:pb-8 text-white uppercase text-center flex flex-row gap-5 md:gap-8 items-end justify-start">
			{children}
		</header>
	);
};
