import { Transition } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { useVisibilityHook } from 'react-observer-api';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../store/atoms';
import DescriptionModal from './DescriptionModal';
import ModalPage from './Modal';
import Skills from './Skills';

const About = ({description}) => {
	const { setElement, isVisible } = useVisibilityHook();
	const { data: session } = useSession();
	const { description: de } = useRecoilValue(userAtom);

	return (
		<section ref={setElement} className='pt-14' id='about'>
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

				<div className='grid grid-cols-1 sm:grid-cols-3fr pt-10 gap-10 '>
					<div className='text-slate text-lg md:text-xl font-semibold'>
						<p className='pb-5'>{description}</p>
						<DescriptionModal></DescriptionModal>
						<p className='py-5'>Here are some technologies I work with:</p>

						<Skills />
						<div className='pt-10 flex w-full'></div>
						{session && (
							<div className='pt-10 flex w-full'>
								<ModalPage />
							</div>
						)}
					</div>

					<div className='relative h-52 w-52 md:h-[300px] md:w-[300px] mix-blend-screen filter brightness-50 hover:brightness-100 bg-custom-green'>
						<Image
							className='hover:scale-105 hover:opacity-100 opacity-50 transition duration-300 ease-in-out'
							layout='fill'
							src='/linkpic.png'
							alt='propic'
							objectFit='cover'
						></Image>
					</div>
				</div>
			</Transition>
		</section>
	);
};

export default About;
