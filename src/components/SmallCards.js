import { Transition } from '@headlessui/react';
import React from 'react';
import { useVisibilityHook } from 'react-observer-api';
import { useRecoilValue } from 'recoil';
import { otherProjects } from '../store/atoms';
import SmallCard from './SmallCard';

const SmallCards = () => {
	const projects = useRecoilValue(otherProjects);
	const { setElement, isVisible } = useVisibilityHook();
	return (
		<div ref={setElement}>
			<Transition
				show={isVisible}
				enter='transition opacity-0 duration-1000 ease-in-out'
				enterFrom='transform -translate-y-52 transition opacity-0  duration-2000 ease-in-out'
				enterTo='opacity-100 translate-y-0 transform duration-1000 ease-in-out'
				className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'
			>
				{projects.map((project) => (
					<SmallCard key={project._id} {...project} />
				))}
			</Transition>
		</div>
	);
};

export default SmallCards;
