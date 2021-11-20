import React from 'react';
import Header from './Header';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<div className='bg-navy min-h-screen'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main className='flex flex-col justify-center px-[25px] min-h-screen md:px-[150px]'>
				{children}
			</main>

            <footer className='h-72'></footer>
		</div>
	);
};

export default Layout;
