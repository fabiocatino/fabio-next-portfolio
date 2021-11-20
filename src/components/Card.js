import React from 'react';
import Image from 'next/image';
import Tags from './Tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
	return (
		<div className='grid grid-cols-12 gap-10'>
			{/* IMAGE/LEFT SECTION */}

			<div
				className='relative h-[362px] min-w[200px] z-[1] border-1 border-black shadow-xl col-end-[-1]
							md:col-end-[9] md:bg-custom-green col-start-1 xl:col-end-[7] row-span-full cursor-pointer '
			>
				<a
					href='/'
					target='_blank'
					rel='noreferrer'
					className='hover:text-custom-green text-slate-lightest text-right text-[28px] font-semibold cursor-pointer'
				>
					<Image
						className='opacity-5 md:hover:scale-105 md:hover:opacity-100 md:opacity-50 transition duration-300 ease-in-out'
						layout='fill'
						src='/airbnb.png'
					></Image>
				</a>
			</div>

			{/* RIGHT SECTION */}

			<div
				className='row-start-1 row-end-[-1] col-start-1 md:col-start-5 col-end-[-1] 
							xl:col-start-6 xl:col-end-[-1] z-10 space-y-5 sm:text-left md:text-right p-14'
			>
				{/* TEXT TOP RIGHT */}
				<h1 className='text-custom-green md:m-[10px] font-semibold'>
					Featured Projects
				</h1>
				<a
					href='/'
					target='_blank'
					rel='noreferrer'
					className='hover:text-custom-green text-slate-lightest text-[28px] font-semibold cursor-pointer'
				>
					<p>Airbnb Clone</p>
				</a>
				{/* MAIN CARD */}
				<div className='xl:min-h-[122px]  md:p-[25px] md:bg-navy-light z-10 opacity-100 rounded-md'>
					<p className='text-lg text-slate '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis neque
						nihil fugiat debitis optio! Et ipsa amet modi corrupti consectetur.
					</p>
				</div>
				{/* TAGS */}
				<div className='flex md:justify-end'>
					<Tags />
				</div>
				{/* LINKS */}
				<div className='flex md:justify-end gap-5'>
					<a
						href='/'
						target='_blank'
						rel='noreferrer'
						className='hover:text-custom-green text-slate-lightest text-[28px] font-semibold cursor-pointer'
					>
						<FontAwesomeIcon
							className='h-5 w-5 text-custom-white'
							icon={faGithub}
						/>
					</a>
					<a
						href='/'
						target='_blank'
						rel='noreferrer'
						className='hover:text-custom-green text-slate-lightest text-[28px] font-semibold cursor-pointer'
					>
						<FontAwesomeIcon
							className='h-5 w-5 text-custom-white'
							icon={faExternalLinkAlt}
						/>
					</a>
				</div>
			</div>

			{/* SMALL SCREEN SECTION */}

			<div className="h-[645px] w-full"></div>
		</div>
	);
};

export default Card;
