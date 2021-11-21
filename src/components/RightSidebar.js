import React from 'react';

const RightSidebar = () => {
	return (
		<div className='hidden sm:flex flex-col items-center justify-center '>
			<ul className='list-none'>
				<li className='text-slate font-semibold writing-mode mb-10'>
					fabivs9@gmail.com
				</li>
				<div className='flex justify-center'>
					<li className='border-l-2 border-gray-200 h-24 '></li>
				</div>
			</ul>
		</div>
	);
};

export default RightSidebar;
