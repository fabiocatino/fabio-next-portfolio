import { Transition } from '@headlessui/react';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useVisibilityHook } from 'react-observer-api';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	const [y, setY] = useState(0);
	const { setElement } = useVisibilityHook();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => {
				setY(window.scrollY);
			});
		}
	}, [y]);

	return (
		<div className='bg-navy min-h-screen '>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div ref={setElement}>
				<Transition
					show={y === 0 && true}
					enter='transition opacity-0 duration-2000 ease-in-out delay-300'
					enterFrom='transform -translate-y-25 '
					enterTo='opacity-100 translate-y-0'
					leave='transition-opacity duration-2000 ease-in-out bg-red-500 delay-1000'
					leaveFrom='opacity-100 transform translate-y-0'
					leaveTo='opacity-0 -translate-y-5'
				>
					<Navbar />
				</Transition>
			</div>

			<main className='flex flex-col justify-center px-[25px] sm:px-[50px] md:px-[100px] lg:mx-[100px]  2xl:mx-[180px] '>
				{children}
			</main>

			<footer className='h-48'></footer>
		</div>
	);
};

export default Layout;
