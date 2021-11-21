import { Transition } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import { useVisibilityHook } from 'react-observer-api';
import Skills from './Skills';

const About = () => {
	const { setElement, isVisible } = useVisibilityHook();

	return (
		<section ref={setElement} className='pt-14'>
			<Transition
				show={isVisible}
				enter='transform translate-y-5 transition opacity-0  duration-1000 ease-in-out'
				enterFrom='transform translate-y-5 transition opacity-0  duration-1000 ease-in-out'
				enterTo='opacity-100 translate-y-0 transform duration-1000 ease-in-out'
			>
				<div className='flex items-center gap-5'>
					<span className='text-custom-green md:text-4xl font-mono'>01.</span>
					<p className='navP text-[26px] md:text-4xl font-bold '>About me</p>
					<span className='self-center w-[100px] md:w-[300px] text-navy-lightest_navy h-[1px] border-t-[1px] relative top-[5px]' />
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-10'>
					<div className='text-slate text-lg md:text-xl font-semibold col-span-1'>
						<p>
							Hi, I am Fabio <br />
							Originally, I am from Bari, Italy. I just graduated from the
							University of West London with a Bachelor’s Degree in Cyber
							Security and I am passionate about Web Development. Now, I’m
							looking for an opportunity to further develop my current skill set
							as a Junior Developer.
						</p>
						<p className='py-5'>Here are some technologies I work with:</p>
						<Skills />
					</div>

					<div className='relative h-52 w-52 md:h-[300px] md:w-[300px] mix-blend-screen   filter brightness-50 hover:brightness-100 bg-custom-green'>
						<Image
							className='hover:scale-105 hover:opacity-100 opacity-50 transition duration-300 ease-in-out '
							layout='fill'
							src='/linkpic.png'
							objectFit='cover'
						></Image>
					</div>
				</div>
			</Transition>
		</section>
	);
};

export default About;
