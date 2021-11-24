import React from 'react';
import Image from 'next/image';
import Tags from './Tags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Transition } from '@headlessui/react';
import { useVisibilityHook } from 'react-observer-api';

const Card = () => {
	const { setElement, isVisible } = useVisibilityHook();

	return (
		<div ref={setElement}>
			<Transition show={isVisible}>
				<div className='grid xs:grid-cols-12 grid-cols-3fr gap-10 min-w-screen'>
					{/* IMAGE/LEFT SECTION */}

					<Transition.Child
						as='a'
						href='/'
						target='_blank'
						rel='noreferrer'
						enter='transition opacity-0 duration-1000 ease-in-out'
						enterFrom='transform -translate-y-5 sm:translate-y-2000 transition  duration-1000 ease-in-out'
						enterTo='opacity-100 translate-y-0 transform duration-1000 ease-in-out'
						className='h-[362px] min-w[200px] z-[1] border-1 border-black shadow-xl col-end-[-1]
						md:col-end-[9] row-span-full mix-blend-screen md:bg-custom-green 
						filter md:brightness-50 hover:brightness-100 col-start-1 xl:col-end-[7] cursor-pointer relative
						hover:text-custom-green text-slate-lightest text-right text-[28px] font-semibold'
					>
						<Image
							className='opacity-5 md:hover:scale-105 md:hover:opacity-100 md:opacity-50 transition duration-300 ease-in-out'
							layout='fill'
							alt='projectPic'
							src='/airbnb.png'
						></Image>
						{/* </a> */}
					</Transition.Child>

					{/* RIGHT SECTION */}

					<div
						className='row-start-1 row-end-[-1] col-start-1 md:col-start-5 col-end-[-1] 
							xl:col-start-6 z-10 space-y-5 sm:text-left md:text-right p-5 sm:p-14 md:p-0'
					>
						{/* TEXT TOP RIGHT */}
						<h1 className='text-custom-green md:m-[10px] font-semibold font-mono'>
							Featured Project
						</h1>
						<a
							href='/'
							target='_blank'
							rel='noreferrer'
							className='hover:text-custom-green text-slate-lightest font-mono text-2xl md:text-[28px] font-semibold cursor-pointer'
						>
							<p>Airbnb Clone</p>
						</a>
						{/* MAIN CARD */}
						<Transition.Child
							enter='transform transition duration-1000 ease-in-out'
							enterFrom='transform opacity-1  sm:translate-x-2000  duration-1000 ease-in-out'
							enterTo='transform opacity-1 translate-x-0 duration-1000 ease-in-out'
						>
							<div className='xl:min-h-[122px]  md:p-[25px] sm:bg-transparent md:bg-navy-light z-10 opacity-100 rounded-md'>
								<p className='text-lg text-slate '>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
									neque nihil fugiat debitis optio! Et ipsa amet modi corrupti
									consectetur.
								</p>
							</div>
						</Transition.Child>
						{/* TAGS */}
						
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
				</div>
			</Transition>
		</div>
	);
};

export default Card;
