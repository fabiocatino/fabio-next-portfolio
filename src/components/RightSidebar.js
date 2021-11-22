import React from 'react';

const RightSidebar = () => {
	return (
		<div className='hidden md:flex flex-col items-center justify-center '>
			<ul className='list-none'>
				<a
					target='_blank'
					rel='noreferrer'
					href='mailto:fabivs9@gmail.com'
					className='text-slate font-semibold writing-mode mb-10 hover:text-custom-green 
								transition-all	 duration-500 ease-in-out transform hover:-rotate-90 hover:mr-6
								active:border-dotted active:border-4 active:border-custom-green active:p-5 select-none'
				>
					fabivs9@gmail.com
				</a>
				<div className='flex justify-center'>
					<li className='border-l-2 border-gray-200 h-24 '></li>
				</div>
			</ul>
		</div>
	);
};

export default RightSidebar;
