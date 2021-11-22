import { Transition } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { useVisibilityHook } from 'react-observer-api';
import Card from '../Card';
import SmallCard from '../SmallCard';

const Projects = () => {
	const { setElement, isVisible } = useVisibilityHook();
	const { setElement: setSecondElement, isVisible: isSecondElementVisible } =
		useVisibilityHook();

	return (
		<section className='py-28'>
			<div ref={setElement} className=''>
				<Transition
					show={isVisible}
					enter='transition opacity-0 duration-1000 ease-in-out'
					enterFrom='transform -translate-y-5 transition opacity-0  duration-1000 ease-in-out'
					enterTo='opacity-100 translate-y-0 transform duration-1000 ease-in-out'
				>
					<div ref={setElement} className='flex items-center gap-5 '>
						<span className='text-custom-green md:text-4xl font-mono'>02.</span>
						<p className='navP text-[26px] md:text-4xl font-bold '>
							My Projects
						</p>
						<span className='self-center w-[100px] md:w-[300px] text-navy-lightest_navy h-[1px] border-t-[1px] relative top-[5px]' />
					</div>
					<div className='pt-10'>
						<Card />
					</div>
				</Transition>
			</div>

			<div className='mt-52'>
				<div className='flex justify-center flex-col items-center'>
					<h2 className='text-[32px] text-slate-lightest pb-2'>
						Other Projects
					</h2>
					<Link passHref={true} href='/'>
						<a
							target='_blank'
							ref='noreferrer'
							className='text-custom-green font-semibold'
						>
							view the archive
						</a>
					</Link>
				</div>

				<div ref={setSecondElement}>
					<Transition
						show={isSecondElementVisible}
						enter='transition opacity-0 duration-1000 ease-in-out'
						enterFrom='transform -translate-y-52 transition opacity-0  duration-2000 ease-in-out'
						enterTo='opacity-100 translate-y-0 transform duration-1000 ease-in-out'
						className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'
					>
						<SmallCard />
						<SmallCard />
						<SmallCard />
						<SmallCard />
						<SmallCard />
						<SmallCard />
						<div className='col-span-3 flex justify-center w-full'>
							<button className='border border-1 border-custom-green text-custom-green mt-16 p-4 w-40 rounded-md 
											bg-transparent hover:bg-custom-green-transparent'>
								Show more
							</button>
						</div>
					</Transition>
				</div>
			</div>
		</section>
	);
};

export default Projects;
