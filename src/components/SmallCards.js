import { Transition } from '@headlessui/react';
import React from 'react';
import { useVisibilityHook } from 'react-observer-api';
import { useRecoilValue } from 'recoil';
import { otherProjects, statusAtom } from '../store/atoms';
import SmallCard from './SmallCard';
import Spinner from './Spinner';

const SmallCards = ({unfilteredList}) => {
	// const projects = useRecoilValue(otherProjects);
	const { isLoading, error } = useRecoilValue(statusAtom);
	const { setElement, isVisible } = useVisibilityHook();
	return (
		<div ref={setElement}>
			{isLoading && <Spinner />}
			{error && 'Something went wrong.'}
			<Transition
				show={isVisible}
				enter='transition opacity-0 duration-1000 ease-in-out'
				enterFrom='transform -translate-y-52 transition opacity-0  duration-2000 ease-in-out'
				enterTo='opacity-100 translate-y-0 transform duration-1000 ease-in-out'
				className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'
			>
				{!isLoading &&
					!error &&
					unfilteredList.map((project, i) => <SmallCard key={i} {...project} />)}
			</Transition>
		</div>
	);
};

export default SmallCards;
