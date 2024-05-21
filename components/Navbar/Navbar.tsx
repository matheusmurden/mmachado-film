import Link from "next/link";

export const Navbar = () => {
	return (
		<nav className="uppercase font-bold z-[999] sticky top-0 w-full h-20 justify-between items-center flex flex-row p-10">
			<Link className="text-2xl text-white leading-7" href="/">Maria <br />Mm ch d</Link>
			<div className="flex flex-row justify-end items-center gap-8">
				<Link className="text-[#FE4E02] hover:text-white" href="/work">work</Link>
				<Link className="text-[#C772FF] hover:text-white" href="/hello">hello</Link>
			</div>
		</nav>
	);
};
