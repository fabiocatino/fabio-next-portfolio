import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='bg-navy min-h-screen'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<main className='flex flex-col justify-center px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px] min-h-screen'>
				{children}
			</main>

			<footer className=''></footer>
		</div>
	);
};

export default Layout;
