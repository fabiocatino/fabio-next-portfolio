import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Header = () => {
	const MenuHandler = () => {};

	return (
		<div className='h-[100px] bg-navy-header flex items-center px-[25px] sm:px-[50px]'>
			{/* LEFT SIDE */}
			<div className='h-10 w-10 rounded-full border- border-2 border-custom-green flex hover:bg-green-900 cursor-pointer'>
				<h3 className='text-custom-green flex justify-center items-center w-full'>
					F
				</h3>
			</div>

			{/* MIDDLE SIDE */}

			<div className='hidden md:flex justify-end flex-grow gap-7 text-[16px] font-mono '>
				<button className='navBtn'>
					<span className='text-custom-green'>01.</span>
					<p className='navP'>About</p>
				</button>
				{/* <button className='navBtn'>
					<span className='text-custom-green'>02.</span>
					<p className='navP'>Experience</p>
				</button> */}
				<button className='navBtn'>
					<span className='text-custom-green'>02.</span>
					<p className='navP'>Work</p>
				</button>
				<button className='navBtn'>
					<span className='text-custom-green'>03.</span>
					<p className='navP'>Contact</p>
				</button>
			</div>
			<FontAwesomeIcon
				onClick={MenuHandler}
				className='md:hidden h-10 w-10 text-custom-green absolute right-5 cursor-pointer'
				icon={faBars}
			/>

			{/* RIGHT SIDE */}

			<button
				className='hidden md:flex ml-7 border rounded-md 
            border-custom-green text-custom-green h-9 w-20  items-center justify-center hover:bg-green-900'
			>
				<p className='p-5'>CV</p>
			</button>
		</div>
	);
};

export default Header;
