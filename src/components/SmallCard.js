import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const SmallCard = () => {
	return (
		<div className='w-screenflex bg-navy-light p-5 mt-10 hover:scale-105 transition duration-300 ease-out cursor-pointer rounded-md shadow-md '>
			<div className='h-full p-5 '>
				<div className='flex justify-between items-center py-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						role='img'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						className='text-custom-green h-10 w-10'
					>
						<title>Folder</title>
						<path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
					</svg>
					<div className='flex gap-2  navBtn text-custom-white'>
						<FontAwesomeIcon className='h-5 w-10 ' icon={faGithub} />
						<FontAwesomeIcon className='h-5 w-10 ' icon={faExternalLinkAlt} />
					</div>
				</div>
				<div className='mt-5 '>
					<h1 className='text-xl text-slate-light mb-5'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
						quam?
					</h1>
					<p className='text-base text-slate font-semibold my-5'>
						Lorem ipsum dolor sit amet.
					</p>
				</div>
				<div className='flex font-mono gap-x-5 mt-2 text-left text-lg text-slate-light font-semibold flex-wrap'>
					<p className=''>VS Code</p>
					<p className=''>Atom</p>
					<p className=''>iTerm2</p>
					<p className=''>Hyper</p>
					<p className=''>VS Code</p>
				
				</div>
			</div>
		</div>
	);
};

export default SmallCard;
