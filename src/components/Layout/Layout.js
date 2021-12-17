import { Transition } from '@headlessui/react';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useVisibilityHook } from 'react-observer-api';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
	const [y, setY] = useState(0);
	const [open, setOpen] = useState(false);
	const { setElement } = useVisibilityHook();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => {
				if (window.scrollY === 0) {
					setY(window.scrollY);
				} else setY(100);
			});
		}
	}, []);

	return (
		<div className='relative bg-navy min-h-screen scroll-smooth'>
			<Head>
				<title>Fabio Catino</title>
				<link rel='icon' href='/favicon.png' />
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
					<Navbar open={open} setOpen={setOpen} />
				</Transition>
			</div>

			<main
				className={`${
					open && 'filter blur select-none'
				}  flex flex-col justify-center px-[25px] sm:px-[50px] md:px-[100px] lg:mx-[100px]  2xl:mx-[180px]`}
			>
				{children}
			</main>
			<div className='h-10'>
				<Footer />
			</div>
			<ScrollToTop />
		</div>
	);
};

export default Layout;
