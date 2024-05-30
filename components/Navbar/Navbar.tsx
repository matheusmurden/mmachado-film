import Image from "next/image";
import Link from "next/link";

import LogoSmall from '../../public/LogoSmall.png';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className= ''}: NavbarProps) => {
	return (
		<nav className="px-6 py-0 xl:px-4 bg-black uppercase font-semibold z-[990] fixed left-0 top-0 w-full h-20 justify-between items-center flex flex-row">
			<Link className="text-2xl text-white leading-7" href="/">
				<Image src={LogoSmall} alt="Maria Machado Film Editor" className={`logo ${className} w-24 md:w-36 touch-none select-none pointer-events-none`} />
			</Link>
			<div className="flex flex-row justify-end items-center gap-8">
				<Link className="text-[#FE4E02] text-base md:text-lg hover:text-white" href="/work">work</Link>
				<Link className="text-[#C772FF] text-base md:text-lg hover:text-white" href="/hello">hello</Link>
			</div>
		</nav>
	);
};
