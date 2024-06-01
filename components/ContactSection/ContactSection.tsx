"use client"

import { HelloPageData } from '@/utils';
import { track } from '@vercel/analytics';

export const ContactSection = ({ data }: { data: HelloPageData }) => {
	return (
		<div className='w-full flex flex-row gap-8 font-semibold justify-center md:justify-start'>
			<a onClick={() => track('Cliked on e-mail')} className='text-[#FE4E02] text-base md:text-xl hover:text-white uppercase' href={`mailto:${data.fields.email}`}>
			{data.fields.email}
			</a>
			<a onClick={() => track('Cliked on Instagram')} className='text-[#C772FF] text-base md:text-xl hover:text-white uppercase' href={data.fields.instagram} target='_blank' rel="noopener">instagram</a>
		</div>
	)
}
