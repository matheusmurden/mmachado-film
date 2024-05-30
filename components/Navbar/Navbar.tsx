import Image from "next/image";
import Link from "next/link";

import styles from './Navbar.module.css';

import LogoSmall from '../../public/LogoSmall.png';

export const Navbar = async () => {
	return (
		<nav className="bg-black uppercase font-semibold z-[998] sticky top-0 w-full h-20 justify-between items-center flex flex-row p-2 px-6 xl:px-4">
			<Link className="text-2xl text-white leading-7" href="/">
				<Image src={LogoSmall} alt="Maria Machado Film Editor" className={`${styles.logo} w-24 md:w-36 touch-none select-none pointer-events-none`} />
			</Link>
			<div className="flex flex-row justify-end items-center gap-8">
				<Link className="text-[#FE4E02] text-base md:text-lg hover:text-white" href="/work">work</Link>
				<Link className="text-[#C772FF] text-base md:text-lg hover:text-white" href="/hello">hello</Link>
			</div>
		</nav>
	);
};
