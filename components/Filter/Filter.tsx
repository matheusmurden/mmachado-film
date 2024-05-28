"use client"

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import styles from './Filter.module.css';
import { Fragment } from "react";

interface FilterProps {
	categories: string[];
}

export const Filter = ({ categories }: FilterProps) => {
	const searchParams = useSearchParams()!;
    const currentCategory = searchParams.get("category");
	const formatCategory = (value: string) => value.replaceAll(' ', '-')?.toLowerCase()
	return (
		<div className="flex flex-row gap-3 md:gap-5 items-end justify-start">
			{categories.map((category, index) => (
				<Fragment key={category}>
					<Link className={`${formatCategory(category) === currentCategory ? 'text-[#FE4E02]' : 'text-white'} ${styles.filterOption} hover:text-[#FE4E02] leading-tight text-lg md:text-xl lg:text-2xl mb-0 font-bold`} href={`?category=${formatCategory(category)}`}>{category}</Link>
					{index !== categories.length -1 && <div className="font-bold leading-tight text-lg md:text-xl lg:text-2xl mb-0 text-white pointer-events-none touch-none select-none">|</div>}
				</Fragment>
			))}
		</div>
	)
}
