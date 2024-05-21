interface HeaderProps {
	variant?: 'HOME' | 'WORK';
}

export const Header = ({ variant = 'HOME' }) => {
	return variant === 'HOME' ? (
		<header className="h-[40vh] xl:h-[50vh] mb-12 text-white uppercase text-center flex flex-col items-center justify-center">
			<h1 className="text-7xl md:text-8xl mb-4 font-bold">Maria <br />MM ch d</h1>
			<h2 className="text-3xl font-regular">Film Editor</h2>
		</header>
	) : (
		<header className="h-[25vh] xl:h-[40vh] mb-0 text-white uppercase text-center flex flex-col items-start justify-end">
			<h1 className="leading-tight text-[6rem] md:text-8xl lg:text-[10rem] mb-0 font-bold">Work</h1>
		</header>
	);
};
