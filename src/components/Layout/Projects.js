import React from 'react';
import Card from '../Card';
import { useVisibilityHook } from 'react-observer-api';
import { Transition } from '@headlessui/react';

const Projects = () => {
	const { setElement, isVisible } = useVisibilityHook();
	return (
		<section ref={setElement} className='py-28 min-h-screen'>
			{/* <Transition
				show={isVisible}
				enter='transition opacity-0 duration-1000 ease-in-out'
				enterFrom='transform -translate-y-5 transition opacity-0  duration-1000 ease-in-out'
				enterTo='opacity-100 translate-y-0 transform duration-1000 ease-in-out'
			> */}
				<div ref={setElement} className='flex items-center gap-5 '>
					<span className='text-custom-green md:text-4xl font-mono'>02.</span>
					<p className='navP text-[26px] md:text-4xl font-bold '>My Projects</p>
					<span className='self-center w-[100px] md:w-[300px] text-navy-lightest_navy h-[1px] border-t-[1px] relative top-[5px]' />
				</div>
				<div className='pt-10'>
					<Card />
				</div>
			{/* </Transition> */}
		</section>
	);
};

export default Projects;
