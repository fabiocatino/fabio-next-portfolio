import React from 'react';

const Footer = () => {
	return (
		<div className='4xsm:px-4 3xsm:px-5 px-0 py-10 w-full absolute bottom-0 text-white'>
			<div className='flex justify-center text-slate text-xs font-semibold font-mono'>
				<div
					className=' hover:text-custom-green 
								transition-all	 duration-500 ease-in-out
								active:border-dotted active:border-4 active:border-custom-green active:p-5 select-none space-x-2'
				>
					<a target='_blank' rel='noreferrer' href='https://github.com/bchiang7'>Designed by Brittany Chiang.</a>
					<a target='_blank' rel='noreferrer' href='https://github.com/fabiocatino'>Built by Fabio Catino.</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
