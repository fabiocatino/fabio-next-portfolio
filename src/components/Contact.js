import { Transition } from '@headlessui/react';
import React from 'react';
import { useVisibilityHook } from 'react-observer-api';
import Button from './Button';

const Contact = () => {
	const { setElement, isVisible } = useVisibilityHook();

	return (
		<div id='contact' ref={setElement}>
			<Transition
				show={isVisible}
				enter='transition opacity-0 duration-1000 ease-in-out'
				enterFrom='transform -translate-y-5 transition opacity-0  duration-1000 ease-in-out'
				enterTo='opacity-100 translate-y-0 transform duration-1000 ease-in-out'
				className=' flex flex-col items-center justify-center h-96 space-y-5'
			>
				<h1 className='text-custom-green text-4xl font-mono'>03. Contact</h1>
				<h1 className='text-slate-lightest  text-2xl md:text-6xl text-center'>
					Get in Touch
				</h1>
				<div className='text-lg text-'>
					<Button hidden={false} size='xl'>
						<a target='_blank' rel='noreferrer' href='mailto:fabivs9@gmail.com'>
							Say hello
						</a>
					</Button>
				</div>
			</Transition>
		</div>
	);
};

export default Contact;
